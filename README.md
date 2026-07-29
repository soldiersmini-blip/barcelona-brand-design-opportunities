# 巴塞罗那华人设计机会看板

这是一个纯静态求职看板，用于浏览巴塞罗那及西班牙华人、中文与轻语言方向的品牌视觉、VI、数字品牌延展、平面设计、新媒体和相邻机会。

## 页面结构

- “重点投递”保留当前与前一轮仍值得先处理的机会，新增岗位不会直接把昨日精选挤到不可见区域。首页同时显示去重后的页面状态摘要，点击“页面显示可投 / 需先确认 / 已关闭”即可直接应用对应状态筛选。
- 首页只展示可以先用中文联系的重点机会，英语申请岗不会混在首页；每张重点卡都标明实际投递语言，并提供一键复制的中文询问。
- “完整机会库”默认使用“中文能投”画像，保留 A/B/C 中位于 Barcelona 或可在西班牙远程承接的中文联系机会；可切换“本轮变化”、近 30 天华人岗、A/B、可投/冷联系与排除/已过期。
- 个性化预设包括“中文能投（默认）、现在可联系、全部中文方向（含门槛）、英语岗位备选、品牌 VI（全语种）、偏正式 / 避开低薪实习”；“现在可联系”只保留中文可先联系、有具体入口、近期发布或明确开放、并避开低薪实习的 Barcelona / 西班牙远程机会；匹配分把中文可联系、基础西语、英文材料和西语硬门槛分开计算。
- “中文优先”不等同于“只看华人网站”：它还会识别明确需要中文、服务中国市场或由中国品牌在领英/官网发布的西班牙岗位，并以“中文相关”标记。该预设默认只看 Barcelona、Madrid 或可在西班牙承接的远程机会，同时排除纯监控入口、非设计内容方向和 D / X 级低价值或风险项。
- 手动筛选可独立控制“中文可直接联系 / 先中文确认 / 基础西语 / 英文材料 / 西语硬门槛”、近 7 / 30 / 90 天、明确发布日期、实习和低薪风险；“主要投递阻力”也可单独查看英文材料、西语、本地语言、低薪、实习协议、状态待核验或匿名客户 / 聚合入口。
- 每条机会可在浏览器本地标为“未标记 / 待投 / 已投递 / 跳过”，并按进度筛选；这些状态不会上传。排序可切换“智能推荐、最新发布、与你最匹配、投递可信度、原始权重”。
- “只看有具体投递入口”默认开启，但不会把“存在链接”误写成“岗位一定开放”；投递状态另分为“页面显示可投、需先确认、已关闭 / 历史”。
- 投递状态默认排除已关闭岗位，可单独查看“仅看页面显示可投”“需先确认 / 可冷联系”或历史档案。
- 点击“领英”或“公司官网 / 其他”会自动切换到完整档案，避免出现误导性的 0 条结果。
- 来源分为华人网 / 中文社区、领英、公司官网 / 其他。
- 华人渠道只把具体招聘详情、邮件和可直接联系入口显示为按钮；分类首页、搜索列表、旧版华信详情与研究索引会被自动隐藏。
- 卡片只把招聘原文明确标注的日期，或带新职位编号、可由详情页相对时间可靠推定的日期当作发布日期；本轮复核日期、抓取日期或单纯搜索列表重排不会伪装成新岗位。
- “智能推荐”同时考虑匹配度、发布日期、当前投递状态和有效入口；有明确发布日期且仍显示可投的近期岗位会排在日期未知的旧冷线索之前，日期无法确认时如实显示“发布时间未确认”。
- 状态识别只把完整单词 `closed` 当作关闭信号；`salary not disclosed`（薪资未公开）不会再导致岗位被误藏。当前状态恢复会显示为“状态更新”，并与旧记录合并。
- 普通卡片先显示中文结论、实际投递语言和中西文岗位对照；中文联系路径会附可复制的中文询问，英语备选岗位会附简短英文询问及完整中文意思，用来先确认工作语言和英语沟通强度；英文或西文原始记录默认折叠。
- 相同招聘链接会自动去重；对已核实的 LinkedIn 同岗重发还会使用稳定岗位身份合并新旧编号，保留最新申请入口并沿用浏览器本地投递进度。完整原始数据仍保留在 `data.js`。

## 文件

