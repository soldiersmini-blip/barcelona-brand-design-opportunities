param(
  [string]$TrackerPath = $env:BARCELONA_TRACKER_PATH,
  [string]$OutputPath = (Join-Path (Split-Path $PSScriptRoot -Parent) 'data.js'),
  [string]$ExistingDataPath = $OutputPath
)

$ErrorActionPreference = 'Stop'

if (-not $TrackerPath) {
  throw 'Provide -TrackerPath or set BARCELONA_TRACKER_PATH to the private tracker file.'
}

function Split-MarkdownRow {
  param([string]$Line)
  $text = $Line.Trim()
  if ($text.StartsWith('|')) { $text = $text.Substring(1) }
  if ($text.EndsWith('|')) { $text = $text.Substring(0, $text.Length - 1) }
  return ($text -split '\|') | ForEach-Object {
    ($_ -replace '<br\s*/?>', ' ' -replace '&nbsp;', ' ' -replace '\s+', ' ').Trim()
  }
}

function First-MatchingValue {
  param(
    [hashtable]$Map,
    [string[]]$Patterns,
    [int[]]$FallbackIndexes,
    [object[]]$Cells
  )
  foreach ($key in $Map.Keys) {
    foreach ($pattern in $Patterns) {
      if ($key -match $pattern) { return [string]$Map[$key] }
    }
  }
  foreach ($index in $FallbackIndexes) {
    if ($index -lt $Cells.Count -and [string]$Cells[$index]) { return [string]$Cells[$index] }
  }
  return ''
}

function Get-Links {
  param([string]$Text)
  $items = New-Object System.Collections.Generic.List[string]
  foreach ($m in [regex]::Matches($Text, '(https?://[^\s;,]+|mailto:[^\s;,]+)')) {
    $items.Add($m.Value.TrimEnd('.', ')', ']'))
  }
  return @($items | Select-Object -Unique)
}

function HasText {
  param([string]$Text, [string]$Pattern)
  return ($Text -match $Pattern)
}

function Get-PostedDate {
  param([string]$Text)

  $today = (Get-Date).Date
  $dates = New-Object System.Collections.Generic.List[datetime]
  $patterns = @(
    '(?<!\d)(?<year>20\d{2})[-/.](?<month>\d{1,2})[-/.](?<day>\d{1,2})(?:\s+\d{1,2}:\d{2})?(?:\s*(?:\u5DE6\u53F3|\u7EA6))?\s*(?:(?:\u91CD\u65B0|\u518D\u6B21)?\u53D1\u5E03|\u520A\u767B|\u4E0A\u67B6|posted|published)',
    '(?:\u53D1\u5E03\u4E8E|\u520A\u767B\u4E8E|\u4E0A\u67B6\u4E8E|\u53D1\u5E03\u65E5\u671F|\u53D1\u5E03\u65F6\u95F4|posted\s+on|published\s+on|(?:post|page)\s+dated)\s*:?\s*(?<year>20\d{2})[-/.](?<month>\d{1,2})[-/.](?<day>\d{1,2})(?!\d)'
  )

  foreach ($pattern in $patterns) {
    foreach ($match in [regex]::Matches($Text, $pattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)) {
      try {
        $candidate = [datetime]::new(
          [int]$match.Groups['year'].Value,
          [int]$match.Groups['month'].Value,
          [int]$match.Groups['day'].Value
        )
        if ($candidate -le $today.AddDays(1)) {
          $dates.Add($candidate)
        }
      } catch {
        continue
      }
    }
  }

  if ($dates.Count -gt 0) {
    return ($dates | Sort-Object -Descending | Select-Object -First 1)
  }
  # A verification/check date is not a publication date. Returning null here
  # prevents an old vacancy from receiving a false "fresh" boost merely because
  # it was rechecked today.
  return $null
}

function Get-FreshnessInfo {
  param($PostedAt)

  if ($null -eq $PostedAt) {
    return [pscustomobject]@{ Tag = 'unknown'; Score = 0; AgeDays = $null }
  }

  $postedDate = ([datetime]$PostedAt).Date
  $age = [int][math]::Max(0, (New-TimeSpan -Start $postedDate -End (Get-Date).Date).Days)
  if ($age -le 7) { return [pscustomobject]@{ Tag = 'week'; Score = 14; AgeDays = $age } }
  if ($age -le 30) { return [pscustomobject]@{ Tag = 'month'; Score = 9; AgeDays = $age } }
  if ($age -le 90) { return [pscustomobject]@{ Tag = 'quarter'; Score = 4; AgeDays = $age } }
  if ($age -le 180) { return [pscustomobject]@{ Tag = 'older'; Score = 0; AgeDays = $age } }
  return [pscustomobject]@{ Tag = 'old'; Score = -10; AgeDays = $age }
}

function Get-Score {
  param(
    [string]$Combined,
    [string]$Opportunity
  )

  $score = 30
  $t = $Combined.ToLowerInvariant()

  if (HasText $t 'very high|extremely strong|top priority|high fit|strong|very worth|most on-target|best new|top low-spanish') { $score += 10 }
  if (HasText $t 'medium|adjacent|worth|apply|good .* route|useful') { $score += 6 }
  if (HasText $t 'low|weak|backup|fallback|thin detail') { $score -= 8 }
  if (HasText $t 'exclude|risk|scam|\bclosed\b|expired|no longer|not a job|not a vacancy|do not apply') { $score -= 40 }
  elseif (HasText $t 'stale|verify-first|historical|old') { $score -= 8 }

  if (HasText $t 'barcelona|barcelon|badalona|cornell|hospitalet|sant cugat|glories|glòries') { $score += 18 }
  if (HasText $t 'remote|remoto|europe remote|eu remote|europe-wide') { $score += 8 }
  if (HasText $t 'madrid|getafe|pinto|parla|alcobendas|sese') { $score -= 8 }
  if (HasText $t 'london|hungary|netherlands|france|paris|italy|milan|budapest|hoofddorp') { $score -= 12 }

  if (HasText $t 'chinese|mandarin|china|wechat|xiaohongshu|xihua|huarenjie|leeeu|西华|华人街|华人|中文|欧浪|华信|乐在欧洲|byd|honor|pop mart|infiled|salsawok|yioucloud|insbrand|boheme|palmnet|oasisroots') { $score += 24 }
  if (HasText $t 'english-first|no spanish|low-spanish|basic english|english required|english route') { $score += 8 }
  if (HasText $t 'spanish b2|spanish c1|spanish fluent|fluent spanish|native spanish') { $score -= 12 }
  elseif (HasText $t 'spanish') { $score -= 4 }

  if (HasText $t 'brand|branding|visual identity|identity|vi|logo|guidelines|brand system') { $score += 18 }
  if (HasText $t 'graphic designer|brand designer|visual designer|designer|graphic design|art director') { $score += 12 }
  if (HasText $t 'digital|website|web|ecommerce|e-commerce|shopify|wordpress|social|media|tiktok|instagram|xiaohongshu|short video|video|editing') { $score += 10 }
  if (HasText $t 'ux designer|product designer|full stack product|crm|journey|wireframe') { $score -= 14 }
  if (HasText $t 'cold|speculative|watch|monitor|service lead|vendor|service provider') { $score -= 8 }

  if ($Opportunity -match 'Insbrand|BOHEME|INFiLED|SALSAWOK|Yioucloud|Tea Lab|HKU Europe|Savills|Lodgify|Oasis Roots|oasisroots|Palmnet|inart|AliExpress|POP MART|CASA TEXTIL|AUXO') {
    $score += 15
  }

  if (HasText $t 'onekeyhq\.atlassian\.net/wiki|gr4yl99ujhl\.typeform\.com') { $score -= 30 }

  if ($score -lt 0) { return 0 }
  return [int]$score
}

