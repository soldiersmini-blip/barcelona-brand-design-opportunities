const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const dataSource = fs.readFileSync(path.join(root, "data.js"), "utf8");
const stylesSource = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const generatorSource = fs.readFileSync(path.join(root, "scripts", "generate-data.ps1"), "utf8");
let appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");

const stub = {
  value: "all",
  checked: false,
  hidden: false,
  textContent: "",
  innerHTML: "",
  dataset: {},
  classList: {
    toggle() {},
  },
  addEventListener() {},
};

const context = {
  console,
  URL,
  window: {},
  document: {
    querySelector() {
      return Object.create(stub);
    },
    querySelectorAll() {
      return [];
    },
  },
};

context.globalThis = context;
vm.createContext(context);
vm.runInContext(dataSource, context, { filename: "data.js" });

appSource = appSource
  .replace(/\ninitStats\(\);\nrenderPriority\(\);\nrenderResults\(\);\s*$/, "\n")
  .concat(
    "\nglobalThis.siteTest = { allData, dedupedData, latestRoundSection, latestRoundItems, priorityItems, CURATED, state, getStatusSummary, directionKey, languageInfo, applicationLanguagePath, roleLabels, sourceGroup, locationBucket, isActionableLink, toLinks, isChineseRelevant, isResearchOnly, isTargetOpportunity, isInternshipRole, hasLowPayRisk, riskFlags, hasOpaqueEmployerRisk, isFormalRole, isFreelanceRole, hasKnownCompensation, laborConditionInfo, experienceInfo, applicationStatus, personalMatchScore, postedTimestamp, rankingScore, confidenceScore, sortRecords, matchesPreset, progressKey, progressValue, saveProgressValue, identityKey, englishOutreachText };\n",
  );
vm.runInContext(appSource, context, { filename: "app.js" });

const test = context.siteTest;
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

check(test.allData.length > 700, "机会数据没有完整载入");
check(test.priorityItems.length === 5, "首页中文重点机会数量不是 5");
check(
  [702, 758, 759, 778, 813].every((id) =>
    test.priorityItems.some((item) => item.id === id),
  ),
  "可先中文联系的重点设计 / 内容岗位未完整进入首页",
);
check(test.dedupedData.length > 0 && test.dedupedData.length < test.allData.length, "去重逻辑没有生效");
const recentChinese = test.dedupedData.filter(
  (item) =>
    test.sourceGroup(item) === "chinese" &&
    ["week", "month"].includes(item.freshnessTag) &&
    item.tier !== "X",
);
check(recentChinese.length > 0, "近 30 天华人岗位筛选没有结果");
check(
  recentChinese.every((item) => /^\d{4}-\d{2}-\d{2}$/.test(item.postedAt || "")),
  "近期岗位缺少可显示的发布日期",
);

for (const item of test.priorityItems) {
  const curated = test.CURATED[item.id];
  check(Boolean(curated), `重点机会 ${item.id} 缺少中文整理`);
  check(Boolean(test.roleLabels(item).zh), `重点机会 ${item.id} 缺少中文职位名`);
  check(Boolean(test.roleLabels(item).es), `重点机会 ${item.id} 缺少西文职位名`);
  check(test.toLinks(item).length > 0, `重点机会 ${item.id} 缺少投递链接`);
  check(Boolean(test.directionKey(item)), `重点机会 ${item.id} 缺少招聘方向`);
  check(Boolean(test.languageInfo(item).label), `重点机会 ${item.id} 缺少语言说明`);
  check(
    ["chinese", "chineseCheck", "basicSpanish"].includes(test.applicationLanguagePath(item).key),
    `重点机会 ${item.id} 不是中文可联系路径`,
  );
}