- `index.html`：页面结构
- `styles.css`：视觉与响应式样式
- `app.js`：筛选、去重、中文整理和交互
- `data.js`：从追踪表生成的机会数据
- `scripts/generate-data.ps1`：重新生成 `data.js`
- `scripts/validate-site.js`：检查数据、重点机会和页面元素是否完整

## 本地检查

直接双击 `index.html` 即可浏览。修改后可运行：

```powershell
node .\scripts\validate-site.js
node --check .\app.js
```

## GitHub Pages 发布

1. 创建一个 GitHub 仓库。
2. 把本目录中的全部文件上传到仓库根目录。
3. 在仓库 `Settings → Pages` 中选择：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/root`
4. 保存并等待 GitHub 生成 Pages 地址。

## 更新机会数据

更新主追踪目录中的 F:\Installer_Packages (EN Path Req.)\Codex Storage\Projects\Codex-Barcelona-brand-design-resources-20260728-200001\barcelona-brand-design-job-tracker.md 后，在本目录运行：

```powershell
.\scripts\generate-data.ps1 -TrackerPath "F:\Installer_Packages (EN Path Req.)\Codex Storage\Projects\Codex-Barcelona-brand-design-resources-20260728-200001\barcelona-brand-design-job-tracker.md"
node .\scripts\validate-site.js
```

确认通过后提交新的 `data.js`。


## 2026-07-29 Round 32

The authoritative tracker has been extended through Round 32. This pass refreshed official status evidence for existing roles and corrected Phiture / Midjourney region-status conflicts; the website remains the job-opportunity screening board, with portfolio/CV treated as auxiliary application material.


## 2026-07-29 Round 33

Refreshed the existing Trivelta Greenhouse opportunity and added the adjacent 10x Team AI design-trainer route. Location/status conflicts for Truv, Jobgether and Phiture remain excluded from current-open counts until an official detail page is available.


## 2026-07-29 Round 34

Added the Spain-indexed 10x Team Lead Visual Designer AI-training route and the Barcelona Remedy Edge paid internship. Refreshed Super, DDB and SplitMetrics; downgraded JetBrains/Kineto, VML, tem and Nash routes when official location or detail-page evidence did not support Spain current-open status. The status classifier keeps verify-first and closed/watchlist records out of direct-apply counts.

## 2026-07-29 Round 37

Regenerated from the authoritative tracker with LiveFlow Senior Motion Designer, Injective Digital Designer and Douro Labs closed/watchlist history. Adjusted location precedence so an explicit Europe-remote signal is not hidden by a London hub mention; verified London on-site roles remain excluded from the remote bucket.

## 2026-07-29 Round 38

Added Storyblok 2D Motion Designer – Europe and current VML Barcelona ART DIRECTOR, Senior Art Director and Product Designer routes. Added a lead-only InfoHuaxin Chinese-channel record, corrected Waiis to the newer Manresa listing, and added curated display rules so new roles expose accurate direction, location, language risk and next action.
## 2026-07-29 Round 39

Regenerated from the authoritative tracker after adding The Builder Studios official Visual Designer (Remote EU freelance, verify-first). Co-Star and Circle.so were rechecked but not duplicated. The curated current-opportunity block should preserve the main screening site's apply/verify-first behavior.
## 2026-07-29 Round 40

Added COROS Brand Creative Producer and HKU Europe Marketing & Branding Officer from current official/Casa Asia detail sources. Added the “品牌系统 / motion 核心” preset for focused brand-system, VI, digital-brand and motion screening.
## 2026-07-29 Round 41

Added PVcase and Storisell motion routes and retained Revolut Motion Designer as verify-first due to an official-page cache miss. Existing Lodgify/Kestra records were not duplicated.
## 2026-07-29 Round 42

Added Santander España Creative Tech & Digital Designer (Madrid, official Workday; CRM/email lifecycle, Figma systems, modular brand work and AI-assisted production). Refreshed Appspace, NEORIS and Dragons official routes without duplicates; verify-first and closed/watchlist records remain excluded from direct-apply counts.

## 2026-07-29 Round 43

Regenerated with four new records: Amenitiz brand-content adjacency, PriorityChef e-commerce/3D visual verify-first, Restate Europe-remote brand systems with Spain not listed, and Joko Barcelona/remote product-brand adjacency. Curated cards expose the real evidence and do not promote verify-first routes to clean direct-apply status.

## 2026-07-29 Round 44

Added Gameloft Studio Art Director as a verify-first Barcelona hybrid game/cross-platform visual-direction adjacency. Reopened eseOese without duplication; Chinese-community source checks produced no new verifiable pure visual-design opening. Regenerate data from the authoritative tracker before validation.

## 2026-07-29 Round 45

Added Designity Motion Designer (AI-Driven) and two Pocket Worlds / Highrise official Ashby remote routes as verify-first EMEA/international game and performance-creative adjacencies. Rechecked JetBrains/Kineto and CATORCE DCO as closed/status-conflict; refreshed existing CATORCE Studio, EuroLeague and Chinese-channel records without duplicates.

## 2026-07-29 Round 46
- Long-line scope: opportunity search, original-detail verification, screening and application decisions; this is not a portfolio project.
- New candidates: Meridian Graphic Designer and Motion Designer, Free Practice Senior Graphic Designer, and Social Scout PDP Designer.
- Existing Revolut Brand, Employer Branding and Motion pages were reopened; no duplicate records were added.


## 2026-07-29 Round 47
- Added ORBIDI Senior Graphic Designer, 1000heads Motion Designer, Fever Senior AI Creative Designer and Fever Creative Graduate after opening employer-origin details/ATS routes.
- Existing Scopely and Fever brand roles were status-refreshed only; Chinese channels yielded no new independently verifiable design role.
## 2026-07-29 Round 48
- Added JustMarkets Head of Design as a verify-first Europe remote brand identity and multidisciplinary design-leadership route after opening the official Greenhouse ATS.
- Rechecked existing Synthesia, Finary and 10x Team routes; kept Bounce as closed history; Chinese channels produced no new independently verifiable pure design role.
- Regenerate data from the authoritative tracker before validation.
## 2026-07-29 Round 49
- Added Paradox Creative Director – EdTech, The Flex / Base360 AI Video Creator and EverAI Senior AI Vertical Mini-Series Director as verify-first Spain/Europe-remote brand-content and AI-video routes.
- Rechecked existing Fail Fast, Hostinger, Ruby Labs, Kraken and Welltech routes; Chinese channels yielded no new independently verifiable pure design role.
- Regenerate data from the authoritative tracker before validation.
## 2026-07-29 Round 50
- Added Kings League / Kosmos Graphic Designer (Photoshop & Photo Montage Specialist) as a Barcelona official-detail verify-first route; the current board does not list it, so freshness is visible in the card's next action.
- Rechecked Adsmurai, EuroLeague, AQIPA, Draivi, Dragons and Chinese sources without duplicate rows. InfoHuaxin A644055418 remains the existing tracked lead.
- Regenerate data from the authoritative tracker before validation.
## 2026-07-29 Round 51
- Added COCUNAT Senior Video Ads Designer / Video Editor (Ads), ZOE Brand Performance Designer and Kota Brand Designer from official Personio/Ashby routes.
- Rechecked existing Barcelona and remote routes without duplicates; generic remote roles lacking Spain/EU eligibility evidence stayed out of the new-record queue.
- Chinese-circle sources produced no new independently verifiable pure design role. Regenerate data from the authoritative tracker before validation.
## 2026-07-29 Round 52
- Added Adsmurai Digital Art Director Middle and DualEntry Senior Motion Designer as new official Barcelona/remote requisitions with verify-first conditions.
- Upgraded THE/STUDIO's official remote detail without duplicating the existing route; rechecked Appspace, Canonical and Neo Group.
- Chinese-circle sources produced no new independently verifiable pure design role. Regenerate data from the authoritative tracker before validation.
## 2026-07-29 Round 53
- Added Siena AI Motion Designer & Video Producer as a verify-first Remote - Europe contractor route from the official Ashby requisition; Spain contract and payment eligibility still need confirmation.
- Rechecked CATORCE, EuroLeague and LiveFlow without duplicates; Appodeal’s old Motion Designer detail now redirects to the current board and is kept as closed/history.
- Chinese-circle sources produced no new independently verifiable pure design role. Regenerate data from the authoritative tracker before validation.
## 2026-07-29 Round 54
- Added Labhouse Marketing Video Editor from the official Ashby requisition as a verify-first Barcelona / Spain remote performance-video and AI-creative route; English + Spanish, hybrid rhythm and technical case are visible in the next-action note.
- Rechecked DuckDuckGo and BYD Europe without duplication; FREENOW’s old Barcelona Junior Motion Designer route now redirects to the current board and is kept closed/history.
- China-linked Europe sources produced no new independently verifiable pure design role. Regenerate data from the authoritative tracker before validation.
## 2026-07-29 Round 55
- No new untracked row was added after strict deduplication; refreshed Labhouse Marketing Video Editor and the existing Remedy Edge Spain Graphic Designer Trainee from official ATS details.
- Rechecked DDB Spain, Scopely, The Mind Company and BYD Europe without duplicates; VML The Cocktail’s old Art Director detail is kept closed/history after redirecting to the current board.
- Chinese-brand Europe sources produced no new independently verifiable pure visual-design role. Regenerate data from the authoritative tracker before validation.
## 2026-07-29 Round 56
- Added Deel Art Director | Web Design as a verify-first Spain-remote senior web-brand/design-system route from the official Ashby requisition.
- Rechecked Appspace, CATORCE/DCO, DDB Spain and BYD Europe without duplicates; VML/The Cocktail’s old Art Director route remains closed/history.
- Chinese-circle sources produced no new independently verifiable pure design role. Regenerate data from the authoritative tracker before validation.
## 2026-07-29 Round 57
- Added Zak Group Senior Brand Designer (Freelance), Together Senior Brand Designer (Remote UK & Europe) and HelloKindred Senior Graphic Designer (Remote-first, Spain eligibility unconfirmed) from official employer-origin pages.
- Together is the strongest new Europe-remote brand-system lead; Zak is a global freelance identity route; HelloKindred remains verify-first because the country of employment is not specified.
- Rechecked Hostinger, Solidgate, OFF+BRAND, Circle.so and EIT without duplicate rows; EIT remains closed/watchlist.
- Chinese-circle and China-linked Europe sources yielded no new independently verifiable pure design role. Regenerate data from the authoritative tracker before validation.
- 2026-07-29 Round 58

Official-source refresh only: FYST/Ashby and Appspace/Greenhouse were reopened without duplication; OLIVER and FREENOW stale board/detail conflicts were kept historical; Jobgether was already tracked; Primer, Help Scout, Agicap and Match Group were excluded by country or work pattern. Casa Asia, Xihua Catalunya, InfoHuaxin and China-linked Europe sources yielded no new independently verifiable pure visual-design opening. Strict deduplication added 0 rows.
- 2026-07-29 Round 59

Added Voodoo UI/UX Designer - Hole.io (Barcelona remote, game UI visual-system adjacency) and Ultralytics Video Editor (Madrid hybrid, AI/product video and motion adjacency) from official Ashby routes. Both are C-level verify-first cards and remain below commercial brand-system priorities. SimpleStudy, Taxfix and Binance design results were excluded by role or location; existing Spain/EU routes were not duplicated.

## 2026-07-29 Round 60

Official-source refresh only after strict deduplication: Glovo Senior Graphic Designer now carries the official Delivery Hero SmartRecruiters ATS alongside its existing LinkedIn application route. The Rank Group Graphic Designer was confirmed expired. CATORCE, SLAPS, OCTAEVO and HKU Europe were already tracked; Casa Asia's 27 July additions were non-design. Xihua Catalunya, InfoHuaxin and ES02 produced no new independently verifiable pure visual-design role. Regenerate data from the authoritative tracker before validation.

## 2026-07-29 Round 61

Added Ashby Staff Design Engineer - EU and SearchApi Frontend Engineer & UI Designer as C-level Spain/EU-remote digital-design adjacencies from official Ashby routes. Both require design-plus-production-engineering evidence and remain below pure brand/VI priorities. Bjak was excluded by its explicit anti-branding gate; existing Alan, Joko, Labhouse, Codeway and Chinese-circle routes were not duplicated. Regenerate data from the authoritative tracker before validation.

## 2026-07-29 Round 62

Added Kyndryl Vital Lead, Visual Designer from the official Madrid Workday route as a conditional digital/AI visual-design priority. Fluent English and Spanish, Madrid hybrid cadence and exact salary remain gates. HP, UNIQLO, Savills and Sanofi were refreshed without duplicate rows; Casa Asia and Chinese-circle sources produced no new pure visual-design role. Regenerate data from the authoritative tracker before validation.