function Get-Tier {
  param([int]$Score, [string]$Combined)
  $t = $Combined.ToLowerInvariant()
  # OneKey is global-remote only until Spain contracting is confirmed.
  if (HasText $t 'onekeyhq\.atlassian\.net/wiki|gr4yl99ujhl\.typeform\.com') { return 'C' }
  # The official board lists this Barcelona role, but its direct requisition
  # returned a cache miss; keep it verify-first until the full brief is readable.
  if (HasText $t '5233984008') { return 'C' }
  # Colvin is a readable Barcelona employer listing with concrete contract,
  # salary and paid-test evidence, but it is junior/part-time audiovisual
  # production rather than a core VI/system role.
  if (HasText $t '4440441421') { return 'C' }
  # Current Barcelona content-production ATS routes. Keep them visible as
  # secondary digital-brand opportunities, not homepage-core VI roles.
  if (HasText $t '8634079002|5096089008') { return 'C' }
  # A flexible Chinese-language social-content role where Spanish is only a plus.
  # Surface it in the worth-applying group despite its Madrid classification.
  if (HasText $t 'information-id-16240692') { return 'B' }
  # Historical A1 design vacancy with a currently active employer contact.
  # Keep it visible as a cold/reactivation lead, not as a live vacancy.
  if (HasText $t 'viewthread&tid=634822') { return 'D' }
  # A recently expired but unusually strong low-language visual/content role.
  # Keep it visible as a cold-reactivation lead without presenting it as live.
  if (HasText $t 'showinfo\.asp\?id=4253433') { return 'C' }
  # The ALOHAS page has changed state more than once. Only the newest audited
  # row explicitly documenting the restored official Apply form is current;
  # older rows that record the closed message remain historical.
  if ($t -match 'alohas-restored-apply-20260726') { return 'B' }
  if (HasText $t '7380637-asia-marketing-pr-manager') { return 'X' }
  # Older Barcelona-area Chinese visual-production leads. Keep them available
  # for one-message verification, but never present them as current openings.
  if (HasText $t '15588621|15640131|tid=142466|thread-142466') { return 'D' }
  # The current Yangguang travel-agency internship exposes no design, content,
  # social-media or visual duties; exclude it even though it is recent/local.
  if (HasText $t 'tid=666353') { return 'X' }
  # Hidden visual-production roles recovered from ES02 and Xihua.
  # Their publication dates and employer transparency differ, so keep the
  # ecommerce role visible while treating the thin posts as cold checks only.
  if (HasText $t 'i69362\.html') { return 'C' }
  if (HasText $t 'i125707\.html|i91352\.html|tid=630022') { return 'D' }
  # Recently published Barcelona roles whose titles hide a visual-production
  # component. They are useful backups, but language/scope gates keep them at C.
  if (HasText $t 'i165248\.html|i153455\.html|tid=665470') { return 'C' }
  # A fashion-retail role with real ecommerce photography duties, and an
  # office-first role that only asks for occasional basic Photoshop.
  if (HasText $t 'i149794\.html|657753333') { return 'C' }
  # Fresh Barcelona visual/content roles verified on their live application
  # pages. Mind the Bridge is English-first; the other two remain backups
  # because of a Spanish copywriting gate or freelance/platform constraints.
  if (HasText $t '4373804896') { return 'B' }
  if (HasText $t '4431095806|4433947343|b9lrf0') { return 'C' }
  # Newly verified employer routes: Revolut is English-first and Spain-remote;
  # Adsmurai and All Yours have hard Spanish gates; eMascaro needs a live-status
  # confirmation; Masderm's Domestika detail now redirects and is cold-only.
  if (HasText $t '5b5689c2-5dae-4891-935a-052108c47362|4444389687') { return 'B' }
  if (HasText $t '8109023|4443148299|111968|AB6F18CDF06A88F6') { return 'C' }
  if (HasText $t '111830') { return 'D' }
  # Sixth-pass routes: two English-first direct/application paths, two
  # Spanish-gated challenge roles, and one LinkedIn cache confirmed expired.
  if (HasText $t '2984918|4440523503') { return 'B' }
  if (HasText $t '4420466341|f9b475995d0de79ed45f8a1fb3877375') { return 'C' }
  if (HasText $t '4414549299') { return 'X' }
  # Seventh-pass routes: four current English-first or language-light visual
  # opportunities, plus two verify-first roles with Spanish/status friction.
  if (HasText $t '4443321807|4371442800|4434837522|4405244591') { return 'B' }
  if (HasText $t '4422414873|BB13BD4543BD9763') { return 'C' }
  # Eighth-pass routes: a Barcelona permanent junior art-direction role and
  # an English-first remote AI/brand designer role. Both have direct Apply
  # routes, but language-market and Spain-contract eligibility need checking.
  if (HasText $t '4380465239|dashbook/jobs/junior-art-director-sp-uk-fr|4417627976') { return 'B' }
  # Ninth-pass routes: exact local brand/packaging role with an implicit
  # Spanish workflow, and an English freelance ecommerce-production role with
  # undisclosed compensation. Keep both as C rather than low-language/formal.
  if (HasText $t '4419169035|4421389114') { return 'C' }
  # Fourteenth-pass routes: devicenow is a current English-first Barcelona
  # brand-video role; three current motion/video roles have senior or explicit
  # Spanish gates and stay visible only as challenge options.
  if (HasText $t '4443513314') { return 'B' }
  if (HasText $t '4440457390|4425688048|4440004559') { return 'C' }
  # Fifteenth-pass routes: Flummox has a distinct live repost and Codeway is a
  # current English-first exact brand role. AQIPA has a location conflict and
  # Talent-R has a French hard gate, so both remain challenge options.
  if (HasText $t '4433816578|bed207b4-0e8a-4bc2-a179-b3a6b9a89afe|4437404651') { return 'B' }
  if (HasText $t '4440457820|4410027087') { return 'C' }
  # Sixteenth-pass routes: IKIGAI is a current English-first Barcelona form.
  # The other live routes have language, internship, low-pay, anonymity or
  # aggregator friction and should not outrank the exact low-language roles.
  if (HasText $t 'ikigaitalentgroup\.com/offers/video-editor-motion-designer') { return 'B' }
  if (HasText $t '4440010098|4442212716|6g3oVr|short-form-video-editor-graphic-designer-bilingual-en-es|ab081c23246201-digital-content-designer|4433014130|9dc0727f-096b-4741-8546-ab3e5a3049ef') { return 'C' }
  if (HasText $t 'p3Vk3G|8Pwzyb') { return 'D' }
  if (HasText $t '82562561-motion-designer-localization|4427202851') { return 'X' }
  # Seventeenth-pass routes: the new Dragons mid-level pharma role is a
  # current English-first Barcelona match. Reposted Dragons/Qustodio records
  # remain B so the newest verified application route can replace the stale
  # URL after identity-based deduplication. Remote contractor and Spanish/local
  # workflow options stay C.
  if (HasText $t '4442348781|4442340757|4442345801|4442338784|4444953467') { return 'B' }
  if (HasText $t '4444718491|4441503440|4443135589|4444943839') { return 'C' }
  # Eighteenth-pass routes: CrowdStrike is the strongest new English-first
  # Spain-remote opening. D&M and Intracon are current formal roles that were
  # previously hidden by a false "disclosed" -> "closed" match. The remaining
  # routes stay visible as current challenge or production options.
  if (HasText $t 'R29235|4439209874|4439785435|4434833305') { return 'B' }
  if (HasText $t '4437774061|4437837516|4439973516|4412803679|4376786502') { return 'C' }
  if (HasText $t '5826131927659655283|rb-rotulaci-n-barcelona') { return 'D' }
  # Nineteenth-pass routes: Wall Street English is a current English-first
  # senior brand-system role and INFiLED remains the strongest China-brand
  # route. Steneg stays B; current Spanish/Catalan or opaque-client options are
  # retained as C so they remain searchable without entering the default fit.
  if (HasText $t '4434533525') { return 'A' }
  if (HasText $t '4434639105|4357596568') { return 'B' }
  if (HasText $t '4432769541|4427352973|4419169035|4439026199|4434547297') { return 'C' }
  # Twentieth-pass routes: both official Ashby openings are useful Spain-based
  # English backups, but must remain outside the Chinese-first homepage.
  # Jobgether stays C because the employer is anonymous and the page conflicts
  # on full-time versus roughly 20 hours per week.
  if (HasText $t '62d820a0-f2b6-4a8f-a909-a964d867438d|edf0545a-9df7-4829-8312-104f5dc867a1') { return 'B' }
  if (HasText $t '16af7a4b-4fda-4861-87a4-fc2ccb4a09fb') { return 'C' }
  # Chinese-language remote exact-fit visual role, but the RMB compensation is
  # low for a Spain-based freelancer and cross-border eligibility is unproven.
  if (HasText $t 'CCL1507666820J40977554902|remote-china\.com/jobs/1252') { return 'C' }
  # Current Chinese-platform Spain-remote ecommerce/content role with a direct
  # application route, but the employer and employment terms are still hidden.
  if (HasText $t 'oulang\.ai/listing/2417332') { return 'C' }
  # Twenty-fifth-pass Chinese remote routes. OneKey is an official, exact-fit
  # brand-system role with Chinese application and paid testing. Huqiao has a
  # fresh remote repost but a hard English gate and low salary. The remaining
  # two routes are useful Chinese leads with employer/status verification risk.
  if (HasText $t 'onekeyhq\.atlassian\.net/wiki/spaces/OC/pages/127238234') { return 'A' }
  if (HasText $t '4431050505') { return 'C' }
  if (HasText $t '1773303560734x517566533736071200|remote-china\.com/jobs/769') { return 'C' }
  # Eleventh-pass routes: current paid English art direction and a distinct
  # PepsiCo brand-design requisition are B; Spanish/editorial backups stay C.
  if (HasText $t '4441496960|pepsicojobs\.com/jobs/434628|66669622-designer-food-ventures') { return 'B' }
  if (HasText $t '4442614068|1215063575') { return 'C' }
  # Raval Eyewear is a Barcelona employer-origin brand-design lead whose
  # LinkedIn detail was rate-limited during verification; keep it visible as
  # a C-level verify-first local lead rather than a confirmed A/B opening.
  if (HasText $t '4431660503|ravaleyewear\.com') { return 'C' }
  # ICÓNICO / ÚNICO is a Barcelona employer-origin graphic/multimedia role
  # with an official CV contact, but language and exact application status need
  # confirmation; keep it visible as a C-level local brand-content lead.
  if (HasText $t '4440947485|ae95a5929ce854cb|iconico\.es') { return 'C' }
  # BYPHASSE is a Barcelona employer-origin senior graphic-design route with
  # a readable LinkedIn brief and an official careers/contact site, but it is
  # temporary and Spanish-led with no direct ATS requisition; keep it visible
  # as a local verify-first challenge, not as a Chinese-language core role.
  if (HasText $t '4379926338|byphasse\.com') { return 'C' }
  # Cal Fruitós is a current Barcelona-local brand/packaging route with a
  # readable LinkedIn brief and an official employer careers link, but the
  # role is fully on-site, Catalan/Spanish-led and its ATS detail was not
  # independently readable; keep it visible as a C-level verify-first lead.
  if (HasText $t '4404037331|calfruitos\.com|treballaambnosaltres\.calfruitos\.com') { return 'C' }
  # Round 206 Barcelona employer-origin routes. Checkin is Santa Susanna and
  # fully onsite; Next'media has Barcelona creative-production openings. Keep
  # all three visible as secondary C-level routes because Chinese-language,
  # Spanish/English workflow and full employment terms are not confirmed.
  if (HasText $t '4431503397|4434467906|4419847005') { return 'C' }
  # Newlink is a current Barcelona agency role with strong brand/content scope,
  # but Catalan C1 and English B2 are hard gates; keep it secondary rather than
  # allowing the generic Barcelona/graphic score to enter the homepage core.
  if (HasText $t '4401651451') { return 'C' }
  # Coty's Barcelona ecommerce-content internship is a genuine employer-origin
  # route, but it requires an internship agreement and fluent Spanish/English;
  # keep it visible as a secondary C-level digital-brand opportunity.
  if (HasText $t '98318|careers\.coty\.com/job/Barcelona-E-commerce-SEO-Intern') { return 'C' }
  # El Prat signage/print production is a useful Barcelona-metro backup, but
  # it is not a Chinese-language or brand/VI role; keep the explicit C-level
  # tracker classification despite the generic local-designer score.
  if (HasText $t '4435823678') { return 'C' }
  # Superseded All Yours listing: keep the current 111968 detail only.
  if (HasText $t '111992|4422334674') { return 'X' }
  # Mass-reposted "order processing" copy has no verifiable employer and uses
  # rotating contacts across countries. Keep it searchable only as a risk alert.
  if (HasText $t 'i175435\.html') { return 'X' }
  # BBS/XBYHR reposts using this phone resolve to the same 2024 signage-shop ad.
  # Keep them in the archive, but do not surface them as separate current roles.
  if (HasText $t '658950003') { return 'X' }
  if (HasText $t 'exclude|risk|scam|\bclosed\b|expired|no longer|do not apply') { return 'X' }
  if (HasText $t 'li214598641@gmail\.com') { return 'B' }
  if ($Score -ge 120) { return 'A' }
  if ($Score -ge 95) { return 'B' }
  if ($Score -ge 70) { return 'C' }
  if ($Score -ge 45) { return 'D' }
  return 'X'
}