const selectorIds = [...appSource.matchAll(/querySelector\("#([^"]+)"\)/g)].map((match) => match[1]);
for (const id of selectorIds) {
  check(indexHtml.includes(`id="${id}"`), `app.js 引用了不存在的元素 #${id}`);
}

const htmlIds = [...indexHtml.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
check(new Set(htmlIds).size === htmlIds.length, "index.html 中存在重复 id");
check(
  (stylesSource.match(/{/g) || []).length === (stylesSource.match(/}/g) || []).length,
  "styles.css 的花括号数量不平衡",
);
check(
  /\[hidden\]\s*\{[^}]*display:\s*none\s*!important/i.test(stylesSource),
  "页面没有可靠隐藏无效的继续加载按钮",
);
check(
  appSource.includes("els.loadMore.parentElement.hidden = true") &&
    appSource.includes("els.loadMore.parentElement.hidden = els.loadMore.hidden"),
  "继续加载容器没有跟随结果数量隐藏",
);
check(appSource.includes('state.scope === "recentChinese"'), "缺少近 30 天华人岗位筛选");
check(indexHtml.includes('data-scope="latestRound"'), "缺少“本轮变化”范围");
check(indexHtml.includes("本轮变化"), "本轮范围没有清楚区分新增与状态更新");
check(appSource.includes('state.scope === "latestRound"'), "“本轮变化”范围没有筛选逻辑");
check(
  /^\d{4}-\d{2}-\d{2}.*第.+轮/.test(test.latestRoundSection),
  "最新轮次没有被自动识别",
);
check(
  test.latestRoundItems.length >= 1 &&
    test.latestRoundItems.every((item) => test.toLinks(item).length > 0),
  "当前最新轮次没有完整进入页面数据或缺少投递入口",
);
check(!appSource.includes("item.postingDate"), "页面仍引用不存在的 postingDate 字段");
check(!indexHtml.includes("\uFFFD") && !appSource.includes("\uFFFD"), "页面源码中出现了损坏字符");
const nonActionableChineseRoutes = test.dedupedData.flatMap((item) =>
  test
    .toLinks(item)
    .filter((url) =>
      /infohuaxin\.com\/show(?:class|info)\.asp|eulam\.infohuaxin\.com\/listings|xihua\.es\/forum\.php\?.*mod=forumdisplay|bbs\.eus\/forum\.php\?(?!.*mod=viewthread)|huarenjiewang\.com\/category-|es02\.com\/?$/i.test(
        url,
      ),
    ),
);
check(nonActionableChineseRoutes.length === 0, "华人渠道的分类页或失效旧版详情仍被显示为投递按钮");
check(indexHtml.includes('data-preset="profile"'), "缺少“最适合我”个性化预设");
check(indexHtml.includes('data-preset="actionable"'), "缺少“现在可联系”个性化预设");
check(indexHtml.includes('data-preset="stable"'), "缺少“偏正式 / 避开低薪实习”预设");
check(indexHtml.includes('id="validRouteOnly"'), "缺少“只看有效投递入口”筛选");
check(indexHtml.includes('id="statusFilter"'), "缺少投递状态筛选");
check(indexHtml.includes('class="status-summary"'), "缺少全库状态摘要");
check(appSource.includes("getStatusSummary"), "状态摘要没有使用统一状态判断");
check(
  typeof test.getStatusSummary === "function" &&
    Object.values(test.getStatusSummary()).reduce((sum, value) => sum + value, 0) === test.dedupedData.length,
  "全库状态摘要没有覆盖全部去重记录",
);
check(indexHtml.includes('id="freshnessFilter"'), "缺少发布时间筛选");
check(indexHtml.includes('id="sortFilter"'), "缺少排序方式筛选");
check(indexHtml.includes('id="laborFilter"'), "缺少合同 / 薪资筛选");
check(indexHtml.includes('id="experienceFilter"'), "缺少经验门槛筛选");
check(indexHtml.includes('id="riskFilter"'), "缺少主要投递阻力筛选");
check(indexHtml.includes('<option value="english">需要英文材料 / 沟通</option>'), "缺少英语投递阻力筛选");
check(indexHtml.includes('<option value="opaque">匿名客户 / 聚合入口</option>'), "缺少匿名客户 / 聚合入口真实性筛选");
check(indexHtml.includes('data-progress-filter="shortlist"'), "缺少“待投”进度筛选");
check(indexHtml.includes('data-progress-filter="applied"'), "缺少“已投递”进度筛选");
check(indexHtml.includes('class="result-card__progress"'), "结果卡缺少本地投递进度控件");
check(appSource.includes("PROGRESS_STORAGE_KEY"), "本地投递进度没有持久化键");
check(indexHtml.includes('id="excludeLowPay"'), "缺少低薪 / 无薪风险筛选");
check(indexHtml.includes('id="excludeInternships"'), "缺少实习筛选");
check(appSource.includes('state.source = "all";'), "中文优先仍被错误限制在华人网站来源标签");
check(indexHtml.includes("中文能投（默认）"), "默认预设没有明确说明中文可投");
check(indexHtml.includes("每个岗位只做三步"), "首页缺少零外语投递流程");
check(indexHtml.includes("外语岗位备选（默认隐藏"), "英语 / 西语备选没有默认折叠");
check(indexHtml.includes('id="languageCautionGrid"'), "基础西语岗位没有与纯中文首屏分开");
check(indexHtml.includes('class="priority-card__title-es" hidden'), "重点卡片仍在首屏显示西文标题");
check(indexHtml.includes('class="result-card__title-es" hidden'), "结果卡仍在首屏显示西文标题");
check(indexHtml.includes("复制中文询问"), "重点卡片缺少可复制的中文询问");
check(indexHtml.includes('class="result-card__outreach-translation"'), "普通卡片缺少英文询问的中文翻译区域");
check(appSource.includes('"复制英文询问"'), "英语岗位备选缺少可复制的英文询问");
const englishBackup = test.allData.find((item) => item.id === 910);
const englishOutreach = test.englishOutreachText(englishBackup);
check(
  englishOutreach.en.includes("main working language") &&
    englishOutreach.en.includes("client-facing English") &&
    englishOutreach.zh.startsWith("中文意思："),
  "英语岗位询问模板没有同时说明工作语言、沟通强度和中文含义",
);
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 759)).key === "chinese", "Insbrand 没有识别为中文可联系");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 778)).key === "basicSpanish", "巴塞华人广告岗没有标出基础西语");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 917)).key === "chinese", "OneKey 没有识别为中文可申请");
check(test.allData.find((item) => item.id === 917).tier === "C", "OneKey 没有保持在全球远程待确认层");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 918)).key === "english", "Huqiao 英语硬门槛没有隔离到外语备选");
check(test.allData.find((item) => item.id === 918).tier === "C", "Huqiao 没有保持在低薪英语备选层");
check(test.allData.find((item) => item.id === 918).postedAt === "2026-07-25", "Huqiao 当前重发日期没有识别");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 919)), "TT3Labs 匿名雇主风险没有识别");
check(test.allData.find((item) => item.id === 919).tier === "C", "TT3Labs 高风险岗位没有保持在 C 级");
check(test.applicationStatus(test.allData.find((item) => item.id === 920)).key === "verify", "较早中文兼职没有标为先核验");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 906)).key === "english", "INFiLED 英语申请没有与中文投递拆开");
check(test.languageInfo(test.allData.find((item) => item.id === 706)).key === "spanish", "三语必需岗位被误判成低语言门槛");
check(test.applicationStatus(test.allData.find((item) => item.id === 357)).key === "closed", "已关闭岗位没有进入历史状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 850)).key === "live", "DashBook 当前申请状态没有保留");
check(test.applicationStatus(test.allData.find((item) => item.id === 859)).key === "live", "Stripe Motion Designer 当前申请状态没有保留");
check(test.applicationStatus(test.allData.find((item) => item.id === 861)).key === "closed", "La Casa 已下架岗位没有进入历史状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 862)).key === "closed", "Stripe 旧标题替代记录没有进入历史状态");
check(test.allData.find((item) => item.id === 850).postedAt === "", "复核日期被错误当成 DashBook 发布日期");
check(test.allData.find((item) => item.id === 859).postedAt === "", "复核日期被错误当成 Stripe Motion Designer 发布日期");
check(test.allData.find((item) => item.id === 778).postedAt === "2026-07-25", "华人广告公司明确发布日期没有被识别");
check(test.isChineseRelevant(test.allData.find((item) => item.id === 559)), "INFiLED 没有被识别为中文相关中国品牌岗位");
check(test.isFreelanceRole(test.allData.find((item) => item.id === 855)), "Yellowcat 日薪自由职业岗位没有被识别");
check(test.hasKnownCompensation(test.allData.find((item) => item.id === 855)), "Yellowcat 公开日薪没有被识别");
check(test.isFormalRole(test.allData.find((item) => item.id === 856)), "SYNERGIE 永久全职岗位没有被识别");
check(test.hasKnownCompensation(test.allData.find((item) => item.id === 856)), "SYNERGIE 公开年薪没有被识别");
check(test.experienceInfo(test.allData.find((item) => item.id === 832)).key === "junior", "Mind the Bridge 初级实习岗经验分级错误");
check(test.experienceInfo(test.allData.find((item) => item.id === 835)).key === "mid", "Revolut 3 年以上品牌岗经验分级错误");
check(test.experienceInfo(test.allData.find((item) => item.id === 840)).key === "junior", "Randstad 1–2 年岗位经验分级错误");
check(test.experienceInfo(test.allData.find((item) => item.id === 859)).key === "senior", "Stripe 5 年以上岗位经验分级错误");
check(test.experienceInfo(test.allData.find((item) => item.id === 778)).key === "unknown", "华人广告公司未说明经验的岗位被误分级");
check(test.applicationStatus(test.allData.find((item) => item.id === 863)).key === "live", "Ametller 数字设计岗没有保留当前可投状态");
check(test.experienceInfo(test.allData.find((item) => item.id === 863)).key === "mid", "Ametller 2–4 年数字设计岗经验分级错误");
check(test.applicationStatus(test.allData.find((item) => item.id === 864)).key === "live", "Ametller 包装负责人岗没有保留当前可投状态");
check(test.experienceInfo(test.allData.find((item) => item.id === 864)).key === "senior", "Ametller 5 年以上包装岗经验分级错误");
check(test.applicationStatus(test.allData.find((item) => item.id === 865)).key === "closed", "FIRMAMENT 地点异常岗位没有进入排除层");
check(test.applicationStatus(test.allData.find((item) => item.id === 866)).key === "live", "devicenow 当前英语品牌视频岗没有保留可投状态");
check(test.languageInfo(test.allData.find((item) => item.id === 866)).key === "light", "devicenow 英语岗位被误判为高西语");
check(test.applicationStatus(test.allData.find((item) => item.id === 867)).key === "live", "Space Go 当前动态设计岗没有保留可投状态");
check(test.experienceInfo(test.allData.find((item) => item.id === 867)).key === "senior", "Space Go 5 年以上经验没有正确分级");
check(test.languageInfo(test.allData.find((item) => item.id === 868)).key === "spanish", "Omnicom 流利西语硬门槛没有识别");
check(test.languageInfo(test.allData.find((item) => item.id === 869)).key === "spanish", "BLAINE 母语西语硬门槛没有识别");
check(test.applicationStatus(test.allData.find((item) => item.id === 870)).key === "live", "Flummox 重开岗位没有保留可投状态");
check(test.languageInfo(test.allData.find((item) => item.id === 870)).key === "light", "Flummox 英语远程岗被误判为高西语");
check(test.applicationStatus(test.allData.find((item) => item.id === 871)).key === "live", "Codeway 当前品牌岗没有保留可投状态");
check(test.experienceInfo(test.allData.find((item) => item.id === 871)).key === "mid", "Codeway 1–4 年经验范围没有正确分级");
check(test.applicationStatus(test.allData.find((item) => item.id === 872)).key === "verify", "AQIPA 地点冲突没有保留先确认状态");
check(test.applicationStatus({ opportunity: "Trivelta Graphic Designer", status: "Apply; Barcelona-based hybrid role; 需先确认地点冲突" }).key === "verify", "地点冲突岗位即使显示 Apply 也没有进入先确认状态");
check(
  test.dedupedData.some((item) =>
    test.toLinks(item).some((url) => /4235534009/.test(url)) &&
    test.applicationStatus(item).key === "verify"
  ),
  "Trivelta official Apply route with Barcelona hybrid conflict is not verify-first",
);
check(test.languageInfo(test.allData.find((item) => item.id === 873)).key === "light", "Talent-R 非西语岗位被错误归入西语硬门槛");
check(test.applicationStatus(test.allData.find((item) => item.id === 874)).key === "live", "IKIGAI 官方表单没有保留当前可投状态");
check(test.languageInfo(test.allData.find((item) => item.id === 874)).key === "light", "IKIGAI 英语岗位被误判成高西语");
check(test.riskFlags(test.allData.find((item) => item.id === 875)).includes("spanish"), "CoverManager 本地语言硬门槛没有标记");
check(test.experienceInfo(test.allData.find((item) => item.id === 876)).key === "senior", "Buzz 4–5 年岗位经验分级错误");
check(test.hasKnownCompensation(test.allData.find((item) => item.id === 877)), "Eurofirms 公开时薪没有识别");
check(test.isInternshipRole(test.allData.find((item) => item.id === 878)), "Hosco 全职实习没有识别");
check(test.hasLowPayRisk(test.allData.find((item) => item.id === 879)), "Bisubi EUR10/小时低薪风险没有识别");
check(!test.hasLowPayRisk(test.allData.find((item) => item.id === 855)), "Yellowcat EUR320 日薪被误判为低薪");
check(test.riskFlags(test.allData.find((item) => item.id === 880)).includes("spanish"), "Axo 英西双语硬门槛没有标记");
check(test.applicationStatus(test.allData.find((item) => item.id === 881)).key === "live", "Avidalia 官方申请状态没有保留");
check(test.languageInfo(test.allData.find((item) => item.id === 881)).key === "unknown", "Avidalia 未说明语言被误判为低门槛");
check(test.locationBucket(test.allData.find((item) => item.id === 882)) === "remote", "Jobgether Spain remote 地点分级错误");
check(test.applicationStatus(test.allData.find((item) => item.id === 883)).key === "closed", "Preply 已关闭状态没有识别");
check(test.applicationStatus(test.allData.find((item) => item.id === 884)).key === "live", "Dragons Mid Pharma 当前申请状态没有保留");
check(test.languageInfo(test.allData.find((item) => item.id === 884)).key === "light", "Dragons Mid Pharma 英语岗位被误判为高西语");
check(test.locationBucket(test.allData.find((item) => item.id === 885)) === "remote", "Social Scout 远程岗位地点分级错误");
check(test.CURATED[884].changeType === "new" && test.CURATED[889].changeType === "refresh", "本轮新增与状态更新没有区分");
check(test.identityKey(test.allData.find((item) => item.id === 337)) === test.identityKey(test.allData.find((item) => item.id === 889)), "Dragons 食品饮料重发没有合并为稳定岗位身份");
check(test.identityKey(test.allData.find((item) => item.id === 95)) === test.identityKey(test.allData.find((item) => item.id === 892)), "Qustodio 重发没有合并为稳定岗位身份");
check(
  test.dedupedData.some((item) => item.id === 889) && !test.dedupedData.some((item) => item.id === 337),
  "Dragons 食品饮料重发没有保留最新申请入口",
);
check(test.applicationStatus(test.allData.find((item) => item.id === 893)).key === "live", "CrowdStrike 官方当前申请状态没有保留");
check(test.languageInfo(test.allData.find((item) => item.id === 893)).key === "light", "CrowdStrike 英语岗位被误判为高西语");
check(test.locationBucket(test.allData.find((item) => item.id === 893)) === "remote", "CrowdStrike Spain remote 地点没有正确分级");
check(test.toLinks(test.allData.find((item) => item.id === 893)).some((url) => /crowdstrike\.wd5\.myworkdayjobs\.com/i.test(url)), "CrowdStrike 官方申请入口缺失");
check(test.applicationStatus(test.allData.find((item) => item.id === 897)).key === "live", "D&M 当前可投状态没有恢复");
check(test.applicationStatus(test.allData.find((item) => item.id === 898)).key === "live", "Intracon / HP 当前可投状态没有恢复");
check(test.riskFlags(test.allData.find((item) => item.id === 901)).includes("spanish"), "DENZA 德语硬门槛没有进入本地语言阻力筛选");
check(test.locationBucket(test.allData.find((item) => item.id === 901)) === "other", "DENZA Madrid 地点被误判为远程");
check(test.CURATED[893].changeType === "new" && test.CURATED[898].changeType === "refresh", "第十八轮新增与状态恢复没有区分");
check(test.identityKey(test.allData.find((item) => item.id === 184)) === test.identityKey(test.allData.find((item) => item.id === 894)), "Ogilvy 当前状态刷新没有与旧记录合并");
check(test.identityKey(test.allData.find((item) => item.id === 186)) === test.identityKey(test.allData.find((item) => item.id === 897)), "D&M 当前状态刷新没有与旧记录合并");
check(test.identityKey(test.allData.find((item) => item.id === 320)) === test.identityKey(test.allData.find((item) => item.id === 898)), "Intracon 当前状态刷新没有与旧记录合并");
check(test.dedupedData.some((item) => item.id === 898) && !test.dedupedData.some((item) => item.id === 320), "Intracon 状态恢复没有保留最新记录");
check(test.applicationStatus({ id: -1, opportunity: "", status: "Salary not disclosed", analysis: "", contact: "" }).key !== "closed", "“薪资未公开”仍被误判为职位关闭");
check(generatorSource.includes("'exclude|risk|scam|\\bclosed\\b|expired"), "数据生成器未使用完整单词匹配 closed");
check(!generatorSource.includes("'exclude|risk|scam|closed|expired"), "数据生成器仍可能把 disclosed 误判为 closed");
check(test.applicationStatus(test.allData.find((item) => item.id === 902)).key === "live", "MEDIAPRO 当前申请状态没有保留");
check(test.riskFlags(test.allData.find((item) => item.id === 902)).includes("spanish"), "MEDIAPRO 加泰语硬门槛没有进入本地语言筛选");
check(test.applicationStatus(test.allData.find((item) => item.id === 903)).key === "live", "fhios 当前申请状态没有保留");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 903)), "fhios 未公开最终客户没有进入真实性风险筛选");
check(test.applicationStatus(test.allData.find((item) => item.id === 904)).key === "live", "Wall Street English 当前申请状态没有保留");
check(test.languageInfo(test.allData.find((item) => item.id === 904)).key === "light", "Wall Street English 英语岗位被误判为高西语");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 905)), "Steneg 未公开客户没有进入真实性风险筛选");
check(test.isChineseRelevant(test.allData.find((item) => item.id === 906)), "INFiLED 当前记录没有保留中文相关标记");
check(test.riskFlags(test.allData.find((item) => item.id === 909)).includes("spanish"), "Revolt 英西双语硬门槛没有识别");
check(test.CURATED[902].changeType === "new" && test.CURATED[906].changeType === "refresh", "第十九轮新增与状态刷新没有区分");
check(test.identityKey(test.allData.find((item) => item.id === 559)) === test.identityKey(test.allData.find((item) => item.id === 906)), "INFiLED 当前刷新没有与旧记录合并");
check(test.identityKey(test.allData.find((item) => item.id === 35)) === test.identityKey(test.allData.find((item) => item.id === 905)), "Steneg 当前刷新没有与旧记录合并");
check(test.dedupedData.some((item) => item.id === 906) && !test.dedupedData.some((item) => item.id === 559), "INFiLED 当前刷新没有保留最新记录");
check(test.applicationStatus(test.allData.find((item) => item.id === 910)).key === "live", "LABHOUSE 官方当前申请状态没有保留");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 910)).key === "english", "LABHOUSE 没有隔离到英语岗位备选");
check(test.locationBucket(test.allData.find((item) => item.id === 910)) === "remote", "LABHOUSE Spain remote 地点没有正确分级");
check(test.allData.find((item) => item.id === 910).tier === "B", "LABHOUSE 没有保持 B 级英语备选");
check(test.applicationStatus(test.allData.find((item) => item.id === 911)).key === "live", "inBeat 官方当前申请状态没有保留");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 911)).key === "english", "inBeat 没有隔离到英语岗位备选");
check(test.allData.find((item) => item.id === 911).tier === "B", "inBeat 没有保持 B 级英语备选");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 912)), "Jobgether 匿名合作方没有进入真实性风险筛选");
check(test.identityKey(test.allData.find((item) => item.id === 882)) === test.identityKey(test.allData.find((item) => item.id === 912)), "Jobgether 状态刷新没有与旧记录合并");
check(test.dedupedData.some((item) => item.id === 912) && !test.dedupedData.some((item) => item.id === 882), "Jobgether 状态刷新没有保留最新记录");
check(test.CURATED[910].changeType === "new" && test.CURATED[912].changeType === "refresh", "第二十轮新增与状态刷新没有区分");
check(test.applicationStatus(test.allData.find((item) => item.id === 913)).key === "live", "ALOHAS 恢复后的官方 Apply 状态没有保留");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 913)).key === "english", "ALOHAS 没有隔离到英语岗位备选");
check(test.isChineseRelevant(test.allData.find((item) => item.id === 913)), "ALOHAS 中文市场岗位没有保留中文相关标记");
check(test.allData.find((item) => item.id === 913).tier === "B", "ALOHAS 恢复岗位没有保持 B 级");
check(test.identityKey(test.allData.find((item) => item.id === 111)) === test.identityKey(test.allData.find((item) => item.id === 913)), "ALOHAS 状态恢复没有与历史关闭记录合并");
check(test.dedupedData.some((item) => item.id === 913) && !test.dedupedData.some((item) => item.id === 111), "ALOHAS 去重后没有保留恢复记录");
check(test.applicationStatus(test.allData.find((item) => item.id === 914)).key === "live", "Trivelta 官方 Greenhouse 当前状态没有保留");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 914)).key === "english", "Trivelta 没有隔离到英语岗位备选");
check(test.identityKey(test.allData.find((item) => item.id === 399)) === test.identityKey(test.allData.find((item) => item.id === 914)), "Trivelta 状态刷新没有与旧记录合并");
check(test.dedupedData.some((item) => item.id === 914) && !test.dedupedData.some((item) => item.id === 399), "Trivelta 去重后没有保留当前记录");
check(test.CURATED[913].changeType === "refresh" && test.CURATED[914].changeType === "refresh", "第二十一轮状态修复没有正确标记");
check(test.allData.find((item) => item.id === 915).tier === "C", "欧浪远程电商岗位没有保持真实性风险降级");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 915)).key === "chineseCheck", "欧浪远程电商岗位没有识别为可先中文确认");
check(test.locationBucket(test.allData.find((item) => item.id === 915)) === "remote", "欧浪远程电商岗位地点没有识别为西班牙远程");
check(test.applicationStatus(test.allData.find((item) => item.id === 915)).key === "live", "欧浪远程电商岗位没有保留当前可申请状态");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 915)), "欧浪远程电商岗位没有标记雇主未公开风险");
check(test.toLinks(test.allData.find((item) => item.id === 915)).includes("https://oulang.ai/listing/2417332"), "欧浪远程电商岗位缺少新版直达详情");
check(test.allData.find((item) => item.id === 916).tier === "C", "中文远程品牌视觉岗位没有保持低薪备选等级");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 916)).key === "chinese", "中文远程品牌视觉岗位被误分到英语备选");
check(test.locationBucket(test.allData.find((item) => item.id === 916)) === "remote", "中文远程品牌视觉岗位地点没有识别为远程");
check(test.hasLowPayRisk(test.allData.find((item) => item.id === 916)), "中文远程品牌视觉岗位没有标记低薪风险");
check(test.progressValue(test.allData.find((item) => item.id === 871)) === "untracked", "未标记岗位默认进度错误");
test.state.preset = "chinese";
check(
  test.rankingScore(test.allData.find((item) => item.id === 778)) >
    test.rankingScore(test.allData.find((item) => item.id === 759)),
  "智能排序没有让近期明确可投的华人设计岗排在日期未知的旧兼职之前",
);

