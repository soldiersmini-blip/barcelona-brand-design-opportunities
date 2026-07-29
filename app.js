const allData = Array.isArray(window.JOB_OPPORTUNITIES) ? window.JOB_OPPORTUNITIES : [];
for (const item of allData) {
  if (!item.searchText) {
    item.searchText = [item.source, item.opportunity, item.fit, item.location, item.status, item.contact, item.analysis]
      .filter(Boolean)
      .join(" ");
  }
}
const meta = window.JOB_META || {};

// The homepage is deliberately Chinese-first. English-first roles remain in the
// searchable database, but they must not crowd out opportunities the user can
// actually contact today.
// Homepage priority is location-first: Barcelona local roles come before
// Madrid/unclear remote or stale Chinese-channel leads. Language and contract
// gates remain explicit on each card instead of being hidden by the homepage.
const PRIORITY_IDS = [778, 559, 871, 884, 1020];

const IDENTITY_ALIASES = Object.freeze({
  95: "qustodio-digital-designer-marketing",
  20: "infiled-emea-graphic-designer",
  23: "top-doctors-marketing-designer",
  184: "ogilvy-liquid-designer-video",
  186: "dm-toys-packaging",
  180: "dragons-senior-graphic-designer-pharma",
  240: "dragons-art-director-wellness-lifestyle",
  320: "intracon-hp-content",
  337: "dragons-mid-graphic-designer-food-beverage",
  35: "steneg-industrial-brand-packaging",
  108: "infiled-emea-graphic-designer",
  167: "top-doctors-marketing-designer",
  169: "wall-street-english-design-lead",
  430: "top-doctors-marketing-designer",
  559: "infiled-emea-graphic-designer",
  852: "steneg-industrial-brand-packaging",
  853: "eladiet-brand-communication-designer",
  889: "dragons-mid-graphic-designer-food-beverage",
  890: "dragons-art-director-wellness-lifestyle",
  891: "dragons-senior-graphic-designer-pharma",
  892: "qustodio-digital-designer-marketing",
  894: "ogilvy-liquid-designer-video",
  897: "dm-toys-packaging",
  898: "intracon-hp-content",
  904: "wall-street-english-design-lead",
  905: "steneg-industrial-brand-packaging",
  906: "infiled-emea-graphic-designer",
  907: "eladiet-brand-communication-designer",
  908: "top-doctors-marketing-designer",
  882: "jobgether-marketing-visual-designer",
  912: "jobgether-marketing-visual-designer",
  111: "alohas-asia-marketing-pr-manager",
  497: "alohas-asia-marketing-pr-manager",
  913: "alohas-asia-marketing-pr-manager",
  77: "trivelta-graphic-designer",
  399: "trivelta-graphic-designer",
  914: "trivelta-graphic-designer",
  469: "onekey-brand-visual-designer",
  917: "onekey-brand-visual-designer",
  126: "huqiao-bilingual-graphic-artist",
  468: "huqiao-bilingual-graphic-artist",
  504: "huqiao-bilingual-graphic-artist",
  918: "huqiao-bilingual-graphic-artist",
});

const CURATED = {
  35: {
    direction: "brand",
    company: "Steneg / 未公开工业客户",
    locationKey: "barcelona",
    locationLabel: "Granollers / Barcelona 周边",
    statusKey: "live",
    titleZh: "平面设计师（品牌治理、包装与流程）",
    titleEs: "Diseñador/a gráfico/a — marca, packaging y procesos",
    reason: "正式全职、职业英语、未列西语要求，职责比一般物料岗更完整：品牌资产、包装、展会、目录、印刷、影像支持、素材库、版本控制和设计流程数字化。",
    next: "用英文简历和作品集申请；突出 B2B/工业品牌系统、包装、展会延展、印前与文件治理。由于客户匿名，先问雇主全称、地址、薪资、合同和混合办公，再提供敏感资料。",
    language: "高水平职业英语必需；公开说明未列西班牙语要求",
  },
  559: {
    direction: "brand",
    company: "INFiLED / 视爵光旭",
    chineseFit: true,
    statusKey: "live",
    titleZh: "平面设计师（品牌与市场视觉）",
    titleEs: "Diseñador/a gráfico/a — marca y marketing",
    reason: "目前最匹配的巴塞罗那正式设计岗之一。中国深圳品牌、巴塞办公室，工作覆盖品牌一致性、数字与印刷物料、网站、展会和多市场视觉延展。",
    next: "用英文简历和品牌作品集投领英；再给欧洲区招聘人员补一条消息，主动说明中文沟通与中国总部协作能力。",
    language: "英语可投；公开描述未显示西语硬门槛",
    applicationMode: "english",
  },
  759: {
    direction: "brand",
    company: "Insbrand",
    statusKey: "verify",
    titleZh: "兼职品牌设计师",
    titleEs: "Diseñador/a de marca a tiempo parcial",
    reason: "方向最贴近你的目标：Logo、VI、网站、产品视觉与中国企业国际品牌服务；公司同时在北京和巴塞罗那设点，中文沟通价值很高。",
    next: "先用中文邮件或 WhatsApp 确认兼职/自由职业合作是否仍开放，再发送 3–5 个最强的 VI 与数字品牌延展案例。",
    language: "中文环境友好；先确认当前语言要求",
    applicationMode: "chinese",
  },
  758: {
    direction: "social",
    company: "BOHEME 咖啡面包连锁",
    statusKey: "verify",
    titleZh: "宣传策划 / 新媒体运营",
    titleEs: "Planificación promocional y redes sociales",
    reason: "不是纯 VI，但非常接近本地华人品牌的数字延展：摄影、短视频、品牌宣传片、小红书、抖音和 Instagram 都在职责中。",
    next: "直接联系 Jennifer，附社媒视觉、短视频封面、活动海报和剪辑样片；第一句话说明中文熟练、西语正在学习。",
    language: "中文渠道；原帖未显示高西语门槛",
    applicationMode: "chinese",
  },
  761: {
    direction: "ecommerce",
    company: "Oasis Roots",
    titleZh: "独立站与社交媒体运营",
    titleEs: "Operaciones de web propia y redes sociales",
    reason: "中文内容、电商视觉和社媒品牌延展结合度高，涉及 Shopify、WordPress、产品页、小红书欧洲区、图片视频内容和 KOL/KOC。",
    next: "先邮件确认岗位仍开放，再发送电商 Banner、产品故事页、社媒模板和短视频封面案例。",
    language: "中文文案；西语 B1/B2 或英语可作为工作语言",
  },
  704: {
    direction: "ecommerce",
    company: "Yioucloud 易欧云",
    titleZh: "设计 / 网站 / 电商 / 短视频实习",
    titleEs: "Prácticas de diseño, web, e-commerce y vídeo",
    reason: "覆盖美工、海报、短视频、网站、电商和品牌推广，中文沟通友好；适合用实习切入巴塞罗那本地数字品牌工作。",
    next: "只有能提供学校实习协议时优先投；先发中文邮件确认 2026 年是否仍接收实习生。",
    language: "中文友好；需学校实习协议",
    applicationMode: "chinese",
  },
  702: {
    direction: "social",
    company: "SALSAWOK / 华夏调味品",
    titleZh: "短视频内容制作 / 新媒体",
    titleEs: "Creación de vídeo corto y nuevos medios",
    reason: "华人食品品牌的内容视觉岗位，适合从短视频、社媒运营与品牌内容切入；福利信息相对完整，且写明长期招聘。",
    next: "通过邮件或微信询问当前空缺，作品集突出食品拍摄、剪辑、社媒栏目和品牌内容系列。",
    language: "中文环境；需确认合法工作身份与西语要求",
    applicationMode: "chineseCheck",
  },
  309: {
    direction: "social",
    company: "Absolute Internship",
    statusKey: "live",
    titleZh: "创意营销实习（数字品牌视觉 / 短视频）",
    titleEs: "Prácticas de marketing creativo — visual y vídeo",
    reason: "巴塞罗那当前可直接提交的数字品牌岗位：负责 LinkedIn、Instagram、TikTok、YouTube 的视觉资产、封面与短视频，官方申请表已实测可用。",
    next: "用英文简历 + 作品集链接投官方表单；作品集首页先放社媒视觉系统、竖屏短视频和跨平台品牌延展，不要只放 Logo。",
    language: "未写西语硬门槛；国际团队，建议用英文投递",
  },
  807: {
    direction: "social",
    company: "TERTIO（主体待核实）",
    titleZh: "内容创作 / 平面设计专员",
    titleEs: "Especialista de contenido y diseño gráfico",
    reason: "华人渠道里少见的完整视觉内容岗位：产品拍摄、修图、Banner、社媒素材、短视频和品牌视觉统一都在职责中，且原帖未写西语门槛。",
    next: "先中文电话或微信确认仍在招、公司全称和日常工作语言；确认后再发电商视觉、社媒系列和短视频作品集，不先发送证件。",
    language: "中文可先沟通；原帖未写西语要求；需工作居留",
    applicationMode: "chineseCheck",
  },
  812: {
    direction: "social",
    company: "FunPlus",
    titleZh: "社区内容运营实习",
    titleEs: "Prácticas de gestión de comunidad y contenido",
    reason: "巴塞罗那官方当前岗位，中文明确是加分项，申请表可提交。它不是纯设计，但能进入中国背景游戏公司的创意、社区内容和创作者协作链路。",
    next: "用英文投递，突出中文、英文、游戏/科技内容、社媒视觉和短视频案例；只有能满足在读或临近毕业条件时优先。",
    language: "英语必需；中文加分；西语不是硬门槛",
    applicationMode: "english",
  },
  813: {
    direction: "social",
    company: "中文教育 / 华人社群项目（主体待核实）",
    statusKey: "verify",
    titleZh: "兼职新媒体助理（远程 / 灵活）",
    titleEs: "Asistente de redes sociales a tiempo parcial",
    reason: "低语言门槛和数字品牌内容匹配度很高：每月约 4 篇公众号与 8–12 条短视频，包含排版、封面、字幕、发布文案及小红书、TikTok、Instagram；西语仅为加分项。",
    next: "先用中文电话确认机构全称、薪资、合同或项目制、是否仍开放和试做是否有薪；确认后发公众号排版、社媒封面体系与竖屏短视频案例。",
    language: "中文可沟通；西语仅加分；不坐班、时间灵活",
    applicationMode: "chinese",
  },
  778: {
    direction: "production",
    company: "巴塞罗那华人广告公司",
    statusKey: "live",
    titleZh: "全职平面设计师",
    titleEs: "Diseñador/a gráfico/a a jornada completa",
    reason: "7 月 25 日在华人通 ES02 明确重发，西华论坛同期顶帖，欧浪/华信也于 7 月 22 日重发，是目前状态最明确的巴塞华人设计岗。工作偏招牌、菜单、传单、名片和印刷落地；不是高端 VI，但进入门槛现实。",
    next: "今天先加微信 A644055418，确认公司全称、地址、合同、全保、工时和试用期；确认后再发送 Illustrator、菜单、招牌、海报与印刷落地作品。",
    language: "需要基础西语与工作居留",
    applicationMode: "basicSpanish",
  },
  787: {
    direction: "social",
    company: "EXTRATOOLS",
    titleZh: "电商社媒运营 / 短视频剪辑",
    titleEs: "Operaciones de redes y edición de vídeo",
    reason: "7 月 22 日发布的华人数字品牌岗，职责从选题、短视频剪辑一直到 TikTok / Instagram 发布和数据复盘；原帖没有写西语硬门槛。",
    next: "邮件附 3–5 个竖屏短视频、封面或账号案例；先问是否接受巴塞远程、混合或项目合作，并确认薪资区间和工作居留要求。",
    language: "中文渠道；原帖未写西语要求",
    applicationMode: "chinese",
  },
  788: {
    direction: "social",
    company: "巨一公司 / Getafe",
    titleZh: "产品与品牌视频拍摄 / 剪辑",
    titleEs: "Grabación y edición de vídeo de marca",
    reason: "7 月 22 日发布，明确制作产品、品牌、营销与客户案例视频，覆盖小红书、抖音、视频号、TikTok、YouTube，并与品牌设计团队协作。",
    next: "投递视频作品集或 Reel，邮件标题按原帖写“名字+应聘视频剪辑”；同时确认日常语言、驻场与出差频率。",
    language: "中文渠道；原帖写西语良好",
  },
  470: {
    direction: "digital",
    company: "Go Getop / Bygetop",
    titleZh: "平面设计 / 中国市场数字营销",
    titleEs: "Diseño gráfico y marketing digital para China",
    reason: "远程、中文市场和数字品牌延展匹配度高，涵盖社媒、广告、邮件、网站、展会图形及小红书、微信、微博等平台。",
    next: "投递前先确认是带薪实习、兼职雇佣还是项目制自由职业，再决定投入多少时间准备申请。",
    language: "普通话与英语；远程",
  },
  1019: {
    direction: "brand",
    company: "Kings League / Kosmos",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona, Spain",
    titleZh: "平面设计师（Photoshop 合成 / 体育娱乐视觉）",
    titleEs: "Graphic Designer — Photoshop y fotomontaje",
    reason: "官方 Teamtailor 详情页仍显示 Apply，职责覆盖体育娱乐社媒与数字 campaign、Photo Montage、Figma、Illustrator、品牌一致性和大型物料；但当前 Kings League 招聘板没有这条 requisition，必须先确认新鲜度。",
    next: "先打开官方申请表确认是否仍收件，再确认合同、薪资、办公节奏、语言和赛事周末安排；若有效，用英文材料突出高级 Photoshop 合成/修图、社媒 campaign、海报/大型物料和品牌资产治理。",
    language: "官方页未明确语言；先用英文并确认西语/赛事沟通要求",
    applicationMode: "english",
    changeType: "round50",
  },
  1020: {
    direction: "motion",
    company: "COCUNAT",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Sant Gervasi",
    titleZh: "Senior Video Ads Designer（品牌 × Performance 视频）",
    titleEs: "Senior Video Ads Designer / Video Editor (Ads)",
    reason: "官方 Personio 当前 requisition 2210442 显示 Apply、Barcelona、全职永久；职责把品牌规范、AI 视频、Premiere/After Effects、UGC、Meta/TikTok/YouTube 广告和多版本性能迭代连在一起，但英文/西语标题不同，需先确认工作语言与办公室条件。",
    next: "先确认西语、办公室出勤、薪资和测试；投递时用 Reel 展示前三秒 hook、UGC/产品片、多平台版本、字幕/声音、AI 辅助与品牌一致性，不要只发静态 VI。",
    language: "官方英文页未明确西语；先确认实际工作语言",
    applicationMode: "english",
    changeType: "round51",
  },
  1021: {
    direction: "brand",
    company: "ZOE",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "UK & EU remote",
    titleZh: "品牌性能设计师（Brand Performance）",
    titleEs: "Brand Performance Designer",
    reason: "官方 Ashby 明确 UK & EU、全职、远程、Apply；职责覆盖 Meta/TikTok/YouTube/Pinterest、素材本地化、Figma/Adobe 模板系统、品牌 DNA 和约 10% motion。Spain payroll、时区和高产 performance 要求仍需确认。",
    next: "先问 Spain 是否在实际可雇国家、合同/薪资、产品寄送与 performance test；材料放静态广告系统、native social 变体、hook/迭代、模板和数据反馈。",
    language: "英语远程；先确认团队时区和西班牙雇佣条件",
    applicationMode: "english",
    changeType: "round51",
  },
  1022: {
    direction: "brand",
    company: "Kota",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote / Europe eligibility to confirm",
    titleZh: "品牌设计师（品牌语言与数字触点）",
    titleEs: "Brand Designer",
    reason: "官方 Ashby 显示 Remote、全职、Apply；岗位是 Brand team 首个全职设计师，覆盖 visual identity、web、launch、campaign、social、sales、guidelines、templates、motion 与 product-brand alignment。可雇国家未公开。",
    next: "先询问 Spain/EU 合同实体、可雇国家、时区、薪资和 offsite；若可投，用 identity rationale、web/landing、campaign rollout、模板/guidelines、motion 和 shipped page 证明系统落地能力。",
    language: "英语远程；国家与时区需先确认",
    applicationMode: "english",
    changeType: "round51",
  },

  1023: {
    direction: "brand",
    company: "Adsmurai",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid",
    titleZh: "数字艺术指导（Middle）",
    titleEs: "Digital Art Director Middle",
    reason: "官方 Teamtailor 详情页显示 Barcelona、Híbrido、indefinite 和 ENVÍA TU CV；职责覆盖 360º digital campaigns、Key Visual、look & feel、paid/organic assets、AI 与跨渠道视觉质量，但 Spanish + English 和页面相关职位列表冲突需先确认。",
    next: "先确认职位仍收件、语言、薪资和每周两天远程；若有效，用西语/英语双语材料突出 campaign concept、KV、视觉叙事、social ads、AI、copy/design collaboration 和客户提案。",
    language: "Spanish + English；先确认流利程度",
    applicationMode: "spanish",
    changeType: "round52",
  },
  1024: {
    direction: "motion",
    company: "DualEntry",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote EMEA / EU / LATAM / UK",
    titleZh: "高级动效设计师（品牌 / 产品 / Marketing）",
    titleEs: "Senior Motion Designer (Remote)",
    reason: "官方 Ashby 新 requisition 显示 Remote (EMEA, NAMER, EU, LATAM, UK)、全职、Apply 和 USD45k–75k + equity；覆盖 marketing film、social ads、product demo、UI motion 和 motion style system，EST overlap 与 7+ 年是主要门槛。",
    next: "先确认 Spain 合同、实际 EST 重叠、薪资适用区间、股权和试做；用 motion-first Reel 展示 brand motion system、logo/title/transition、marketing film、UI/product demo、Lottie/Rive 和 AI workflow。",
    language: "英语；需覆盖 New York HQ 的 EST 重叠",
    applicationMode: "english",
    changeType: "round52",
  },
  1025: {
    direction: "motion",
    company: "Siena AI",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote - Europe / contractor",
    titleZh: "动效设计师与视频制作人（品牌 / 产品发布）",
    titleEs: "Motion Designer & Video Producer (Contractor)",
    reason: "官方 Ashby 索引显示 Remote - Europe、Contract 和 Apply；职责覆盖产品发布视频、brand motion、UI animation、storyboard、sound/music direction 与 AI-native workflow，但直接 ATS 页面本轮只返回 JavaScript 应用壳。",
    next: "先确认 Spain resident 是否可签 contractor、报价/付款币种、税务与时区；若可投，用英文 motion-first Reel 展示 launch film、品牌动效系统、UI motion、storyboard 到 final export 和 AI workflow。",
    language: "英语；Spain 合同与付款资格需先确认",
    applicationMode: "english",
    changeType: "round53",
  },
  1026: {
    direction: "motion",
    company: "Labhouse",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Spain remote; hybrid rhythm",
    titleZh: "营销视频剪辑师（性能广告 / AI 视频）",
    titleEs: "Marketing Video Editor",
    reason: "官方 Ashby 显示 Barcelona、Spain (Remote)、Full-time、Apply；职责覆盖 TikTok/Instagram/Facebook app ads、hooks、retention、motion graphics、Premiere/After Effects 和 AI creative tools，页面同时写明西语与英语以及 Barcelona 每周至少两天到 Tech City 的混合节奏。",
    next: "先确认西语工作强度、每周到岗、薪资和 technical case；若可投，用 performance-video Reel 展示 15–30 秒广告、brand consistency、motion graphics、AI-assisted production、A/B variants 和结果数据，不要只发静态品牌页。",
    language: "英语 + 西语；Barcelona hybrid 与 technical case 需确认",
    applicationMode: "spanish",
    changeType: "round54",
  },
  1027: {
    direction: "brand",
    company: "Deel",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote / Spain listed; senior web-brand scope",
    titleZh: "艺术指导（网站设计 / 品牌数字系统）",
    titleEs: "Art Director / Web Design",
    reason: "官方 Ashby 索引明确 Remote、Spain、Full-time、Apply；职责连接品牌表达与网站 performance，覆盖网站创意方向、Website Design System、responsive UX/UI、CRO/SEO、测试和可扩展 web operations，但 9+ 年与高级 portfolio 是硬门槛。",
    next: "先确认 Spain 雇佣实体、Barcelona resident 资格、级别/薪资、团队时区和 web portfolio 期望；若匹配，用英文高级材料展示从 VI/brand expression 到网站落地、tokens/components、landing/CRO、A/B 迭代、可访问性和性能，不要只展示 logo。",
    language: "英语国际远程；Spain payroll 与 9+ 年需确认",
    applicationMode: "english",
    changeType: "round56",
  },};

Object.assign(CURATED, {
  832: {
    direction: "digital",
    company: "Mind the Bridge",
    statusKey: "live",
    titleZh: "初级视觉设计师（营销 / 社交媒体实习）",
    titleEs: "Diseñador/a visual junior (prácticas de marketing y redes)",
    reason: "方向非常贴近品牌视觉与数字延展：企业视觉、演示文稿、数字活动物料、信息图和跨平台社交资产都在职责内；流利英语是必需项，西班牙语或意大利语仅为加分项。",
    next: "用英文简历和作品集直接申请；首页先放完整品牌系统、数字活动延展、社交模板和信息图，并在求职信中询问实习协议、薪资、合同期限与居留要求。",
    language: "英语必需；西班牙语或意大利语仅为加分项",
  },
  833: {
    direction: "brand",
    company: "Proexpo",
    titleZh: "社交媒体与品牌内容负责人",
    titleEs: "Responsable de redes sociales y contenido de marca",
    reason: "职责从社交内容日历、Reels 和案例延伸到官网、宣传册、演示文稿、艺术指导与 AI 视觉，和数字品牌延展高度吻合；但优秀西班牙语与英语文案是明确硬门槛。",
    next: "作为挑战岗投递。作品集突出高端 B2B 品牌、社交栏目、案例叙事、宣传册和演示文稿；申请时如实说明西语水平，并说明文案校对方案。",
    language: "英语与西班牙语优秀文案能力均为硬要求",
  },
  834: {
    direction: "social",
    company: "SNUZIA SL / Twine",
    titleZh: "短视频内容创作者 / 视频剪辑（自由职业）",
    titleEs: "Creador/a de contenido y editor/a de vídeo freelance",
    reason: "Barcelona 现场拍摄并剪辑 Instagram Reels、TikTok 与 Meta 广告，正文为英文且未写西语要求；它更偏社交短视频，不是 VI，且属于自由职业和尼古丁产品行业。",
    next: "优先从 Twine 投递；若免费账号受限，先用公司官网邮箱询问是否接受直接作品集。沟通前确认预算、交付量、设备、素材版权、付款节点、合同主体和现场地址。",
    language: "英文职位说明；未写西班牙语要求",
  },
  835: {
    direction: "brand",
    company: "Revolut",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "品牌平面设计师（品牌系统 / 动态视觉）",
    titleEs: "Diseñador/a gráfico/a de marca — sistemas y motion",
    reason: "纯品牌方向高度匹配：负责品牌文档、设计系统、指南、视觉资产和动态设计；官方职位仍可申请，并明确接受西班牙远程，公开描述没有西语硬门槛。",
    next: "只从 Revolut 官方职位页投递。英文作品集首页放完整 VI、品牌指南、数字渠道延展和 motion / storyboard 案例，并确认西班牙合同主体与薪资。",
    language: "英文岗位；未写西班牙语要求",
  },
  836: {
    direction: "digital",
    company: "Adsmurai",
    titleZh: "数字平面设计师（广告活动 / 社交媒体）",
    titleEs: "Diseñador/a gráfico/a digital — campañas y redes",
    reason: "工作覆盖品牌规范适配、社交广告、TikTok 视频、演示文稿和宣传册，数字品牌延展很完整；但客户沟通需要流利西班牙语和英语。",
    next: "作为挑战岗投递。作品集突出整套数字活动、多尺寸适配、社交广告和短视频，不要只放 Logo；无法进行西语会议时先降低优先级。",
    language: "流利西班牙语与英语为硬要求",
  },
  837: {
    direction: "social",
    company: "All Yours",
    titleZh: "社交媒体视频内容创作者",
    titleEs: "Creador/a de contenido de vídeo para redes",
    reason: "香水和 clean beauty 品牌的完整视频内容岗：概念、拍摄、CapCut 剪辑、账号增长、达人与 UGC 都在职责中；页面仍可打开且标明年薪。",
    next: "只有能用西语写文案、管理评论并出镜时再投；作品集聚焦美容产品视频、Instagram / TikTok 系列和品牌语气一致性。",
    language: "Castellano 必需；英语 C2",
  },
  838: {
    direction: "brand",
    company: "eMascaró",
    locationKey: "remote",
    locationLabel: "远程 / Barcelona 团队",
    titleZh: "资深品牌设计师（远程自由职业）",
    titleEs: "Diseñador/a senior de marca freelance",
    reason: "职责几乎就是完整 VI 与数字延展：Logo、字体、色彩、网格、图形、品牌手册、数字系统和 motion；但要求 7 年以上经验，且官网当前清单未单列该职位。",
    next: "先通过官方人才表单确认岗位当前是否开放和项目工作语言；获得肯定答复后再发高端品牌、完整指南与数字系统作品集。",
    language: "未公开语言要求；需先确认西语使用场景",
  },
  839: {
    direction: "ecommerce",
    company: "Masderm / KERVLAN LAB SL",
    locationKey: "remote",
    locationLabel: "100% 远程",
    titleZh: "自由职业平面设计师（电商 / 社媒 / 包装）",
    titleEs: "Diseñador/a gráfico/a freelance — e-commerce, redes y packaging",
    reason: "方向很贴美容电商、Amazon、CRM 邮件、社媒和包装，但原 Domestika 职位已跳回列表，不能按当前空缺展示。",
    next: "仅作冷询问：从品牌官方联系页礼貌询问未来是否还需要长期自由职业设计师；不要把客服邮箱写成招聘邮箱，也不要声称职位仍开放。",
    language: "原职位未写语言要求；当前已下线",
  },
});