function Get-LocationTag {
  param([string]$Combined)
  if ($Combined -match '(?i)b1bcd63b-91fd-4a6d-b71b-ac6285087d10') { return 'Remote / Europe' }
  if ($Combined -match '(?i)oulang\.ai/listing/2417332') { return 'Remote / Europe' }
  if ($Combined -match '(?i)5b5689c2-5dae-4891-935a-052108c47362|4444389687') { return 'Remote / Europe' }
  if ($Combined -match '(?i)2984918|4440523503|4443321807|4434837522') { return 'Remote / Europe' }
  if ($Combined -match '(?i)i91352\.html') { return 'Other / unclear' }
  if ($Combined -match '(?i)i69362\.html') { return 'Madrid area' }
  if ($Combined -match '(?i)onekeyhq\.atlassian\.net/wiki|gr4yl99ujhl\.typeform\.com') { return 'Global remote / Spain unconfirmed' }
  if ($Combined -match '(?i)barcelona|barcelon|badalona|cornell|hospitalet|sant cugat|glories|glòries') { return 'Barcelona area' }
  if ($Combined -match '(?i)remote|remoto|europe') { return 'Remote / Europe' }
  if ($Combined -match '(?i)madrid|getafe|pinto|parla|alcobendas|sese') { return 'Madrid area' }
  return 'Other / unclear'
}