test.state.preset = "profile";
const personalized = test.dedupedData.filter(
  (item) =>
    ["A", "B", "C"].includes(item.tier) &&
    test.matchesPreset(item) &&
    test.toLinks(item).length > 0 &&
    !test.hasLowPayRisk(item),
);
check(personalized.length > 0, "“中文能投”默认预设没有结果");
check(
  personalized.every(
    (item) =>
      ["barcelona", "remote"].includes(test.locationBucket(item)) &&
      ["chinese", "chineseCheck"].includes(test.applicationLanguagePath(item).key) &&
      test.isChineseRelevant(item) &&
      !test.isResearchOnly(item) &&
      test.applicationStatus(item).key !== "closed" &&
      test.toLinks(item).length > 0,
  ),
  "“中文能投”默认预设混入了英文/西语硬门槛、非目标地点或无有效入口的岗位",
);
check(
  personalized.every(
    (item) => !["english", "spanish", "basicSpanish"].includes(test.applicationLanguagePath(item).key),
  ),
  "默认首页仍混入需要英文材料、英文沟通或基础西语的岗位",
);
check(personalized.every((item) => !test.hasLowPayRisk(item)), "默认首页仍混入已识别的低薪或无薪风险");
test.state.preset = "actionable";
const actionableNow = test.dedupedData.filter(
  (item) => ["A", "B", "C"].includes(item.tier) && test.matchesPreset(item),
);
check(actionableNow.length > 0, "“现在可联系”预设没有结果");
check(
  actionableNow.every(
    (item) =>
      ["barcelona", "remote"].includes(test.locationBucket(item)) &&
      ["chinese", "chineseCheck", "basicSpanish"].includes(test.applicationLanguagePath(item).key) &&
      test.toLinks(item).length > 0 &&
      !test.isInternshipRole(item) &&
      !test.hasLowPayRisk(item) &&
      !test.isResearchOnly(item) &&
      test.applicationStatus(item).key !== "closed" &&
      (test.applicationStatus(item).key === "live" ||
        ["week", "month", "quarter"].includes(item.freshnessTag)),
  ),
  "“现在可联系”预设混入旧冷线索、英语硬门槛、低薪实习或无有效入口岗位",
);
test.state.preset = "stable";
const stable = test.dedupedData.filter(
  (item) => ["A", "B"].includes(item.tier) && test.matchesPreset(item) && test.toLinks(item).length > 0,
);
check(stable.length > 0, "“偏正式”预设没有结果");
check(stable.every((item) => !test.isInternshipRole(item)), "“偏正式”预设仍包含实习岗位");
check(stable.every((item) => !test.hasLowPayRisk(item)), "“偏正式”预设仍包含已识别的低薪或无薪风险");
check(stable.every((item) => test.isFormalRole(item)), "“偏正式”预设仍包含未识别为正式或全职的岗位");
check(stable.every((item) => test.languageInfo(item).key !== "spanish"), "“偏正式”预设仍包含明确高西语岗位");
check(stable.every((item) => !test.hasOpaqueEmployerRisk(item)), "“偏正式”预设仍包含匿名客户或聚合入口");
check(stable.every((item) => !test.isResearchOnly(item)), "“偏正式”预设仍包含研究或监控线索");
check(stable.every((item) => test.applicationStatus(item).key !== "closed"), "“偏正式”预设仍包含已关闭岗位");
test.state.preset = "chinese";
const chineseRelevant = test.dedupedData.filter((item) => test.matchesPreset(item) && test.toLinks(item).length > 0);
check(chineseRelevant.length > 0, "“中文优先”预设没有结果");
check(
  chineseRelevant.some((item) => test.sourceGroup(item) !== "chinese"),
  "“中文优先”仍然只包含华人网站，漏掉了中国品牌领英/官网岗位",
);
check(chineseRelevant.every((item) => test.isChineseRelevant(item)), "“中文优先”混入了无中文相关性的岗位");
check(chineseRelevant.every((item) => !test.isResearchOnly(item)), "“中文优先”混入了研究、监控或人才库记录");
check(chineseRelevant.every((item) => test.isTargetOpportunity(item)), "“中文优先”混入了零售、销售或其他非目标岗位");
check(
  chineseRelevant.every((item) => ["barcelona", "remote", "madrid"].includes(test.locationBucket(item))),
  "“中文优先”混入了不在 Barcelona、Madrid 或西班牙远程范围内的岗位",
);
check(chineseRelevant.every((item) => test.directionKey(item) !== "other"), "“中文优先”混入了非目标设计/内容方向");
check(chineseRelevant.every((item) => ["A", "B", "C"].includes(item.tier)), "“中文优先”混入了 D / X 级低价值或排除项");
test.state.preset = "profile";