Object.assign(CURATED, {
  840: {
    direction: "brand",
    company: "Randstad Professional",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "西班牙 100% 远程",
    titleZh: "初级平面设计师（医药品牌）",
    titleEs: "Diseñador/a gráfico/a junior — sector farmacéutico",
    reason: "很适合当前语言条件的初级入口：西班牙全远程、只明确要求职业英语，工作围绕医药企业的营销与传播视觉；1–2 年经验即可，年薪 €30,000–35,000。",
    next: "从 Randstad 官方页提交英文简历和作品集；首页先放品牌规范执行、跨渠道营销物料、演示文稿与复杂信息可视化，并确认西班牙合同、工作许可和临时合同主体。",
    language: "职业英语必需；公开职位未列西班牙语要求",
  },
  841: {
    direction: "digital",
    company: "European Blockchain Convention",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "远程自由职业 / Barcelona 雇主",
    titleZh: "自由职业平面设计师（数字品牌与活动视觉）",
    titleEs: "Diseñador/a gráfico/a freelance — marca digital y eventos",
    reason: "方向和投递都很直接：品牌概念、style guide、数字/印刷/社媒与线上 campaign；英文职位说明未列西语要求，并公开了收作品集的负责人邮箱。",
    next: "今天发送一封短英文邮件到 daniel@eblockchainconvention.com，正文只放 3 个最相关案例链接；先问预算、工时、合同、付款周期与是否需要偶尔到场，不做无薪试稿。",
    language: "英文可投；公开说明未列西班牙语要求",
  },
  842: {
    direction: "brand",
    company: "Bassols 1790",
    titleZh: "初级平面设计与传播支持",
    titleEs: "Diseñador/a gráfico/a junior y apoyo de comunicación",
    reason: "品牌、包装、shooting、社媒、网站与企业物料都在职责内，并有公开 HR 邮箱和 €18,000–20,000 薪资；但文案工作和申请问题均为西语，语言风险真实存在。",
    next: "只作为挑战投递：用工具辅助准备西语邮件并如实说明水平，附品牌/包装/社媒案例，按原帖回答匹配原因、最自豪项目和薪资预期；先确认 prácticas 合同资格与团队工作语言。",
    language: "未列等级，但西语文案与沟通是实际工作门槛",
  },
  843: {
    direction: "digital",
    company: "FIRMAMENT Sports",
    titleZh: "初级平面设计师（体育品牌与动态图形）",
    titleEs: "Diseñador/a gráfico/a junior — deporte y motion",
    reason: "内容很贴：品牌识别、campaign、web/landing、社媒视频、活动与俱乐部视觉；但目前只有第三方可投页，且 Castellano 与 English 均为明确必需。",
    next: "先从聚合页确认原始申请入口和发布时间；若只能使用官网通用邮箱，只询问岗位是否仍开放。没有可用西语沟通和 motion/video reel 时，不把它排在英语岗之前。",
    language: "西班牙语与英语均为硬要求",
  },
});

Object.assign(CURATED, {
  160: {
    direction: "brand",
    company: "Stanley Black & Decker",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "品牌工作室平面设计师",
    titleEs: "Diseñador/a gráfico/a — Brand Studio",
    reason: "这一岗位此前被低估：它是西班牙远程全职合同，负责品牌规范、模板、网站、email、社媒和展示广告；明确要求英文简历、英文作品集与流利英语，公开说明未列西语要求。",
    next: "从 LinkedIn 当前职位页提交英文简历和作品集；首页放完整 VI、品牌规范、跨渠道模板、web/email/social 延展和基础 motion，并确认西班牙合同主体、薪资与远程办公范围。",
    language: "流利英语必需；公开说明未列西班牙语要求",
  },
  845: {
    direction: "brand",
    company: "Fox Racing / Revelyst",
    statusKey: "live",
    titleZh: "平面设计实习生（品牌、数字与活动视觉）",
    titleEs: "Prácticas de diseño gráfico — marca, digital y eventos",
    reason: "很适合英语优先申请：社媒、email、网站 banner、活动、印刷、产品修图和品牌一致性都在职责内；高水平英语是明确要求，未列西语门槛，并公开了作品集邮箱。",
    next: "先点 LinkedIn 申请，再发一封很短的英文邮件到 adelinamanea@foxracing.com；作品集首页放品牌延展、社媒系列、web/email、活动视觉和产品修图，并询问薪资、实习协议与到岗频率。",
    language: "高水平英语必需；公开说明未列西班牙语要求",
  },
  846: {
    direction: "digital",
    company: "MS Media",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "西班牙全远程 / Barcelona 分支",
    titleZh: "赛车运动平面设计实习",
    titleEs: "Prácticas de diseño gráfico para motorsport",
    reason: "带薪、可全远程且明确要求用英语申请。工作包括赛事社媒、活动或车手视觉识别、赞助提案和数字/印刷资产，和数字品牌延展高度吻合。",
    next: "用英文完成申请和短问卷，作品集优先展示高节奏社媒、视觉识别、活动视觉、赞助 deck 与少量 motion；先确认薪资、实习协议、合同主体和赛事出差费用。",
    language: "英语申请；公开说明未列西班牙语要求",
  },
  847: {
    direction: "digital",
    company: "Revelyst",
    titleZh: "网页与平面设计实习（偏 UX/UI）",
    titleEs: "Prácticas de diseño web y gráfico — enfoque UX/UI",
    reason: "这是清晰的数字品牌延展入口：IAB banner、newsletter、首页、landing page、PDP、品牌规范和移动端体验都在职责内，申请人数相对较少。",
    next: "用英文简历和作品集投递；突出电商页面、banner/newsletter 系列、移动适配、设计系统和 Figma 到 HTML/CSS 的案例，并询问工作语言、薪资和混合办公频率。",
    language: "英文职位说明；未公开具体西语等级",
  },
  848: {
    direction: "ecommerce",
    company: "Atomite",
    titleZh: "平面设计实习生（健康消费品牌）",
    titleEs: "Prácticas de diseño gráfico — marcas de salud",
    reason: "内容非常贴近品牌系统与日常视觉生产：社媒、campaign、POS、基础包装、产品修图、AI 图像、品牌规范和 Canva 模板；但职位全文与面试流程均为西语，语言风险真实存在。",
    next: "只作为挑战投递，并如实说明当前西语水平；作品集放多品牌系统、社媒模板、包装/POS、产品修图和 AI 辅助流程，先确认能否用英语工作、实习协议和测试是否付费。",
    language: "未列等级，但实际工作语境明显偏西班牙语",
  },
  849: {
    direction: "social",
    company: "GoodNews",
    titleZh: "设计与创意内容实习",
    titleEs: "Prácticas de diseño y contenido creativo",
    reason: "海报、社媒、banner、拍摄、跨渠道适配和品牌一致性都很贴合，而且是带薪兼职实习；但聚合页显示近期发布时，GoodNews 官方职位板并没有该职位。",
    next: "先查官方职位板或通过官方人才库确认是否重新开放；得到肯定答复后再提交简历和作品集，不要只因聚合页写“2 天前”就在第三方页面上传敏感资料。",
    language: "公开文案未列语言要求；职位状态需先核实",
  },
});

Object.assign(CURATED, {
  859: {
    direction: "digital",
    company: "Stripe / Brand Studio",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona 混合办公 / 西班牙远程",
    titleZh: "品牌动态设计师（Identity 动态系统）",
    titleEs: "Diseñador/a de motion para identidad de marca",
    reason: "本轮最强的新机会：不是普通视频剪辑，而是为 Stripe 品牌建立 motion principles、timing tokens、动画规范和可复用组件；官方同时列出 Barcelona 与 Spain remote，公开年薪 €74,800–112,200，正文未列西语要求。",
    next: "用英文从 Stripe 官方页申请；作品集首页放一套完整动态 VI，展示系统原则、组件、品牌性格、产品内动画和 campaign 延展。先确认 Barcelona 办公比例、Spain remote 合同、薪资适用区间与工作许可。",
    language: "英文国际团队；官方正文未列西班牙语要求",
  },
  850: {
    direction: "digital",
    company: "DashBook",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 偶尔远程",
    statusKey: "live",
    titleZh: "初级艺术指导（出版与社媒视觉）",
    titleEs: "Director/a de arte junior — editorial y redes",
    reason: "少见的 Barcelona 初级永久合同创意岗，公开起薪 €24,000+；封面、版式、社媒 campaign、TikTok / Instagram 和竖屏内容都在职责内。标题中的 SP/UK/FR 是否代表语言门槛仍需确认。",
    next: "用英文简历、求职信和作品集直接申请；首页放编辑设计、封面、社媒 campaign 与竖屏短视频，并在求职信第一段询问 SP/UK/FR 是任选市场还是要求三语。",
    language: "正文未列语言等级；SP/UK/FR 的含义需先确认",
  },
  851: {
    direction: "digital",
    company: "Centro (Ortnec)",
    locationKey: "remote",
    locationLabel: "远程 / Barcelona 发布地点",
    statusKey: "live",
    titleZh: "平面设计师—AI 视频生成",
    titleEs: "Diseñador/a gráfico/a — generación de vídeo con IA",
    reason: "全职远程、entry level、流利英语，方向覆盖品牌渠道、视觉系统、Figma 模板、AI 视频、短视频、moodboard 与 storyboard；未列西语要求。",
    next: "用英文材料申请，作品集同时展示传统品牌视觉、Figma 系统和 AI 视频精修流程；先确认是否接受 Spain resident、合同或 contractor 主体、薪资、时区与税务。",
    language: "流利英语必需；公开说明未列西班牙语要求",
  },
});