function Get-TypeTag {
  param([string]$Combined)
  if ($Combined -match '(?i)cold|speculative|watch|monitor|service provider|service lead|vendor') { return 'Cold / watch' }
  if ($Combined -match '(?i)brand|branding|vi|logo|visual|identity|graphic designer|designer') { return 'Brand / visual' }
  if ($Combined -match '(?i)social|media|digital|ecommerce|website|web|tiktok|instagram|xiaohongshu|short video|video') { return 'Digital / social' }
  return 'Other'
}

function Get-SourceGroup {
  param(
    [string]$Source,
    [string]$Contact,
    [string]$Section
  )
  $route = "$Source $Contact"
  if ($route -match '(?i)linkedin\.com|\blinkedin\b') { return 'linkedin' }
  if ("$route $Section" -match '(?i)xihua|huarenjie|infohuaxin|eulam|oulang|spaincn|leeeu|乐在欧洲|xbyhr|bbs\.eus|es02|99876|jrhqzx|huatong|xiouwang|ouhua|eurotrabajo|casa asia|camara hispano china|cámara hispano china|西华|华人街|欧浪') { return 'chinese' }
  return 'other'
}

function Get-RecordIdentity {
  param([object]$Record)
  return ((@([string]$Record.source, [string]$Record.opportunity) -join '||').Trim().ToLowerInvariant())
}

$tracker = Resolve-Path -LiteralPath $TrackerPath
$out = [System.IO.Path]::GetFullPath($OutputPath)
$lines = Get-Content -LiteralPath $tracker -Encoding UTF8

$section = ''
$headers = @()
$skipSection = $false
$records = New-Object System.Collections.Generic.List[object]
$pattersonOriginalId = $null
$i = 0