if (process.env.SITE_VALIDATE_DETAIL === "1") {
  console.log(
    JSON.stringify(
      chineseRelevant
        .slice()
        .sort((a, b) => test.personalMatchScore(b) - test.personalMatchScore(a))
        .map((item) => ({
          id: item.id,
          score: test.personalMatchScore(item),
          tier: item.tier,
          sourceGroup: test.sourceGroup(item),
          location: test.locationBucket(item),
          source: item.source,
          opportunity: item.opportunity,
          postedAt: item.postedAt,
        })),
      null,
      2,
    ),
  );
}

const summary = {
  total: test.allData.length,
  deduped: test.dedupedData.length,
  priority: test.priorityItems.length,
  actionableLinks: test.dedupedData.reduce((count, item) => count + test.toLinks(item).length, 0),
    personalized: personalized.length,
    actionableNow: actionableNow.length,
  stableNonInternship: stable.length,
  chineseRelevant: chineseRelevant.length,
  chinaLinkedOutsideChineseSites: chineseRelevant.filter((item) => test.sourceGroup(item) !== "chinese").length,
  pageShowsApply: test.dedupedData.filter((item) => test.applicationStatus(item).key === "live").length,
  verifyFirst: test.dedupedData.filter((item) => test.applicationStatus(item).key === "verify").length,
  closedHistorical: test.dedupedData.filter((item) => test.applicationStatus(item).key === "closed").length,
  knownPublicationDates: test.dedupedData.filter((item) => /^\d{4}-\d{2}-\d{2}$/.test(item.postedAt || "")).length,
  suppressedChineseResearchLinks: test.dedupedData.reduce((count, item) => {
    if (test.sourceGroup(item) !== "chinese") return count;
    const raw = Array.isArray(item.links) ? item.links : item.links ? [item.links] : [];
    return count + raw.filter((url) => !test.isActionableLink(url)).length;
  }, 0),
  recentChinese: recentChinese.length,
  chinese: test.allData.filter((item) => test.sourceGroup(item) === "chinese").length,
  linkedin: test.allData.filter((item) => test.sourceGroup(item) === "linkedin").length,
  barcelona: test.allData.filter((item) => test.locationBucket(item) === "barcelona").length,
};

if (failures.length) {
  console.error(JSON.stringify({ ok: false, failures, summary }, null, 2));
  process.exitCode = 1;
} else {
  console.log(JSON.stringify({ ok: true, summary }, null, 2));
}