Object.assign(CURATED, {
  863: {
    direction: "digital",
    company: "Grup Ametller Origen",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Olèrdola / 每周 2 天远程",
    titleZh: "数字平面设计专员（品牌数字延展）",
    titleEs: "Técnico/a de diseño gráfico digital",
    reason: "职责与数字品牌延展高度贴合：PAID campaign、社媒、newsletter、短视频、motion graphics 和跨数字触点的品牌一致性；但全文为加泰语，且需自驾到 Olèrdola。合同为 6 个月，可能延至 1 年。",
    next: "先询问团队日常能否用英语、是否接受 Barcelona 通勤候选人、远程两天如何安排和薪资；得到肯定答复后再发数字 campaign、社媒系统、newsletter、短视频与 motion 作品集。",
    language: "加泰语招聘与本地团队语境；英语能否作为工作语言需先确认",
  },
  864: {
    direction: "brand",
    company: "Grup Ametller Origen",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Olèrdola / Numància，混合办公",
    titleZh: "包装艺术负责人（品牌治理与生产落地）",
    titleEs: "Líder de arte en packaging",
    reason: "非常标准的品牌治理与包装系统岗位：团队协调、视觉手册、包装设计、完稿、刀模、色样、印厂和供应商管理；无限期合同，但要求 5 年以上经验、全文加泰语并需自驾。",
    next: "只有作品集具备成熟包装系统、品牌手册、印前完稿、打样和供应商管理案例时再投；先确认工作语言、薪资、混合办公比例和通勤要求。",
    language: "加泰语招聘与本地供应商语境；西语 / 加泰语门槛较高",
  },
  865: {
    direction: "production",
    company: "FIRMAMENT / 发布主体待核实",
    statusKey: "closed",
    locationKey: "other",
    locationLabel: "地点冲突：LinkedIn 写 Barcelona，旧正文写 Andújar",
    titleZh: "图形制作协调员（地点异常，暂不投）",
    titleEs: "Coordinador/a de producción gráfica — ubicación no verificada",
    reason: "LinkedIn 把它列在 Barcelona，但能恢复的同名正文实际是 Andújar 的订单、供应商和运输协调，并非视觉设计；雇主与地点映射冲突，不能按巴塞设计岗处理。",
    next: "暂不投递。只有发布者补充 Barcelona 雇主全称、办公地址、真实设计职责和独立申请入口后再重新评估。",
    language: "语言不明；职位地点与主体尚未核实",
  },
  866: {
    direction: "digital",
    company: "devicenow",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "品牌视频与动态视觉专员",
    titleEs: "Especialista de vídeo y motion graphics",
    reason: "本轮最值得优先投的新机会：英语是明确要求，未列西语门槛；工作把品牌延展到产品解说、客户故事、社交短片、活动、数字 campaign、演示、模板和素材系统，既有动态也有静态品牌资产。",
    next: "用英文简历、作品集和 showreel 直接投。首页先放 45–75 秒精选 reel，再放品牌动态系统、产品解释视频、社媒 campaign 与静态视觉；申请时确认合同期限、薪资、到岗频率和工作许可。",
    language: "优秀英语必需；公开职位未写西班牙语要求",
  },
  867: {
    direction: "digital",
    company: "Space Go",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vallès / 混合办公",
    titleZh: "创意动态设计师（品牌 campaign / 社交广告）",
    titleEs: "Creative Motion Grapher — campañas y social",
    reason: "品牌动态、2D / 3D、获客与留存内容、短视频、多版本模板和生产系统都很贴数字品牌延展；但要求 5 年以上经验，职位全文与本地团队语境均为西语。",
    next: "只在资历足够时挑战。先用英文询问日常工作语言、临时合同期限与薪资，再提交品牌 motion system、2D / 3D campaign、模板系统和转化迭代案例。",
    language: "西语要求未明示，但职位全文和本地团队工作流为西语",
  },
  868: {
    direction: "digital",
    company: "Omnicom Health",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "医疗品牌视频制作与动态视觉",
    titleEs: "Video Maker — comunicación sanitaria y motion",
    reason: "正式全职，覆盖企业、科学、培训、推广视频、活动、网站、数字 campaign、motion 与 AI；但明确要求流利西语和英语，且公开页面已有 200 人以上申请。",
    next: "当前不优先。只有能用西语处理客户会议、科学文案与反馈时再投；材料需要 CV、简短动机说明和最新 reel。",
    language: "西语要求：流利西班牙语与英语均为硬门槛",
  },
  869: {
    direction: "social",
    company: "BLAINE",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Vilassar de Mar / 混合或现场",
    titleZh: "效果营销动态设计与视频剪辑",
    titleEs: "Motion Designer & Video Editor — performance marketing",
    reason: "无限期全职，内容覆盖社交广告、多版本测试、motion、艺术指导和按转化数据迭代；但西语母语与居住在 Maresme 都是明确硬门槛。",
    next: "不进入当前低语言优先队列。未来满足母语级西语与 Maresme 居住条件时，再用社交广告、A/B testing、快速变体和数据迭代案例申请。",
    language: "西语要求：母语级西班牙语；必须居住在 Maresme",
  },
  870: {
    direction: "ecommerce",
    company: "Flummox / Online Brand House",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程优先 / 每周至少 20 小时",
    titleZh: "远程兼职电商品牌平面设计师",
    titleEs: "Diseñador/a gráfico/a de e-commerce — remoto y parcial",
    reason: "新的独立职位编号证明此前关闭的岗位已经重发。流利英语即可，工作横跨品牌识别、Amazon 内容、产品图、3D、网页、广告、包装与拍摄，和电商视觉及数字品牌延展高度匹配。",
    next: "用英文 CV 和电商视觉作品集投递；优先放 Amazon A+ / listing、包装、产品图、网页与广告系列。面试前确认时薪或月薪、保底工时、雇佣还是 autónomo、付款周期和试稿是否有薪。",
    language: "流利英语必需；其他欧洲语言仅为加分，未写西班牙语要求",
  },
  871: {
    direction: "brand",
    company: "Codeway",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "初中级 / 1–4 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "品牌平面设计师（VI 与全触点延展）",
    titleEs: "Brand Graphic Designer — identidad y extensión multicanal",
    reason: "当前最强的英语品牌岗位之一：1–4 年经验即可，负责品牌身份、社媒、活动、网站、周边、演示与印刷；官方申请表开放，并明确提供签证和搬迁支持。",
    next: "用英文材料直接投官方 Ashby。作品集以一套完整 VI 系统开场，再展示社媒、网站、活动、周边、演示和印刷延展；求职信直接回应跨触点一致性、视觉系统和 AI 工作流。",
    language: "英语熟练必需；公开职位未写西班牙语要求",
  },
  872: {
    direction: "brand",
    company: "AQIPA Gear Guru",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Hospitalet / Barcelona 标注，官方地点需确认",
    titleZh: "资深平面设计 / 创意负责人",
    titleEs: "Senior Graphic Designer / Head of Creation & Design",
    reason: "科技品牌、包装、POS、电商、展会、网站与影像职责非常完整，英语条件也友好；但 LinkedIn 写 Barcelona，官方 Personio 主要列 Kundl，地点存在冲突。",
    next: "先邮件问 HR 是否能以 Barcelona/Hospitalet 为真实工作地点，并确认合同、薪资和到岗频率。只有具备 6–10 年资深品牌、包装、数字与摄影作品时再准备完整申请。",
    language: "英语良好必需；德语为明显加分；未写西班牙语要求",
  },
  873: {
    direction: "digital",
    company: "Talent-R / 客户未披露",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "平面设计师（品牌、广告、网页与视频）",
    titleEs: "Graphic Designer — marca, campañas, web y vídeo",
    reason: "工作覆盖数字广告、社媒、网页、品牌身份、Reels 和 motion，内容匹配不错；但法语流利或母语是硬门槛，真实客户和薪资也没有披露。",
    next: "没有工作法语时不优先。若法语可用，先向招聘方确认客户名称、薪资、合同和办公比例，再提交数字 campaign、品牌身份、landing 与视频案例。",
    language: "法语流利或母语为硬要求；同时需要良好英语",
  },
  874: {
    direction: "digital",
    company: "IKIGAI Talent Group / 移动应用客户",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "视频剪辑与动态设计师（获客广告 / 品牌动态）",
    titleEs: "Editor/a de vídeo y Motion Designer",
    reason: "本轮最值得投的新入口：官方登记表仍开放，页面使用英语且未写西语要求；工作覆盖视觉身份延展和 TikTok、Meta、Apple Search Ads、Google 的动态获客素材。",
    next: "用英文申请，首页放 30–60 秒广告剪辑 reel，再放品牌 motion system 和带结果指标的多版本素材。先确认真实客户、薪资、合同主体、每周产量、到岗频率和试稿是否付费。",
    languageKey: "light",
    language: "英语页面；公开职位未写西班牙语要求",
  },
  875: {
    direction: "digital",
    company: "CoverManager / Hospitality Tech Group",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 办公比例待确认",
    titleZh: "动态设计师（双品牌视频与社交广告）",
    titleEs: "Motion Designer — vídeo de marca y anuncios sociales",
    reason: "CoverManager 与 Zenchef 双品牌的动态、视频和 Instagram / LinkedIn 广告职责明确，工具栈也新；但流利英语之外，还必须具备流利西语或法语。",
    next: "没有工作西语或法语时不优先。若法语可用，作品集突出双品牌区分、社交广告、编辑视频和 AI 后期；先问薪资、合同、语言组合和到岗天数。",
    languageKey: "spanish",
    language: "英语流利，并要求西班牙语或法语至少一种流利",
  },
  876: {
    direction: "digital",
    company: "Buzz Marketing Networks",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 4–5 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 每周 2 天办公室、3 天远程",
    titleZh: "AI 方向动态设计与视频剪辑",
    titleEs: "Motion Designer & Video Editor con foco en IA",
    reason: "独立于 Buzz 艺术指导岗，覆盖 campaign、社媒、motion、剪辑和 AI 视频；混合办公安排清楚，但要求约 4–5 年经验，职位处在西语工作语境。",
    next: "资历足够时先用英文询问团队能否接受英语工作，再提交 campaign、社媒 motion 和 AI 生成到精修的流程案例；确认薪资、合同和测试范围。",
    languageKey: "unknown",
    language: "职位全文为西语，但没有公开具体语言等级",
  },
  877: {
    direction: "production",
    company: "Eurofirms / 未公开包装客户",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初级 / 1 年以上",
    locationKey: "barcelona",
    locationLabel: "Cerdanyola del Vallès / 现场早班",
    titleZh: "平面设计与包装完稿专员",
    titleEs: "Diseñador/a gráfico/a — artes finales y packaging",
    reason: "时薪、工时与临时合同都公开，并有转长期可能；职责是真实的包装完稿、法规、盲文、条码、打样和质控，但偏生产而非高概念 VI。",
    next: "具备包装完稿、刀模、条码 / 法规和印前经验时再投；先确认真实雇主、合同期限、转长期条件、日常语言和是否轮班。",
    languageKey: "unknown",
    language: "西语职位与生产语境；没有公开具体语言等级",
  },
  878: {
    direction: "social",
    company: "Hosco",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "实习 / 未要求经验",
    locationKey: "barcelona",
    locationLabel: "Barcelona Eixample / 全职实习",
    titleZh: "社交媒体内容设计与创作实习",
    titleEs: "Prácticas de diseño y creación de contenido social",
    reason: "社媒图形、Reels、内容排程和 campaign 都相关，雇主在平台已验证；但全职实习没有公开薪资、补贴、学校协议或合同期限，回报风险较高。",
    next: "先问是否带薪、税前月薪、是否必须 convenio、合同期限和工作语言；只有条件合理再提交社媒模板、短视频和内容日历案例。",
    languageKey: "unknown",
    language: "公开职位没有说明语言要求",
  },
  879: {
    direction: "social",
    company: "Bisubi",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初级 / 未要求经验",
    locationKey: "remote",
    locationLabel: "西班牙远程 / 兼职灵活",
    titleZh: "短视频内容创作者（TikTok / Reels / Shorts）",
    titleEs: "Creador/a de vídeo corto",
    reason: "高级英语、全远程、无经验门槛且按周付款，适合短期补充收入；但公开费率只有 EUR10/小时，职责也不属于 VI 主方向。",
    next: "只作低薪备用。先确认保底工时、合同 / 发票主体、修订次数、素材版权、付款保障和设备要求；不要做无薪样片。",
    languageKey: "light",
    language: "要求高级英语；未写西班牙语要求",
  },
  880: {
    direction: "social",
    company: "Axo Longevity",
    statusKey: "verify",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
    locationKey: "remote",
    locationLabel: "Barcelona 标注 / 远程优先",
    titleZh: "双语短视频剪辑与平面设计",
    titleEs: "Editor/a de vídeo corto y diseñador/a gráfico/a bilingüe",
    reason: "付费与自然社媒、静态广告和指标复盘有真实内容，但英语 / 西语双语是硬门槛；聚合页对临时、全职和 contract-to-hire 的标签互相冲突。",
    next: "先索取雇主法定名称、原始职位页、西班牙合同或 autónomo 方式、准确薪资币种 / 税制和付费测试说明；不要先上传证件。",
    languageKey: "spanish",
    language: "英语与西班牙语双语为明确硬门槛",
  },
  881: {
    direction: "digital",
    company: "Avidalia",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年左右",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公，周五远程；20 小时/周",
    titleZh: "数字内容设计师（品牌、社媒与基础动态）",
    titleEs: "Digital Content Designer",
    reason: "官方申请仍开放，兼职无固定期限合同，覆盖品牌一致性、印刷 / 数字 / 社媒 / email 和基础 motion；但西语工作语境及兼职年收入都需先确认。",
    next: "先问税前年薪或时薪、20 小时如何分布、转全职条件和日常语言；作品集放数字 campaign、品牌模板、社媒 / email 系列和基础 motion。",
    languageKey: "unknown",
    language: "职位全文为西语，但没有公开具体语言等级",
  },
  882: {
    direction: "brand",
    company: "Jobgether / 客户未披露",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程 / 合同制",
    titleZh: "B2B 平面设计师（报告、电子书与品牌模板）",
    titleEs: "Diseñador/a gráfico/a B2B",
    reason: "LinkedIn 新状态与 Lever 入口均可申请，英语和 Spain remote 友好；但真实客户、薪资、工时和合同地区没有公开，且竞争已经较高。",
    next: "只用公开作品集先申请，突出报告信息层级、电子书、社媒系统和印刷；面试前确认客户名称、预算、每周工时、合同 / 发票主体和付款周期。",
    languageKey: "light",
    language: "英语职位；公开信息未写西班牙语要求",
  },
  883: {
    direction: "digital",
    company: "Preply",
    statusKey: "closed",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 已关闭",
    titleZh: "本地化动态设计师（已停止申请）",
    titleEs: "Motion Designer — Localization (cerrado)",
    reason: "搜索列表的近期活跃属于缓存刷新；当前详情明确写明不再接受申请，不能恢复成新岗位。",
    next: "只保留公司观察。等 Preply 官方招聘页出现独立新职位编号和可提交表单后再恢复，不通过旧缓存或通用人才库投递。",
    languageKey: "light",
    language: "历史职位；当前已关闭",
  },
  884: {
    direction: "digital",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 医药经验有优势",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "医药行业中级平面设计师",
    titleEs: "Diseñador/a gráfico/a mid para pharma",
    reason: "本轮最值得优先投的新岗位：英语流利即可，未列西语硬门槛；工作覆盖医药 campaign、社媒、网站、演示和营销资产，核心是把复杂信息转成清晰且符合品牌规范的多触点视觉。",
    next: "用英文简历和作品集直接投。先放信息层级清楚、品牌一致性强的项目，再放 campaign、社媒、网页和演示系统；求职信回应医疗合规、可访问性和 AI 辅助工作流。",
    languageKey: "light",
    language: "流利英语必需；其他语言仅为加分，未写西班牙语要求",
    changeType: "new",
  },
  885: {
    direction: "ecommerce",
    company: "Social Scout",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初中级 / 2 年以上",
    locationKey: "remote",
    locationLabel: "西班牙远程 / contractor；约 15:00–23:00",
    titleZh: "电商产品详情页设计师（PDP / 转化设计）",
    titleEs: "PDP Designer — e-commerce y conversión",
    reason: "流利英语、全远程，PDP、landing、移动端、A/B 测试、Figma 与 Shopify 都很贴电商视觉延展；但必须按美国东部时间工作，且合同制与薪资金额都未明确。",
    next: "只有能接受约 15:00–23:00 的西班牙时间再投。先确认时薪或月薪、保底工时、autónomo、付款周期、加班与修改边界；作品集用 PDP、移动端详情页、A/B 变体和转化结果开场。",
    languageKey: "light",
    language: "流利英语必需；未写西班牙语要求",
    changeType: "new",
  },
  886: {
    direction: "social",
    company: "JUNGLE / MeMe",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初级或资深均可",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / Calle Álava 111",
    titleZh: "社交媒体剪辑与视觉设计",
    titleEs: "Social Editor — diseño y edición de vídeo",
    reason: "长期全职，混合艺术指导、平面设计、视频剪辑、meme、TikTok、字幕系统和提案板；但职位全文与本地 agency workflow 均为西语语境，不能当成英语友好岗。",
    next: "先用英文或简单西语询问团队工作语言。得到肯定答复后，再发 social-first 视觉、快速剪辑、字幕系统、meme / TikTok 和 presentation board 案例。",
    languageKey: "unknown",
    language: "未公开语言等级；西语职位与本地代理商工作语境",
    changeType: "new",
  },
  887: {
    direction: "digital",
    company: "Kave Home",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "经验要求待确认",
    locationKey: "other",
    locationLabel: "Sils, Girona / 现场办公",
    titleZh: "视频剪辑与动态设计师（品牌 / 电商 / 零售）",
    titleEs: "Video Editor & Motion Designer",
    reason: "家具生活方式品牌的后期、motion、调色与音频岗位，内容覆盖 branding、电商、社媒、paid media 和零售；但要求在 Sils 现场办公，且处于西语工作语境。",
    next: "先确认每周现场天数、Barcelona 通勤可行性、日常语言和薪资。只有地点可接受再投，作品集放品牌影片、产品 / 空间剪辑、电商变体、motion、调色和声音设计。",
    languageKey: "unknown",
    language: "职位全文为西语，但没有公开具体语言等级",
    changeType: "new",
  },
  888: {
    direction: "brand",
    company: "Mindrift",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "约 2 年经验优先",
    locationKey: "remote",
    locationLabel: "西班牙远程 / freelance；活跃期约 10–20 小时",
    titleZh: "自由职业演示设计师（信息设计）",
    titleEs: "Presentation Designer freelance",
    reason: "英语 B2、远程、演示和 one-pager 信息设计门槛相对友好，可作为品牌叙事的补充收入；但项目量不保证，不是完整 VI 正职。",
    next: "先确认西班牙 contractor / autónomo 条件、实际费率、最低项目量、付款周期、数据使用和测试是否有薪；作品集突出品牌演示系统、信息层级和复杂内容可视化。",
    languageKey: "light",
    language: "英语 B2；未写西班牙语要求",
    changeType: "new",
  },
  889: {
    direction: "ecommerce",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "食品饮料行业中级平面设计师",
    titleEs: "Diseñador/a gráfico/a mid — alimentación y bebidas",
    reason: "既有 Danone / FMCG 岗位以新编号重新发布，当前入口更可靠；工作聚焦电商、社媒、数字 campaign、多市场 adaptation 和高产量下的品牌一致性。",
    next: "继续优先投当前链接，作品集放 FMCG、电商、社媒模板、多尺寸 adaptation 和可扩展生产系统。网站已把新旧编号合并，本地投递进度不会丢失。",
    languageKey: "light",
    language: "英语良好 / 高级为理想；其他语言加分，未写西班牙语硬门槛",
    changeType: "refresh",
  },
  890: {
    direction: "brand",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "健康与生活方式艺术指导",
    titleEs: "Art Director — wellness y lifestyle",
    reason: "既有岗位以新编号重新发布，当前入口可投；覆盖 social-first、digital、creator 和 integrated campaign，英语要求明确。",
    next: "已有概念创意、社媒 campaign、creator 内容和跨渠道视觉时再投；若资历偏执行，优先同公司的 Mid Graphic Designer。新旧编号已合并。",
    languageKey: "light",
    language: "流利英语必需；其他语言仅为加分",
    changeType: "refresh",
  },
  891: {
    direction: "digital",
    company: "Dragons Group",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 需医疗行业与带教经验",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "医药行业资深平面设计师",
    titleEs: "Senior Graphic Designer para pharma",
    reason: "既有医药资深岗以新编号重新发布；英语友好，职责覆盖 campaign、数字资产、演示和团队带教，但医疗合规经验是真实门槛。",
    next: "只有具备医疗 / 医药案例和带教经验再投。否则把时间给本轮新出现的 Mid Pharma；新旧编号已合并并保留当前申请入口。",
    languageKey: "light",
    language: "流利英语必需；未写西班牙语要求",
    changeType: "refresh",
  },
  892: {
    direction: "digital",
    company: "Qoria / Qustodio",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 5 年以上",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那市中心 / 混合办公",
    titleZh: "数字设计师（营销与品牌系统）",
    titleEs: "Digital Designer — marketing y sistemas de marca",
    reason: "既有强匹配岗位以新编号重新发布；职责覆盖网站、landing、CRM / email、社媒、付费 campaign、演示和品牌系统，并公开 EUR30,000–40,000 薪资。",
    next: "用英文作品集投当前入口，突出多渠道数字系统、Figma、campaign、CRM / landing 和可扩展品牌组件。新旧编号已合并，本地进度会沿用。",
    languageKey: "light",
    language: "流利英语必需；西班牙语高度重视但未写为硬门槛",
    changeType: "refresh",
  },
  893: {
    direction: "digital",
    company: "CrowdStrike",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "初中级 / 2 年以上",
    locationKey: "remote",
    locationLabel: "Barcelona / 西班牙远程",
    titleZh: "创意内容设计师（品牌内容与设计系统）",
    titleEs: "Diseñador/a de contenido creativo — remoto",
    reason: "本轮最强的新机会：官方 Workday 当前可投，英语工作、未列西语；职责把品牌延展到演示、one-pager、信息图、newsletter、视频、动画、模板和无障碍设计系统，要求 2 年以上经验。",
    next: "优先从官方 Workday 用英文申请。作品集先放品牌系统和多渠道 adaptation，再放复杂信息可视化、演示、社媒 / 视频与模板体系；确认远程范围、办公频率、薪资、合同主体和工作许可。",
    languageKey: "light",
    language: "英语工作；公开正文未列西班牙语要求",
    changeType: "new",
  },
  894: {
    direction: "digital",
    company: "Ogilvy Spain",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–4 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "Liquid 设计师（视频剪辑与社交动态）",
    titleEs: "Liquid Designer — edición de vídeo y motion social",
    reason: "当前职位再次开放：数字 campaign、Reels、TikTok、Shorts、motion、本地化和品牌一致性都很贴数字延展；混合办公政策较灵活，但代理公司日常语言与薪资未公开。",
    next: "先用英文询问团队工作语言和薪资，再提交 45–60 秒 reel、社交 campaign、多尺寸本地化和品牌模板案例。网站已与旧记录合并并保留当前入口。",
    language: "未明示语言要求；Barcelona 代理公司工作流可能依赖西语",
    changeType: "refresh",
  },
  895: {
    direction: "digital",
    company: "KOROSHI GROUP",
    statusKey: "live",
    experienceKey: "unknown",
    experienceLabel: "经验年限未明确",
    locationKey: "barcelona",
    locationLabel: "Barberà del Vallès / Barcelona 周边",
    titleZh: "影像创作者（AI 视频与品牌叙事）",
    titleEs: "Film Maker — vídeo y storytelling con IA",
    reason: "时尚、电商和品牌内容的复合岗位，覆盖策划、拍摄、剪辑、商品图、Shopify、banner、newsletter、CRM、社媒、paid ads 与 AI 工具；但本地零售团队语境偏西语。",
    next: "先用英文问工作语言、薪资、合同和办公频率；作品集放时尚 / 商品拍摄、短视频系列、Shopify 视觉、newsletter、paid social 和人工精修后的 AI 流程。",
    language: "英语中高水平为加分；西语未写等级，但本地团队存在语言风险",
    changeType: "new",
  },
  896: {
    direction: "production",
    company: "RB Rotulación Barcelona",
    statusKey: "verify",
    experienceKey: "unknown",
    experienceLabel: "经验要求未完整公开",
    locationKey: "barcelona",
    locationLabel: "Badalona / Barcelona 周边",
    titleZh: "广告标识排版与车间制作",
    titleEs: "Maquetista — producción de taller",
    reason: "当前可见的本地制作线索，涉及文件检查、Illustrator / Corel / Photoshop、打印覆膜和标识安装；更偏广告制作落地，不是品牌 VI，且没有恢复出稳定的职位直达页。",
    next: "先从公司页确认是否仍招，并问合同、薪资、全保、语言、设计与车间占比及驾照 / 车辆要求；只有愿意做标识制作时再投。",
    language: "语言未公开；本地车间沟通可能依赖西语",
    changeType: "new",
  },
  897: {
    direction: "brand",
    company: "D&M asesores / 玩具与儿童促销客户",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 5 年以上",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 每周 3 天远程",
    titleZh: "玩具与儿童促销平面设计师",
    titleEs: "Diseñador/a gráfico/a — juguetes y promociones infantiles",
    reason: "当前可投、无限期合同、每周 3 天远程；包装、产品演示、渲染、矢量插画和印刷完稿高度匹配，并要求高水平英语、未写西语硬门槛，但 5 年以上经验是门槛。",
    next: "用英文材料申请，作品集突出包装系列、结构 / 刀模、产品渲染、插画与印前；面试时确认客户主体、薪资、试用期和远程政策。网站已与旧记录合并。",
    languageKey: "light",
    language: "高水平英语；公开正文未列西班牙语硬门槛",
    changeType: "refresh",
  },
  898: {
    direction: "digital",
    company: "Intracon Consulting / HP Site Print",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "初中级 / 2 年以上",
    locationKey: "barcelona",
    locationLabel: "Sant Cugat del Vallès / 混合办公",
    titleZh: "设计与营销内容支持（HP 品牌内容）",
    titleEs: "Diseño y soporte de contenido de marketing",
    reason: "英语友好、未列西语，当前可申请；12 个月全职合同可续，职责覆盖 HP 品牌资产、产品内容、发布 playbook、演示、模板与 Workfront。此前因“薪资未公开”被误判为关闭，现已纠正。",
    next: "用英文作品集突出 B2B / 科技品牌、产品发布、演示、模板系统、跨团队协作和高产量下的一致性；确认工资、续约概率、办公天数和雇佣主体。",
    languageKey: "light",
    language: "高水平英语必需；未列西班牙语要求",
    changeType: "refresh",
  },
  899: {
    direction: "brand",
    company: "Jobgether / 匿名合作公司",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "中资深 / 4 年以上",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "品牌与视觉设计师",
    titleEs: "Brand & Visual Designer",
    reason: "品牌识别、网页 / landing、campaign、社媒、印刷、活动、系统与模板都很贴目标；但实际雇主匿名，薪资和语言未公开，申请可信度低于直招。",
    next: "可投公开简历与作品集，但在收到可核验公司全称、公司域名邮箱、书面职位说明和薪资范围前，不提供证件、银行资料或免费完整试稿。",
    opaqueEmployer: true,
    language: "语言未公开；需先确认英语能否作为工作语言",
    changeType: "new",
  },
  900: {
    direction: "digital",
    company: "Experis España / 客户未公开",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–4 年",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "创意设计师（数字 campaign）",
    titleEs: "Creative Designer — campañas digitales",
    reason: "Spain remote，职责覆盖 key visual、数字 campaign、社媒、moodboard 与 storyboard；但职位正文为西语，客户、薪资、合同和工作语言都没有公开。",
    next: "先用英文询问项目客户、团队语言、合同期限、薪资和远程雇佣方式；确认后再提交 campaign、key visual、社媒和 storyboard 案例。",
    opaqueEmployer: true,
    language: "未列语言等级；西语职位正文与本地招聘方带来沟通风险",
    changeType: "new",
  },
  901: {
    direction: "brand",
    company: "BYD Europe / DENZA",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 5 年以上",
    locationKey: "other",
    locationLabel: "Madrid",
    titleZh: "DENZA 创意与设计专员",
    titleEs: "Creative & Design Specialist — DENZA",
    reason: "中国汽车品牌、职责涵盖印刷、数字、社媒、campaign、模板和品牌规范；不要求西语，但德语母语或高级水平是明确硬门槛，地点也在 Madrid。",
    next: "只有德语达到工作水平且能接受 Madrid 时再投；否则保留观察，不因“中国品牌”标签进入高优先级。",
    languageHard: true,
    language: "英语流利，并要求德语母语或高级；西班牙语不是门槛",
    changeType: "new",
  },
  902: {
    direction: "digital",
    company: "GRUP MEDIAPRO / 3Cat",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初级 / 数字内容经验",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "初级平面设计师（3Cat 数字内容）",
    titleEs: "Diseñador/a gráfico junior — contenidos digitales 3Cat",
    reason: "新收录的数字视觉岗，覆盖数字创意、视听内容、Motion Graphics、多格式适配、视觉系统和可扩展模板；但熟练加泰语是明确必需条件。",
    next: "当前加泰语不足时不投。若以后语言达到工作水平，作品集应突出媒体数字视觉、社媒模板、Motion、时效内容快速适配和可扩展生产系统。",
    languageKey: "spanish",
    languageHard: true,
    language: "熟练加泰语必需；属于明确本地语言硬门槛",
    changeType: "new",
  },
  903: {
    direction: "digital",
    company: "fhios / 最终客户未公开",
    statusKey: "live",
    experienceKey: "unknown",
    experienceLabel: "经验年限未明确",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "多渠道视觉设计师（AI 创意流程）",
    titleEs: "Diseñador/a — producción multicanal e IA",
    reason: "多渠道视觉、视频、演示、作品审核和 AI 创意流程都与目标相关；fhios 主体真实，但职位服务的最终客户、薪资、项目期限和工作语言没有公开。",
    next: "先用英文询问实际客户、日常语言、合同期限、薪资、办公比例、作品保密和测试是否付费；得到书面答复后再提交品牌多渠道、视频、演示与 AI 精修案例。",
    opaqueEmployer: true,
    language: "高英语只写加分；西语要求和实际客户语言均未公开",
    changeType: "new",
  },
  904: {
    direction: "brand",
    company: "Wall Street English",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "资深 / 6 年以上与带教经验",
    locationKey: "barcelona",
    locationLabel: "Barcelona 市中心 / 每周 3 天远程",
    titleZh: "设计负责人（全球品牌系统，约 6 个月替岗）",
    titleEs: "Design Lead — cobertura de maternidad",
    reason: "当前可投的英语品牌系统负责人岗：全球品牌表达、设计系统、模板、campaign、数字平台、performance creative 和带领 2 名初级设计师；但合同约 6 个月且要求 6 年以上经验。",
    next: "只有具备全球品牌治理和带教经验时再投。作品集展示设计系统、campaign、团队 review 与数据驱动创意；确认薪资、试用期、续期可能及替岗结束后的安排。",
    languageKey: "light",
    language: "良好英语必需；未列西班牙语要求",
    changeType: "refresh",
  },
  905: {
    direction: "brand",
    company: "Steneg / 未公开工业客户",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上",
    locationKey: "barcelona",
    locationLabel: "Granollers / Barcelona 周边",
    titleZh: "平面设计师（品牌治理、包装与流程数字化）",
    titleEs: "Diseñador/a gráfico/a — marca, packaging y procesos",
    reason: "当前可投的全职英语岗，品牌、包装、展会、目录、影像、印前、素材库、审批和设计流程数字化都很完整；但实际工业客户、薪资和办公方式未公开。",
    next: "用英文材料申请，但先问客户全称、Granollers 地址、薪资、合同、办公方式和数据处理主体；只先提交公开 CV 与作品集。",
    opaqueEmployer: true,
    languageKey: "light",
    language: "高水平职业英语必需；未列西班牙语要求",
    changeType: "refresh",
  },
  906: {
    direction: "brand",
    company: "INFiLED / 视爵光旭",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中高级 / 需独立负责与艺术指导",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "平面设计师（EMEA 品牌与多渠道传播）",
    titleEs: "Diseñador/a gráfico/a — marca EMEA y comunicación multicanal",
    reason: "当前仍可投的中国品牌英语岗，负责艺术方向、数字与印刷、网页、活动展台、多市场 adaptation、内部传播和品牌一致性；未列西语要求。",
    next: "优先用英文申请，作品集突出品牌系统、B2B 科技、网页、展会空间、多市场 adaptation 和 art direction，并自然说明中文能力；确认薪资、合同主体、办公频率和工作许可。",
    languageKey: "light",
    language: "流利英语必需；未列西班牙语要求",
    changeType: "refresh",
  },
  907: {
    direction: "brand",
    company: "ELADIET S.A.",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "中资深 / 4 年以上",
    locationKey: "barcelona",
    locationLabel: "El Papiol / Barcelona 周边",
    titleZh: "品牌与传播平面设计师",
    titleEs: "Diseñador/a gráfico/a — marca y comunicación",
    reason: "包装、企业形象、campaign、社媒、网站、3D、Logo、naming 和印前都非常贴合；但招聘全文、文案协作和本地团队工作流为西语，且薪资未公开。",
    next: "当前不进入低语言优先。若要挑战，先用英文询问团队工作语言、薪资和办公方式，再提交健康 / 食品包装、品牌系统、campaign、3D mockup 与印前案例。",
    languageKey: "spanish",
    language: "英语 B2；未写西语等级，但本地品牌与文案工作流构成较高西语风险",
    changeType: "refresh",
  },
  908: {
    direction: "digital",
    company: "Top Doctors Group",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 3 年以上",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "营销设计师（多品牌视觉）",
    titleEs: "Marketing Designer — identidad visual multimarca",
    reason: "正式全职、公开年薪 EUR22,000–24,000，覆盖多品牌 identity、campaign、社媒、email、landing、演示、活动和轻量视频；但薪资对 3 年以上经验偏保守，团队工作流为西语。",
    next: "若能接受薪资再投；先确认日常语言、试用期、混合办公天数与调薪机制。作品集放多品牌系统、数字 campaign、landing、演示和轻量 motion。",
    languageKey: "spanish",
    language: "未列等级；招聘全文与 Barcelona 跨部门工作流为西语",
    changeType: "refresh",
  },
  909: {
    direction: "brand",
    company: "Revolt / Anthesis",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–3 年以上",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那",
    titleZh: "中级品牌设计师",
    titleEs: "Mid-weight Designer — branding y comunicación",
    reason: "branding、digital、social、print、概念、演示与最终交付都很准确，福利也较正式；但明确要求英语和西班牙语都达到专业工作水平。",
    next: "当前西语不足时不投。未来语言提高后，作品集应展示品牌策略转化、概念、数字 / 社媒 / 印刷、演示和完整交付。",
    languageKey: "spanish",
    languageHard: true,
    language: "专业英语和西班牙语均为明确要求",
    changeType: "refresh",
  },
  910: {
    direction: "digital",
    company: "LABHOUSE",
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中级 / 2 年以上",
    locationKey: "remote",
    locationLabel: "西班牙远程 / Barcelona 可每周到岗约 2 天",
    titleZh: "ASO 视觉设计师（App 品牌与增长）",
    titleEs: "ASO Artist – Graphic Designer",
    reason: "长期合同、地点清楚，工作覆盖 App 图标、商店截图、推广视觉、视频、Logo、品牌元素、style guide 和 App 内资产，正好连接品牌系统、数字产品与增长设计。",
    next: "这条只放在英语备选。若能借助翻译工具完成英文申请，作品集首页放 App 图标 / 截图系统、品牌规范、performance creative、动效和数据迭代案例；先确认薪资、试用期、办公频率与技术测试是否付费。",
    languageKey: "light",
    language: "流利英语必需；西班牙语只算加分",
    applicationMode: "english",
    changeType: "new",
  },
  911: {
    direction: "social",
    company: "inBeat Agency / Creative Milkshake",
    statusKey: "live",
    experienceKey: "unknown",
    experienceLabel: "经验年限未公开",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "视频编辑与视觉设计师（DTC 社媒广告）",
    titleEs: "Video Editor & Designer",
    reason: "西班牙可远程全职，负责 Reels、TikTok、YouTube、Meta 的短 / 长视频，并制作缩略图、overlay、end card 与字幕资产；更偏社媒广告和转化创意，不是纯 VI。",
    next: "这条只放在英语备选。先确认实际合同主体、工作时区、薪资、休假、设备、版权和测试是否付费；作品集精选 4–6 个 storyboard 到成片、字幕 / 图形系统、多尺寸适配与数据迭代案例。",
    languageKey: "light",
    language: "职位页面与协作流程为英文；未列西班牙语要求",
    applicationMode: "english",
    changeType: "new",
  },
  912: {
    direction: "digital",
    company: "Jobgether / 匿名合作方",
    statusKey: "live",
    experienceKey: "senior",
    experienceLabel: "中资深 / 4 年以上",
    locationKey: "remote",
    locationLabel: "西班牙远程",
    titleZh: "营销视觉设计师（多品牌数字内容）",
    titleEs: "Marketing Visual Designer",
    reason: "职责很贴数字品牌延展，但最终雇主未公开，页面又同时写 full-time 和约 20 小时 / 周；它是真实可打开的聚合申请入口，不是信息透明的雇主直招。",
    next: "先问最终雇主、全职还是约 20 小时、薪资、合同主体、时区、语言和个人数据接收方；得到书面答复后，再决定是否提交完整材料。",
    opaqueEmployer: true,
    languageKey: "light",
    language: "页面与申请为英文；实际团队语言未公开",
    applicationMode: "english",
    changeType: "refresh",
  },
  913: {
    direction: "social",
    company: "ALOHAS",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3–5 年亚洲市场经验",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "亚洲市场营销与公关经理（中国 / 韩国）",
    titleEs: "Asia Marketing & PR Manager",
    reason: "官方独立职位页重新出现完整申请表。普通话或韩语母语是核心条件，工作覆盖小红书、抖音、微信、微博、亚洲内容本地化、KOL/KOC、公关和创意团队 brief；不是纯 VI，但中文市场与视觉内容延展高度相关。",
    next: "只放在中文相关的英语备选，不进入“中文即可投”首页。先准备英文简历和 5–7 句面试自我介绍；申请前确认薪资、工作许可、会议语言、每周办公室天数和亚洲出差频率。",
    languageKey: "light",
    language: "普通话或韩语母语；专业英语必需；未列西班牙语要求",
    applicationMode: "english",
    changeType: "refresh",
  },
  914: {
    direction: "brand",
    company: "Trivelta",
    statusKey: "live",
    experienceKey: "junior",
    experienceLabel: "初中级 / 1–3 年",
    locationKey: "barcelona",
    locationLabel: "巴塞罗那 / 混合办公",
    titleZh: "平面设计师（三品牌视觉与数字延展）",
    titleEs: "Graphic Designer",
    reason: "官方 Greenhouse 已恢复完整 Apply。岗位同时维护三套品牌系统，并负责 social、广告、landing、email、销售资料、pitch deck 和展会资产，方向很贴品牌视觉与数字延展。",
    next: "只放在英语备选。作品集突出完整品牌系统、同一 campaign 的多渠道延展、多品牌一致性和轻量 motion；投前确认薪资、合同主体、办公频率、工作许可和测试政策。",
    languageKey: "light",
    language: "强工作英语必需；其他语言仅加分；未列西班牙语要求",
    applicationMode: "english",
    changeType: "refresh",
  },
  915: {
    direction: "ecommerce",
    company: "欧浪中文雇主（主体待核验）",
    chineseFit: true,
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "西班牙远程（帖子地区标马德里）",
    titleZh: "居家电商运营内勤（商品图文与详情页）",
    titleEs: "Operaciones e-commerce remotas — fichas e imágenes",
    reason: "当前欧浪公开记录显示可站内申请、EUR2,000/月，工作包含商品图文、详情页和图片维护；正文没有写西语或英语要求，适合先用中文确认。",
    next: "只先发简历和作品集链接，要求书面确认公司全称、税前/税后、合同或 autónomo、社保、工时、试用期、平台和视觉工作占比；不要先发证件原件或转账。",
    opaqueEmployer: true,
    languageKey: "unknown",
    language: "中文平台可先沟通；正文未写西语或英语要求",
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  916: {
    direction: "brand",
    company: "杭州流光溢彩品牌管理有限公司",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3 年以上",
    locationKey: "remote",
    locationLabel: "中文远程 Freelancer（需确认可否常驻西班牙）",
    titleZh: "品牌视觉设计师 / AIGC（海外品牌）",
    titleEs: "Diseñador/a visual de marca y AIGC",
    reason: "方向几乎完全命中：VI、包装、UI 组件、电商视觉、独立站、广告、AIGC 图片与短视频；英语只是加分项，可中文申请。",
    next: "薪资 RMB7,000–10,000/月按西班牙成本偏低。先确认是否接受常驻西班牙、工作时区、净到手、工时、合同、付款币种、发票与社保，再决定是否投。",
    languageKey: "unknown",
    language: "中文申请；英语仅为加分项",
    applicationMode: "chinese",
    changeType: "new",
  },
  917: {
    direction: "brand",
    company: "OneKey",
    chineseFit: true,
    statusKey: "verify",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3 年以上",
    locationKey: "remote",
    locationLabel: "全球远程 / 西班牙资格未确认",
    titleZh: "品牌视觉设计师（全球远程待确认）",
    titleEs: "Diseñador/a visual de marca",
    reason: "方向很匹配：品牌视觉系统、硬件、App、网站和线上线下延展；但官方只证明全球远程，没有证明西班牙居民可签约，因此不属于 Barcelona/Spain 直接机会。",
    next: "先确认西班牙雇佣实体/contractor、税务社保、薪资币种、核心时区和付费测试/IP 条款；书面确认前不要按 Barcelona 岗位投入定制材料。确认可签后再用中文提交完整 VI、3C/硬件、App/web 与数字延展案例。",
    languageKey: "unknown",
    language: "中文岗位页和申请流程；英语阅读仅为加分项",
    applicationMode: "chinese",
    changeType: "refresh",
  },
  918: {
    direction: "social",
    company: "Huqiao Games",
    chineseFit: true,
    statusKey: "live",
    experienceKey: "mid",
    experienceLabel: "中高级 / 3 年以上",
    locationKey: "remote",
    locationLabel: "全球远程 / 欧洲时区（西班牙资格待确认）",
    titleZh: "中英双语平面设计与视频剪辑",
    titleEs: "Diseñador/a gráfico/a y editor/a de vídeo bilingüe",
    reason: "新职位编号当前显示约 21 小时前发布，负责中国与海外社媒、Campaign、品牌一致性和视频；但中英文流利是硬门槛，USD1,500/月按西班牙成本偏低。",
    next: "只放外语低薪备选。先确认是否接受 Spain resident、合同与付款主体、税务社保、奖金规则和年假；无法完成英文面试或不接受该薪资时直接跳过。",
    languageKey: "light",
    language: "中文和英语口语、书面均须流利；不要求西班牙语",
    applicationMode: "english",
    changeType: "refresh",
  },
  919: {
    direction: "brand",
    company: "Brightest Star（法定主体未披露）",
    chineseFit: true,
    opaqueEmployer: true,
    statusKey: "verify",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–3 年",
    locationKey: "remote",
    locationLabel: "全球远程（西班牙资格待确认）",
    titleZh: "品牌视觉设计师（交易所 VI 与数字延展）",
    titleEs: "Diseñador/a visual de marca — VI y canales digitales",
    reason: "中文职位、USD5,000–8,000/月，职责精确覆盖 Logo、VI、品牌手册、官网、App、KV、H5 和 Campaign；但雇主只写 Brightest Star，法定主体与产品未披露，Web3 风险高。",
    next: "只先投公开简历和作品集链接。必须核实公司全称、产品域名、公司邮箱、合同与付款主体；凡要求入金、买币、缴费、钱包助记词或免费完整方案，立即停止。",
    languageKey: "unknown",
    language: "中文职位；基础英文设计术语仅为加分项",
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  920: {
    direction: "brand",
    company: "言灵无界信息咨询（北京）有限公司",
    chineseFit: true,
    statusKey: "verify",
    experienceKey: "unknown",
    experienceLabel: "经验未公开",
    locationKey: "remote",
    locationLabel: "中文远程兼职（需确认西班牙资格）",
    titleZh: "兼职品牌视觉设计师（跨境品牌咨询）",
    titleEs: "Diseñador/a visual de marca a tiempo parcial",
    reason: "中文兼职、RMB10,000–15,000/月，工作覆盖社媒、网站、物料、视频和品牌一致性；但发布于 2026-02-24，原始智联详情已不稳定，不能当作当前确定在招。",
    next: "先中文冷询问是否仍招、是否接受 Spain resident、每周工时、时区、合同 / 发票 / 社保和测试是否付费；未取得可核验公司的书面回复前不做定制试稿。",
    languageKey: "unknown",
    language: "中文岗位摘要；未显示西语或英语要求",
    applicationMode: "chineseCheck",
    changeType: "new",
  },
});

Object.assign(CURATED, {
  979: {
    direction: "digital",
    company: "Storyblok",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe 远程（Spain 资格待确认）",
    titleZh: "2D 动态设计师（产品 / 品牌动效）",
    titleEs: "2D Motion Designer — Europe",
    reason: "这不是普通剪辑岗：负责产品演示、feature explainer、UI animation、发布/活动/社媒内容，并建立可复用的视频设计系统、motion principles 和模板。",
    next: "用英文 motion-first 作品集申请；首页放 product demo、品牌动效系统、模板化资产和复杂技术概念的视觉解释。先确认 Spain 合同实体、时区与福利。",
    language: "英文国际团队；官方未列西语要求，但 Spain payroll 需确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5 年",
    changeType: "new",
  },
  980: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 或 onsite",
    titleZh: "艺术指导（品牌 campaign / AI / motion）",
    titleEs: "Art Director",
    reason: "负责高要求 campaign、品牌身份和跨渠道视觉方向；Adobe、AI、Figma、motion/video 都有价值，方向精确贴近品牌视觉与艺术指导。",
    next: "只有能处理 Catalan/Spanish agency brief 和客户沟通时再投。作品集写清个人 art-direction 贡献、campaign 概念、storyboard、制作和最终多渠道落地。",
    language: "英文与 Catalan 中高要求；本地团队语言需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "资深 / 5–6 年 agency",
    changeType: "new",
  },
  981: {
    direction: "brand",
    company: "VML",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid 或 onsite",
    titleZh: "资深艺术指导（360 campaign / brand storytelling）",
    titleEs: "Senior Art Director",
    reason: "负责 360 campaign、品牌故事、客户提案和视频/动效延展；英文高水平明确，AI 和 motion 是加分项。",
    next: "只在 senior agency 经验真实匹配时投。准备 campaign concept → art direction → production → final rollout 的完整案例，而不是只发静态 VI。",
    language: "英文高水平必需；西语/加泰语工作场景需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "资深 / 5–6 年",
    changeType: "new",
  },
  982: {
    direction: "digital",
    company: "VML The Cocktail",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid，平均约 4 天办公室",
    titleZh: "产品设计师（视觉系统 / 数字品牌桥接）",
    titleEs: "Product Designer",
    reason: "邻近数字品牌路线：从 0 到 1 产品、视觉一致性、accessibility、Figma 和 design system；英文要求明确，适合证明品牌如何落到数字产品系统的人。",
    next: "仅在 portfolio 有界面系统、组件、用户流程和产品决策时投；不要只提交 VI 项目。先确认平均办公室天数、薪资和 work permit。",
    language: "英文要求明确；公开正文未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "中高级 / 4+ 年",
    changeType: "new",
  },
  983: {
    direction: "brand",
    company: "InfoHuaxin / 华新分类中文渠道",
    chineseFit: true,
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / 全职；条件待核验",
    titleZh: "广告公司全职平面设计师（中文线索）",
    titleEs: "Diseñador/a gráfico/a — pista de canal chino",
    reason: "中文分类页 7 月 22 日出现的全职平面设计师线索，要求经验、AI、工作居留和全保；但没有公司主体、薪资、地址或正式申请入口。",
    next: "只先用中文问公司全称、地址、薪资、合同/社保、软件、工作内容比例和工作语言；确认主体后再发 CV/portfolio。",
    language: "中文渠道；工作语言未公开",
    applicationMode: "chineseCheck",
    changeType: "new",
  },
  984: {
    direction: "digital",
    company: "Waiis",
    statusKey: "verify",
    locationKey: "other",
    locationLabel: "Manresa / 4 天办公室 + 1 天远程",
    titleZh: "平面设计与文案（Manresa 版）",
    titleEs: "Graphic Designer and Copywriter — Manresa",
    reason: "新版本职责仍覆盖 web、landing、social、paid、deck、motion 和 AI，并公开 €35,000–40,000；但地点从旧 Barcelona 版本变为 Manresa。",
    next: "先确认是否仍收申请、实际办公地址、工作语言、employment/freelance 形式和 Barcelona 通勤可行性；不要沿用旧 Barcelona 帖作为地点证据。",
    language: "西语职位；语言与合同需确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 2–5 年",
    changeType: "refresh",
  },
  985: {
    direction: "digital",
    company: "The Builder Studios",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote EU timezones / freelance（Spain 合同待确认）",
    titleZh: "视觉设计师（品牌视觉 + motion）",
    titleEs: "Visual Designer — Remote EU / Freelance",
    reason: "官方岗位同时要求高质量品牌视觉、motion graphics、GIF/Lottie、pitch deck、品牌一致性和 visual standards/guidelines，工具包括 Figma、Adobe 和 After Effects；与数字品牌延展和动态研究直接相连。",
    next: "用英文 CV + portfolio 申请；首页放 brand systems、motion studies、数字资产和可复用 guidelines。先确认 Spain contractor、费率、项目量、合同期限和税务方式。",
    language: "英文优先；岗位未说明西语，Spain 合同资格待确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3+ 年；freelance",
    changeType: "new",
  },
  986: {
    direction: "brand",
    company: "COROS",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote UK / EU（Spain EOR 与出差待确认）",
    titleZh: "品牌创意制作人（产品发布 / 影像 / motion）",
    titleEs: "Brand Creative Producer — Remote UK / EU",
    reason: "官方岗位覆盖产品发布、运动员故事、品牌影片、社媒内容、赛事激活、硬件/软件教育，以及从 brief、拍摄到剪辑交付的完整品牌内容链路；明确写 UK/EU 和 compliant EOR。",
    next: "用英文材料先询问 Spain EOR、欧洲出差频率、美国团队协作时段、薪资和制作/设计比例；作品集放品牌发布、storyboard、剪辑和视觉一致性案例。",
    language: "英文优先；未列西语，Spain 合同资格待确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3+ 年；full-time",
    changeType: "new",
  },
  987: {
    direction: "brand",
    company: "Casa Asia / HKU Europe",
    chineseFit: true,
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona（中英西三语与营销/运营门槛）",
    titleZh: "Marketing & Branding Officer（HKU Europe）",
    titleEs: "Marketing & Branding Officer — HKU Europe",
    reason: "这是 Barcelona 中文生态里少见的清晰品牌岗位：负责品牌指南一致性、网站/社媒/邮件、campaign、活动、供应商与数据分析；JD 明确要求中文、英文和西语。",
    next: "只有西语能实际工作且接受营销/运营比例较高时再投；先问合同、薪资、到岗、启动时间、视觉制作是否内包，以及 WeChat/Xiaohongshu/Weibo 的工作比例。",
    language: "中文、英文、西语均为 essential；西语是硬门槛",
    applicationMode: "chineseCheck",
    experienceKey: "mid",
    experienceLabel: "中级；marketing / branding",
    changeType: "new",
  },  988: {
    direction: "digital",
    company: "PVcase",
    statusKey: "live",
    locationKey: "remote",
    locationLabel: "Spain remote / Barcelona office option",
    titleZh: "品牌动态设计师（Spain remote / €32k–42k）",
    titleEs: "Motion Designer — Remote Spain",
    reason: "目前最完整的 Spain-remote Brand + Motion 入口之一：品牌 campaign、社媒/广告/网站/视频、产品 UI key visual、storyboard、品牌指南、可复用模板和 AI workflow 都在官方职责里，申请表直接确认 Spain/Catalunya。",
    next: "用英文材料直接申请；首屏放 identity → motion、产品解释视觉、storyboard、模板系统和 AI 辅助流程。确认合同实体、Barcelona office 频率、福利和薪资是否按 Spain band。",
    language: "英文必需；未列西语硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / 3–5+ 年",
    changeType: "new",
  },
  989: {
    direction: "digital",
    company: "Storisell",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / Barcelona hybrid 或 onsite",
    titleZh: "动态设计师（Spain / Barcelona 团队）",
    titleEs: "Motion Designer — Spain",
    reason: "官方 careers 明确写 Spain remote、Barcelona/Valencia in-house 团队，工作覆盖 storyboard、illustration、animation、sound design 和 final proofing，并可直接发 CV/portfolio 到 hr@storisell.com。",
    next: "先邮件确认当前是否仍招、薪资/合同、语言和办公室频率，以及岗位是 explainer/video production 还是包含 brand-system design；材料突出完整制作链路。",
    language: "公开页面未列硬语言门槛；需确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级；motion production",
    changeType: "new",
  },
  990: {
    direction: "digital",
    company: "Revolut",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote（官方详情待重新打开）",
    titleZh: "动态设计师（Brand Studio / Spain remote）",
    titleEs: "Motion Designer — Remote Spain",
    reason: "官方搜索结果明确显示 Brand Studio、Spain remote 与 Apply，但本轮直接打开详情页遇到 cache miss；证据等级低于已打开 ATS，不把它当已完全确认的可投岗位。",
    next: "先重新打开 revolut.com 官方详情，确认薪资、seniority、Spain payroll 和 portfolio 要求；页面稳定后再用 motion-first CV 投递，不使用第三方入口。",
    language: "英文国际团队；具体要求待官方详情恢复",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "待确认",
    changeType: "new",
  },  991: {
    direction: "digital",
    company: "Santander España",
    statusKey: "live",
    locationKey: "madrid",
    locationLabel: "Madrid / Spain；hybrid 待确认",
    titleZh: "Creative Tech & Digital Designer（CRM / email / AI）",
    titleEs: "Creative Tech & Digital Designer — Madrid",
    reason: "官方 Workday 明确覆盖 CRM、email、newsletter 与 lifecycle campaign 创意，要求 art direction、Figma components/variants/templates、modular systems、accessibility、email QA，并允许 AI-assisted ideation/versioning/personalization；是品牌系统与数字品牌延展的强邻接机会。",
    next: "先打开 ATS 确认当前 Apply、hybrid/office pattern、Spanish working-language expectations 与薪资；投递时使用 brand-system + digital lifecycle + AI workflow 证据，而不是泛平面作品。",
    language: "professional English preferred；西语工作环境待确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / CRM & digital systems",
    changeType: "new",
  },
  995: {
    direction: "brand",
    company: "Amenitiz",
    statusKey: "live",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Spain；需搬迁或在地",
    titleZh: "Senior Brand & Content Manager（品牌内容 / 6个月）",
    titleEs: "Senior Brand & Content Manager — Barcelona",
    reason: "官方 Greenhouse 可直接 Apply，负责四市场品牌内容、全渠道文案、editorial calendar、creative briefing 与 brand positioning；但核心是 copywriting/content strategy，不是纯视觉岗位。",
    next: "只有在英文文案能力和西语/法语/意大利语至少一种母语级条件真实匹配时再投；准备真人写作 cover letter，不用 AI 代写，并把作品集当作品牌思考佐证。",
    language: "英语工作语言；西语/法语/意大利语至少一种 native-level",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "中高级 / brand content",
    changeType: "new",
  },
  996: {
    direction: "ecommerce",
    company: "PriorityChef",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote；Spain 资格待确认",
    titleZh: "Amazon Creative Designer / 3D（电商视觉）",
    titleEs: "Amazon Creative Designer / 3D — Remote",
    reason: "官方 Workable 申请页真实可用，表单直接核验 Amazon image stacks、A+、作品链接和 Blender/等效 3D；公开职责覆盖 hero images、短视频、brand store 和社媒视觉，是电商品牌延展路线。",
    next: "先确认 Spain resident、合同/payroll、薪资、时区、3D产能和测试是否付费；条件可接受时用 e-commerce/product storytelling 入口投递，不要只发泛 VI。",
    language: "未公开；申请前确认工作语言",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / e-commerce visual",
    changeType: "new",
  },
  997: {
    direction: "brand",
    company: "Restate",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe remote；Spain 未列",
    titleZh: "Founding Brand Designer（AI infrastructure）",
    titleEs: "Founding Brand Designer — Europe Remote",
    reason: "官方 Ashby 索引显示从 visual language、identity、website 到 motion、design system、HTML/CSS/JS prototype 的完整品牌系统职责；但 50% contractor 起步且官方列出的国家不含 Spain。",
    next: "先问 Spain contract、rate/周期、转正条件和技术协作深度；材料用 identity → website → motion/system 的完整案例，不要只展示静态 logo。",
    language: "英语工作环境待官方确认；西语未列",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / founding brand systems",
    changeType: "new",
  },
  998: {
    direction: "digital",
    company: "Joko",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Barcelona / remote；模式待确认",
    titleZh: "Product Designer（Brand × Product Systems）",
    titleEs: "Product Designer — Barcelona / Remote",
    reason: "官方 Ashby 索引显示 Barcelona 可选、Remote、€52K–87K + equity，并与 Brand Design 直接协作；职责覆盖 mobile/web/extension、成熟 design system 和品牌一致性，是数字品牌延展邻接而非纯品牌岗。",
    next: "只在愿意投产品视觉/系统方向时考虑；先确认 Barcelona 实际远程、Spain 合同、职级和 UX/研究比重，材料补品牌进入组件和 shipped product 的证据。",
    language: "未见西语硬门槛；官方详情恢复后再确认",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / product systems",
    changeType: "new",
  },
  999: {
    direction: "production",
    company: "Gameloft",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid",
    titleZh: "Studio Art Director（游戏视觉 / cross-platform）",
    titleEs: "Studio Art Director — Barcelona",
    reason: "官方 Gameloft 职位页明确列出 Barcelona、Hybrid、Permanent contract、Manager Role: Yes、Cross-Platform 和 Director-level；SmartRecruiters ATS 本轮返回 cache miss，完整职责仍需现场复核。",
    next: "先确认具体游戏项目、视觉方向职责、管理比例、工具、语言、办公室频率、薪资和测试；只有游戏/跨平台视觉方向匹配时再投。",
    language: "未公开；先确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / game visual direction",
    changeType: "new",
  },
  1000: {
    direction: "motion",
    company: "Designity",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote EMEA / LATAM；Spain contract待确认",
    titleZh: "Motion Designer（AI-Driven）",
    titleEs: "Motion Designer (AI-Driven) — Remote EMEA",
    reason: "官方 Designity careers 页显示 Full-time、Remote、EMEA/LATAM，职责覆盖品牌/社媒/数字 campaign、storyboard、AE/Premiere、Lottie 和 AI；需要至少 5 小时与美国东部时间重叠，申请表本轮未加载。",
    next: "先确认 Spain EOR/contract、固定薪资、实际重叠时段、客户行业和测试；投递时使用 motion-first 英文材料，展示品牌一致性、动态系统和 AI 工作流。",
    language: "英语；需 EST overlap",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / AI-driven motion",
    changeType: "new",
  },
  1001: {
    direction: "brand",
    company: "Pocket Worlds / Highrise",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote International；EU/LATAM含む",
    titleZh: "Senior Graphic Designer（Highrise 数字时尚品牌）",
    titleEs: "Senior Graphic Designer — Highrise / Remote International",
    reason: "官方 Ashby 索引显示 Remote USA/EU/LATAM、Full-time 和约 USD100,000；负责 Highrise visual output、campaign、promotional assets、视觉身份和团队创意标准，但直页是 JavaScript shell，且游戏/数字时尚作品要求极高。",
    next: "先确认 Spain/EU 合同与薪资适用性、character/illustrative 与品牌 campaign 比例、测试和管理职责；只有作品集能证明数字时尚/游戏视觉 craft 时再投。",
    language: "英语；Spain contract待确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / game-fashion visual",
    changeType: "new",
  },
  1002: {
    direction: "motion",
    company: "Pocket Worlds / Highrise",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote International；European time zone preferred",
    titleZh: "Motion Designer（Marketing / Highrise）",
    titleEs: "Motion Designer (Marketing) — Highrise",
    reason: "官方 Ashby 索引显示国际远程、欧洲时区优先，负责 Meta/TikTok/Google/App Store 的静态与动效 performance creatives，从 concept 到 animation/editing/sound 全流程；直页本轮是 JavaScript shell。",
    next: "先确认 Spain payroll、团队时区、薪资、游戏经验和 KPI；投递时用 performance-motion 版本，展示 hook、前 3 秒、静态/动态变体和 A/B 迭代。",
    language: "英语；欧洲时区优先",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中高级 / performance motion",
    changeType: "new",
  1003: {
    direction: "brand",
    company: "Meridian Agency",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Fully remote / Barcelona-born",
    titleZh: "Graphic Designer（兼职）",
    titleEs: "Graphic Designer (Part-time) — Remote",
    reason: "官方招聘页仍列出 Graphic Designer；Barcelona-born agency、全远程、专业英语，但仅兼职、无薪资且只能邮件申请。",
    next: "先用英文邮件确认 Spain contractor、每周时长、时薪、版权和工作语言；通过后再发送社媒品牌系统和多尺寸视觉案例。",
    language: "专业英语必需；西语未说明",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / part-time visual",
    changeType: "new",
  },
  1004: {
    direction: "motion",
    company: "Meridian Agency",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Fully remote / Barcelona-born",
    titleZh: "Motion Designer（兼职）",
    titleEs: "Motion Designer (Part-time) — Remote",
    reason: "官方招聘页当前列出 Motion Designer；全远程、英语工作，但兼职、时区、薪资与合同均未公开。",
    next: "先确认每周时长、固定时段、视频版权和交付流程；用 4–6 个 storyboard 到 final 的短 Reel 作为首轮材料。",
    language: "专业英语必需；西语未说明",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / social motion",
    changeType: "new",
  },
  1005: {
    direction: "brand",
    company: "Free Practice",
    statusKey: "verify",
    locationKey: "other",
    locationLabel: "Málaga / onsite + Friday WFH",
    titleZh: "Senior Graphic Designer（Málaga）",
    titleEs: "Senior Graphic Designer — Málaga",
    reason: "原始详情页明确品牌 identity、campaign、motion、spatial/experiential design、7+ years 和 2026-08-19 截止日；但必须在 Málaga 工作。",
    next: "只有愿意搬迁且资历匹配时申请；先确认薪资、合同、搬迁成本和表单状态，作品集突出 identity、campaign、motion 与空间品牌。",
    language: "英语明确；本地工作语言需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / identity + experience",
    changeType: "new",
  },
  1006: {
    direction: "digital",
    company: "Social Scout Email Marketing",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Worldwide remote / EST hours",
    titleZh: "PDP Designer / Landing Page Designer",
    titleEs: "PDP Designer — Remote Contractor",
    reason: "雇主详情页给出全远程、英文、DTC PDP、landing、Figma system 和 CRO；但 contractor 与 9:00–17:00 EST 是主要投递阻力，未暴露 ATS。",
    next: "先确认 Spain contractor、税务付款、实际重叠时段和测试是否付费；材料放 responsive e-commerce brand system、A/B 迭代与转化视觉。",
    language: "流利英语必需；EST 工作时段",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / e-commerce conversion",
    changeType: "new",
  },  1007: {
    direction: "brand",
    company: "ORBIDI",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / Sant Cugat / hybrid",
    titleZh: "Senior Graphic Designer / Brand Visual Lead",
    titleEs: "Senior Graphic Designer — Brand Visual Lead",
    reason: "官方 Teamtailor 页面显示 Barcelona、Híbrido、Full-time 和 Enviar solicitud；职责直指 Key Visual、brand book、guidelines、campaign、PR、paid media 与全触点一致性，但要求流利西语。",
    next: "只有能处理西语 brief、会议和反馈时再投；作品集突出 identity system、brand governance、campaign rollout、motion microinteractions 和团队指导。",
    language: "流利西语硬门槛；英语为 functional",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / brand visual lead",
    changeType: "new",
  },
  1008: {
    direction: "motion",
    company: "1000heads",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote Spain-eligible / freelance",
    titleZh: "Motion Designer（Freelance Remote）",
    titleEs: "Motion Designer, Freelance — Remote Spain",
    reason: "官方 Careers 页列出 Madrid Motion Designer，并链接 Workable；Spain 可申请、3+ 年、Figma/After Effects、storyboard、campaign look & feel 和多地区模板均明确。",
    next: "先确认 freelance 费率、项目连续性、版权和 UK/CET 重叠；投递 motion-first Reel，展示 storyboard、look & feel、2D/3D 和多地区变体。",
    language: "英语良好至优秀；西语未列为硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / social motion",
    changeType: "new",
  },
  1009: {
    direction: "motion",
    company: "Fever",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / hybrid",
    titleZh: "Senior AI Creative Designer",
    titleEs: "Senior AI Creative Designer — Madrid",
    reason: "官方 Fever Careers 显示 Indefinite、Full-time、Apply；职责覆盖 AI creative workflow、key visual、motion、video、paid/organic、landing assets 与 performance iteration，但要求 6+ 年和西英双语。",
    next: "若西语未达流利，不进入首投；若满足，展示 AI 辅助但由人工把控 craft 的 campaign system、模板、localisation 和数据迭代。",
    language: "西语 + 英语流利硬门槛",
    applicationMode: "spanish",
    experienceKey: "senior",
    experienceLabel: "高级 / AI creative systems",
    changeType: "new",
  },
  1010: {
    direction: "digital",
    company: "Fever",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / hybrid / temporary",
    titleZh: "Creative Graduate — AI Video & Design",
    titleEs: "Graduate Program — Creative Next Gen AI Video & Design",
    reason: "官方职位页显示 Temporary、Full-time、Madrid、Apply；约 1 年经验即可，覆盖短视频、key visual、thumbnail、A/B 变体和 GenAI，但要求西语+英语双语。",
    next: "只在符合早期经历/实习条件并能在 Madrid 工作时考虑；材料放前三秒 hook、短视频变体、AI workflow 和 performance creative，不与高级岗混投。",
    language: "西语 + 双语英语硬门槛",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / graduate creative",
    changeType: "new",
  },
  1011: {
    direction: "brand",
    company: "JustMarkets",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe remote / Spain contract to confirm",
    titleZh: "Head of Design",
    titleEs: "Head of Design — Europe Remote",
    reason: "官方 Greenhouse 显示 Europe、Apply 和 remote work；职责把 visual identity、brand-level art direction、UX/UI、brand guidelines、DesignOps、AI transformation 与 Product/Graphic/Web/Motion 团队领导合并在一岗。",
    next: "先确认 Spain payroll/contract、是否接受 Barcelona、出差和管理范围；若匹配，作品集首屏放 VI governance、跨触点品牌系统、AI workflow、团队 critique 与产品视觉系统。",
    language: "英语为主；其他语言与 Spain 交付条件需确认",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "设计负责人 / brand + product",
    changeType: "new",
  },
  1016: {
    direction: "brand",
    company: "Paradox",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain / Barcelona remote list",
    titleZh: "Creative Director — EdTech",
    titleEs: "Creative Director — EdTech",
    reason: "官方 Ashby 将 Barcelona Remote、Remote Spain 和多个欧洲地点列为可选；职责覆盖双品牌架构、内容格式、脚本/分镜、视觉质量 gate、内容团队领导和 performance creative，但法语 Native/Bilingual 是硬门槛。",
    next: "只有具备法语、百万级内容/媒体品牌经验、脚本与团队管理时再投；材料首屏放 brand architecture、content format system、视觉叙事、跨平台 rollout 与数据迭代。",
    language: "法语母语/双语硬门槛；英语流利",
    applicationMode: "english",
    experienceKey: "lead",
    experienceLabel: "创意负责人 / brand + content",
    changeType: "new",
  },
  1017: {
    direction: "motion",
    company: "The Flex / Base360",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / global location list",
    titleZh: "AI Video Creator",
    titleEs: "AI Video Creator — Remote Spain",
    reason: "官方 Ashby 显示 Spain、Full time、Remote；工作覆盖产品发布视频、广告、社媒短片、brand film、kinetic typography、product demo 与 AI 视频/图像/声音工作流。",
    next: "先核实 Spain 合同实体、主体、时区和项目；Reel 突出前三秒 hook、短视频变体、AI workflow、motion system 和品牌一致性。",
    language: "英语工作沟通；西语未列为硬门槛",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "中级 / AI video + motion",
    changeType: "new",
  },
  1028: {
    direction: "brand",
    company: "Zak Group",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "全球 Remote freelance；Spain contractor 条件需确认",
    titleZh: "高级品牌设计师（自由职业 / 品牌身份）",
    titleEs: "Senior Brand Designer (Freelance)",
    reason: "官方工作页明确 Remote、Freelance、Rolling，并接受全球申请；职责直接覆盖 symbols、logos、logotypes、lettering、type design、illustration 与品牌身份项目，2D motion/3D 为加分。",
    next: "先确认项目制、日费/付款币种、项目量、Spain contractor 税务和作品集 PDF 要求；投递以品牌身份系统、字体/标志推导、应用延展和少量 motion 为主。",
    language: "英语申请；全球 remote 资格清楚，Spain contractor 条件需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / brand identity",
    changeType: "round57",
  },
  1029: {
    direction: "brand",
    company: "Together",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote UK & Europe；Spain payroll 待确认",
    titleZh: "高级品牌设计师（B2B 科技 / 品牌系统）",
    titleEs: "Senior Brand Designer",
    reason: "官方 careers 页明确 Remote, UK & Europe、£40,000–£65,000 和申请表；职责连接品牌身份、可扩展系统、web/product experience，要求 8+ 年、Figma、Adobe CC 与 creative AI。",
    next: "优先确认 Spain 合同主体、团队集合/出差、级别和 portfolio 期望；若匹配，用英文 case study 展示 strategy→identity→guidelines→web/product rollout、Figma tokens/components 与客户呈现。",
    language: "英语国际团队；Spain payroll 与出差安排需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 8+ 年品牌项目",
    changeType: "round57",
  },
  1030: {
    direction: "brand",
    company: "HelloKindred",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote-first；UK shift；Spain 合法工作资格未公布",
    titleZh: "高级平面设计师（B2B 品牌 / 营销）",
    titleEs: "Senior Graphic Designer (fixed-term 1 year)",
    reason: "官方 SmartRecruiters 详情显示 Remote、Full-time、40 小时和 UK shift；职责覆盖品牌 campaign、sales deck、event materials、infographics 与客户交付，要求 6–7+ 年 B2B、Adobe、PowerPoint、Figma/AI。",
    next: "先确认 Spain 是否可雇、fixed-term 期限、Barcelona 时区对应的 16:00–01:00 工作段、薪资和 assessment 是否付费；材料优先放 B2B deck、品牌 campaign、event/white-paper 系统。",
    language: "英语；UK shift；Spain 合法工作资格需确认",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / 6–7+ 年 B2B",
    changeType: "round57",
  },
  1031: {
    direction: "digital",
    company: "Voodoo",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / remote; Spain employment to confirm",
    titleZh: "UI/UX Designer - Hole.io",
    titleEs: "UI/UX Designer - Hole.io",
    reason: "Official Ashby content shows Barcelona, Remote, Full-time and Apply. The role supports the Art Director and owns scalable game UI, a UI Style Bible, reusable components and 2D visual assets in Figma. This is a game-visual adjacency rather than commercial VI, and the direct ATS is JavaScript-only in this pass.",
    next: "Confirm Spain employment, current freshness and the expected game/UI portfolio. Apply only with shipped-game UI or a strong digital visual-system case showing hierarchy, components, visual language documentation and asset consistency.",
    language: "English; Spain employment to confirm",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "4+ years / shipped mobile games",
    changeType: "round59",
  },
  1032: {
    direction: "motion",
    company: "Ultralytics",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / hybrid 3 days onsite + 2 remote",
    titleZh: "Video Editor - AI product and motion",
    titleEs: "Video Editor",
    reason: "Official Ashby content states Madrid, Spain, full-time hybrid 3/2, EU work authorization and no visa sponsorship. The scope covers editorial, light After Effects motion, AI/product visualisation, interviews, events, case studies, YOLO overlays and multi-platform packaging; it is not a static brand-designer role.",
    next: "Confirm salary, working language, office cadence and test-task terms. If acceptable, submit a motion reel with product explanation, clean overlay/title systems, social cutdowns and brand-consistent technical storytelling.",
    language: "English or Spanish working language to confirm; EU work authorization required",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Video editing + light motion / AI visualization",
    changeType: "round59",
  },
  1033: {
    direction: "digital",
    company: "Ashby",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Barcelona / Spain / EU remote",
    titleZh: "高级设计工程师（EU / 设计系统）",
    titleEs: "Staff Design Engineer - EU",
    reason: "Official Ashby content lists Barcelona and Spain, Remote, Full-time and €154k–€188k L4 / €208k–€250k L5 plus equity. The role combines visual quality, design-system expansion, UI/UX, wireframing and production TypeScript/React/CSS implementation; it is a design-engineering adjacency rather than a commercial VI role.",
    next: "先确认 staff-level engineering depth, Spain payroll/entity, current live application and remote policy. Only use a portfolio that pairs shipped UI with design-system specs, tokens/components and design-to-code decisions; static brand identity work alone is insufficient.",
    language: "English; no Spanish requirement shown",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "Staff / design engineering",
    changeType: "round61",
  },
  1034: {
    direction: "digital",
    company: "SearchApi",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Remote / Spain explicitly listed",
    titleZh: "前端工程与 UI 设计师（开发者工具）",
    titleEs: "Frontend Engineer & UI Designer (Developer Tooling)",
    reason: "Official Ashby content lists Remote - Spain and Full-time. The hybrid role owns the dashboard, API playground, docs, marketing site, data visualisation and component system from Figma through production; it is a technical digital-product adjacency, not a pure graphic-design role.",
    next: "先确认 Spain hiring entity, compensation and take-home task. Apply only with two live UI cases that were designed and built by the candidate, showing responsive states, data-dense dashboards, component discipline and a real marketing or docs surface; application asks for the phrase ‘Octopus Tentacle’.",
    language: "Fluent English; no Spanish requirement shown",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Design + production frontend",
    changeType: "round61",
  },
  1035: {
    direction: "digital",
    company: "Kyndryl Vital",
    statusKey: "verify",
    locationKey: "madrid",
    locationLabel: "Madrid / partially remote",
    titleZh: "视觉设计师（AI 产品体验 / 设计系统）",
    titleEs: "Lead, Visual Designer",
    reason: "Official Kyndryl Workday content shows Madrid, Partially Remote, Full-time, Apply and requisition R-57022. The Kyndryl Vital role combines AI/agentic experience design, visual/UI design, branding, key visuals, interactive prototypes and scalable design systems; fluent English and Spanish are explicit.",
    next: "先确认西语实际工作强度、薪资、办公室节奏和创新实验室/产品团队归属。若可投，用西语或双语材料展示把 AI 复杂度转成清晰视觉语言、Figma components, prototypes, design-system rules and brand/motion/presentation extensions; 不要只发静态 logo case.",
    language: "Fluent English + Spanish required",
    applicationMode: "spanish",
    experienceKey: "mid",
    experienceLabel: "2–5 years visual/UI/digital product",
    changeType: "round62",
  },
  1036: {
    direction: "brand",
    company: "Algofy",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain / hybrid; remote-first policy to confirm",
    titleZh: "Brand & Web Designer（数字营销 / 包装延展）",
    titleEs: "Graphic & Web Designer",
    reason: "The official Algofy careers page lists a full-time Graphic & Web Designer for Spain with graphic/video content for digital marketing, websites, traditional branding, print and packaging. It is relevant brand extension work but broader and more performance-creative-heavy than pure VI; the official Apply Here route currently points to LinkedIn.",
    next: "Use the official careers page and employer-linked application to confirm current receipt, Spain payroll/entity, exact hybrid or remote cadence, salary and whether this is the same vacancy advertised as We Are Stellar/Algofy. If confirmed, apply in English with a brand system plus paid-social static/motion, web/email and packaging cases.",
    language: "English-first; high-level English/C2 shown in the employer listing; Spanish not stated",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Graphic/web production + branding versatility",
    changeType: "round63",
  },
  1038: {
    direction: "motion",
    company: "Lodgify",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "EMEA remote / Barcelona HQ / Spain contract to confirm",
    titleZh: "Motion Designer（Lodgify，EMEA 远程）",
    titleEs: "Motion Designer",
    reason: "The official Lever detail lists EMEA, Marketing, Freelance Contract and Remote, and says Lodgify is headquartered in Barcelona. The role connects motion to brand campaigns, performance marketing, product storytelling and social, while evolving motion principles, reusable templates and AI-enabled workflows with After Effects and Premiere Pro.",
    next: "Confirm Spain contractor eligibility, rate, invoicing/tax setup, timezone, availability and the split between system ownership and production. If eligible, apply in English with a concise motion reel, one brand-motion system, campaign/product/social cutdowns, sound-aware editing and an AI workflow example; do not rely on a static VI-only case.",
    language: "English application; Spanish not stated",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Motion design + brand/marketing storytelling",
    changeType: "round65",
  },
  1039: {
    direction: "motion",
    company: "Tripledot Studios",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / permanent full-time / hybrid",
    titleZh: "Motion Designer（Tripledot，巴塞罗那）",
    titleEs: "Motion Designer",
    reason: "The official Pinpoint detail is live with Apply Now and states Marketing, Permanent - Full Time, Barcelona, ES and Hybrid. The accessible ATS output leaves the responsibilities and required-skills sections empty, so this is a real opening but not yet a fully evidenced brief.",
    next: "Open the live application form and confirm the actual marketing/game-versus-brand scope, software, salary, language, hybrid days and portfolio/test-task requirements. If it is acquisition motion, lead with short-form game/social performance work; if it includes brand systems, add a compact visual-language and template case.",
    language: "Not exposed in the accessible ATS shell; confirm before tailoring",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "Marketing motion / games visual adjacency",
    changeType: "round65",
  },
  1037: {
    direction: "motion",
    company: "JustMarkets",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Europe / remote work offered; Spain entity to confirm",
    titleZh: "Motion Designer / Video Editor（欧洲远程）",
    titleEs: "Motion Designer/ Video Editor",
    reason: "The official JustMarkets careers detail lists Europe, Full-time and Apply, with short-form social video, event animations, localization, master-video variations, After Effects templates, AI tools and brand-guideline adherence. It is a useful motion-to-digital-brand route, but the country of employment and Spain payroll are not stated.",
    next: "Before tailoring, confirm whether Spain residents can be employed or contracted, the legal entity, compensation, timezone, language and the ratio of social production to brand-system work. If eligible, use a motion reel showing localization, format cutdowns, event loops, brand-safe templates and AI-assisted production.",
    language: "English intermediate or higher; Spanish not stated",
    applicationMode: "english",
    experienceKey: "mid",
    experienceLabel: "2+ years motion design and video editing",
    changeType: "round64",
  },
  1018: {
    direction: "motion",
    company: "EverAI",
    statusKey: "verify",
    locationKey: "remote",
    locationLabel: "Spain remote / B2B or freelance to confirm",
    titleZh: "Senior AI Vertical Mini-Series Director",
    titleEs: "Senior AI Vertical Mini-Series Director — Spain",
    reason: "官方 Ashby 显示 Spain、Full time、Remote 和 Europe EUR47k–107k；职责覆盖 9:16 短剧、脚本、导演、剪辑、AI 角色一致性和 trailer，但标题 Freelance 与 full-time listing 存在合同矛盾。",
    next: "只在具备短视频导演/剪辑和 AI video 实作时考虑；先确认 B2B/雇佣、税务、产量、内容边界和测试是否付费，不先做完整无偿剧集。",
    language: "英语流利",
    applicationMode: "english",
    experienceKey: "senior",
    experienceLabel: "高级 / AI narrative video",
    changeType: "new",
  },  },});
Object.assign(CURATED, {
  1040: {
    direction: "brand",
    company: "Roman / La Casa de Carlota",
    statusKey: "verify",
    locationKey: "barcelona",
    locationLabel: "Barcelona / hybrid / indefinite full-time",
    titleZh: "初级平面设计师（LCDC 品牌、编辑与数字）",
    titleEs: "Junior Graphic Designer LCDC",
    reason: "官方 Roman board 与 Factorial 详情已重新显示当前 Apply：Barcelona、无限期、全职、混合办公、9 月入职。职责直接覆盖 branding、editorial、campaign、digital content、art direction、各类格式适配与视觉一致性，是本轮最贴品牌核心的重开岗位。",
    next: "这是西语挑战岗，不进入中文首投。只有能处理中高加泰语与西语工作环境时再投；材料突出品牌概念、编辑系统、数字 campaign、Adobe 执行、少量 motion/AI，并先确认 2026 年 9 月入职、薪资与每周到岗节奏。",
    language: "加泰语 + 西语中高水平为硬门槛；英语中等为加分",
    applicationMode: "spanish",
    experienceKey: "junior",
    experienceLabel: "初级 / 1–3 年",
    changeType: "round66",
  },
});
const els = {
  totalCount: document.querySelector("#totalCount"),
  priorityCount: document.querySelector("#priorityCount"),
  chineseTotal: document.querySelector("#chineseTotal"),
  recentChineseTotal: document.querySelector("#recentChineseTotal"),
  liveCount: document.querySelector("#liveCount"),
  verifyCount: document.querySelector("#verifyCount"),
  closedCount: document.querySelector("#closedCount"),

  updatedAt: document.querySelector("#updatedAt"),
  priorityGrid: document.querySelector("#priorityGrid"),
  languageCautionGrid: document.querySelector("#languageCautionGrid"),
  priorityTemplate: document.querySelector("#priorityTemplate"),
  resultTemplate: document.querySelector("#resultTemplate"),
  resultsList: document.querySelector("#resultsList"),
  visibleCount: document.querySelector("#visibleCount"),
  allSourceCount: document.querySelector("#allSourceCount"),
  chineseCount: document.querySelector("#chineseCount"),
  linkedinCount: document.querySelector("#linkedinCount"),
  otherCount: document.querySelector("#otherCount"),
  searchInput: document.querySelector("#searchInput"),
  directionFilter: document.querySelector("#directionFilter"),
  locationFilter: document.querySelector("#locationFilter"),
  languageFilter: document.querySelector("#languageFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  freshnessFilter: document.querySelector("#freshnessFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  laborFilter: document.querySelector("#laborFilter"),
  experienceFilter: document.querySelector("#experienceFilter"),
  riskFilter: document.querySelector("#riskFilter"),
  resetFilters: document.querySelector("#resetFilters"),
  validRouteOnly: document.querySelector("#validRouteOnly"),
  excludeLowPay: document.querySelector("#excludeLowPay"),
  excludeInternships: document.querySelector("#excludeInternships"),
  presetNote: document.querySelector("#presetNote"),
  loadMore: document.querySelector("#loadMore"),
  scopeButtons: [...document.querySelectorAll(".scope-button")],
  presetButtons: [...document.querySelectorAll(".preset-button")],
  sourceTabs: [...document.querySelectorAll(".source-tab")],
  progressFilterButtons: [...document.querySelectorAll(".progress-filter-button")],
  statusSummaryButtons: [...document.querySelectorAll(".status-summary__item")],

};

const state = {
  scope: "all",
  source: "all",
  preset: "profile",
  progressFilter: "all",
  limit: 18,
};

const PROGRESS_STORAGE_KEY = "barcelona-opportunity-progress-v1";
const PROGRESS_LABELS = {
  untracked: "未标记",
  shortlist: "待投",
  applied: "已投递",
  skipped: "跳过",
};

function loadProgressState() {
  try {
    const stored = window.localStorage?.getItem(PROGRESS_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : {};
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

const savedProgress = loadProgressState();

const SOURCE_LABELS = {
  chinese: "华人网 / 中文社区",
  linkedin: "领英",
  other: "公司官网 / 其他",
};

const PRESET_NOTES = {
  profile: "默认只显示可以先用中文联系的 Barcelona / 西班牙远程机会；需要完整英文材料或西语工作的岗位不会混进来。",
  actionable: "只看现在值得马上处理的机会：Barcelona / 西班牙远程、中文可先联系、有具体入口、近期发布或页面明确开放，并排除低薪风险与实习。",
  chinese: "扩展查看 Barcelona、Madrid 与西班牙远程的全部中文相关机会；这一档可能包含“需要基础西语”或“语言需确认”的岗位，请看卡片红黄标记。",
  english: "英语岗位只作为备选单独放在这里；它们不会出现在默认首页。需要英文简历、作品集说明或英文面试时，卡片会明确提示。",
  brand: "聚焦品牌视觉、VI、设计系统、数字 campaign、网页与跨渠道品牌延展。",
  stable: "优先全职、正式合同或明确长期岗位；排除实习、兼职、自由职业、匿名客户入口，以及已识别的低薪或无薪风险。",
  core: "只看品牌系统、VI、数字品牌和 motion 交叉的硬核岗位；排除实习、低薪、匿名客户、研究线索与已关闭记录，不受语言筛选限制。",
  none: "不套用个人画像；仅按下方范围、来源和手动条件筛选。",
};

const DIRECTION_LABELS = {
  brand: {
    zh: "品牌视觉 / VI",
    es: "Identidad visual / branding",
  },
  digital: {
    zh: "数字品牌延展",
    es: "Extensión digital de marca",
  },
  social: {
    zh: "新媒体 / 短视频",
    es: "Redes sociales / vídeo corto",
  },
  ecommerce: {
    zh: "电商视觉",
    es: "Diseño visual para e-commerce",
  },
  production: {
    zh: "广告印刷 / 平面制作",
    es: "Imprenta / producción gráfica",
  },
  other: {
    zh: "其他设计相关",
    es: "Otras funciones relacionadas",
  },
};

const ROLE_RULES = [
  [/文员 with Photoshop\/Adobe Illustrator|产品拍摄与修图文员/i, ["产品拍摄与修图文员（旧岗核验）", "Auxiliar de fotografía y retoque de producto (vacante antigua)"]],
  [/广告平面设计师.*视频剪辑.*摄影师/i, ["广告平面设计 / 视频剪辑 / 摄影（旧岗核验）", "Diseño gráfico publicitario, vídeo y fotografía (vacante antigua)"]],
  [/电脑修图工作人员|商品图片处理/i, ["电脑修图 / 商品图片处理（旧岗确认）", "Retoque digital y tratamiento de imágenes (vacante antigua)"]],
  [/线上营销.*拍照.*修图|拍照、修图与网页基础/i, ["线上营销 / 拍照与修图（旧岗确认）", "Marketing digital, fotografía y retoque (vacante antigua)"]],
  [/鞋业电商运营|产品图、详情页与广告投放/i, ["鞋业电商运营 / 产品视觉（旧岗确认）", "Operaciones de e-commerce y diseño visual de producto (vacante antigua)"]],
  [/视频拍摄和剪辑师|巴塞罗那视频拍摄和剪辑师/i, ["视频拍摄与剪辑（旧岗确认）", "Grabación y edición de vídeo (vacante antigua)"]],
  [/短视频内容运营\s*\/\s*出镜博主/i, ["短视频内容运营 / 出镜博主（旧岗确认）", "Presentadora y creadora de contenido para vídeo corto"]],
  [/市场营销.*出镜拍摄.*后期剪辑/i, ["市场营销 / 出镜拍摄与后期剪辑（旧岗确认）", "Marketing, grabación en cámara y edición de vídeo"]],
  [/网销运营.*品牌视觉.*Amazon/i, ["网销运营 / 品牌与电商视觉（旧岗确认）", "Operaciones digitales y diseño visual para e-commerce"]],
  [/兼职新媒体助理.*公众号排版/i, ["兼职新媒体助理（远程 / 灵活）", "Asistente de redes sociales a tiempo parcial"]],
  [/文化艺术空间.*运营助理|运营助理.*Canva 海报/i, ["文化艺术空间运营助理 / 学分实习", "Asistente de operaciones culturales / prácticas"]],
  [/初级短视频剪辑.*TikTok|Junior Video Clip Editor/i, ["初级短视频剪辑（TikTok / Reels）", "Editor/a júnior de vídeo para TikTok / Reels"]],
  [/欧斯迪.*新媒体运营|新媒体运营.*产品摄影.*小红书/i, ["新媒体运营（产品视觉 / 短视频）", "Operaciones de nuevos medios — producto y vídeo"]],
  [/A1广告.*平面设计师|平面设计师.*海报.*展架.*包装/i, ["平面设计师（广告印刷 / 包装）", "Diseñador/a gráfico/a — publicidad y packaging"]],
  [/VIA.*品牌拓展|品牌拓展.*影视剪辑/i, ["品牌拓展 / 设计与影视剪辑", "Desarrollo de marca, diseño y edición audiovisual"]],
  [/Pepa Deal.*跨境电商|跨境电商.*TikTok.*MCN/i, ["跨境电商 / TikTok 与 MCN 运营", "Operaciones de e-commerce, TikTok y MCN"]],
  [/Community Manager Intern/i, ["社区内容运营实习", "Prácticas de gestión de comunidad y contenido"]],
  [/内容创作\s*\/\s*平面设计专员/i, ["内容创作 / 平面设计专员", "Especialista de contenido y diseño gráfico"]],
  [/社交媒体运营\s*&\s*视频剪辑/i, ["社交媒体运营 / 视频剪辑", "Operaciones de redes sociales y edición de vídeo"]],
  [/新媒体运营：视频剪辑/i, ["新媒体运营（视频 / 图像 / 广告）", "Operaciones de nuevos medios — vídeo, imagen y publicidad"]],
  [/平面设计\s*\+\s*视频剪辑/i, ["平面设计 + 视频剪辑", "Diseño gráfico y edición de vídeo"]],
  [/^新媒体运营$/i, ["新媒体运营", "Operaciones de nuevos medios"]],
  [/行政助理.*简单视频剪辑|EXTRA SOLUCION 2077/i, ["行政助理 / 简单视频剪辑", "Asistente administrativo/a con edición básica de vídeo"]],
  [/空间设计师|餐饮空间.*室内设计师/i, ["餐饮空间 / 室内设计师", "Diseñador/a de interiores para espacios de restauración"]],
  [/99876.*广告公司|广告公司.*CDR.*AI.*排版|客服.*基础排版设计/i, ["广告公司客服 / 基础排版设计", "Atención al cliente y maquetación básica en agencia de publicidad"]],
  [/女装导购.*线上销售拍摄|线上销售.*拍摄/i, ["女装导购 / 电商拍摄", "Dependienta de moda y fotografía para e-commerce"]],
  [/电商订单处理.*线上代理|线上代理.*高风险排除/i, ["电商订单处理 / 线上代理（风险排除）", "Gestión de pedidos / agente online (descartado por riesgo)"]],
  [/Badalona warehouse office clerk requiring simple PS/i, ["仓库办公室文员 / 简单 PS", "Auxiliar de oficina de almacén con Photoshop básico"]],
  [/SMILE JOYAS.*时尚运营师|时尚运营师.*产品搭配/i, ["时尚运营师（陈列 / 社媒视觉）", "Especialista de operaciones de moda (visual / social)"]],
  [/SMILE JOYAS.*社交媒体平台运营专员|社交媒体平台运营专员.*图文/i, ["社交媒体运营专员（图文 / 短视频）", "Especialista de redes sociales (gráfica / vídeo)"]],
  [/SMILE JOYAS.*自建网站运营专员|自建网站运营专员.*网站维护/i, ["网站运营专员（推广 / 品牌内容）", "Especialista de operaciones web (promoción / marca)"]],
  [/Global Community Intern/i, ["全球社区实习生（创作者 / 社区活动）", "Prácticas de comunidad global (creadores / activaciones)"]],
  [/Humanes.*电商运营助理|产品上架与维护/i, ["电商运营助理 / 产品上架维护", "Asistente de e-commerce y gestión de catálogo"]],
  [/Fuenlabrada.*电商运营|电商运营.*美工基础优先/i, ["电商运营 / 运营助理", "Operaciones y asistencia de e-commerce"]],
  [/商业空间设计师助理|室内.*设计师助理/i, ["商业空间设计师助理", "Asistente de diseño de espacios comerciales"]],
  [/礼品批发仓.*平面设计|电脑与平面设计人员/i, ["电脑与平面设计人员", "Diseñador/a gráfico/a para mayorista de regalos"]],
  [/电商视频拍摄剪辑.*脚本文案|TK.*Instagram.*运营合作者/i, ["电商视频与社媒内容合作者", "Colaborador/a de vídeo y contenido para e-commerce"]],
  [/平面美工设计/i, ["平面美工设计", "Diseñador/a gráfico/a"]],
  [/Ciempozuelos.*电商视觉|电商视觉与社媒运营/i, ["电商视觉与社媒运营", "Operaciones visuales de e-commerce y redes sociales"]],
  [/电脑产品短视频内容策划|抖音账号运营/i, ["3C 短视频内容与账号运营", "Contenido de vídeo y gestión de redes para productos 3C"]],
  [/玩具电商运营/i, ["玩具电商运营", "Operaciones de e-commerce de juguetes"]],
  [/产品文案.*图片.*多平台运营/i, ["电商内容与多平台运营", "Contenido y operaciones de e-commerce multicanal"]],
  [/市场宣传策划|新媒体市场专员|市场宣传.*新媒体/i, ["市场宣传 / 新媒体专员", "Especialista de comunicación y redes sociales"]],
  [/D2C.*独立站|独立站.*电商运营助理|独立站运营/i, ["独立站 / 电商运营助理", "Asistente de operaciones de e-commerce"]],
  [/产品上架.*图片处理|图片处理.*网站维护|3C.*产品上架/i, ["电商内容与网站维护", "Contenido de e-commerce y mantenimiento web"]],
  [/marketing\s*&\s*branding officer|marketing and branding officer/i, ["市场与品牌专员", "Especialista de marketing y marca"]],
  [/digital e-?commerce designer/i, ["电商数字视觉设计师", "Diseñador/a digital de e-commerce"]],
  [/senior motion designer/i, ["高级动态设计师", "Diseñador/a sénior de motion graphics"]],
  [/motion designer/i, ["动态设计师", "Diseñador/a de motion graphics"]],
  [/senior graphic designer/i, ["高级平面设计师", "Diseñador/a gráfico/a sénior"]],
  [/lead graphic designer/i, ["平面设计负责人", "Responsable de diseño gráfico"]],
  [/brand graphic designer/i, ["品牌平面设计师", "Diseñador/a gráfico/a de marca"]],
  [/graphic designer/i, ["平面设计师", "Diseñador/a gráfico/a"]],
  [/senior brand designer/i, ["高级品牌设计师", "Diseñador/a sénior de marca"]],
  [/brand designer/i, ["品牌设计师", "Diseñador/a de marca"]],
  [/visual designer/i, ["视觉设计师", "Diseñador/a visual"]],
  [/creative designer/i, ["创意设计师", "Diseñador/a creativo/a"]],
  [/art director/i, ["艺术指导", "Director/a de arte"]],
  [/web graphic designer/i, ["网页视觉设计师", "Diseñador/a gráfico/a web"]],
  [/web designer/i, ["网页设计师", "Diseñador/a web"]],
  [/digital designer/i, ["数字视觉设计师", "Diseñador/a digital"]],
  [/ui\/ux designer|ux\/ui designer/i, ["UI / UX 设计师", "Diseñador/a UI / UX"]],
  [/product designer/i, ["产品设计师", "Diseñador/a de producto"]],
  [/content creator/i, ["内容创作者", "Creador/a de contenido"]],
  [/social media/i, ["社交媒体岗位", "Puesto de redes sociales"]],
  [/new media/i, ["新媒体岗位", "Puesto de nuevos medios"]],
  [/marketing specialist/i, ["市场营销专员", "Especialista de marketing"]],
  [/marketing manager/i, ["市场经理", "Responsable de marketing"]],
  [/operations assistant/i, ["运营助理", "Asistente de operaciones"]],
  [/e-?commerce operations/i, ["电商运营", "Operaciones de e-commerce"]],
  [/intern|internship|trainee/i, ["设计相关实习", "Prácticas relacionadas con diseño"]],
  [/part[\s-]?time designer/i, ["兼职设计师", "Diseñador/a a tiempo parcial"]],
];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isActionableLink(value) {
  if (/^mailto:/i.test(value)) return true;
  if (!/^https?:\/\//i.test(value)) return false;

  let url;
  try {
    url = new URL(value);
  } catch {
    return false;
  }

  const host = url.hostname.toLowerCase();
  const path = url.pathname.toLowerCase();
  const query = url.search.toLowerCase();

  // Research/listing pages are useful as evidence, but they are not direct
  // vacancy or application routes and must not be shown as action buttons.
  if (host === "infohuaxin.com" || host === "www.infohuaxin.com") return false;
  if (host === "eulam.infohuaxin.com") return /^\/info\/\d+\/?$/.test(path);
  if (/xihua\.es$/.test(host)) {
    return /mod=viewthread/.test(query) && /(?:^|&)tid=\d+/.test(query.slice(1));
  }
  if (/spaincn\.com$/.test(host)) {
    return /mod=viewthread/.test(query) || /\/thread-\d+-\d+-\d+\.html$/.test(path);
  }
  if (/huarenjiewang\.com$/.test(host)) {
    return /\/info-\d+\.html$/.test(path) || /\/information-id-\d+\.html$/.test(path);
  }
  if (/es02\.com$/.test(host)) return /\/jobs\/recruitment\/.*\/i\d+\.html$/.test(path);
  if (/bbs\.eus$/.test(host)) {
    return /mod=viewthread/.test(query) && /(?:^|&)tid=\d+/.test(query.slice(1));
  }
  return true;
}

function toLinks(item) {
  const raw = Array.isArray(item.links) ? item.links : item.links ? [item.links] : [];
  const contact = String(item.contact || "");
  const emails = [...contact.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map(
    (match) => `mailto:${match[0]}`,
  );
  return [...new Set([...raw, ...emails])].filter(isActionableLink);
}

function isInternshipRole(item) {
  return /internship|intern\b|trainee|prácticas|practicas|beca\b|working student|实习|学生协议|学校协议/i.test(
    String(item.searchText || ""),
  );
}

function hasLowPayRisk(item) {
  const text = String(item.searchText || "")
    .replace(/不(?:接受|做|提供).{0,12}无薪.{0,16}(?:测试|试稿|作业|样片)/gi, "")
    .replace(/(?:do not|don't|avoid|refuse).{0,20}unpaid.{0,16}(?:test|trial|assignment|sample)/gi, "");
  if (/unpaid|无薪|项目分成|project share|明确低薪|低薪风险|low[-\s]?pay risk/i.test(text)) {
    return true;
  }

  const hourly = text.match(/(?:€|EUR)\s?(\d+(?:[.,]\d+)?)\s*(?:\/|per\s*)?(?:hour|hora|小时)/i);
  if (hourly && Number(hourly[1].replace(",", ".")) < 12) return true;

  const monthly = text.match(/(?:€|EUR)\s?([\d,.]+)\s*(?:\/|per\s*)?(?:month|mes|月)/i);
  if (monthly && Number(monthly[1].replace(/[.,](?=\d{3}\b)/g, "").replace(",", ".")) < 900) {
    return true;
  }

  const annual = text.match(/(?:€|EUR)\s?([\d,.]+)\s*(?:\/|per\s*)?(?:year|año|年)/i);
  if (annual && Number(annual[1].replace(/[.,](?=\d{3}\b)/g, "").replace(",", ".")) < 18000) {
    return true;
  }
  return false;
}

function riskFlags(item) {
  const flags = [];
  const applicationLanguage = applicationLanguagePath(item).key;
  if (applicationLanguage === "spanish") flags.push("spanish");
  if (applicationLanguage === "english") flags.push("english");
  if (hasLowPayRisk(item)) flags.push("lowpay");
  if (isInternshipRole(item)) flags.push("internship");
  if (applicationStatus(item).key === "verify") flags.push("verify");
  if (hasOpaqueEmployerRisk(item)) flags.push("opaque");
  return flags;
}

function hasOpaqueEmployerRisk(item) {
  if (CURATED[item.id]?.opaqueEmployer) return true;
  const text = `${item.source || ""} ${item.opportunity || ""} ${item.status || ""} ${item.analysis || ""}`;
  return /anonymous employer|employer hidden|client (?:is )?(?:anonymous|undisclosed|hidden)|actual (?:client|employer).{0,12}(?:not disclosed|unknown)|匿名(?:客户|雇主|合作公司)|客户未公开|雇主未公开|实际(?:客户|雇主|合作公司)未公开|招聘方未公开实际/i.test(
    text,
  );
}

function isFreelanceRole(item) {
  return /freelance|freelancer|autónom|autonom|contractor|project[-\s]?based|daily rate|day rate|自由职业|项目制|项目合作|按项目|日薪/i.test(
    String(item.searchText || ""),
  );
}

function hasKnownCompensation(item) {
  const text = String(item.searchText || "");
  const currencyAmount =
    /(?:€|EUR|USD|\$|GBP|£)\s?[\d,.]+(?:\s?[-–]\s?(?:€|EUR|USD|\$|GBP|£)?\s?[\d,.]+)?|[\d,.]+\s?(?:€|EUR|euros?|USD|GBP)(?:\s?[-–]\s?[\d,.]+\s?(?:€|EUR|euros?|USD|GBP)?)?/i;
  const labeledAmount =
    /(?:税前|税后)?(?:月薪|年薪|日薪|时薪|工资|薪资|salary|pay|rate)\D{0,16}[\d,.]+/i;
  return currencyAmount.test(text) || labeledAmount.test(text);
}

function laborConditionInfo(item) {
  if (isInternshipRole(item)) return { key: "internship", label: "实习 / 协议" };
  if (isFreelanceRole(item)) return { key: "freelance", label: "自由职业 / 项目制" };
  if (isFormalRole(item)) return { key: "formal", label: "正式 / 全职" };
  return { key: "unknown", label: "合同待确认" };
}

function experienceInfo(item) {
  const curated = CURATED[item.id];
  if (curated?.experienceKey) {
    return {
      key: curated.experienceKey,
      label: curated.experienceLabel || "经验要求已人工核验",
    };
  }

  const title = `${item.opportunity || ""} ${CURATED[item.id]?.titleZh || ""} ${CURATED[item.id]?.titleEs || ""}`;
  const text = `${title} ${item.searchText || ""}`;

  if (
    /internship|intern\b|trainee|prácticas|practicas|working student|graduate program|junior|júnior|初级|实习|应届/i.test(
      title,
    ) ||
    isInternshipRole(item)
  ) {
    return { key: "junior", label: "初级 / 实习" };
  }
  if (
    /senior|sénior|lead\b|leader|líder|head of|director|responsable|资深|高级|负责人|总监|主管/i.test(
      title,
    )
  ) {
    return { key: "senior", label: "资深 / 5 年以上" };
  }

  const range = text.match(
    /(?<!\d)(\d{1,2})\s*(?:[-–]|to|a)\s*(\d{1,2})\s*(?:years?|yrs?|años?|anys?|年)/i,
  );
  if (range) {
    const minimum = Number(range[1]);
    const maximum = Number(range[2]);
    if (minimum >= 5) return { key: "senior", label: `资深 / ${minimum}–${maximum} 年` };
    if (maximum <= 2) return { key: "junior", label: `初级 / ${minimum}–${maximum} 年` };
    return { key: "mid", label: `中级 / ${minimum}–${maximum} 年` };
  }

  const minimum = text.match(
    /(?:more than|over|at least|minimum(?: of)?|más de|més de|mínimo|al menos|至少|超过)?\s*(?<!\d)(\d{1,2})\s*(?:\+)?\s*(?:years?|yrs?|años?|anys?|年)/i,
  );
  if (minimum) {
    const years = Number(minimum[1]);
    if (years >= 5) return { key: "senior", label: `资深 / ${years} 年以上` };
    if (years >= 3) return { key: "mid", label: `中级 / ${years} 年以上` };
    return { key: "junior", label: `初级 / ${years} 年左右` };
  }

  return { key: "unknown", label: "经验要求未说明" };
}

function isChineseRelevant(item) {
  if (sourceGroup(item) === "chinese") return true;
  if (CURATED[item.id]?.chineseFit) return true;

  const requirementText = `${item.opportunity || ""} ${item.fit || ""} ${item.status || ""} ${item.analysis || ""}`;
  const companyText = `${item.source || ""} ${item.opportunity || ""}`;
  const explicitLanguageOrMarket =
    /mandarin|chinese speaker|chinese[-\s](?:market|digital|communication|writing|required|preferred|beneficial)|requires? chinese|中文|普通话|华语|中国总部|中国品牌|中国市场|微信|wechat|weixin|小红书|xiaohongshu|rednote/i.test(
      requirementText,
    );
  const knownChineseBrand =
    /\b(?:infiled|tineco|byd|huawei|honor|xiaomi|alibaba|aliexpress|trip\.com|ctrip|pop mart|shein|tcl|oppo|vivo|anker|ecovacs|haier|hisense|lenovo|jd\.com)\b/i.test(
      companyText,
    );
  return explicitLanguageOrMarket || knownChineseBrand;
}

function isResearchOnly(item) {
  const opportunity = String(item.opportunity || "");
  const text = `${item.source || ""} ${opportunity} ${item.fit || ""} ${item.status || ""} ${item.analysis || ""}`;
  const opportunityIsRoute =
    /(?:job[- ]?board|jobs?) (?:channel|route|recheck)|channel (?:recheck|status|monitor)|(?:monitor|watchlist|watch route|research route)|no (?:new|current).{0,35}(?:job|vacancy|opening)|no confirmed|not (?:a |an )?(?:current |confirmed )?(?:job|vacancy|opening)|speculative (?:creative\/brand\/packaging )?application|self[- ]application|status correction|historical lead|current .{0,35}(?:employer|ecosystem)$|(?:company|platform|classifieds) (?:target|route|monitor)|institutional.{0,35}route|service category|招聘频道|招聘渠道|监控|观察入口|研究线索|当前无.{0,20}(?:岗位|职位)/i.test(
      opportunity,
    );
  const detailsOnlyResearch =
    /0 confirmed|0 current|not a confirmed (?:job|vacancy|opening)|not a (?:job|vacancy)|no confirmed|watchlist|monitor(?:ing)? (?:only|route|entry)|channel update|cold outreach channel|generic cv submission|talent application|talent pool only|research route|public search (?:route|surface)|benchmark only|historical lead|china-based openings|only (?:china|shanghai|beijing)[-\s]based|仅(?:中国|上海|北京).{0,12}(?:岗位|职位)|监控入口|观察入口|研究线索/i.test(
      text,
    );
  return opportunityIsRoute || detailsOnlyResearch;
}

function isTargetOpportunity(item) {
  const title = String(item.opportunity || "");
  if (
    /design|designer|creative|art director|brand|visual|graphic|content|social|community|marketing|e-?commerce|website|web\b|video|photo|motion|editor|retouch|设计|创意|品牌|视觉|平面|美工|内容|社媒|新媒体|运营|电商|网站|网页|视频|拍摄|剪辑|修图|海报|宣传/i.test(
      title,
    )
  ) {
    return true;
  }
  if (
    /sales advisor|fashion advisor|store manager|dependient|retail assistant|merchandiser|business developer|account manager|customer service|shop assistant|cashier|warehouse|导购|店长|营业员|店员|销售|客服|仓库|收银|财务|行政|采购|司机/i.test(
      title,
    )
  ) {
    return false;
  }
  return directionKey(item) !== "other";
}

function isFormalRole(item) {
  const text = String(item.searchText || "");
  return (
    /full[\s-]?time|jornada completa|permanent contract|contrato (?:indefinido|laboral|temporal)|payroll|正式合同|全职|永久合同|无固定期限|劳动合同/i.test(
      text,
    ) &&
    !/part[\s-]?time|media jornada|freelance|autónom|兼职|自由职业|项目制/i.test(text)
  );
}

function personalMatchScore(item) {
  const tierPoints = { A: 20, B: 15, C: 8, D: 2, X: 0 };
  const locationPoints = { barcelona: 20, remote: 18, madrid: 4, other: 1 };
  const applicationLanguagePoints = {
    chinese: 25,
    chineseCheck: 18,
    basicSpanish: 5,
    unknown: 0,
    english: -18,
    spanish: -30,
  };
  const directionPoints = { brand: 20, digital: 17, ecommerce: 13, social: 11, production: 8, other: 0 };
  const freshnessPoints = { week: 10, month: 7, quarter: 3, older: 0, old: -5, unknown: 0 };

  let score =
    (tierPoints[item.tier] || 0) +
    (locationPoints[locationBucket(item)] || 0) +
    (applicationLanguagePoints[applicationLanguagePath(item).key] || 0) +
    (directionPoints[directionKey(item)] || 0) +
    (freshnessPoints[item.freshnessTag] || 0);

  if (isChineseRelevant(item)) score += 10;
  if (toLinks(item).length) score += 8;
  if (isInternshipRole(item)) score -= 5;
  if (hasLowPayRisk(item)) score -= 8;
  if (isResearchOnly(item)) score -= 30;
  if (applicationStatus(item).key === "live") score += 6;
  if (applicationStatus(item).key === "verify") score -= 4;
  if (applicationStatus(item).key === "closed") score -= 25;
  return Math.max(0, Math.min(100, score));
}

function postedTimestamp(item) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.postedAt || "")) return 0;
  return Date.parse(`${item.postedAt}T00:00:00Z`) || 0;
}

function rankingScore(item) {
  let score = personalMatchScore(item);
  const status = applicationStatus(item).key;
  const hasDate = postedTimestamp(item) > 0;
  const freshDateBonus = { week: 12, month: 7, quarter: 3, older: 0, old: -6 };

  if (hasDate) {
    score += freshDateBonus[item.freshnessTag] || 0;
  } else {
    score -= status === "verify" ? 9 : 3;
  }

  if (status === "live") score += 5;
  if (status === "closed") score -= 30;
  if (state.preset === "chinese" && sourceGroup(item) === "chinese" && hasDate) score += 3;
  return score;
}

function confidenceScore(item) {
  const statusPoints = { live: 30, verify: 12, closed: -30 };
  const routePoints = toLinks(item).length ? 12 : 0;
  const datePoints = postedTimestamp(item) ? 8 : -4;
  return (statusPoints[applicationStatus(item).key] || 0) + routePoints + datePoints + personalMatchScore(item);
}

function sortRecords(records) {
  const mode = els.sortFilter?.value || "smart";
  const compareScore = (a, b) => (b.score || 0) - (a.score || 0);
  const compareMatch = (a, b) =>
    personalMatchScore(b) - personalMatchScore(a) || compareScore(a, b);

  if (mode === "latest") {
    records.sort(
      (a, b) =>
        postedTimestamp(b) - postedTimestamp(a) ||
        rankingScore(b) - rankingScore(a) ||
        compareScore(a, b),
    );
    return;
  }
  if (mode === "match") {
    records.sort(compareMatch);
    return;
  }
  if (mode === "confidence") {
    records.sort(
      (a, b) =>
        confidenceScore(b) - confidenceScore(a) ||
        postedTimestamp(b) - postedTimestamp(a) ||
        compareMatch(a, b),
    );
    return;
  }
  if (mode === "weight") {
    records.sort(compareScore);
    return;
  }
  records.sort(
    (a, b) =>
      rankingScore(b) - rankingScore(a) ||
      postedTimestamp(b) - postedTimestamp(a) ||
      compareScore(a, b),
  );
}

function matchesPreset(item) {
  const location = locationBucket(item);
  const language = languageInfo(item).key;
  const direction = directionKey(item);
  const hasRoute = toLinks(item).length > 0;

  if (state.preset === "profile") {
    const applicationLanguage = applicationLanguagePath(item).key;
    return (
      ["barcelona", "remote"].includes(location) &&
      ["chinese", "chineseCheck"].includes(applicationLanguage) &&
      isChineseRelevant(item) &&
      ["A", "B", "C"].includes(item.tier) &&
      direction !== "other" &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "actionable") {
    const applicationLanguage = applicationLanguagePath(item).key;
    const status = applicationStatus(item).key;
    const currentEnough =
      status === "live" || ["week", "month", "quarter"].includes(item.freshnessTag);
    return (
      ["barcelona", "remote"].includes(location) &&
      ["chinese", "chineseCheck", "basicSpanish"].includes(applicationLanguage) &&
      (applicationLanguage !== "basicSpanish" || sourceGroup(item) === "chinese") &&
      isChineseRelevant(item) &&
      ["A", "B", "C"].includes(item.tier) &&
      direction !== "other" &&
      hasRoute &&
      currentEnough &&
      !isInternshipRole(item) &&
      !hasLowPayRisk(item) &&
      !isResearchOnly(item) &&
      status !== "closed"
    );
  }
  if (state.preset === "chinese") {
    return (
      ["barcelona", "remote", "madrid"].includes(location) &&
      isChineseRelevant(item) &&
      isTargetOpportunity(item) &&
      direction !== "other" &&
      ["A", "B", "C"].includes(item.tier) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "english") {
    return (
      ["barcelona", "remote"].includes(location) &&
      applicationLanguagePath(item).key === "english" &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "brand") {
    return (
      ["barcelona", "remote"].includes(location) &&
      ["brand", "digital"].includes(direction) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  if (state.preset === "core") {
    const status = applicationStatus(item).key;
    const text = `${item.opportunity || ""} ${item.fit || ""} ${item.status || ""} ${item.analysis || ""} ${item.searchText || ""}`;
    const motionOrSystem = /brand system|visual identity|brand guideline|design system|motion|motion graphics|art direction|品牌系统|视觉识别|品牌指南|设计系统|动效|动态|艺术指导/i.test(text);
    return (
      ["barcelona", "remote", "madrid"].includes(location) &&
      ["brand", "digital"].includes(direction) &&
      motionOrSystem &&
      ["A", "B", "C"].includes(item.tier) &&
      ["live", "verify"].includes(status) &&
      !isInternshipRole(item) &&
      !hasLowPayRisk(item) &&
      !hasOpaqueEmployerRisk(item) &&
      !isResearchOnly(item)
    );
  }
  if (state.preset === "stable") {
    return (
      ["barcelona", "remote"].includes(location) &&
      !isInternshipRole(item) &&
      !hasLowPayRisk(item) &&
      isFormalRole(item) &&
      language !== "spanish" &&
      direction !== "other" &&
      !hasOpaqueEmployerRisk(item) &&
      !isResearchOnly(item) &&
      applicationStatus(item).key !== "closed"
    );
  }
  return true;
}

function sourceGroup(item) {
  if (["chinese", "linkedin", "other"].includes(item.sourceGroup)) return item.sourceGroup;
  const text = `${item.source} ${item.contact} ${item.searchText}`.toLowerCase();
  if (/linkedin/.test(text)) return "linkedin";
  if (/xihua|huaren|eulam|oulang|infohuaxin|leeeu|casa asia|西华|华人|欧浪|乐在欧洲|中文社区/.test(text)) {
    return "chinese";
  }
  return "other";
}

function directionKey(item) {
  if (CURATED[item.id]?.direction) return CURATED[item.id].direction;
  const role = String(item.opportunity || "");
  if (/行政助理.*简单视频剪辑/i.test(role)) return "social";
  if (/空间设计师|餐饮空间.*室内设计师/i.test(role)) return "other";
  if (/广告公司客服.*基础排版|CDR.*AI.*排版/i.test(role)) return "production";
  if (/女装导购.*线上销售拍摄|线上销售.*拍摄|warehouse office clerk requiring simple PS/i.test(role)) return "ecommerce";
  if (/电商订单处理.*线上代理/i.test(role)) return "ecommerce";
  if (/广告平面设计师.*视频剪辑.*摄影师/i.test(role)) return "production";
  if (/鞋业电商运营|电脑修图工作人员|商品图片处理/i.test(role)) return "ecommerce";
  if (/线上营销.*拍照.*修图|视频拍摄和剪辑师/i.test(role)) return "social";
  if (/网销运营.*品牌视觉.*Amazon/i.test(role)) return "ecommerce";
  if (/短视频内容运营|市场营销.*出镜拍摄/i.test(role)) return "social";
  const text = String(item.searchText || "").toLowerCase();
  if (/xiaohongshu|tiktok|instagram|social media|short video|video editing|content creator|new media|wechat|小红书|抖音|新媒体|短视频|剪辑|公众号|社媒|拍摄/.test(text)) {
    return "social";
  }
  if (/print|printing|signage|r[oó]tulos|flyer|menu|poster|coreldraw|imprenta|印刷|广告公司|招牌|菜单|传单|喷印|广告制作|平面制作|物料制作/.test(text)) {
    return "production";
  }
  if (/ecommerce|e-commerce|shopify|amazon|product image|listing|marketplace|product page|电商|独立站|产品图|商品|上架|亚马逊/.test(text)) {
    return "ecommerce";
  }
  if (/website|web designer|landing|digital campaign|banner|newsletter|email marketing|digital designer|wordpress|网站|网页|官网|页面|数字/.test(text)) {
    return "digital";
  }
  if (/brand|branding|visual identity|identity|logo|guidelines|brand system|graphic designer|visual designer|art director|品牌|视觉|平面设计|设计师|美工/.test(text)) {
    return "brand";
  }
  return "other";
}

function locationBucket(item) {
  const curated = CURATED[item.id];
  if (curated?.locationKey) return curated.locationKey;
  const text = `${item.location || ""} ${item.rawColumns?.Location || ""}`;
  if (/madrid|马德里|getafe|alcobendas|seseña|pinto|parla|fuenlabrada|humanes/i.test(text)) {
    return "madrid";
  }
  const hasEuropeRemoteSignal = /remote|remoto|远程|europe|eu based|europe-wide/i.test(text);
  const hasOnsiteOnlySignal = /on[- ]?site|onsite|office[- ]?only|现场办公|办公室办公/i.test(text);
  if (hasEuropeRemoteSignal && !hasOnsiteOnlySignal) return "remote";
  if (
    /not barcelona|rather than barcelona|非巴塞|不在巴塞|valencia|warsaw|shanghai|上海|london|paris|lisbon|milano|milan|berlin|amsterdam|hoofddorp|schiedam|courbevoie|uxbridge|budapest/i.test(
      text,
    )
  ) {
    return "other";
  }
  if (/barcelona|barcelon|巴塞|badalona|cornell|hospitalet|sant cugat|gl[oò]ries/i.test(text)) {
    return "barcelona";
  }
  if (/remote|remoto|远程|europe|eu based|europe-wide|hybrid/i.test(text)) return "remote";
  if (item.locationTag === "Barcelona area") return "barcelona";
  if (item.locationTag === "Remote / Europe") return "remote";
  if (item.locationTag === "Madrid area") return "madrid";
  return "other";
}

function locationLabel(item) {
  const curated = CURATED[item.id];
  if (curated?.locationLabel) return curated.locationLabel;
  if (curated) {
    const location = String(item.location || "");
    const explicit = location.match(/Barcelona(?:\s*\/\s*[^;,]+)?|Badalona(?:\s*\/\s*[^;,]+)?/i);
    if (explicit) return explicit[0].replace("Barcelona", "巴塞罗那");
  }
  const labels = {
    barcelona: "巴塞罗那及周边",
    remote: "远程 / 欧洲",
    madrid: "马德里及周边",
    other: "其他地区或未说明",
  };
  return labels[locationBucket(item)];
}

function languageInfo(item) {
  const curated = CURATED[item.id];
  if (curated?.language) {
    const key =
      curated.languageKey ||
      (/西语 B|需要基础西语|西语要求/.test(curated.language)
        ? /基础/.test(curated.language)
          ? "basic"
          : "spanish"
        : "light");
    return { key, label: curated.language };
  }

  const text = String(item.searchText || "");
  if (
    /english.{0,30}chinese.{0,30}spanish.{0,16}(?:all\s+)?essential|spanish\s+(?:is\s+|all\s+)?(?:essential|required|mandatory)|requires?\s+(?:fluent\s+)?spanish|fluent\s+spanish|spanish\s+[bc][12]|西班牙语.{0,8}(?:必须|要求|流利|工作沟通)|西语.{0,12}(?:必须|要求|流利|工作沟通|达到|[bc][12])|熟练.{0,6}西语|用西语沟通/i.test(
      text,
    )
  ) {
    return { key: "spanish", label: "西语有明确要求，投递前先判断是否能应付" };
  }
  if (
    /没有.{0,24}西语要求|未(?:公开|说明|写明).{0,24}西语要求|西语要求.{0,12}(?:未公开|未说明|未知)|no spanish (?:requirement|gate)|spanish (?:was )?not (?:specified|surfaced)/i.test(
      text,
    )
  ) {
    return { key: "light", label: "公开信息未写西语要求；可先用中文确认" };
  }
  if (/basic spanish|spanish basics|基础西语|西语基础|西语.{0,5}基础/i.test(text)) {
    return { key: "basic", label: "只需基础西语，属于相对可尝试的门槛" };
  }
  if (
    /mandarin|chinese|中文|普通话|english as (?:a )?work language|fluent english|spanish not surfaced|英语.{0,8}(?:工作|要求)|英文.{0,8}(?:工作|要求)/i.test(
      text,
    )
  ) {
    if (sourceGroup(item) === "chinese") {
      return { key: "light", label: "来自中文渠道；先确认日常是否可以主要用中文沟通" };
    }
    return { key: "light", label: "中文或英语可发挥优势；仍需核对完整要求" };
  }
  return { key: "unknown", label: "公开信息未明确说明语言要求" };
}

const APPLICATION_LANGUAGE_PATHS = {
  chinese: {
    key: "chinese",
    label: "中文可直接联系",
    short: "中文可投",
    tone: "good",
  },
  chineseCheck: {
    key: "chineseCheck",
    label: "先用中文确认工作语言",
    short: "中文先问",
    tone: "check",
  },
  basicSpanish: {
    key: "basicSpanish",
    label: "可中文联系，但工作需基础西语",
    short: "基础西语",
    tone: "check",
  },
  english: {
    key: "english",
    label: "需要英文简历 / 沟通",
    short: "英文材料",
    tone: "hard",
  },
  spanish: {
    key: "spanish",
    label: "西语或本地语言是硬门槛",
    short: "西语门槛",
    tone: "hard",
  },
  unknown: {
    key: "unknown",
    label: "投递语言未说明，先中文核实",
    short: "语言待问",
    tone: "check",
  },
};

const APPLICATION_MODE_OVERRIDES = Object.freeze({
  760: "spanish",
  762: "english",
  815: "spanish",
});

function applicationLanguagePath(item) {
  const curated = CURATED[item.id];
  const explicitMode = curated?.applicationMode || APPLICATION_MODE_OVERRIDES[item.id];
  if (explicitMode && APPLICATION_LANGUAGE_PATHS[explicitMode]) {
    return APPLICATION_LANGUAGE_PATHS[explicitMode];
  }

  const language = languageInfo(item);
  const text = `${curated?.language || ""} ${curated?.next || ""} ${item.searchText || ""}`;
  if (language.key === "spanish" || curated?.languageHard) {
    return APPLICATION_LANGUAGE_PATHS.spanish;
  }
  if (language.key === "basic") {
    return APPLICATION_LANGUAGE_PATHS.basicSpanish;
  }

  const englishRequired =
    /(?:fluent|professional|excellent|advanced|high[-\s]?level)\s+english|english\s+(?:is\s+)?(?:required|essential|mandatory|must)|英语.{0,10}(?:必需|必须|硬门槛|流利|熟练)|英文(?:简历|作品集|材料|申请)|用英文(?:投递|申请|沟通)/i.test(
      text,
    );
  if (englishRequired) return APPLICATION_LANGUAGE_PATHS.english;

  if (sourceGroup(item) === "chinese" || curated?.chineseFit) {
    if (
      /西语.{0,12}(?:良好|熟练|流利|工作沟通|B1|B2)|西班牙语.{0,12}(?:良好|熟练|流利|工作沟通|B1|B2)/i.test(
        text,
      )
    ) {
      return APPLICATION_LANGUAGE_PATHS.spanish;
    }
    if (
      /中文(?:可|能|沟通|友好|渠道|环境)|先用中文|中文电话|中文微信|华人(?:渠道|团队|公司|项目)/i.test(
        text,
      )
    ) {
      return APPLICATION_LANGUAGE_PATHS.chinese;
    }
    return APPLICATION_LANGUAGE_PATHS.chineseCheck;
  }

  if (language.key === "light") return APPLICATION_LANGUAGE_PATHS.english;
  return APPLICATION_LANGUAGE_PATHS.unknown;
}

function roleLabels(item) {
  const curated = CURATED[item.id];
  if (curated) return { zh: curated.titleZh, es: curated.titleEs };

  const role = String(item.opportunity || "");
  for (const [pattern, labels] of ROLE_RULES) {
    if (pattern.test(role)) return { zh: labels[0], es: labels[1] };
  }

  if (/设计|美工|视觉|平面|品牌|运营|新媒体|视频|剪辑/.test(role)) {
    return {
      zh: role.replace(/\s*[-–]\s*[A-Za-z][\s\S]*$/, "").trim() || "设计相关岗位",
      es: DIRECTION_LABELS[directionKey(item)].es,
    };
  }

  const direction = DIRECTION_LABELS[directionKey(item)];
  return {
    zh: `${direction.zh}相关机会`,
    es: direction.es,
  };
}

function companyLabel(item) {
  if (CURATED[item.id]?.company) return CURATED[item.id].company;
  const role = String(item.opportunity || "");
  if (/电脑修图工作人员|商品图片处理/i.test(role)) return "匿名仓库雇主（需先核实）";
  if (/线上营销.*拍照.*修图|拍照、修图与网页基础/i.test(role)) return "Valencia 线上营销雇主（需先核实）";
  if (/鞋业电商运营|产品图、详情页与广告投放/i.test(role)) return "Yuncler 鞋业公司（疑似 JOMIX Spain）";
  if (/视频拍摄和剪辑师|巴塞罗那视频拍摄和剪辑师/i.test(role)) return "巴塞罗那个人发布者（需先核实）";
  let source = String(item.source || "未标明公司");
  if (/REDLINE/i.test(source)) return "REDLINE 传媒";
  if (/KLMED|SUNMED/i.test(source)) return "SUNMED / Grupo KLMED";
  if (/发布主体未披露|主体未披露/i.test(source)) return "未披露雇主（需先核实）";
  source = source
    .replace(/\s+via\s+.+$/i, "")
    .replace(/\s*\/\s*(Xihua|Huarenjie|InfoHuaxin|Eulam|ES02|LinkedIn|西华论坛|华人街|华人通).*$/i, "")
    .replace(/\s*\+\s*.+$/, "")
    .trim();
  return source || "未标明公司";
}

function sourceLabel(item) {
  return SOURCE_LABELS[sourceGroup(item)];
}

function tierLabel(tier) {
  return {
    A: "A · 立即优先",
    B: "B · 值得投",
    C: "C · 备选",
    D: "D · 冷投观察",
    X: "X · 排除",
  }[tier] || "未分级";
}

function isStale(item) {
  return applicationStatus(item).key !== "live";
}

function applicationStatus(item) {
  const curated = CURATED[item.id];
  if (curated?.statusKey) {
    return {
      key: curated.statusKey,
      label: { live: "页面显示可投", verify: "需先确认状态", closed: "已关闭 / 历史" }[curated.statusKey],
    };
  }

  const text = `${item.opportunity || ""} ${item.status || ""} ${item.analysis || ""} ${item.contact || ""}`;
  if (
    /no longer accept|no longer active|no longer available|ya no se aceptan|archived|expired|\bclosed\b|redirects? to (?:an )?expired|listing has just closed|not a live confirmed opening|已过期|已关闭|不再接受|已经下架|官方已下架|已撤下|职位已关闭|不能按在招|已被.{0,24}(?:替代|取代)/i.test(
      text,
    )
  ) {
    return { key: "closed", label: "已关闭 / 历史" };
  }
  if (/(?:需先确认|需要确认|地点冲突|状态冲突|region[- ]eligibility conflict|location conflict|verify[- ]first|must be confirmed|confirm before|returns? 404|error=true|not found)/i.test(text)) {
    return { key: "verify", label: "需先确认状态" };
  }
  if (
    /still (?:has|shows).{0,20}(?:apply|solicitar)|(?:has|with) (?:an? )?(?:apply|solicitar)|shows? [“"]?(?:apply|solicitar)|apply for this role|live with apply|仍有[“"]?Solicitar|仍显示[“"]?(?:Apply|Solicitar|申请|投递)|可直接申请|可直接提交|仍可申请|官方.{0,24}(?:申请|投递).{0,16}(?:开放|入口)|live.{0,20}(?:role|vacancy|application)|current.{0,24}(?:apply|application)|显示“Enviar solicitud”|显示“ENVÍA TU CV”/i.test(
      text,
    )
  ) {
    return { key: "live", label: "页面显示可投" };
  }
  return { key: "verify", label: "需先确认状态" };
}

function getStatusSummary(records = dedupedData) {
  return records.reduce(
    (counts, item) => {
      const key = applicationStatus(item).key;
      if (Object.prototype.hasOwnProperty.call(counts, key)) counts[key] += 1;
      return counts;
    },
    { live: 0, verify: 0, closed: 0 },
  );
}

function freshnessInfo(item) {
  const labels = {
    week: "7 天内发布",
    month: "30 天内发布",
    quarter: "近 3 个月",
    older: "超过 3 个月",
    old: "发布时间较早",
    unknown: "发布时间未确认",
  };
  return {
    key: item.freshnessTag || "unknown",
    label: labels[item.freshnessTag] || labels.unknown,
    date: item.postedAt || "",
  };
}

function genericReason(item) {
  const text = String(item.searchText || "");
  if (item.tier === "X") {
    if (/线上代理|电商代理|订单处理|上传单号|tracking|不会可教/i.test(text)) {
      return "发布者未实名，也未公开公司、薪资、合同、地址或保险；相同文案还在多个国家的华人网站重复出现，真实性与用工关系无法核验。";
    }
    if (isStale(item)) return "岗位已关闭、过期或只剩历史参考价值，不应占用当前申请时间。";
    return "公开信息不足或风险信号较强，暂不达到可投标准。";
  }
  const direction = DIRECTION_LABELS[directionKey(item)].zh;
  const source = sourceGroup(item);
  const sourceText =
    source === "chinese"
      ? "来自华人或中文渠道，沟通环境相对友好。"
      : source === "linkedin"
        ? "来自领英，岗位信息通常更完整，但应仔细核对语言与身份要求。"
        : "来自公司官网或机构渠道，适合直接核对当前开放状态。";
  const freshness = isStale(item) ? "信息可能较旧，价值主要在于先询问是否仍开放。" : "";
  return `${item.tier === "A" ? "高优先级" : item.tier === "B" ? "值得尝试" : "可作为补充"}的${direction}机会。${sourceText}${freshness}`;
}

function genericNext(item) {
  if (item.tier === "X") {
    const text = String(item.searchText || "");
    if (/线上代理|电商代理|订单处理|上传单号|tracking|不会可教/i.test(text)) {
      return "仅作为风险样本保留：不要提供身份证、银行卡、验证码或账号密码，不要代付、垫款、刷单或替对方收付款。";
    }
    return "不建议投入申请时间，仅保留为排除或历史记录。";
  }
  if (isStale(item)) return "先用邮件、电话或微信确认岗位是否仍开放，得到肯定答复后再发送完整材料。";
  const direction = directionKey(item);
  const portfolio = {
    brand: "品牌识别、VI 系统和跨媒介延展",
    digital: "网页、落地页、广告素材和数字品牌延展",
    social: "社媒视觉、短视频封面、剪辑和内容栏目",
    ecommerce: "产品图、电商 Banner、详情页和店铺视觉",
    production: "菜单、招牌、海报、传单和印刷落地",
    other: "最贴近岗位职责的",
  }[direction];
  return `打开原招聘渠道核对状态，准备一份精简简历，并优先展示${portfolio}案例。`;
}

function signalList(item) {
  const text = String(item.searchText || "");
  const signals = [];
  const freshness = freshnessInfo(item);

  if (freshness.date) {
    signals.push(`记录中的最近发布日期：${freshness.date}（${freshness.label}）。`);
  } else if (isStale(item)) {
    signals.push("信息存在旧帖或历史记录信号，第一步应确认是否仍开放。");
  } else {
    signals.push("公开记录未确认发布日期，投递前应打开原链接复核。");
  }

  signals.push(`经验门槛：${experienceInfo(item).label}。`);

  const salaryMatches = text.match(
    /(?:€|EUR|USD|\$|GBP|£)\s?[\d,.]+(?:\s?[-–]\s?(?:€|EUR|USD|\$|GBP|£)?\s?[\d,.]+)?(?:\/month|\/year|\/day|\/hour|\/月|\/年|\/天|\/小时)?/i,
  );
  if (salaryMatches) signals.push(`原信息出现薪资：${salaryMatches[0]}。`);
  else if (/salary|薪资|工资|薪水/i.test(text)) signals.push("原信息提到了薪资，但需要在展开的原始记录中核对具体条件。");
  else signals.push("公开记录中没有清晰、可直接比较的薪资范围。");

  if (/work residence|work permit|legal residence|legal right to work|工作居留|合法工作|居留/i.test(text)) {
    signals.push("岗位可能要求西班牙合法工作身份或工作居留。");
  }
  if (/portfolio|作品集/i.test(text)) signals.push("申请时需要或强烈建议附上作品集。");
  if (/school internship agreement|internship agreement|学校实习协议/i.test(text)) {
    signals.push("这是实习路线，需要学校提供实习协议。");
  }
  if (/full-time|全职/i.test(text)) signals.push("记录显示为全职方向。");
  else if (/part-time|part time|兼职/i.test(text)) signals.push("记录显示为兼职方向。");
  else if (/internship|intern|实习/i.test(text)) signals.push("记录显示为实习方向。");

  return [...new Set(signals)].slice(0, 5);
}

function contactTokens(item) {
  const text = String(item.contact || "");
  const tokens = [];
  const emails = [...text.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map((match) => match[0]);
  emails.slice(0, 3).forEach((email) => tokens.push({ label: `邮箱：${email}`, href: `mailto:${email}` }));

  const phoneText = text.replace(/https?:\/\/\S+/gi, " ").replace(/mailto:\S+/gi, " ");
  const phones = [...phoneText.matchAll(/(?:\+34[\s.-]*)?(?:\d[\s.-]*){9}/g)]
    .map((match) => match[0].trim())
    .filter((value) => !/202[0-9]/.test(value.replace(/\D/g, "")));
  [...new Set(phones)].slice(0, 3).forEach((phone) => {
    const digits = phone.replace(/\D/g, "");
    const dialNumber = digits.length === 9 ? `+34${digits}` : `+${digits}`;
    tokens.push({ label: `电话：${phone}`, href: `tel:${dialNumber}` });
  });

  const wechat = text.match(/(?:WeChat|微信)\s*[:：]?\s*([A-Za-z0-9_-]{4,})/i);
  if (wechat) tokens.push({ label: `微信：${wechat[1]}` });

  if (!tokens.length) tokens.push({ label: "联系方式请在原招聘页面中查看" });
  return tokens;
}

function linkLabel(href, index) {
  if (href.startsWith("mailto:")) return "发送邮件";
  if (/linkedin\.[^/]+\/jobs\/view/i.test(href)) return "领英投递";
  if (/xihua/i.test(href)) return "查看西华招聘";
  if (/huarenjie/i.test(href)) return "查看华人街招聘";
  if (/eulam\.infohuaxin/i.test(href)) return "打开欧浪新版详情";
  if (/infohuaxin/i.test(href)) return "华信传统页（可能失效）";
  if (/wa\.me/i.test(href)) return "WhatsApp 联系";
  if (/leeeu/i.test(href)) return "查看乐在欧洲招聘";
  if (/xbyhr/i.test(href)) return "查看西班牙同城网招聘";
  if (/es02/i.test(href)) return "查看华人通招聘";
  if (/99876/i.test(href)) return "查看 99876 华人招聘";
  if (/\.pdf(?:$|\?)/i.test(href)) return "查看招聘 PDF";
  if (/career|careers|jobs/i.test(href)) return "公司招聘页";
  if (/insbrand|infiled|tineco/i.test(href)) return "公司官网";
  return index === 0 ? "打开投递渠道" : "补充资料";
}

function renderLinks(item, node, compact = false) {
  node.innerHTML = "";
  const links = toLinks(item).slice(0, compact ? 2 : 3);
  if (!links.length) {
    const span = document.createElement("span");
    span.className = "no-link";
    span.textContent =
      sourceGroup(item) === "chinese"
        ? "原帖无有效深链接；请展开联系方式核实"
        : "暂无可直接打开的投递链接";
    node.appendChild(span);
    return;
  }

  links.forEach((href, index) => {
    const link = document.createElement("a");
    link.className = index === 0 ? "action-link action-link--primary" : "action-link";
    link.href = href;
    link.target = href.startsWith("mailto:") ? "_self" : "_blank";
    link.rel = "noreferrer";
    link.textContent = linkLabel(href, index);
    node.appendChild(link);
  });
}

function renderRaw(item, node) {
  node.innerHTML = "";
  const keyLabels = {
    "Fit / location": "匹配度 / 地点",
    "Status / language / compensation": "状态 / 语言 / 薪资",
    "Analysis / next action": "分析 / 下一步",
    "Original detail / application route": "原始详情 / 投递渠道",
    "Role": "岗位",
    "Role / result": "岗位 / 结果",
    "Company / channel": "公司 / 渠道",
    "Status/evidence": "状态 / 证据",
    "Source/channel": "来源 / 渠道",
    "Location": "地点",
    "Contact/application": "联系方式 / 投递",
    "Priority fit": "优先级匹配",
    "Opportunity": "机会",
    "Why it matters / caution": "价值 / 注意事项",
    "Status / evidence": "状态 / 证据",
    "Contact / application": "联系方式 / 投递",
    "Priority": "优先级",
  };
  const rows = item.rawColumns || {};
  Object.entries(rows).forEach(([key, value]) => {
    if (!String(value || "").trim()) return;
    const row = document.createElement("div");
    row.className = "raw-row";
    row.innerHTML = `<strong>${escapeHtml(keyLabels[key] || key)}</strong><p>${linkifyOriginal(value)}</p>`;
    node.appendChild(row);
  });
}

function linkifyOriginal(value) {
  const safe = escapeHtml(value);
  return safe.replace(
    /(https?:\/\/[^\s;，]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi,
    (match) => {
      const href = match.includes("@") && !match.startsWith("http") ? `mailto:${match}` : match;
      return `<a href="${href}" target="_blank" rel="noreferrer">${match}</a>`;
    },
  );
}

function identityKey(item) {
  const alias = IDENTITY_ALIASES[item.id];
  if (alias) return `alias:${alias}`;

  const links = toLinks(item);
  const specific = links.find((link) =>
    /\/jobs\/view\/|viewthread|info-\d+|\.pdf(?:$|\?)|\/S\d+\.html/i.test(link),
  );
  if (specific) {
    try {
      const url = new URL(specific);
      const tid = url.searchParams.get("tid");
      return tid ? `${url.hostname}${url.pathname}?tid=${tid}` : `${url.hostname}${url.pathname}`;
    } catch {
      return specific.toLowerCase();
    }
  }
  return `${companyLabel(item)}|${String(item.opportunity || "")}`
    .toLowerCase()
    .replace(/[^a-z0-9\u3400-\u9fff]+/g, "");
}

function dedupe(records) {
  const preference = (item) =>
    (CURATED[item.id]?.changeType === "refresh" ? 100000 : 0) +
    (item.postedAt ? 10000 : 0) +
    (item.score || 0);
  const sorted = [...records].sort((a, b) => preference(b) - preference(a));
  const seen = new Set();
  return sorted.filter((item) => {
    const key = identityKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const dedupedData = dedupe(allData);
const latestRoundSection = allData.reduce(
  (latest, item) =>
    /第.+轮/.test(item.section || "") && item.id > latest.id
      ? { id: item.id, section: item.section }
      : latest,
  { id: 0, section: "" },
).section;
const latestRoundItems = dedupe(allData.filter((item) => item.section === latestRoundSection)).filter(
  (item) => item.tier !== "X",
);
const priorityItems = PRIORITY_IDS.map((id) => allData.find((item) => item.id === id)).filter(Boolean);

function progressKey(item) {
  return identityKey(item);
}

function progressValue(item) {
  return savedProgress[progressKey(item)] || "untracked";
}

function saveProgressValue(item, value) {
  const key = progressKey(item);
  if (value === "untracked") delete savedProgress[key];
  else savedProgress[key] = value;
  try {
    window.localStorage?.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(savedProgress));
  } catch {
    // The board still works when storage is unavailable or blocked.
  }
}

function createProgressControl(item) {
  const label = document.createElement("label");
  label.className = "progress-control";
  const caption = document.createElement("span");
  caption.textContent = "我的进度";
  const select = document.createElement("select");
  select.setAttribute("aria-label", `${companyLabel(item)}：我的投递进度`);
  Object.entries(PROGRESS_LABELS).forEach(([value, text]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
  });
  select.value = progressValue(item);
  select.addEventListener("change", () => {
    saveProgressValue(item, select.value);
    renderPriority();
    renderResults();
  });
  label.append(caption, select);
  return label;
}

function chineseOutreachText(item) {
  const role = roleLabels(item).zh.replace(/（[^）]+）/g, "");
  const company = companyLabel(item);
  const focus = {
    brand: "品牌视觉、VI 和数字品牌延展",
    digital: "数字品牌视觉、网页与多渠道延展",
    social: "社媒视觉、短视频与品牌内容",
    ecommerce: "产品图、详情页和电商视觉",
    production: "平面设计、菜单、招牌和印刷落地",
    other: "视觉设计与内容制作",
  }[directionKey(item)];
  return `你好，我看到${company}在招聘“${role}”。我目前在巴塞罗那，主要做${focus}，中文沟通没有问题，西语和英语还在学习。请问这个岗位现在还在招聘吗？日常工作能否主要用中文沟通？如果合适，我可以先发作品集和简历给您。谢谢！`;
}

function englishOutreachText(item) {
  const role = roleLabels(item).es || roleLabels(item).zh;
  const company = companyLabel(item);
  const focus = {
    brand: "brand identity, visual systems, and cross-channel brand extensions",
    digital: "digital brand design, landing pages, and multichannel assets",
    social: "social visuals, short-form video, and branded content",
    ecommerce: "product visuals, e-commerce pages, and campaign assets",
    production: "graphic design, print materials, and production-ready artwork",
    other: "visual design and branded content",
  }[directionKey(item)];
  return {
    en: `Hello, I’m interested in the “${role}” position at ${company}. I’m based in Barcelona and specialize in ${focus}. Before applying, could you please confirm the main working language and whether the role requires frequent client-facing English? I can share my CV and portfolio. Thank you.`,
    zh: `中文意思：你好，我对 ${company} 的“${role}”岗位感兴趣。我目前在巴塞罗那，主要做相关视觉设计。正式申请前，想先确认主要工作语言，以及这个岗位是否需要经常用英语面对客户沟通。我可以发送简历和作品集。谢谢。`,
  };
}

function createCopyButton(text, label = "复制中文询问") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-message-button";
  button.textContent = label;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    button.textContent = "已复制，可以直接发送";
    window.setTimeout(() => {
      button.textContent = label;
    }, 2200);
  });
  return button;
}

function renderPriority() {
  els.priorityGrid.innerHTML = "";
  els.languageCautionGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const cautionFragment = document.createDocumentFragment();
  let primaryRank = 0;
  let cautionRank = 0;

  priorityItems.forEach((item) => {
    const card = els.priorityTemplate.content.firstElementChild.cloneNode(true);
    const labels = roleLabels(item);
    const curated = CURATED[item.id];
    const freshness = freshnessInfo(item);
    const applicationLanguage = applicationLanguagePath(item);
    const isPrimary = ["chinese", "chineseCheck"].includes(applicationLanguage.key);
    const rank = isPrimary ? ++primaryRank : ++cautionRank;

    card.querySelector(".priority-card__rank").textContent = String(rank).padStart(2, "0");
    card.querySelector(".priority-card__tier").textContent = tierLabel(item.tier);
    card.querySelector(".priority-card__company").textContent = curated.company;
    card.querySelector(".priority-card__title").textContent = labels.zh;
    card.querySelector(".priority-card__title-es").textContent = labels.es;
    card.querySelector(".priority-card__meta").innerHTML = `
      <span>${escapeHtml(DIRECTION_LABELS[directionKey(item)].zh)}</span>
      <span>${escapeHtml(locationLabel(item))}</span>
      <span>${escapeHtml(sourceLabel(item))}</span>
      <span>${escapeHtml(freshness.date ? `${freshness.date} · ${freshness.label}` : freshness.label)}</span>
      <span class="language-route language-route--${escapeHtml(applicationLanguage.tone)}">${escapeHtml(applicationLanguage.label)}</span>
    `;
    card.querySelector(".priority-card__reason").textContent = curated.reason;
    card.querySelector(".priority-card__action").innerHTML = `<strong>下一步</strong><p>${escapeHtml(curated.next)}</p>`;
    const outreachText = chineseOutreachText(item);
    card.querySelector(".priority-card__outreach-text").textContent = outreachText;
    card.querySelector(".priority-card__outreach-actions").appendChild(createCopyButton(outreachText));
    card.querySelector(".priority-card__progress").appendChild(createProgressControl(item));
    renderLinks(item, card.querySelector(".priority-card__links"), true);
    if (isPrimary) {
      fragment.appendChild(card);
    } else {
      cautionFragment.appendChild(card);
    }
  });

  els.priorityGrid.appendChild(fragment);
  els.languageCautionGrid.appendChild(cautionFragment);
}

function baseRecords() {
  if (state.scope === "latestRound") {
    return latestRoundItems;
  }
  if (state.scope === "recentChinese") {
    return dedupedData.filter(
      (item) =>
        sourceGroup(item) === "chinese" &&
        ["week", "month"].includes(item.freshnessTag) &&
        item.tier !== "X",
    );
  }
  if (state.scope === "ab") return dedupedData.filter((item) => ["A", "B"].includes(item.tier));
  if (state.scope === "excluded") return dedupedData.filter((item) => item.tier === "X");
  return dedupedData.filter((item) => item.tier !== "X");
}

function matchesFilters(item, ignoreSource = false) {
  const query = els.searchInput.value.trim().toLowerCase();
  if (query && !String(item.searchText || "").toLowerCase().includes(query)) return false;
  if (!matchesPreset(item)) return false;
  if (els.validRouteOnly.checked && toLinks(item).length === 0) return false;
  if (els.excludeLowPay.checked && hasLowPayRisk(item)) return false;
  if (els.excludeInternships.checked && isInternshipRole(item)) return false;
  if (els.directionFilter.value !== "all" && directionKey(item) !== els.directionFilter.value) return false;
  if (els.locationFilter.value !== "all" && locationBucket(item) !== els.locationFilter.value) return false;
  if (
    els.languageFilter.value !== "all" &&
    applicationLanguagePath(item).key !== els.languageFilter.value
  ) {
    return false;
  }
  const status = applicationStatus(item).key;
  if (els.statusFilter.value === "open" && status === "closed") return false;
  if (!["all", "open"].includes(els.statusFilter.value) && status !== els.statusFilter.value) return false;
  const freshness = els.freshnessFilter.value;
  if (freshness === "week" && item.freshnessTag !== "week") return false;
  if (freshness === "month" && !["week", "month"].includes(item.freshnessTag)) return false;
  if (freshness === "quarter" && !["week", "month", "quarter"].includes(item.freshnessTag)) return false;
  if (freshness === "dated" && !/^\d{4}-\d{2}-\d{2}$/.test(item.postedAt || "")) return false;
  if (freshness === "unknown" && item.freshnessTag !== "unknown") return false;
  const labor = els.laborFilter.value;
  if (labor === "formal" && !isFormalRole(item)) return false;
  if (labor === "knownPay" && !hasKnownCompensation(item)) return false;
  if (labor === "freelance" && !isFreelanceRole(item)) return false;
  if (labor === "internship" && !isInternshipRole(item)) return false;
  if (labor === "payUnknown" && hasKnownCompensation(item)) return false;
  if (els.experienceFilter.value !== "all" && experienceInfo(item).key !== els.experienceFilter.value) {
    return false;
  }
  const risks = riskFlags(item);
  if (
    els.riskFilter.value === "clear" &&
    (risks.length > 0 || applicationStatus(item).key !== "live" || isResearchOnly(item))
  ) {
    return false;
  }
  if (!["all", "clear"].includes(els.riskFilter.value) && !risks.includes(els.riskFilter.value)) {
    return false;
  }
  if (state.progressFilter !== "all" && progressValue(item) !== state.progressFilter) return false;
  if (!ignoreSource && state.source !== "all" && sourceGroup(item) !== state.source) return false;
  return true;
}

function updateSourceCounts(records) {
  const base = records.filter((item) => matchesFilters(item, true));
  els.allSourceCount.textContent = base.length;
  els.chineseCount.textContent = base.filter((item) => sourceGroup(item) === "chinese").length;
  els.linkedinCount.textContent = base.filter((item) => sourceGroup(item) === "linkedin").length;
  els.otherCount.textContent = base.filter((item) => sourceGroup(item) === "other").length;
}

function renderResultCard(item) {
  const card = els.resultTemplate.content.firstElementChild.cloneNode(true);
  const role = roleLabels(item);
  const direction = DIRECTION_LABELS[directionKey(item)];
  const language = languageInfo(item);
  const applicationLanguage = applicationLanguagePath(item);
  const group = sourceGroup(item);
  const curated = CURATED[item.id];
  const freshness = freshnessInfo(item);
  const application = applicationStatus(item);
  const labor = laborConditionInfo(item);

  card.dataset.tier = item.tier || "";
  card.querySelector(".result-card__badges").innerHTML = `
    <span class="tier-badge tier-badge--${escapeHtml(item.tier || "none")}">${escapeHtml(tierLabel(item.tier))}</span>
    ${curated?.changeType === "new" ? '<span class="change-badge change-badge--new">本轮新增</span>' : ""}
    ${curated?.changeType === "refresh" ? '<span class="change-badge change-badge--refresh">状态更新</span>' : ""}
    <span class="source-badge">${escapeHtml(SOURCE_LABELS[group])}</span>
    ${group !== "chinese" && isChineseRelevant(item) ? '<span class="china-badge">中文相关</span>' : ""}
    ${isResearchOnly(item) ? '<span class="research-badge">研究线索</span>' : ""}
    <span class="source-badge">${escapeHtml(freshness.date ? `${freshness.date} · ${freshness.label}` : freshness.label)}</span>
    <span class="${application.key === "closed" ? "closed-badge" : application.key === "verify" ? "warning-badge" : "live-badge"}">${escapeHtml(application.label)}</span>
    <span class="source-badge">${escapeHtml(labor.label)}</span>
    ${hasKnownCompensation(item) ? '<span class="live-badge">薪资金额公开</span>' : '<span class="warning-badge">薪资待确认</span>'}
    <span class="language-route language-route--${escapeHtml(applicationLanguage.tone)}">${escapeHtml(applicationLanguage.short)}</span>
    ${riskFlags(item).includes("spanish") ? '<span class="warning-badge">本地语言硬门槛</span>' : ""}
    ${riskFlags(item).includes("english") ? '<span class="warning-badge">需要英文材料 / 沟通</span>' : ""}
    ${riskFlags(item).includes("lowpay") ? '<span class="warning-badge">低薪 / 无薪风险</span>' : ""}
    ${riskFlags(item).includes("internship") ? '<span class="warning-badge">实习 / 协议限制</span>' : ""}
    ${riskFlags(item).includes("opaque") ? '<span class="warning-badge">匿名客户 / 聚合入口</span>' : ""}
  `;
  card.querySelector(".result-card__company").textContent = companyLabel(item);
  card.querySelector(".result-card__title").textContent = role.zh;
  card.querySelector(".result-card__title-es").textContent = role.es;
  card.querySelector(".result-card__direction").textContent = direction.zh;
  card.querySelector(".result-card__direction-es").textContent = direction.es;
  card.querySelector(".result-card__location").textContent = locationLabel(item);
  card.querySelector(".result-card__language").textContent = applicationLanguage.label;
  card.querySelector(".result-card__language-detail").textContent = language.label;
  card.querySelector(".result-card__reason").textContent = curated?.reason || genericReason(item);
  card.querySelector(".result-card__next").textContent = curated?.next || genericNext(item);
  const personalized = state.preset === "profile";
  card.querySelector(".result-card__score").textContent = personalized ? personalMatchScore(item) : (item.score ?? "—");
  card.querySelector(".result-card__score-label").textContent = personalized ? "我的匹配分" : "综合分";
  if (item.tier === "X") {
    card.querySelector(".result-card__reason-label").textContent = "为什么排除";
    card.querySelector(".result-card__score-label").textContent = "记录分";
    card.querySelector(".result-card__next-label").textContent = "安全提醒";
  }

  card.querySelector(".result-card__progress").appendChild(createProgressControl(item));
  renderLinks(item, card.querySelector(".result-card__links"));

  const outreachWrap = card.querySelector(".result-card__outreach-wrap");
  const outreachTitle = card.querySelector(".result-card__outreach-title");
  const outreachTextNode = card.querySelector(".result-card__outreach");
  const outreachTranslation = card.querySelector(".result-card__outreach-translation");
  const outreachActions = card.querySelector(".result-card__outreach-actions");
  if (["chinese", "chineseCheck", "basicSpanish"].includes(applicationLanguage.key)) {
    const outreachText = chineseOutreachText(item);
    outreachTitle.textContent = "可直接发送的中文询问";
    outreachTextNode.textContent = outreachText;
    outreachActions.appendChild(createCopyButton(outreachText));
  } else if (applicationLanguage.key === "english") {
    const outreach = englishOutreachText(item);
    outreachWrap.classList.add("result-card__outreach-wrap--english");
    outreachTitle.textContent = "英文询问模板（附中文意思）";
    outreachTextNode.textContent = outreach.en;
    outreachTranslation.hidden = false;
    outreachTranslation.textContent = outreach.zh;
    outreachActions.appendChild(createCopyButton(outreach.en, "复制英文询问"));
  } else {
    outreachWrap.hidden = true;
  }

  const contactNode = card.querySelector(".result-card__contact");
  contactTokens(item).forEach((token) => {
    const element = token.href ? document.createElement("a") : document.createElement("span");
    element.className = "contact-token";
    element.textContent = token.label;
    if (token.href) element.href = token.href;
    contactNode.appendChild(element);
  });

  const signalsNode = card.querySelector(".result-card__signals");
  signalList(item).forEach((signal) => {
    const li = document.createElement("li");
    li.textContent = signal;
    signalsNode.appendChild(li);
  });

  renderRaw(item, card.querySelector(".result-card__raw"));
  return card;
}

function renderResults() {
  const records = baseRecords();
  updateSourceCounts(records);
  const visible = records.filter((item) => matchesFilters(item));
  sortRecords(visible);

  els.visibleCount.textContent = visible.length;
  els.resultsList.innerHTML = "";

  if (!visible.length) {
    els.resultsList.innerHTML = `
      <div class="empty-state">
        <strong>没有符合当前条件的机会</strong>
        <p>可以清除部分筛选，或切换到“A / B 值得投”“可投 + 冷联系”和“排除 / 已过期”。</p>
      </div>
    `;
    els.loadMore.hidden = true;
    els.loadMore.parentElement.hidden = true;
    return;
  }

  const fragment = document.createDocumentFragment();
  visible.slice(0, state.limit).forEach((item) => fragment.appendChild(renderResultCard(item)));
  els.resultsList.appendChild(fragment);

  els.loadMore.hidden = visible.length <= state.limit;
  els.loadMore.parentElement.hidden = els.loadMore.hidden;
  if (!els.loadMore.hidden) {
    els.loadMore.textContent = `继续加载（还有 ${visible.length - state.limit} 条）`;
  }
}

function resetLimitAndRender() {
  state.limit = 18;
  renderResults();
}

function syncPresetUi() {
  els.presetButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.preset === state.preset),
  );
  els.presetNote.textContent = PRESET_NOTES[state.preset] || PRESET_NOTES.none;
}

function syncScopeUi() {
  els.scopeButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.scope === state.scope),
  );
}

function syncSourceUi() {
  els.sourceTabs.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.source === state.source),
  );
}

function syncProgressFilterUi() {
  els.progressFilterButtons.forEach((button) =>
    button.classList.toggle("is-active", button.dataset.progressFilter === state.progressFilter),
  );
}

function applyPreset(preset) {
  state.preset = preset;
  state.scope = ["profile", "actionable", "chinese", "core", "none"].includes(preset) ? "all" : "ab";
  state.source = "all";
  state.progressFilter = "all";
  els.searchInput.value = "";
  els.directionFilter.value = "all";
  els.locationFilter.value = "all";
  els.languageFilter.value = "all";
  els.statusFilter.value = "open";
  els.freshnessFilter.value = "all";
  els.sortFilter.value = "smart";
  els.laborFilter.value = "all";
  els.experienceFilter.value = "all";
  els.riskFilter.value = "all";
  els.validRouteOnly.checked = true;
  els.excludeLowPay.checked = preset !== "none";
  els.excludeInternships.checked = ["actionable", "stable"].includes(preset);
  syncPresetUi();
  syncScopeUi();
  syncSourceUi();
  syncProgressFilterUi();
  resetLimitAndRender();
}

function clearPresetForManualFilters() {
  state.preset = "none";
  syncPresetUi();
}

els.presetButtons.forEach((button) => {
  button.addEventListener("click", () => applyPreset(button.dataset.preset));
});

els.scopeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearPresetForManualFilters();
    state.scope = button.dataset.scope;
    state.source = "all";
    syncScopeUi();
    syncSourceUi();
    resetLimitAndRender();
  });
});

els.sourceTabs.forEach((button) => {
  button.addEventListener("click", () => {
    clearPresetForManualFilters();
    state.source = button.dataset.source;
    if (state.scope === "recentChinese" && !["all", "chinese"].includes(state.source)) {
      state.scope = "all";
      syncScopeUi();
    }
    syncSourceUi();
    resetLimitAndRender();
  });
});

els.statusSummaryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearPresetForManualFilters();
    state.scope = "all";
    state.source = "all";
    state.progressFilter = "all";
    els.statusFilter.value = button.dataset.status;
    syncScopeUi();
    syncSourceUi();
    syncProgressFilterUi();
    resetLimitAndRender();
    document.querySelector("#database")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

els.progressFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.progressFilter = button.dataset.progressFilter;
    if (state.progressFilter !== "all" && state.progressFilter !== "untracked") {
      clearPresetForManualFilters();
      state.scope = "all";
      state.source = "all";
      syncScopeUi();
      syncSourceUi();
    }
    syncProgressFilterUi();
    resetLimitAndRender();
  });
});