while ($i -lt $lines.Count) {
  $line = $lines[$i]
  if ($line -match '^##\s+(.+)$') {
    $section = $Matches[1].Trim()
    $headers = @()
    $skipSection = $false
    $i++
    continue
  }

  if ($line -match '<!--\s*audit-only\b') {
    $skipSection = $true
    $i++
    continue
  }

  if ($skipSection) {
    $i++
    continue
  }

  if ($line -match '<!--\s*record-skip\b') {
    $i++
    continue
  }

  if ($line.Trim().StartsWith('|')) {
    $cells = @(Split-MarkdownRow $line)
    $next = if (($i + 1) -lt $lines.Count) { $lines[$i + 1] } else { '' }
    $isPattersonDataRow = ($cells.Count -gt 0 -and $cells[0] -eq 'Patterson Agency')
    if (($next -match '^\s*\|?\s*:?-{3,}') -and -not $isPattersonDataRow) {
      $headers = @($cells | ForEach-Object { ($_ -replace '\s+', ' ').Trim() })
      $i += 2
      continue
    }

    if ($headers.Count -gt 0 -and $cells.Count -gt 1) {
      $map = @{}
      for ($c = 0; $c -lt $cells.Count; $c++) {
        $key = if ($c -lt $headers.Count -and $headers[$c]) { $headers[$c] } else { "Column $($c + 1)" }
        $map[$key] = [string]$cells[$c]
      }

      $isVerificationTable =
        $headers.Count -eq 5 -and
        $headers[0] -match '公司|source|channel' -and
        $headers[1] -match '岗位|opportunity|role|result' -and
        $headers[2] -match '原始详情|official|detail|application';
      if ($isVerificationTable) {
        # Five-column dated audit tables store detail URL, evidence and next action.
        # Normalize them to the site schema so the URL does not masquerade as fit/location.
        $source = [string]$cells[0]
        $opportunity = [string]$cells[1]
        $fit = '官方核验记录'
        $location = [string]$cells[3]
        $status = (@($cells[3], $cells[4]) -join ' ').Trim()
        $contact = [string]$cells[2]
        $analysis = [string]$cells[4]
      } else {
        $source = First-MatchingValue $map @('source|channel|company') @(0) $cells
        $opportunity = First-MatchingValue $map @('opportunity|role|job|position') @(1,0) $cells
        $fit = First-MatchingValue $map @('fit|priority') @(2) $cells
        $location = First-MatchingValue $map @('location') @(3,2) $cells
        $status = First-MatchingValue $map @('status|evidence|language|compensation') @(4,3) $cells
        $contact = First-MatchingValue $map @('contact|application|route') @(5,4) $cells
        $analysis = First-MatchingValue $map @('analysis|next action') @(6,5) $cells
      }

      if ($isPattersonDataRow) {
        $source = [string]$cells[0]
        $opportunity = [string]$cells[1]
        $fit = [string]$cells[2]
        $location = [string]$cells[2]
        $status = [string]$cells[3]
        $contact = [string]$cells[4]
        $analysis = [string]$cells[5]
      }

      $combined = (@($section, $source, $opportunity, $fit, $location, $status, $contact, $analysis, ($cells -join ' ')) -join ' ')
      $scoreText = (@($source, $opportunity, $fit, $location, $status, $contact, $analysis, ($cells -join ' ')) -join ' ')
      if ($combined.Trim().Length -gt 10 -and $opportunity -notmatch '^-+$') {
        $postedAt = Get-PostedDate $scoreText
        $freshness = Get-FreshnessInfo $postedAt
        $score = (Get-Score $scoreText $opportunity) + $freshness.Score
        if ($score -lt 0) { $score = 0 }
        $tier = Get-Tier $score $scoreText
        if ($isPattersonDataRow) {
          $score = 0
          $tier = 'C'
        }
        $record = [ordered]@{
          id = $records.Count + 1
          section = $section
          source = $source
          opportunity = $opportunity
          fit = $fit
          location = $location
          status = $status
          contact = $contact
          analysis = $analysis
          score = $score
          tier = $tier
          locationTag = Get-LocationTag $scoreText
          typeTag = Get-TypeTag $scoreText
          sourceGroup = Get-SourceGroup -Source $source -Contact $contact -Section $section
          postedAt = if ($null -ne $postedAt) { $postedAt.ToString('yyyy-MM-dd') } else { '' }
          freshnessTag = $freshness.Tag
          freshnessAgeDays = $freshness.AgeDays
          links = Get-Links $combined
          rawColumns = $map
          searchText = $combined
        }
        if ($isPattersonDataRow) {
          $pattersonOriginalId = $record.id
          $record.id = 999999
        }
        $records.Add([pscustomobject]$record)
      }
    }
  }
  $i++
}

if ($null -ne $pattersonOriginalId) {
  foreach ($record in $records) {
    if ($record.id -gt $pattersonOriginalId -and $record.id -lt 999999) {
      $record.id = $record.id - 1
    }
  }
}

# Preserve public IDs across tracker edits. Historical rounds are intentionally
# inserted near the top of the private tracker, while the public validator and
# bookmarked links rely on IDs remaining stable. Reuse an existing ID when the
# source/opportunity identity is still present; allocate new IDs only to rows
# that did not exist in the previous public payload.
$existingRecords = @()
if ($ExistingDataPath -and (Test-Path -LiteralPath $ExistingDataPath)) {
  $existingText = [System.IO.File]::ReadAllText((Resolve-Path -LiteralPath $ExistingDataPath).Path, [System.Text.UTF8Encoding]::new($false))
  $marker = 'window.JOB_OPPORTUNITIES = '
  $markerIndex = $existingText.IndexOf($marker, [System.StringComparison]::Ordinal)
  if ($markerIndex -ge 0) {
    $jsonStart = $markerIndex + $marker.Length
    # JSON strings may contain semicolons, so use the final assignment
    # terminator rather than the first semicolon after the marker.
    $jsonEnd = $existingText.LastIndexOf(';')
    if ($jsonEnd -gt $jsonStart) {
      try {
        Add-Type -AssemblyName System.Web.Extensions
        $serializer = New-Object System.Web.Script.Serialization.JavaScriptSerializer
        $serializer.MaxJsonLength = 100000000
        $parsedExisting = $serializer.DeserializeObject($existingText.Substring($jsonStart, $jsonEnd - $jsonStart))
        $existingRecords = @()
        foreach ($item in $parsedExisting) { $existingRecords += $item }
      } catch { $existingRecords = @() }
    }
  }
}

# Never carry audit/status-only rounds back into the public payload when a
# previous run accidentally published them. These rounds are private source
# evidence. Round 233 and Round 234 are intentionally public current-card
# sections, so keep their existing records available for ID stability.
if ($existingRecords.Count -gt 0) {
  $existingRecords = @($existingRecords | Where-Object {
    [string]$_.section -notmatch '^2026-08-02 Round (226|227|228|229|230|231|232|235|236|237|238|262)'
  })

  # Repair the one intermediate Round 239 regeneration that allocated the
  # new row before the two latest public-card IDs. Remove that round's
  # generated copy so the tracker row below is appended after the preserved
  # IDs, and restore the known public IDs for the Round 233/234 cards.
  $existingRecords = @($existingRecords | Where-Object {
    [string]$_.section -notmatch '^2026-08-02 Round 239: one new Barcelona English-first digital-design route'
  })
  foreach ($existingRecord in $existingRecords) {
    if ([string]$existingRecord.source -eq 'Coty / official careers' -and [string]$existingRecord.opportunity -match '^E-commerce Product Content Intern') {
      $existingRecord.id = 1266
    } elseif ([string]$existingRecord.source -like 'InfoHuaxin*' -and [string]$existingRecord.contact -match 'Q371086689') {
      $existingRecord.id = 1267
    }

    # Correct the preserved public copy after the official Velvet Caviar
    # careers page was re-opened: the company accepts applications by email,
    # while the LinkedIn listing remains a separate status check.
    if ([string]$existingRecord.source -eq 'Velvet Caviar' -and [string]$existingRecord.opportunity -eq 'Graphic Designer - eCommerce Fashion Brand') {
      $existingRecord.status = 'LinkedIn snapshot still shows Solicitar, about 1 week ago and 200+ applicants; direct re-open returned cache miss in this pass; salary EUR30,000-40,000/year; 2+ years; no Spanish requirement stated; New York overlap until 18:00 Monday-Friday; verify role status before applying'
      $existingRecord.contact = 'LinkedIn detail/application: https://es.linkedin.com/jobs/view/graphic-designer-ecommerce-fashion-brand-at-velvet-caviar-4413468201 ; official careers application email: jobs@velvetcaviar.com ; careers page: https://velvetcaviar.com/pages/careers'
      $existingRecord.analysis = 'Email campaigns, social static/motion, website/Amazon banners, landing pages, ads, patterns, photo retouching and AI; Adobe/After Effects/Illustrator; strong branding/typography. Spain-remote fallback, not Barcelona-local and not Chinese. Send CV + portfolio + preferred position to jobs@velvetcaviar.com, and separately verify that this exact role is still open on LinkedIn.'
      if ($existingRecord.rawColumns) {
        $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
        $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
        $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
      }
    }

    if ([string]$existingRecord.source -eq 'Glovo' -and [string]$existingRecord.opportunity -eq 'Senior Graphic Designer') {
      $existingRecord.location = 'Barcelona, Spain; full-time; Marketing & Growth; hybrid with two days working from home and up to three weeks remote per year'
      $existingRecord.status = 'Official Glovo Careers page is live and shows Apply; role covers brand guardianship and end-to-end social, PR and Global Affairs visual assets; expert Illustrator/Photoshop/Lightroom/Canva; Premiere Pro/After Effects and workflow coordination are bonuses; Spanish not stated; work authorization/salary not published'
      $existingRecord.contact = 'Official employer detail/application: https://careers.glovoapp.com/job/senior-graphic-designerthey-she-he-in-barcelona-jid-744000116434377/ ; LinkedIn mirror: https://es.linkedin.com/jobs/view/senior-graphic-designer-they-she-he-at-glovo-4387384420'
      $existingRecord.analysis = 'Strong Barcelona brand-guardian and production match. Prepare a portfolio section showing social/PR campaigns, brand consistency, fast multi-stakeholder delivery and a small motion example; confirm Spanish workflow, salary band and work authorization before submitting.'
      if ($existingRecord.rawColumns) {
        $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
        $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
        $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
        $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
      }
    }

    if ([string]$existingRecord.source -eq 'Skello' -and [string]$existingRecord.opportunity -eq 'Global Brand Designer Spain') {
      $existingRecord.location = 'Barcelona; full-time; possible partial remote; Spain/Italy market focus'
      $existingRecord.status = 'Official ATS is live and shows Apply now; identity, campaigns, design-system evolution, motion and event creative; native Spanish and strong English are mandatory, French a bonus; 4+ years; salary/visa not published'
      $existingRecord.contact = 'Official ATS/detail/application: https://skello.welcomekit.co/jobs/global-brand-designer-spain_barcelona'
      $existingRecord.analysis = 'Extremely strong Barcelona VI/brand-system match, but Spanish-native language gate is hard. Apply only if the language requirement is met; otherwise use it as a local-market benchmark and monitor for English-first variants.'
      if ($existingRecord.rawColumns) {
        $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
        $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
        $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
        $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
      }
    }

      if ([string]$existingRecord.source -eq 'Huqiao Games' -and [string]$existingRecord.opportunity -eq 'Visual Designer (Bilingual Mandarin & English)') {
      $existingRecord.location = 'Spain listing; fully remote / EU hours; closed'
      $existingRecord.status = 'Original Spain LinkedIn detail explicitly says Ya no se aceptan solicitudes; historical brief required fluent Mandarin and English, 3+ years, Adobe/Premiere/After Effects/Figma/Canva, Chinese-platform visual content and video; USD1,500/month + bonuses'
      $existingRecord.contact = 'Closed original detail: https://es.linkedin.com/jobs/view/visual-designer-bilingual-mandarin-english-at-huqiao-games-4430688607 ; related Hong Kong repost is not proof of Spain eligibility'
      $existingRecord.analysis = 'Keep in closed/monitoring section only. Do not apply through the closed Spain URL or infer a Spain contract from the related Hong Kong listing.'
      if ($existingRecord.rawColumns) {
        $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
        $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
        $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
        $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }

      # Refresh the existing Stark Future local lead from the current LinkedIn
      # detail. Keep it verify-first because the exact requisition is not shown
      # on the employer's public careers list in this pass.
      if ([string]$existingRecord.source -eq 'Stark Future' -and [string]$existingRecord.opportunity -eq 'Graphic Designer') {
        $existingRecord.location = 'Sant Boi de Llobregat / Barcelona metro; on-site; full-time; premium motorcycle brand'
        $existingRecord.status = 'Current LinkedIn detail shows Solicitar, about 2 days ago and 67 applicants; scope covers Brand & Retail Assets, marketing/digital content, packaging, product documentation, corporate/internal communications, presentations and templates; Adobe Photoshop/Illustrator essential, Figma and Blender valued; Spanish/English and salary not published; official careers list currently does not surface the exact requisition, so verify before applying'
        $existingRecord.contact = 'LinkedIn detail/application: https://es.linkedin.com/jobs/view/graphic-designer-at-stark-future-sl-4424557342 ; official employer careers: https://careers.starkfuture.com/ ; general HR contact shown in company materials: HR@starkfuture.com'
        $existingRecord.analysis = 'Strong Barcelona-metro brand, packaging and digital-extension match. Prepare premium-brand identity, packaging/manuals, retail/dealer assets, campaign content and presentation-template cases; confirm the exact ATS route, on-site schedule, working language, salary and work authorization before applying. Do not treat the third-party EUR30,000-50,000 range as verified.'
        $existingRecord.links = @('https://es.linkedin.com/jobs/view/graphic-designer-at-stark-future-sl-4424557342', 'https://careers.starkfuture.com/', 'mailto:HR@starkfuture.com')
        if ($existingRecord.rawColumns) {
          $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
          $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
          $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
          $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }

      # Refresh the existing Rocket Digital social-design record from the
      # employer's live Factorial detail and application route.
      if ([string]$existingRecord.source -match 'Rocket Digital' -and [string]$existingRecord.opportunity -eq 'Graphic Designer Social Media') {
        $existingRecord.location = 'Barcelona; hybrid; permanent; full-time; SMO Team; office at Calle Alaba 111'
        $existingRecord.status = 'Official Rocket Digital Factorial detail 306705 is live and shows Apply now, Permanent, Full time and Hybrid in Barcelona; role covers organic social visual universes, reusable templates, brand consistency, posts/stories/reels/covers/carousels, Adobe, Figma, basic short-form editing and AI-generated visual assets; Spanish workflow, salary and exact office cadence are not published'
        $existingRecord.contact = 'Official detail: https://rock-et.factorial.es/job_posting/graphic-designer-social-media-306705 ; official application: https://rock-et.factorial.es/apply/graphic-designer-social-media-306705 ; employer jobs hub: https://rock-et.factorial.es/'
        $existingRecord.analysis = 'Strong Barcelona digital-brand extension route, but social-first rather than core VI. Apply with brand-to-social systems, reusable template governance, motion-lite variants, AI-assisted production and evidence of consistent multi-channel execution; confirm Spanish as a daily working language, salary and onsite rhythm before investing.'
        $existingRecord.links = @('https://rock-et.factorial.es/job_posting/graphic-designer-social-media-306705', 'https://rock-et.factorial.es/apply/graphic-designer-social-media-306705', 'https://rock-et.factorial.es/')
        if ($existingRecord.rawColumns) {
          $existingRecord.rawColumns['Last verified'] = '2026-08-02'
          $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
          $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
          $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
          $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }

      # The Sanofi LinkedIn search card is misleadingly fresh, but the
      # employer's Workday page records an end date of 2026-05-15.
      if ([string]$existingRecord.source -match 'Sanofi' -and [string]$existingRecord.opportunity -eq 'Graphic Designer') {
        $existingRecord.location = 'Barcelona; full-time; closed historical'
        $existingRecord.status = 'Official Sanofi Workday requisition R2834888 lists an application end date of 2026-05-15; the current LinkedIn search snippet is stale and must not be treated as open; English required; scope included scientific visual communications, video, templates, presentations, infographics and brand-guideline work'
        $existingRecord.contact = 'Official closed Workday detail: https://sanofi.wd3.myworkdayjobs.com/en-US/SanofiCareers/job/Graphic-Designer_R2834888 ; LinkedIn historical detail: https://es.linkedin.com/jobs/view/graphic-designer-at-sanofi-4375153147'
        $existingRecord.analysis = 'Move to closed/history. Keep the role as a useful benchmark for English-first Barcelona visual communication, but do not apply through the stale LinkedIn result or claim the requisition is currently open.'
        $existingRecord.tier = 'X'
        $existingRecord.score = 42
        $existingRecord.links = @('https://sanofi.wd3.myworkdayjobs.com/en-US/SanofiCareers/job/Graphic-Designer_R2834888', 'https://es.linkedin.com/jobs/view/graphic-designer-at-sanofi-4375153147')
        if ($existingRecord.rawColumns) {
          $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
          $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
          $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
          $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }

      # The BYD Europe Chinese-speaker graphic-design route is now explicitly
      # inactive on the employer's own Teamtailor detail. Keep the historical
      # record for benchmarking, but remove it from the usable/open pool.
      if ([string]$existingRecord.source -eq 'BYD Europe' -and [string]$existingRecord.opportunity -eq 'Graphic Designer-Chinese speaker') {
        $existingRecord.location = 'Hoofddorp, Netherlands; full-time; closed historical'
        $existingRecord.status = 'Official BYD Teamtailor detail now explicitly says "This position is no longer active"; the historical role required fluent Chinese and English and 5+ years; not Barcelona or Spain'
        $existingRecord.contact = 'Official closed detail: https://careers.bydeurope.com/jobs/5897741-graphic-designer-chinese-speaker'
        $existingRecord.analysis = 'Move to closed/history. Keep as a high-value Chinese-brand visual-system benchmark, but do not apply through the expired route or present it as Spain/Barcelona.'
        $existingRecord.tier = 'X'
        $existingRecord.score = 42
        $existingRecord.links = @('https://careers.bydeurope.com/jobs/5897741-graphic-designer-chinese-speaker')
        if ($existingRecord.rawColumns) {
          $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
          $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
          $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
          $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }

      # The LONBALI Barcelona graphic-designer detail now explicitly says
      # applications are no longer accepted. Close every preserved duplicate
      # of this identity so stale LinkedIn mirrors cannot keep it actionable.
      if ([string]$existingRecord.source -match 'Lonbali' -and [string]$existingRecord.opportunity -match 'gr.fica|Graphic Designer') {
        $existingRecord.location = 'Barcelona; full-time; closed historical'
        $existingRecord.status = 'Original LinkedIn detail explicitly says "No longer accepting applications"; historical scope covered paid social, e-commerce, social, AI content, video/motion, retail signage and packaging; Spanish fluent/native and medium/high English were required'
        $existingRecord.contact = 'Official closed original detail: https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fica-at-lonbali-4438899857'
        $existingRecord.analysis = 'Move to closed/history. Keep as a useful Barcelona fashion/e-commerce brand-extension benchmark, but do not apply through the expired LinkedIn route or present it as open.'
        $existingRecord.tier = 'X'
        $existingRecord.score = 42
        $existingRecord.links = @('https://es.linkedin.com/jobs/view/dise%C3%B1ador-a-gr%C3%A1fica-at-lonbali-4438899857')
        if ($existingRecord.rawColumns) {
          $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
          $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
          $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
          $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }

      # Waiis published a newer employer post for the same design identity,
      # now located in Manresa. Supersede older Barcelona-city duplicates and
      # leave the newer 4441945681 record as the single current line.
      if ([string]$existingRecord.source -eq 'Waiis' -and [string]$existingRecord.opportunity -match 'Graphic Designer') {
        $existingRecord.location = 'Manresa, Barcelona province; hybrid; superseded Barcelona-city copy'
        $existingRecord.status = 'Newer employer LinkedIn post 4441945681 lists Manresa, 4 office days/1 remote day negotiable and EUR35,000–40,000 gross/year; older Barcelona detail 4430297597 shows a hired/status conflict'
        $existingRecord.contact = 'Use the newer current identity instead: https://es.linkedin.com/jobs/view/graphic-designer-and-copywriter-at-waiis-4441945681 ; mailto:andrea@waiis.com'
        $existingRecord.analysis = 'Move this older Barcelona-city duplicate to history/superseded. Keep only the newer Manresa record for verification; confirm commute, language and employment versus freelance before applying.'
        $existingRecord.tier = 'X'
        $existingRecord.score = 42
        $existingRecord.links = @('https://es.linkedin.com/jobs/view/graphic-designer-and-copywriter-at-waiis-4441945681', 'mailto:andrea@waiis.com')
        if ($existingRecord.rawColumns) {
          $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
          $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
          $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
          $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }

      # The Liados Art Director & Graphic Design LinkedIn detail now redirects
      # to an expired-jobs search page; retain it only as agency benchmark.
      if ([string]$existingRecord.source -eq 'Liados' -and [string]$existingRecord.opportunity -eq 'Art Director & Graphic Design') {
        $existingRecord.location = 'Barcelona / Poblenou; closed historical'
        $existingRecord.status = 'Original LinkedIn detail 4437151743 now redirects to an expired-jobs search page; historical role was indefinite, 37.5 hours/week, Poblenou, salary by experience, and direct email jobs@liadosclab.com'
        $existingRecord.contact = 'Closed original detail: https://es.linkedin.com/jobs/view/art-director-graphic-design-at-liados-4437151743'
        $existingRecord.analysis = 'Move to closed/history. Keep Liados as a Barcelona creative-studio benchmark, but do not apply through the expired LinkedIn route.'
        $existingRecord.tier = 'X'
        $existingRecord.score = 42
        $existingRecord.links = @('https://es.linkedin.com/jobs/view/art-director-graphic-design-at-liados-4437151743')
        if ($existingRecord.rawColumns) {
          $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
          $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
          $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
          $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }

      # Refresh the single Chinese-local design identity from the current
      # Xihua board activity. The forum title now says two openings, but it is
      # still the same tid/contact identity already represented by public ID
      # 778; do not create a second card for the headcount change.
      if ([string]$existingRecord.contact -match '4274158' -and [string]$existingRecord.opportunity -match 'Graphic Designer') {
        $existingRecord.location = 'Barcelona; Chinese-language; local advertising / print design'
        $existingRecord.status = 'Xihua original detail for tid=636246 now opens and identifies the unit as "广告店"; it states Barcelona, net EUR1,410-1,600/month, two full-time graphic-designer openings, basic Spanish, work residence,男女不限 and contact Chen / 644055418; the description requires experience and AI and says full insurance. The current Cataluna feed marks this same thread New / half an hour ago, which is an activity signal rather than a new publication date. The structured social-insurance, hours, holiday and paid-vacation fields are blank, and no legal company name or exact address is published. InfoHuaxin detail 4274158 remains dated 2026-07-25 and valid until 2026-08-09 10:22.'
        $existingRecord.contact = 'Xihua original detail/application contact: https://xihua.es/forum.php?extra=page%3D1&mod=viewthread&tid=636246 ; InfoHuaxin detail: https://infohuaxin.com/showinfo.asp?id=4274158 ; ES02 detail: https://www.es02.com/jobs/Recruitment/barcelona/i175449.html ; contact identity: WeChat A644055418 / phone 644055418'
        $existingRecord.analysis = 'Keep as the single current Chinese Barcelona design lead; the two-opening wording is the same employer/contact identity, not a new card. The original page now makes the local fit and salary evidence stronger, but verify legal company name, exact address, written contract, social-security registration, actual hours, trial period, portfolio format and whether both seats remain open before sending a concise Chinese CV plus Illustrator/print-production samples. Do not send passport or residence scans before verification.'
        $existingRecord.links = @('https://xihua.es/forum.php?extra=page%3D1&mod=viewthread&tid=636246', 'https://infohuaxin.com/showinfo.asp?id=4274158', 'https://www.es02.com/jobs/Recruitment/barcelona/i175449.html')
        if ($existingRecord.rawColumns) {
          $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
          $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
          $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
          $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }

      # Refresh the existing Adsmurai record from the employer's live careers
      # page, which is stronger evidence than the LinkedIn cache-miss page.
      if ([string]$existingRecord.source -match 'Adsmurai' -and [string]$existingRecord.opportunity -eq 'Digital Graphic Designer (They/He/She)') {
        $existingRecord.location = 'Barcelona headquarters; permanent; hybrid with 2 remote days; CREATIV_ team'
        $existingRecord.status = 'Official Adsmurai careers page currently lists Digital Graphic Designer (They/He/She) as an open Barcelona role; LinkedIn detail 4443148299 shows about 1 day and 156 applicants but direct page cache-missed; Spanish and fluent English (C1 nice to have) are requested; salary not published'
        $existingRecord.contact = 'Official employer careers: https://www.adsmurai.com/en/careers ; LinkedIn detail/application: https://es.linkedin.com/jobs/view/digital-graphic-designer-they-he-she-at-adsmurai-4443148299'
        $existingRecord.analysis = 'Strong Barcelona digital-brand production route. Prepare paid-social and e-commerce creative systems, static/motion variants, AI-assisted workflows and examples of visual consistency across platforms; confirm exact application form, Spanish daily workflow and salary before submitting.'
        $existingRecord.links = @('https://www.adsmurai.com/en/careers', 'https://es.linkedin.com/jobs/view/digital-graphic-designer-they-he-she-at-adsmurai-4443148299')
        if ($existingRecord.rawColumns) {
          $existingRecord.rawColumns['Fit / location'] = $existingRecord.location
          $existingRecord.rawColumns['Status / language / compensation'] = $existingRecord.status
          $existingRecord.rawColumns['Original detail / application'] = $existingRecord.contact
          $existingRecord.rawColumns['Analysis / next action'] = $existingRecord.analysis
        }
      }
    }
  }

$existingKeys = New-Object 'System.Collections.Generic.HashSet[string]'
$usedIds = New-Object 'System.Collections.Generic.HashSet[int]'
$nextId = 1
foreach ($oldRecord in $existingRecords) {
  $oldId = 0
  if ([int]::TryParse([string]$oldRecord.id, [ref]$oldId) -and $oldId -gt 0) {
    [void]$usedIds.Add($oldId)
    if ($oldId -ge $nextId -and $oldId -lt 999999) { $nextId = $oldId + 1 }
    [void]$existingKeys.Add((Get-RecordIdentity $oldRecord))
  }
}

# Keep the last validated public payload byte-for-byte at the record level.
# Only identities absent from that payload are appended, so historical IDs,
# statuses, links and validator-covered fields cannot be rewritten by a new
# tracker section inserted near the top of the private markdown file.
$mergedRecords = New-Object 'System.Collections.Generic.List[object]'
foreach ($oldRecord in $existingRecords) { [void]$mergedRecords.Add($oldRecord) }
foreach ($record in $records) {
  $key = Get-RecordIdentity $record
  if ($existingKeys.Contains($key)) { continue }
  while ($usedIds.Contains($nextId) -or $nextId -eq 999999) { $nextId++ }
  $record.id = $nextId
  [void]$usedIds.Add($nextId)
  $nextId++
  [void]$mergedRecords.Add($record)
}
if ($existingRecords.Count -gt 0) { $records = @($mergedRecords.ToArray()) }

# The current round's explicit tracker classification must also apply when a
# record was already appended in an earlier publish of the same round.
foreach ($mergedRecord in $records) {
  if ([string]$mergedRecord.section -match 'Round 190' -and [string]$mergedRecord.opportunity -match 'Rotulista') {
    $mergedRecord.tier = 'C'
  }
}

$sorted = $records | Sort-Object @{Expression='score'; Descending=$true}, @{Expression='id'; Descending=$false}
$payload = [ordered]@{
  generatedAt = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss')
  tracker = [string]$tracker
  total = @($sorted).Count
}

$jsonMeta = $payload | ConvertTo-Json -Depth 5 -Compress
$jsonData = @($sorted) | ConvertTo-Json -Depth 12 -Compress
$content = "window.JOB_META = $jsonMeta;`nwindow.JOB_OPPORTUNITIES = $jsonData;`n"
$utf8 = [System.Text.UTF8Encoding]::new($false)
[System.IO.File]::WriteAllText($out, $content, $utf8)
Write-Output "Generated $(@($sorted).Count) records -> $out"