els.searchInput.addEventListener("input", resetLimitAndRender);
els.searchInput.addEventListener("change", resetLimitAndRender);

[els.directionFilter, els.locationFilter, els.languageFilter, els.statusFilter, els.freshnessFilter, els.laborFilter, els.experienceFilter, els.riskFilter].forEach((input) => {
  input.addEventListener("input", () => {
    clearPresetForManualFilters();
    resetLimitAndRender();
  });
  input.addEventListener("change", () => {
    clearPresetForManualFilters();
    resetLimitAndRender();
  });
});

els.sortFilter.addEventListener("change", resetLimitAndRender);

els.validRouteOnly.addEventListener("change", resetLimitAndRender);
els.excludeLowPay.addEventListener("change", resetLimitAndRender);
els.excludeInternships.addEventListener("change", resetLimitAndRender);

els.resetFilters.addEventListener("click", () => {
  applyPreset("profile");
});

els.loadMore.addEventListener("click", () => {
  state.limit += 18;
  renderResults();
});

function initStats() {
  els.totalCount.textContent = allData.length;
  els.priorityCount.textContent = priorityItems.length;
  els.chineseTotal.textContent = allData.filter((item) => sourceGroup(item) === "chinese").length;
  els.recentChineseTotal.textContent = dedupedData.filter(
    (item) =>
      sourceGroup(item) === "chinese" &&
      ["week", "month"].includes(item.freshnessTag) &&
      item.tier !== "X",
  ).length;
  const statusSummary = getStatusSummary();
  els.liveCount.textContent = statusSummary.live;
  els.verifyCount.textContent = statusSummary.verify;
  els.closedCount.textContent = statusSummary.closed;
  els.updatedAt.textContent = meta.generatedAt ? meta.generatedAt.slice(0, 10) : "—";
}

initStats();
renderPriority();
renderResults();
