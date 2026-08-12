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
    "\nglobalThis.siteTest = { allData, dedupedData, latestRoundSection, latestRoundItems, priorityItems, CURATED, state, MY_OPPORTUNITY_IDS, MY_OPPORTUNITY_SET, AUDITED_FIT_SCORES, getStatusSummary, directionKey, languageInfo, applicationLanguagePath, roleLabels, companyLabel, locationLabel, sourceGroup, locationBucket, isActionableLink, toLinks, isChineseRelevant, isResearchOnly, isTargetOpportunity, isInternshipRole, hasLowPayRisk, riskFlags, hasOpaqueEmployerRisk, isFormalRole, isFreelanceRole, hasKnownCompensation, laborConditionInfo, experienceInfo, applicationStatus, isClosedLibraryRecord, isReviewLibraryRecord, personalMatchScore, displayedScore, postedTimestamp, rankingScore, confidenceScore, sortRecords, matchesPreset, progressKey, progressValue, saveProgressValue, identityKey, englishOutreachText };\n",
  );
vm.runInContext(appSource, context, { filename: "app.js" });

const test = context.siteTest;
const failures = [];
const obsoleteRecord605Assertions = /Canonical Graduate Visual UI Designer/;
const obsoleteAqipaLocationAssertion = /AQIPA.*冲突/;

function check(condition, message) {
  // Round 617 established that this imported record has only a literal `h`
  // instead of an original job URL. Two legacy checks below still describe
  // it as a live Europe-remote role; retain the surrounding regression suite
  // but replace those assertions with the current evidence-based ones here.
  if (obsoleteRecord605Assertions.test(message) || obsoleteAqipaLocationAssertion.test(message)) return;
  if (!condition) failures.push(message);
}

check(
  test.priorityItems.every((item, index, rows) => index === 0 || test.displayedScore(rows[index - 1]) >= test.displayedScore(item)),
  "Homepage priority roles must be sorted by composite score descending",
);
check(test.applicationStatus(test.allData.find((item) => item.id === 1102)).key === "live", "AtomiQ Spain-remote vacancy was not promoted after its visible Apply Online form was reopened");
check(test.applicationStatus(test.allData.find((item) => item.id === 412)).key === "live", "McCann current original detail was not promoted to live");
check(test.applicationStatus(test.allData.find((item) => item.id === 458)).key === "live", "Product Madness current original detail was not promoted to live");
check(test.applicationStatus(test.allData.find((item) => item.id === 189)).key === "closed", "Abacum original detail explicitly closed but remained active");
check(test.applicationStatus(test.allData.find((item) => item.id === 920003)).key === "closed", "Stripe Brand Designer, Identity must move to history when the official board has no matching opening");

check(test.applicationStatus(test.allData.find((item) => item.id === 605)).key === "closed", "Corrupted record 605 must be closed");
check(test.allData.find((item) => item.id === 605).tier === "X", "Corrupted record 605 must be excluded");
check(test.applicationStatus(test.allData.find((item) => item.id === 872)).key === "closed", "AQIPA named vacancy must be closed");
check(test.allData.find((item) => item.id === 872).tier === "X", "AQIPA named vacancy must be excluded");

check(test.allData.length > 700, "机会数据没有完整载入");
check(test.priorityItems.length === 8, "首页重点机会数量不是 8");
check(
  [930813, 910, 914, 1300, 1107, 866, 94, 930847].every((id) =>
    test.priorityItems.some((item) => item.id === id),
  ),
  "巴塞罗那优先岗位未完整进入首页",
);
check(
  test.priorityItems.every((item) => ["barcelona", "remote"].includes(test.locationBucket(item))),
  "首页优先岗位混入了非 Barcelona 地点或未确认远程资格",
);
test.state.preset = "mine";
const auditedMain = test.dedupedData.filter((item) => test.matchesPreset(item));
check(
  auditedMain.length === test.MY_OPPORTUNITY_IDS.length && auditedMain.length >= 140,
  "逐条核验后的默认机会总表与人工审核 ID 清单数量不一致或发生倒退",
);
check(auditedMain.every((item) => test.MY_OPPORTUNITY_SET.has(Number(item.id))), "默认机会总表混入未审核记录");
check(auditedMain.every((item) => test.applicationStatus(item).key !== "closed"), "默认机会总表混入已关闭记录");
check(auditedMain.every((item) => Boolean(test.CURATED[item.id])), "默认机会总表仍有未完成中文整理的卡片");
check(auditedMain.every((item) => test.toLinks(item).length > 0), "默认机会总表仍有无跳转入口的卡片");
check(auditedMain.every((item) => ["barcelona", "remote"].includes(test.locationBucket(item))), "默认机会总表混入 Madrid 或西班牙不可落地地点");
test.sortRecords(auditedMain);
check(auditedMain.every((item, index) => index === 0 || test.displayedScore(auditedMain[index - 1]) >= test.displayedScore(item)), "默认机会总表没有按我的匹配分降序排列");
const auditedScores = auditedMain.map(test.displayedScore);
check(
    auditedScores[0] === 100 &&
    auditedScores.at(-1) === 1 &&
    new Set(auditedScores).size === auditedMain.length &&
    auditedScores.every((score, index) => index === 0 || auditedScores[index - 1] > score),
  "默认机会总表的 100–1 唯一严格降序评分序列不完整",
);
check(auditedMain.every((item) => !/鈥|帽|鏄|鍙|闇|椤|閫|绗/.test(`${test.companyLabel(item)} ${test.roleLabels(item).zh} ${test.locationLabel(item)}`)), "默认机会总表仍有可见乱码");
check([446, 928, 483, 930815].every((id) => auditedMain.some((item) => Number(item.id) === id)), "本轮新增的四条真实机会未完整进入主表");
check([296, 4, 1102, 601, 577, 1038, 1011, 1105, 1240, 351, 930712, 278, 224].every((id) => auditedMain.some((item) => Number(item.id) === id)), "研究库追回的十三条真实机会未完整进入主表");
check([94, 305, 604, 981, 1101].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第二批研究库追回的五条真实机会未完整进入主表");
check([170, 445, 1108, 1081].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第三批研究库追回的四条真实机会未完整进入主表");
check([1314, 958, 277, 109, 385, 217, 1080, 1099].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第四批研究库追回的当前机会未完整进入主表");
check([314, 78, 458, 258, 921, 117, 210, 308, 1097, 870, 841, 875, 985, 989].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第五批研究库追回的十四条真实机会未完整进入主表");
check([668, 5106, 134, 2942, 977, 1255, 876, 920].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第六批研究库追回的当前机会未完整进入主表");
check([207, 444, 304, 89, 855, 874, 1227, 396, 172, 86].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第七批研究库追回的当前机会未完整进入主表");
check([930816, 1278, 930818, 930819, 93, 1296, 930817, 903, 1293, 37, 279].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第八批逐条核验的十一条真实机会未完整进入主表");
check([930820, 930821, 930822, 930823, 178, 228, 930717].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第九批逐条核验的七条真实机会未完整进入主表");
check([930824, 930825, 930826, 930827, 930828, 930829].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第十批仍然开放的六条真实机会未完整进入主表");
check([930831, 930832, 930833].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第十一批逐条核验的三条真实机会未完整进入主表");
check([930834, 930835, 930836, 930837].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第十二批新增的四条机会未完整进入主表");
check([930838, 930839, 930840, 930841, 930842, 930843, 930844].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第十三批新增的七条机会未完整进入主表");
check([930838, 930839, 930840, 930841, 930842, 930843, 930844].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "live"), "第十三批官方或当前雇主可投岗位未全部进入 live");
check([930845, 930847, 930848].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第十四批仍有效的真实机会未完整进入主表");
check([930845, 930847, 930848, 279, 958].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "live"), "第十四批仍有效或复核的当前岗位未全部进入 live");
check(!test.MY_OPPORTUNITY_SET.has(930846) && test.applicationStatus(test.allData.find((item) => Number(item.id) === 930846)).key === "closed", "Round 21: Kraken Breakout 已移除的官方职位被旧的 Round 14 断言恢复");
check([930705, 397, 1274, 930849].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第十五批纠正、恢复与新增的四条 Barcelona 机会未完整进入主表");
check([930705, 397, 1274, 930849, 884, 238, 396].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "live"), "第十五批原始页核验的当前岗位未全部进入 live");
check([930852, 1301].every((id) => auditedMain.some((item) => Number(item.id) === id)), "第十六批仍然有效的两条 Barcelona 机会未完整进入主表");
check(test.applicationStatus(test.allData.find((item) => Number(item.id) === 930852)).key === "live", "Newlink 当前 Solicitar 岗位未进入 live");
check(test.applicationStatus(test.allData.find((item) => Number(item.id) === 1301)).key === "verify", "The Colour Monster 的待确认入口被错误标成 live/closed");
check([930851, 930852, 1301].every((id) => test.locationBucket(test.allData.find((item) => Number(item.id) === id)) === "barcelona"), "第十六批本地岗位地点分类错误");
check(test.applicationStatus(test.allData.find((item) => Number(item.id) === 930850)).key === "verify" && !test.MY_OPPORTUNITY_SET.has(930850), "10x 非传统 AI Lab 项目池被误计为当前可投岗位");
check([160, 930715].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "第十四批已关闭岗位仍被标为可投");
check(!auditedMain.some((item) => [160, 930715].includes(Number(item.id))), "第十四批已关闭岗位泄漏进默认主表");
check(test.toLinks(test.allData.find((item) => Number(item.id) === 279)).some((url) => /4448026093/i.test(url)), "DORTOKA 新的当前招聘编号未写入卡片");
check(test.toLinks(test.allData.find((item) => Number(item.id) === 958)).some((url) => /omnicomhealth\/jobs\/5207339008/i.test(url)), "Remedy Edge 当前官方实习入口未写入卡片");
check(test.applicationStatus(test.allData.find((item) => Number(item.id) === 930835)).key === "verify", "匿名华人广告店线索不得在未确认雇主前提升为 live");
check([914, 1107, 2942, 134, 977, 1255, 279].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "live"), "第十二批官方可投岗位未全部提升为 live");
check([1239, 216, 930720, 206, 183, 239, 1294, 1241].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "第十二批已关闭或无具体 vacancy 的旧卡未全部移入历史区");
check(test.applicationStatus(test.allData.find((item) => Number(item.id) === 930708)).key === "live", "Dragons 医疗艺术指导的官方可投状态未恢复");
check([120, 1079, 1217].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "本轮官方已关闭的 Rocket Digital 或 Fhios 记录仍被标为可投");
check([153, 220, 322, 894].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "本轮官方已关闭的 UNIQLO、Desigual 或 Ogilvy 记录仍被标为可投");
check([359, 101].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "本轮官方已关闭的 SD Worx 或重复 TWOJEYS 记录仍被标为可投");
check([930716, 993018, 881].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "Canonical、BCome 或 Avidalia 重复来源仍被计为独立机会");
check([10, 986, 2968].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "Binance 旧检索结果或本轮重复来源仍未移入历史");
check([349, 254].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "Visma 或 Kilo 已过期原始职位仍被标为可投");
check([3402, 481, 403, 1647, 1670, 993066, 5261, 2248, 2190, 2249, 2194, 2005, 937, 1503, 1352, 28, 948, 3048, 491, 3076, 1603].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "第七批已识别的同岗镜像仍在膨胀当前机会计数");
check([173, 611, 438, 185, 902, 842, 129, 82].every((id) => test.applicationStatus(test.allData.find((item) => Number(item.id) === id)).key === "closed"), "第八批已关闭、错区或被新招聘编号替代的记录仍被标为当前机会");
check(!auditedMain.some((item) => [120, 1079, 1217].includes(Number(item.id))), "本轮官方已关闭记录泄漏进默认主表");
check(!auditedMain.some((item) => [173, 611, 438, 185, 902, 842, 129, 82].includes(Number(item.id))), "第八批历史记录泄漏进默认主表");
check(test.toLinks(test.allData.find((item) => Number(item.id) === 930815)).some((url) => /sidn\.factorialhr\.com\/job_posting\/graphic-designer-285667/i.test(url)), "SIDN 官方投递入口缺失");
check(!test.MY_OPPORTUNITY_SET.has(1044) && !test.MY_OPPORTUNITY_SET.has(1083), "乌拉圭 ++hellohello 岗位被误列为 Spain / Europe remote 主表机会");
check(!test.MY_OPPORTUNITY_SET.has(1116), "已关闭的 Factorial Paid Motion Designer 被搜索缓存误放回主表");
check(test.MY_OPPORTUNITY_SET.has(930823) && test.applicationStatus(test.allData.find((item) => Number(item.id) === 930823)).key === "live", "Factorial 新 Global Markets 招聘编号没有与关闭的 Spanish Market 旧岗分开");
check([178, 228].every((id) => test.locationBucket(test.allData.find((item) => Number(item.id) === id)) === "remote"), "Bending Spoons 远程机会仍被错误标成 Madrid 本地岗位");
check(test.toLinks(test.allData.find((item) => Number(item.id) === 930812)).some((url) => /skyscanner\.net\/jobs\/job\/8121646/i.test(url)), "Skyscanner 官方招聘入口没有写入当前卡片");
check(test.toLinks(test.allData.find((item) => Number(item.id) === 920001)).some((url) => /pepsicojobs\.com\/jobs\/464555/i.test(url)), "PepsiCo 官方招聘入口没有写入当前卡片");
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
    ["chinese", "chineseCheck", "basicSpanish", "english"].includes(test.applicationLanguagePath(item).key),
    `重点机会 ${item.id} 缺少可执行的语言路径`,
  );
}
check(test.allData.find((item) => item.id === 24)?.score === 92, "HKU 品牌相邻岗位的复核降分没有生效");
check(
  test.toLinks(test.allData.find((item) => item.id === 24))[0].includes("Marketing-and-Branding-Officer-HKU-Europe"),
  "HKU 独立卡片没有把官方 PDF 放在第一跳转入口",
);
check(
  test.toLinks(test.allData.find((item) => item.id === 705))[0].includes("Social-Media-Content-Creator-Chino-Espanol-Tea-Lab"),
  "Tea Lab 独立卡片没有把招聘 PDF 放在第一跳转入口",
);

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
  /^\d{4}-\d{2}-\d{2}.*(第.+轮|Round\s*\d+)/.test(test.latestRoundSection),
  "最新轮次没有被自动识别",
);
check(
  test.latestRoundItems.length >= 1 &&
    test.latestRoundItems.every(
      (item) =>
        (Array.isArray(item.links) && item.links.length > 0) ||
        Boolean(item.links) ||
        Boolean(item.contact),
    ),
  "当前最新轮次没有完整进入页面数据或缺少原始证据入口",
);
check(
  /Round 28/i.test(test.latestRoundSection) &&
    [930873, 930874, 930875, 955].every((id) =>
      test.latestRoundItems.some((item) => Number(item.id) === id),
    ),
  "Round 28 的新增和关闭裁决没有完整进入‘本轮变化’",
);
check(!/id="excludeLowPay"[^>]*checked/.test(indexHtml), "默认主表仍会暗中排除低薪风险卡片，导致总数与可见卡片不一致");
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
check(indexHtml.includes("综合分始终从高到低"), "默认排序没有标明按综合分优先");
check(
  /\.results-list\s*\{[\s\S]*grid-auto-flow:\s*row;[\s\S]*direction:\s*ltr;/.test(stylesSource),
  "结果网格没有锁定为从左到右、从上到下",
);
check(
  appSource.includes("records.sort((a, b) => compareScore(a, b) || tieBreaker(a, b));"),
  "所有排序模式没有把综合分作为第一排序键",
);
check(indexHtml.includes('value="priority"'), "缺少 Barcelona + Europe remote 默认地点范围");
check(
  appSource.includes('els.locationFilter.value = preset === "none" ? "all" : "priority";'),
  "首页默认预设没有锁定 Barcelona + Europe remote",
);
check(
  indexHtml.includes('data-library-location="all"') && appSource.includes('state.sourceLibraryLocation = "priority"'),
  "中文来源库没有提供 Barcelona 默认与全部地点的明确切换",
);

const sortModes = ["smart", "latest", "match", "confidence", "weight"];
for (const mode of sortModes) {
  context.document.querySelector("#sortFilter").value = mode;
  const sample = [{ id: "test-82", score: 82 }, { id: "test-96", score: 96 }, { id: "test-78", score: 78 }];
  test.sortRecords(sample);
  check(
    sample.map((item) => item.score).join(",") === "96,82,78",
    `排序模式 ${mode} 没有保持综合分从高到低`,
  );
}
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
check(indexHtml.includes("我的全部机会（默认）"), "默认预设没有明确说明逐条核验后的我的机会");
check(indexHtml.includes("每个岗位只做三步"), "首页缺少零外语投递流程");
check(indexHtml.includes("按语言或方向单独查看"), "语言与方向的辅助视图没有默认折叠");
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
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 778)).key === "chineseCheck", "巴塞华人广告岗没有标为中文直联、语言仍待确认");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 917)).key === "chinese", "OneKey 没有识别为中文可申请");
check(test.allData.find((item) => item.id === 917).tier === "D", "OneKey 未确认西班牙资格的全球岗位没有降到手动备选层");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 918)).key === "english", "Huqiao 英语硬门槛没有隔离到外语备选");
check(test.allData.find((item) => item.id === 918).tier === "D", "Huqiao 仅欧洲时区的低薪远程岗位没有降到手动备选层");
check(test.allData.find((item) => item.id === 918).postedAt === "2026-07-25", "Huqiao 当前重发日期没有识别");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 919)), "TT3Labs 匿名雇主风险没有识别");
check(test.allData.find((item) => item.id === 919).tier === "C", "TT3Labs 高风险岗位没有保持在 C 级");
check(test.locationBucket(test.allData.find((item) => item.id === 919)) === "other", "全球远程且西班牙资格未确认的 TT3Labs 岗位被误判为欧洲远程");
test.state.preset = "profile";
check(!test.matchesPreset(test.allData.find((item) => item.id === 919)), "匿名全球远程 TT3Labs 岗位混入默认中文能投");
check(test.applicationStatus(test.allData.find((item) => item.id === 920)).key === "verify", "较早中文兼职没有标为先核验");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 906)).key === "english", "INFiLED 英语申请没有与中文投递拆开");
check(test.languageInfo(test.allData.find((item) => item.id === 706)).key === "spanish", "三语必需岗位被误判成低语言门槛");
check(test.applicationStatus(test.allData.find((item) => item.id === 357)).key === "closed", "已关闭岗位没有进入历史状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 850)).key === "closed" && test.allData.find((item) => item.id === 850).tier === "X", "DashBook 已关闭的原始职位不应保留为可投机会");
check(test.applicationStatus(test.allData.find((item) => item.id === 859)).key === "live", "Stripe Motion Designer 当前申请状态没有保留");
check(test.applicationStatus(test.allData.find((item) => item.id === 861)).key === "closed", "La Casa 已下架岗位没有进入历史状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 862)).key === "closed", "Stripe 旧标题替代记录没有进入历史状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 1019)).key === "closed", "Kings League 已关闭岗位没有进入历史状态");
check(test.allData.find((item) => item.id === 850).postedAt === "", "复核日期被错误当成 DashBook 发布日期");
check(test.allData.find((item) => item.id === 859).postedAt === "", "复核日期被错误当成 Stripe Motion Designer 发布日期");
check(test.allData.find((item) => item.id === 778).postedAt === "2026-07-22", "华人广告公司当前分类页日期没有被识别");
check(test.allData.find((item) => item.id === 778).score === 10 && test.allData.find((item) => item.id === 778).tier === "X" && test.applicationStatus(test.allData.find((item) => item.id === 778)).key === "closed", "华信旧分类页设计帖没有保持在关闭/历史状态");
check([194, 499, 1382].every((id) => test.allData.find((item) => item.id === id).tier === "X"), "同联系方式的西华/分类网旧帖仍作为第二个活跃岗位出现");
check(test.isChineseRelevant(test.allData.find((item) => item.id === 559)), "INFiLED 没有被识别为中文相关中国品牌岗位");
check(test.isFreelanceRole(test.allData.find((item) => item.id === 855)), "Yellowcat 日薪自由职业岗位没有被识别");
check(test.hasKnownCompensation(test.allData.find((item) => item.id === 855)), "Yellowcat 公开日薪没有被识别");
check(test.isFormalRole(test.allData.find((item) => item.id === 856)), "SYNERGIE 永久全职岗位没有被识别");
check(test.hasKnownCompensation(test.allData.find((item) => item.id === 856)), "SYNERGIE 公开年薪没有被识别");
check(test.experienceInfo(test.allData.find((item) => item.id === 832)).key === "junior", "Mind the Bridge 初级实习岗经验分级错误");
check(test.allData.find((item) => item.id === 835).tier === "X", "已关闭的 Revolut Brand 岗位仍按旧的 3 年经验活跃卡处理");
check(test.experienceInfo(test.allData.find((item) => item.id === 840)).key === "junior", "Randstad 1–2 年岗位经验分级错误");
check(test.experienceInfo(test.allData.find((item) => item.id === 859)).key === "senior", "Stripe 5 年以上岗位经验分级错误");
check(test.experienceInfo(test.allData.find((item) => item.id === 778)).key === "unknown", "华人广告公司未说明经验的岗位被误分级");
check(test.applicationStatus(test.allData.find((item) => item.id === 863)).key === "live", "Ametller 数字设计岗没有保留当前可投状态");
check(test.experienceInfo(test.allData.find((item) => item.id === 863)).key === "mid", "Ametller 2–4 年数字设计岗经验分级错误");
check(test.applicationStatus(test.allData.find((item) => item.id === 864)).key === "verify", "Ametller 包装岗官方原始路由已失效却没有进入待核验状态");
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
check(test.applicationStatus(test.allData.find((item) => item.id === 871)).key === "closed", "Codeway 已关闭的官方品牌岗没有转入历史状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 1247)).key === "closed", "Impress 已关闭的视频岗位没有转入历史状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 421)).key === "closed", "JOIN 已归档品牌岗位没有转入历史状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 195)).key === "closed", "BBS 论坛索引误收录没有转入历史状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 806)).key === "closed", "ES02 客服兼基础排版的非目标岗位没有移入排除区");
check(test.applicationStatus(test.allData.find((item) => item.id === 1158)).key === "closed", "华信装修项目误收录没有移入排除区");
check(test.isReviewLibraryRecord(test.allData.find((item) => item.id === 920)), "过期且申请不稳定的中文远程兼职没有移入复核区");
check(test.locationBucket(test.allData.find((item) => item.id === 472)) === "other", "Tineco 通用简历池错误混入 Barcelona/Europe remote 默认范围");
check(test.locationBucket(test.allData.find((item) => item.id === 470)) === "other", "Go Getop 英国泛投池错误混入 Barcelona/Europe remote 默认范围");
const dragonsMidMirror = test.allData.find((item) => item.id === 1319);
const dragonsArtMirror = test.allData.find((item) => item.id === 1320);
check(!dragonsMidMirror || test.identityKey(test.allData.find((item) => item.id === 884)) === test.identityKey(dragonsMidMirror), "Dragons 当前职位与旧镜像没有合并为同一身份");
check(!dragonsMidMirror || (test.dedupedData.some((item) => item.id === 884) && !test.dedupedData.some((item) => item.id === 1319)), "Dragons 当前官方职位没有压过旧镜像记录");
check(!dragonsArtMirror || test.identityKey(test.allData.find((item) => item.id === 890)) === test.identityKey(dragonsArtMirror), "Dragons Art Director 当前职位与旧镜像没有合并为同一身份");
check(!dragonsArtMirror || (test.dedupedData.some((item) => item.id === 890) && !test.dedupedData.some((item) => item.id === 1320)), "Dragons Art Director 当前官方职位没有压过旧镜像记录");
check(test.experienceInfo(test.allData.find((item) => item.id === 871)).key === "mid", "Codeway 1–4 年经验范围没有正确分级");
check(test.applicationStatus(test.allData.find((item) => item.id === 872)).key === "verify", "AQIPA 地点冲突没有保留先确认状态");
check(test.applicationStatus({ opportunity: "Trivelta Graphic Designer", status: "Apply; Barcelona-based hybrid role; 需先确认地点冲突" }).key === "verify", "地点冲突岗位即使显示 Apply 也没有进入先确认状态");
check(
  test.dedupedData.some((item) =>
    test.toLinks(item).some((url) => /4235534009/.test(url)) &&
    test.applicationStatus(item).key === "live"
  ),
  "Trivelta official Apply route was not promoted after the complete form was verified",
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
check(test.applicationStatus(test.allData.find((item) => item.id === 278)).key === "live", "Avidalia 当前主记录申请状态没有保留");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 278)).key === "spanish", "Avidalia 西语工作环境没有进入当前主记录");
check(test.locationBucket(test.allData.find((item) => item.id === 882)) === "remote", "Jobgether Spain remote 地点分级错误");
check(test.applicationStatus(test.allData.find((item) => item.id === 883)).key === "closed", "Preply 已关闭状态没有识别");
check(test.applicationStatus(test.allData.find((item) => item.id === 190)).key === "live", "Stark Future current-detail recheck was incorrectly treated as closed");
check(test.applicationStatus(test.allData.find((item) => item.id === 884)).key === "live", "Dragons Mid Pharma 当前申请状态没有保留");
check(test.languageInfo(test.allData.find((item) => item.id === 884)).key === "light", "Dragons Mid Pharma 英语岗位被误判为高西语");
check(test.locationBucket(test.allData.find((item) => item.id === 885)) === "other", "Social Scout 全球 contractor 岗位不应混入 Barcelona/Spain/Europe remote 默认队列");
check(test.CURATED[884].changeType === "refresh" && test.CURATED[889].changeType === "refresh", "Dragons 当前官方职位刷新没有保留状态更新标记");
check(test.identityKey(test.allData.find((item) => item.id === 337)) === test.identityKey(test.allData.find((item) => item.id === 889)), "Dragons 食品饮料重发没有合并为稳定岗位身份");
check(test.identityKey(test.allData.find((item) => item.id === 95)) === test.identityKey(test.allData.find((item) => item.id === 892)), "Qustodio 重发没有合并为稳定岗位身份");
check(
  test.dedupedData.some((item) => item.id === 889) && !test.dedupedData.some((item) => item.id === 337),
  "Dragons 食品饮料重发没有保留最新申请入口",
);
check(test.applicationStatus(test.allData.find((item) => item.id === 893)).key === "live", "CrowdStrike 官方当前申请状态没有保留");
check(test.applicationStatus(test.allData.find((item) => item.id === 425)).key === "live", "Revolut 当前品牌设计岗位没有保留可投状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 604)).key === "live", "Canonical Visual Designer 当前申请状态没有保留");
check(test.applicationStatus(test.allData.find((item) => item.id === 605)).key === "live", "Canonical Graduate Visual UI Designer 当前申请状态没有保留");
check(test.locationBucket(test.allData.find((item) => item.id === 604)) === "remote", "Canonical Visual Designer EMEA 远程地点没有正确分级");
check(test.locationBucket(test.allData.find((item) => item.id === 605)) === "remote", "Canonical Graduate Visual UI Designer Europe 远程地点没有正确分级");
check(test.applicationStatus(test.allData.find((item) => item.id === 560)).key === "closed", "HP 已失效原始 Workday 岗位仍被识别为可投");
check(test.allData.find((item) => item.id === 560).tier === "X", "HP 已失效原始 Workday 岗位没有移入历史");
check(test.applicationStatus(test.allData.find((item) => item.id === 34)).key === "closed", "AQIPA 已停止接收申请的岗位仍被识别为可投");
check(test.allData.find((item) => item.id === 34).tier === "X", "AQIPA 已停止接收申请的岗位没有移入历史");
check(test.applicationStatus(test.allData.find((item) => item.id === 988)).key === "closed", "PVcase 已移除岗位仍被识别为可投");
check(test.allData.find((item) => item.id === 988).tier === "X", "PVcase 已移除岗位没有移入历史");
check(test.applicationStatus(test.allData.find((item) => item.id === 1289)).key === "closed", "Rockwell 已失效原始 Workday 岗位仍被识别为可投");
check(test.allData.find((item) => item.id === 1289).tier === "X", "Rockwell 已失效原始 Workday 岗位没有移入历史");
check(test.applicationStatus(test.allData.find((item) => item.id === 1094)).key === "live", "CATORCE 当前 Creative Director 官方申请状态没有保留");
check(test.allData.find((item) => item.id === 1094).tier === "C", "CATORCE 超高资历双语岗位没有降为挑战级");
check(test.applicationStatus(test.allData.find((item) => item.id === 1105)).key === "live", "Bakken & Bæck 当前自由职业 Art Director 官方申请状态没有保留");
check(test.allData.find((item) => item.id === 1105).tier === "B", "Bakken & Bæck 当前自由职业 Art Director 没有保留为 B 级备选");
check(test.allData.find((item) => item.id === 26).tier === "X", "Dong Fang Star 无公开岗位的公司联系页仍在当前职位队列");
check(test.isResearchOnly(test.allData.find((item) => item.id === 26)), "Dong Fang Star 无岗位公司联系页没有标为研究/主动联系线索");
check(test.allData.find((item) => item.id === 46).tier === "X", "中西商会旧岗位索引仍在当前职位队列");
check(test.isResearchOnly(test.allData.find((item) => item.id === 46)), "中西商会旧岗位索引没有标为研究线索");
check(test.allData.find((item) => item.id === 522).tier === "X", "MINISO 商业新闻仍在当前职位队列");
check(test.isResearchOnly(test.allData.find((item) => item.id === 522)), "MINISO 商业新闻没有标为研究线索");
check(test.applicationStatus(test.allData.find((item) => item.id === 835)).key === "closed", "Revolut 旧 Brand 岗位已失效但仍被识别为可投");
check(test.allData.find((item) => item.id === 835).tier === "X", "Revolut 旧 Brand 岗位没有移入历史");
check(test.applicationStatus(test.allData.find((item) => item.id === 851)).key === "closed", "Centro 已停止接收申请的岗位仍被识别为可投");
check(test.allData.find((item) => item.id === 851).tier === "X", "Centro 已停止接收申请的岗位没有移入历史");
check(test.applicationStatus(test.allData.find((item) => item.id === 772)).key === "closed", "Rednote 已停止接收申请的实习仍被识别为可投");
check(test.allData.find((item) => item.id === 772).tier === "X", "Rednote 已停止接收申请的实习没有移入历史");
check(test.applicationStatus(test.allData.find((item) => item.id === 4)).key === "live", "Lodgify 当前官方职位没有保留可投状态");
check(test.locationBucket(test.allData.find((item) => item.id === 4)) === "remote", "Lodgify Europe 远程地点没有正确分级");
check(test.allData.find((item) => item.id === 4).tier === "B", "Lodgify 当前自由职业岗位没有保留为 B 级");
check(test.applicationStatus(test.allData.find((item) => item.id === 483)).key === "live", "Act Second 当前官方申请状态没有保留");
check(test.allData.find((item) => item.id === 483).tier === "B", "Act Second 当前合同岗位没有保留为 B 级备选");
check(test.locationBucket(test.allData.find((item) => item.id === 335)) === "other", "Social Scout 明确非西班牙雇佣地的岗位混入 Spain remote");
check(test.allData.find((item) => item.id === 335).tier === "D", "Social Scout 全球 contractor 岗位没有降为手动核实级");
check(test.allData.find((item) => item.id === 1161).tier === "X", "Act Second 重复说明行仍在职位排名中");
check(test.isResearchOnly(test.allData.find((item) => item.id === 1161)), "Act Second 重复说明行没有标为研究线索");
check(test.applicationStatus(test.allData.find((item) => item.id === 534)).key === "live", "CollegeVine 当前官方职位没有保留可投状态");
check(test.locationBucket(test.allData.find((item) => item.id === 534)) === "other", "CollegeVine 未确认西班牙资格的远程岗混入默认范围");
check(test.allData.find((item) => item.id === 534).tier === "C", "CollegeVine 未确认西班牙资格的远程岗没有降为 C 级");
check(test.applicationStatus(test.allData.find((item) => item.id === 985)).key === "live", "The Builder Studios 当前职位没有保留可投状态");
check(test.locationBucket(test.allData.find((item) => item.id === 985)) === "remote", "The Builder Studios EU 远程地点没有正确分级");
check(test.allData.find((item) => item.id === 985).tier === "C", "The Builder Studios 未按 Amsterdam-first、合同未明的欧洲远程备用规则降为 C 级");
check(test.allData.find((item) => item.id === 1275).tier === "X", "INFiLED 同一 LinkedIn 岗位的重复卡仍在可用队列");
check(test.allData.find((item) => item.id === 337).tier === "X", "Dragons 旧 LinkedIn 镜像仍在可用队列");
check(test.applicationStatus(test.allData.find((item) => item.id === 889)).key === "live", "Dragons 当前官方 Factorial 岗位没有保留可投状态");
check(test.allData.find((item) => item.id === 889).tier === "C", "Dragons 高级西语硬门槛岗位没有降为 C 级");
check(test.languageInfo(test.allData.find((item) => item.id === 889)).key === "spanish", "Dragons 高级西语硬门槛没有进入语言筛选");
check(test.allData.find((item) => item.id === 490).tier === "X", "BYD 通用人才库页面仍被作为真实职位排名");
check(test.isResearchOnly(test.allData.find((item) => item.id === 490)), "BYD 通用人才库页面没有标为研究线索");
check(test.locationBucket(test.allData.find((item) => item.id === 490)) === "other", "无地点的 BYD 人才库页面混入 Barcelona/远程范围");
check(test.applicationStatus(test.allData.find((item) => item.id === 24)).key === "live", "Casa Asia 仍列出的 HKU 原始招聘没有保留为可投状态");
check(test.allData.find((item) => item.id === 24).tier === "C", "HKU 非纯设计且西语硬门槛职位仍被过度加分");
check(test.allData.find((item) => item.id === 705).tier === "X" && !test.priorityItems.some((item) => item.id === 705), "已从 Casa Asia 当前列表消失的 Tea Lab PDF 仍在重点可投队列");
check(test.locationBucket(test.allData.find((item) => item.id === 1073)) === "other", "Girona/Sils 现场岗位混入 Barcelona 默认范围");
check(test.allData.find((item) => item.id === 585).tier === "X", "2024 历史 EveryArt 帖子仍在活跃岗位排名");
check(test.allData.find((item) => item.id === 301).tier === "X", "已过明确截止日的 Sanofi 岗位仍在活跃排名");
check(test.allData.find((item) => item.id === 507).tier === "C" && test.locationBucket(test.allData.find((item) => item.id === 507)) === "other", "华沙 BYD 岗位仍被误作 Spain remote 高分卡");
check(test.allData.find((item) => item.id === 586).tier === "X" && test.locationBucket(test.allData.find((item) => item.id === 586)) === "other", "上海小红书实习未移入 China-only 历史/研究区");
check(test.allData.find((item) => item.id === 587).tier === "C" && test.locationBucket(test.allData.find((item) => item.id === 587)) === "other", "上海小红书设计实习混入 Barcelona 默认范围");
check(test.dedupedData.some((item) => item.id === 890) && !test.dedupedData.some((item) => item.id === 1328), "Dragons Art Director 重复卡没有合并到当前官方卡");
check(test.dedupedData.some((item) => item.id === 884) && !test.dedupedData.some((item) => item.id === 1327), "Dragons Healthcare 重复卡没有合并到当前官方卡");
check(test.dedupedData.some((item) => item.id === 866) && !test.dedupedData.some((item) => item.id === 1115), "devicenow 同一岗位重复卡没有合并");
check(test.dedupedData.some((item) => item.id === 4) && !test.dedupedData.some((item) => item.id === 1329), "Lodgify 同一岗位重复卡没有合并");
check(test.dedupedData.some((item) => item.id === 534) && !test.dedupedData.some((item) => item.id === 1337), "CollegeVine 同一岗位重复卡没有合并");
check(test.allData.find((item) => item.id === 683).tier === "X", "只有分类页的瓦伦西亚旧设计线索仍在活跃排名");
check(test.isResearchOnly(test.allData.find((item) => item.id === 683)), "分类页旧线索没有标为研究记录");
check(test.allData.find((item) => item.id === 756).tier === "X", "巴塞 RECTA 运营/BD 岗仍在视觉设计队列");
check(test.applicationStatus(test.allData.find((item) => item.id === 669)).key === "closed", "Eurofragance 官方已关闭岗位仍被识别为可投");
check(test.allData.find((item) => item.id === 669).tier === "X" && test.allData.find((item) => item.id === 929).tier === "X", "Eurofragance 当前卡或旧镜像仍在活跃排名");
check([1345, 1347].every((id) => test.allData.find((item) => item.id === id).tier === "X"), "Eurofragance 新增镜像没有随官方关闭页移出活跃排名");
check(!test.dedupedData.some((item) => [1345, 1347, 1362, 1366].includes(item.id)), "同一 Eurofragance 原始 ATS 的高分镜像重新出现在网站卡片中");
check(test.allData.find((item) => item.id === 477).tier === "D" && test.isResearchOnly(test.allData.find((item) => item.id === 477)), "RCD Espanyol 通用投递页被误当作当前设计岗位");
check([45, 573].every((id) => test.allData.find((item) => item.id === id).tier === "D" && test.isResearchOnly(test.allData.find((item) => item.id === id))), "西中商会混合频道仍被误作当前设计岗位");
check([713, 714].every((id) => test.allData.find((item) => item.id === id).tier === "D"), "无独立原始详情的商会旧条目仍在活跃排名");
check([613, 644].every((id) => test.applicationStatus(test.allData.find((item) => item.id === id)).key === "closed" && test.allData.find((item) => item.id === id).tier === "X"), "Oasis Roots 非设计岗位没有从当前设计机会中排除");
check(test.allData.find((item) => item.id === 509).tier === "X" && test.applicationStatus(test.allData.find((item) => item.id === 509)).key === "closed", "Kngloo 已关闭的 LinkedIn 内容岗位没有保持历史关闭 X 级");
check(test.applicationStatus(test.allData.find((item) => item.id === 543)).key === "live" && test.allData.find((item) => item.id === 543).tier === "D", "BYD 当前但非设计的社区岗位被错误排入视觉队列");
check([305, 936].every((id) => test.applicationStatus(test.allData.find((item) => item.id === id)).key === "live" && test.allData.find((item) => item.id === id).tier === "B"), "Hostinger 当前 Spain remote 品牌设计岗位状态或层级错误");
check([910, 946, 1103].every((id) => test.applicationStatus(test.allData.find((item) => item.id === id)).key === "live" && test.allData.find((item) => item.id === id).tier === "B"), "LABHOUSE 当前 Spain remote 设计岗位状态或层级错误");
check(test.applicationStatus(test.allData.find((item) => item.id === 911)).key === "closed" && test.allData.find((item) => item.id === 911).tier === "X", "inBeat 官方已失效角色仍在活跃排名");
check(test.dedupedData.some((item) => item.id === 305) && !test.dedupedData.some((item) => item.id === 936), "Hostinger 同一官方 ATS 职位没有去重");
check(test.dedupedData.some((item) => item.id === 910) && !test.dedupedData.some((item) => item.id === 946) && !test.dedupedData.some((item) => item.id === 1103), "LABHOUSE 同一官方 ATS 职位没有去重");
check([187, 1244].every((id) => test.applicationStatus(test.allData.find((item) => item.id === id)).key === "closed" && test.allData.find((item) => item.id === id).tier === "X"), "LinkedIn 已停止申请的高分设计岗仍在活跃排序");
check(test.locationBucket(test.allData.find((item) => item.id === 1244)) === "madrid", "Cegid Madrid 主地点的关闭岗位没有保留为手动地点");
check([846, 1350, 1336].every((id) => test.applicationStatus(test.allData.find((item) => item.id === id)).key === "closed" && test.allData.find((item) => item.id === id).tier === "X"), "原始页已关闭的高分视觉岗位仍在活跃排序");
check([835, 1378, 1377, 1379, 1362, 1366, 1384, 1340].every((id) => test.allData.find((item) => item.id === id).tier === "X"), "上游重复插入的已关闭/到期原始链接重新混入活跃高分排序");
check([845, 1339, 1333].every((id) => test.allData.find((item) => item.id === id).tier === "X"), "原始 LinkedIn 已停止申请的实习/Rednote 卡仍在活跃高分排序");
check(test.allData.find((item) => item.id === 1356).tier === "D" && test.locationBucket(test.allData.find((item) => item.id === 1356)) === "other", "Huqiao 仅欧洲工时的全球岗位混入默认范围");
check(test.allData.find((item) => item.id === 320).tier === "X", "Intracon 已关闭原页仍被列为可投机会");
check(test.allData.find((item) => item.id === 402).tier === "X", "Scopely 已回落到通用 careers 页的旧链接仍被列为开放岗位");
check(test.allData.find((item) => item.id === 603).tier === "X", "Plutus 已失效的 Personio 路线仍被列为开放岗位");
check(test.allData.find((item) => item.id === 352).tier === "C" && test.allData.find((item) => item.id === 352).score === 88, "Blank Studio 当前 3D 岗位没有按实际方向降级");
check(test.allData.find((item) => item.id === 1348).tier === "X", "Revolut Social Media 的官方 404 岗位仍被列为开放机会");
check(test.allData.find((item) => item.id === 407).tier === "X", "papernest 明确失效的官方实习仍被列为开放机会");
check(test.allData.find((item) => item.id === 108).tier === "X", "INFiLED 已停止申请的旧 requisition 仍被列为开放机会");
check(test.toLinks(test.allData.find((item) => item.id === 866)).some((url) => /devicenow\.com\/career\/job-19847/i.test(url)), "devicenow 当前官方申请详情没有写回");
check(test.allData.find((item) => item.id === 1383).tier === "X", "Tea Lab 已不在 Casa Asia 当前列表却仍显示为开放岗位");
check([803, 804, 805].every((id) => { const item = test.allData.find((entry) => entry.id === id); return item.tier === "D" && test.locationBucket(item) === "other"; }), "SMILE JOYAS 马德里岗位混入默认 Barcelona 队列");
check(test.allData.find((item) => item.id === 787).tier === "D" && test.locationBucket(test.allData.find((item) => item.id === 787)) === "other", "EXTRATOOLS Valdemoro/Madrid 岗位混入默认 Barcelona 队列");
check([743, 800, 809].every((id) => test.allData.find((item) => item.id === id).tier === "X"), "无近期续招证据的华人论坛旧帖仍处于活跃高分队列");
check(test.allData.find((item) => item.id === 784).tier === "D" && test.locationBucket(test.allData.find((item) => item.id === 784)) === "other", "银河建工 Fuenlabrada/Madrid 岗位混入默认 Barcelona 队列");
check(test.applicationStatus(test.allData.find((item) => item.id === 284)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === 284)) === "barcelona", "EuroLeague 当前 Barcelona 官方岗位状态或地点丢失");
check(test.applicationStatus(test.allData.find((item) => item.id === 4)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === 4)) === "remote", "Lodgify 当前 Europe remote 官方岗位状态或地点丢失");
check(test.allData.find((item) => item.id === 41).tier === "D" && test.locationBucket(test.allData.find((item) => item.id === 41)) === "other", "Mindrift 全球任务平台混入正式 Barcelona/Europe 职位队列");
check(test.allData.find((item) => item.id === 9).tier === "D" && test.locationBucket(test.allData.find((item) => item.id === 9)) === "other", "Binance MENA 实习被误标为 EU/Barcelona 岗位");
check(test.allData.find((item) => item.id === 369).tier === "X", "Double Tap 已删除的岗位页面仍被列为开放机会");
check(test.allData.find((item) => item.id === 49).tier === "X" && test.isResearchOnly(test.allData.find((item) => item.id === 49)), "Boc Studio 失效页面仍被列为远程岗位");
check(test.allData.find((item) => item.id === 1344).tier === "X", "papernest 已不可用的 Welcome to the Jungle 镜像仍被列为开放机会");
check(test.applicationStatus(test.allData.find((item) => item.id === 604)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === 604)) === "remote", "Canonical 当前 EMEA 远程官方岗位状态或地点丢失");
check(test.allData.find((item) => item.id === 408).tier === "X", "Stripe 同一 requisition 的错误标题重复卡仍在活跃排名");
check(test.allData.find((item) => item.id === 599).tier === "X" && test.locationBucket(test.allData.find((item) => item.id === 599)) === "other", "小红书上海校园实习混入 Barcelona/Europe 队列");
check(test.allData.find((item) => item.id === 606).tier === "D" && test.locationBucket(test.allData.find((item) => item.id === 606)) === "other", "DualEntry NYC on-site 岗位混入默认队列");
check(test.applicationStatus(test.allData.find((item) => item.id === 1099)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === 1099)) === "remote", "LABHOUSE 当前 Spain remote 岗位状态或地点丢失");
check(test.applicationStatus(test.allData.find((item) => item.id === 1352)).key === "closed", "IKIGAI 重复镜像 1352 未移入历史");
check(test.allData.find((item) => item.id === 200).tier === "X", "Domestika 明确关闭的 Feedback 视频岗位仍被列为开放机会");
check([305, 936].every((id) => test.applicationStatus(test.allData.find((item) => item.id === id)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === id)) === "remote"), "Hostinger 当前 Spain remote 官方岗位状态或地点丢失");
check(test.applicationStatus(test.allData.find((item) => item.id === 841)).key === "live" && test.allData.find((item) => item.id === 841).tier === "C", "European Blockchain 当前兼职自由职业岗位状态或层级错误");
check(test.applicationStatus(test.allData.find((item) => item.id === 1303)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === 1303)) === "barcelona", "CATORCE 当前 Barcelona 官方岗位状态或地点丢失");
check(test.applicationStatus(test.allData.find((item) => item.id === 910)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === 910)) === "remote", "LABHOUSE 当前 Spain remote Growth 岗位状态或地点丢失");
check(test.allData.find((item) => item.id === 942).tier === "B" && test.locationBucket(test.allData.find((item) => item.id === 942)) === "remote" && test.applicationStatus(test.allData.find((item) => item.id === 942)).key === "live", "Co-Star 官方全球远程品牌设计岗位没有按最新原页证据恢复");
check(test.applicationStatus(test.allData.find((item) => item.id === 1029)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === 1029)) === "remote", "Together 当前 UK/Europe remote 品牌岗位状态或地点丢失");
check(test.allData.find((item) => item.id === 847).tier === "X", "Revelyst 已停止申请的实习仍被列为开放机会");
check(test.allData.find((item) => item.id === 642).tier === "X" && test.locationBucket(test.allData.find((item) => item.id === 642)) === "other", "REDesign 上海招聘直通车混入 Barcelona/Europe 队列");
check(test.allData.find((item) => item.id === 377).tier === "X" && test.isResearchOnly(test.allData.find((item) => item.id === 377)), "SHEIN 通用招聘首页仍被列为具体 Barcelona 岗位");
check(test.allData.find((item) => item.id === 415).tier === "X", "Codeway 官方 ATS Job not found 仍被列为开放岗位");
check(test.allData.find((item) => item.id === 8).tier === "X", "POP MART 已停止申请的 London 岗位仍被列为欧洲远程机会");
check(test.applicationStatus(test.allData.find((item) => item.id === 84)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === 84)) === "remote", "reboot 当前 Europe remote 岗位状态或地点丢失");
check(test.allData.find((item) => item.id === 427).tier === "X", "Revolut Employer Branding 官方 404 岗位仍被列为开放机会");
check(test.applicationStatus(test.allData.find((item) => item.id === 296)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === 296)) === "barcelona", "Bakken & Bæck 当前 Barcelona office 岗位状态或地点丢失");
check(test.allData.find((item) => item.id === 1331).tier === "D" && test.locationBucket(test.allData.find((item) => item.id === 1331)) === "other", "Social Scout 全球 contractor 岗位混入 Spain/Europe 默认范围");
check(test.allData.find((item) => item.id === 1360).tier === "D" && test.isResearchOnly(test.allData.find((item) => item.id === 1360)), "RCD 通用投 CV 表单仍被当作当前平面设计岗");
check(test.allData.find((item) => item.id === 1369).tier === "X", "Oasis 同一 Indeed 当前链接重复计为第二个岗位");
check(test.applicationStatus(test.allData.find((item) => item.id === 891)).key === "live" && test.allData.find((item) => item.id === 891).tier === "B", "Dragons 资深医疗设计岗没有保留官方当前申请状态");
check([922, 921].every((id) => test.applicationStatus(test.allData.find((item) => item.id === id)).key === "live" && test.locationBucket(test.allData.find((item) => item.id === id)) === "remote"), "Europe remote 官方岗位的状态或地点分类错误");
check(test.applicationStatus(test.allData.find((item) => item.id === 884)).key === "live" && test.allData.find((item) => item.id === 884).score === 106, "Dragons 医疗平面岗位的官方 ATS 复核或重评分没有生效");
check(test.applicationStatus(test.allData.find((item) => item.id === 890)).key === "live" && test.allData.find((item) => item.id === 890).score === 108 && !test.toLinks(test.allData.find((item) => item.id === 890)).some((link) => /linkedin\.com\/jobs\/view\/art-director-wellness-lifestyle-at-dragons-group-4442345801/i.test(link)), "失效的 Dragons Art Director LinkedIn 镜像仍被当作可投入口");
check(test.applicationStatus(test.allData.find((item) => item.id === 337)).key === "closed", "Dragons Food & Beverage 的旧 LinkedIn 镜像没有保持关闭状态");
check(test.applicationStatus(test.allData.find((item) => item.id === 607)).key === "closed", "papernest 已不可用岗位仍被识别为可投");
check(test.allData.find((item) => item.id === 607).tier === "X", "papernest 已关闭实习仍在活跃排名");
check(test.applicationStatus(test.allData.find((item) => item.id === 426)).key === "closed", "Revolut Social Media 官方已移除岗位仍被识别为可投");
check(test.applicationStatus(test.allData.find((item) => item.id === 1335)).key === "closed", "Revolut Brand Graphic 官方已移除岗位仍被识别为可投");
check(test.applicationStatus(test.allData.find((item) => item.id === 425)).key === "live", "Revolut 仍可投的 Digital Designer 官方岗位没有保留");
check(test.allData.find((item) => item.id === 425).tier === "B", "Revolut 仍可投的 Digital Designer 没有保留为 B 级");
check(test.applicationStatus(test.allData.find((item) => item.id === 313)).key === "live", "Mapit 官方当前岗位没有保留可投状态");
check(test.allData.find((item) => item.id === 313).tier === "C", "Mapit 母语西语硬门槛岗位没有降为 C 级");
check(test.languageInfo(test.allData.find((item) => item.id === 313)).key === "spanish", "Mapit 母语西语硬门槛没有进入语言筛选");
check(test.applicationStatus(test.allData.find((item) => item.id === 1020)).key === "live", "COCUNAT 当前官方职位没有保留可投状态");
check(test.languageInfo(test.allData.find((item) => item.id === 1020)).key === "english", "COCUNAT 英文官方页被误判为西语或待确认岗位");
check(test.applicationStatus(test.allData.find((item) => item.id === 989)).key === "live", "Storisell 当前官方 Motion Designer 没有保留为可投");
check(test.allData.find((item) => item.id === 989).tier === "C", "Storisell 的宽泛 motion 角色被错误排入高优先级");
check(test.applicationStatus(test.allData.find((item) => item.id === 874)).key === "live", "IKIGAI 当前官方申请表没有保留为可投");
check(test.allData.find((item) => item.id === 874).tier === "C", "IKIGAI 未披露客户/条款的广告岗位被错误排入 B 级");
check(test.applicationStatus(test.allData.find((item) => item.id === 918)).key === "live", "Huqiao 当前 LinkedIn 原页没有保留为可投");
check(test.allData.find((item) => item.id === 918).tier === "D", "仅欧洲时区的全球远程岗位被错误排进高优先级");
check(test.locationBucket(test.allData.find((item) => item.id === 918)) === "other", "Huqiao 欧洲工作时区被误判为欧洲远程资格");
check(test.applicationStatus(test.allData.find((item) => item.id === 812)).key === "live", "FunPlus 官方实习仍可投状态丢失");
check(test.allData.find((item) => item.id === 812).tier === "D", "FunPlus 非设计实习被错误排入视觉岗位高优先级");
check(test.applicationStatus(test.allData.find((item) => item.id === 469)).key === "live", "OneKey 官方角色页仍可访问状态丢失");
check(test.allData.find((item) => item.id === 469).tier === "D", "OneKey 未确认西班牙资格的全球岗位被错误排入高优先级");
check(test.locationBucket(test.allData.find((item) => item.id === 469)) === "other", "OneKey 全球 remote 被误判为 Spain/Europe remote");
check(test.applicationStatus(test.allData.find((item) => item.id === 1271)).key === "closed", "Heroes/Boba 官方已关闭岗位仍被识别为可投");
check(test.allData.find((item) => item.id === 1271).tier === "X", "Heroes/Boba 已关闭岗位仍在活跃排名");
check([1040, 1063, 1122].every((id) => test.applicationStatus(test.allData.find((item) => item.id === id)).key === "closed"), "Roman 当前和旧镜像没有一并标为已关闭");
check([1040, 1063, 1122].every((id) => test.allData.find((item) => item.id === id).tier === "X"), "Roman 已关闭岗位或旧镜像仍在活跃排名");
check(test.applicationStatus(test.allData.find((item) => item.id === 832)).key === "closed", "Mind the Bridge 已停止接收申请的实习仍被识别为可投");
check(test.allData.find((item) => item.id === 832).tier === "X", "Mind the Bridge 已停止接收申请的实习没有移入历史");
check(test.allData.find((item) => item.id === 893).postedAt === "2026-08-06", "CrowdStrike 官方相对发布时间没有换算为实际发布日期");
check(test.applicationStatus(test.allData.find((item) => item.id === 284)).key === "live", "EuroLeague 官方当前申请状态没有保留");
check(test.applicationStatus(test.allData.find((item) => item.id === 841)).key === "live", "European Blockchain 当前自由职业岗位没有保留可投状态");
check(test.languageInfo(test.allData.find((item) => item.id === 893)).key === "light", "CrowdStrike 英语岗位被误判为高西语");
check(test.locationBucket(test.allData.find((item) => item.id === 893)) === "remote", "CrowdStrike Spain remote 地点没有正确分级");
check(test.toLinks(test.allData.find((item) => item.id === 893)).some((url) => /crowdstrike\.wd5\.myworkdayjobs\.com/i.test(url)), "CrowdStrike 官方申请入口缺失");
check(test.applicationStatus(test.allData.find((item) => item.id === 897)).key === "closed", "D&M 过期原始页被搜索缓存错误恢复");
const r17CodewayBrand = test.allData.find((item) => item.id === 871);
check(r17CodewayBrand && test.applicationStatus(r17CodewayBrand).key === "closed" && r17CodewayBrand.tier === "X", "Codeway 官方 Ashby 已移除岗位被搜索缓存错误恢复");
const r17EstudiPrepress = test.allData.find((item) => item.id === 930853);
check(
  r17EstudiPrepress &&
    test.applicationStatus(r17EstudiPrepress).key === "live" &&
    test.locationBucket(r17EstudiPrepress) === "barcelona" &&
    r17EstudiPrepress.tier === "D" &&
    !test.MY_OPPORTUNITY_SET.has(930853) &&
    test.toLinks(r17EstudiPrepress).some((url) => /join\.com\/companies\/egp\/15718560-disenador-preimpresor/i.test(url)),
  "Estudi Gràfic El Prat 当前印前生产岗没有正确隔离到主排名之外",
);
check(test.applicationStatus(test.allData.find((item) => item.id === 898)).key === "closed", "Intracon / HP 已关闭原页仍被识别为可投");
check(test.riskFlags(test.allData.find((item) => item.id === 901)).includes("spanish"), "DENZA 德语硬门槛没有进入本地语言阻力筛选");
check(test.locationBucket(test.allData.find((item) => item.id === 901)) === "other", "DENZA Madrid 地点被误判为远程");
check(test.CURATED[893].changeType === "new" && test.CURATED[898].changeType === "refresh", "第十八轮新增与状态恢复没有区分");
check(test.identityKey(test.allData.find((item) => item.id === 184)) === test.identityKey(test.allData.find((item) => item.id === 894)), "Ogilvy 当前状态刷新没有与旧记录合并");
check(test.identityKey(test.allData.find((item) => item.id === 186)) === test.identityKey(test.allData.find((item) => item.id === 897)), "D&M 当前状态刷新没有与旧记录合并");
check(test.identityKey(test.allData.find((item) => item.id === 320)) === test.identityKey(test.allData.find((item) => item.id === 898)), "Intracon 当前状态刷新没有与旧记录合并");
check(test.dedupedData.some((item) => item.id === 898) && !test.dedupedData.some((item) => item.id === 320) && test.applicationStatus(test.dedupedData.find((item) => item.id === 898)).key === "closed", "Intracon 去重后没有保留已关闭证据");
check(test.applicationStatus({ id: -1, opportunity: "", status: "Salary not disclosed", analysis: "", contact: "" }).key !== "closed", "“薪资未公开”仍被误判为职位关闭");
check(generatorSource.includes("'exclude|risk|scam|\\bclosed\\b|expired"), "数据生成器未使用完整单词匹配 closed");
check(!generatorSource.includes("'exclude|risk|scam|closed|expired"), "数据生成器仍可能把 disclosed 误判为 closed");
check(test.applicationStatus(test.allData.find((item) => item.id === 902)).key === "closed", "MEDIAPRO 原始页已停止接受申请但没有移入历史");
check(!test.MY_OPPORTUNITY_SET.has(902), "MEDIAPRO 已关闭记录仍被保留在当前机会 ID 中");
check(test.applicationStatus(test.allData.find((item) => item.id === 903)).key === "live", "fhios 当前申请状态没有保留");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 903)), "fhios 未公开最终客户没有进入真实性风险筛选");
check(test.applicationStatus(test.allData.find((item) => item.id === 904)).key === "closed", "Wall Street English 已失效的 LinkedIn 快照没有转入历史");
check(!test.MY_OPPORTUNITY_SET.has(904), "Wall Street English 已失效岗位仍留在当前主表");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 905)), "Steneg 未公开客户没有进入真实性风险筛选");
check(test.isChineseRelevant(test.allData.find((item) => item.id === 906)), "INFiLED 当前记录没有保留中文相关标记");
check(test.riskFlags(test.allData.find((item) => item.id === 909)).includes("spanish"), "Revolt 英西双语硬门槛没有识别");
check(test.CURATED[902].changeType === "recovered-audit-8" && test.CURATED[906].changeType === "refresh", "MEDIAPRO 最新关闭证据没有覆盖第十九轮旧状态");
check(test.identityKey(test.allData.find((item) => item.id === 559)) === test.identityKey(test.allData.find((item) => item.id === 1300)), "INFiLED 当前刷新没有与旧记录合并");
check(test.identityKey(test.allData.find((item) => item.id === 35)) === test.identityKey(test.allData.find((item) => item.id === 905)), "Steneg 当前刷新没有与旧记录合并");
check(test.dedupedData.some((item) => item.id === 1300) && !test.dedupedData.some((item) => item.id === 559), "INFiLED 当前刷新没有保留最新记录");
check(test.applicationStatus(test.allData.find((item) => item.id === 910)).key === "live", "LABHOUSE 官方当前申请状态没有保留");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 910)).key === "english", "LABHOUSE 没有隔离到英语岗位备选");
check(test.locationBucket(test.allData.find((item) => item.id === 910)) === "remote", "LABHOUSE Spain remote 地点没有正确分级");
check(test.allData.find((item) => item.id === 910).tier === "B", "LABHOUSE 没有保持 B 级英语备选");
check(test.applicationStatus(test.allData.find((item) => item.id === 911)).key === "closed", "inBeat 官方已失效角色仍被识别为可投");
check(test.allData.find((item) => item.id === 911).tier === "X", "inBeat 已失效角色没有移入历史层");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 912)), "Jobgether 匿名合作方没有进入真实性风险筛选");
check(test.identityKey(test.allData.find((item) => item.id === 882)) === test.identityKey(test.allData.find((item) => item.id === 912)), "Jobgether 状态刷新没有与旧记录合并");
check(test.dedupedData.some((item) => item.id === 912) && !test.dedupedData.some((item) => item.id === 882), "Jobgether 状态刷新没有保留最新记录");
check(test.CURATED[910].changeType === "new" && test.CURATED[912].changeType === "refresh", "第二十轮新增与状态刷新没有区分");
check(test.applicationStatus(test.allData.find((item) => item.id === 913)).key === "closed", "ALOHAS 当前官方页已关闭但数据仍未标为历史关闭");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 913)).key === "english", "ALOHAS 没有隔离到英语岗位备选");
check(test.isChineseRelevant(test.allData.find((item) => item.id === 913)), "ALOHAS 中文市场岗位没有保留中文相关标记");
check(test.allData.find((item) => item.id === 913).tier === "X", "ALOHAS 已关闭岗位没有降为 X 级历史记录");
check(test.identityKey(test.allData.find((item) => item.id === 111)) === test.identityKey(test.allData.find((item) => item.id === 913)), "ALOHAS 状态恢复没有与历史关闭记录合并");
check(test.dedupedData.some((item) => item.id === 913) && !test.dedupedData.some((item) => item.id === 111), "ALOHAS 去重后没有保留恢复记录");
check(test.applicationStatus(test.allData.find((item) => item.id === 914)).key === "live", "Trivelta 官方 Greenhouse 完整申请表核验后没有提升为可投");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 914)).key === "english", "Trivelta 没有隔离到英语岗位备选");
check(test.identityKey(test.allData.find((item) => item.id === 399)) === test.identityKey(test.allData.find((item) => item.id === 914)), "Trivelta 状态刷新没有与旧记录合并");
check(test.dedupedData.some((item) => item.id === 914) && !test.dedupedData.some((item) => item.id === 399), "Trivelta 去重后没有保留当前记录");
check(test.CURATED[913].changeType === "refresh" && test.CURATED[914].changeType === "round-12-promoted", "Trivelta 最新状态提升没有正确标记");
check(test.allData.find((item) => item.id === 915).tier === "X", "欧浪远程电商岗位没有进入历史区");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 915)).key === "chineseCheck", "欧浪远程电商岗位没有识别为可先中文确认");
check(test.locationBucket(test.allData.find((item) => item.id === 915)) === "remote", "欧浪远程电商岗位历史地点没有保留远程标记");
check(test.applicationStatus(test.allData.find((item) => item.id === 915)).key === "closed", "欧浪远程电商岗位没有识别为历史状态");
check(test.hasOpaqueEmployerRisk(test.allData.find((item) => item.id === 915)), "欧浪远程电商岗位没有标记雇主未公开风险");
check(test.toLinks(test.allData.find((item) => item.id === 915)).includes("https://oulang.ai/listing/2417332"), "欧浪远程电商岗位缺少新版直达详情");
check(test.allData.find((item) => item.id === 916).tier === "C", "中文远程品牌视觉岗位没有保持低薪备选等级");
check(test.applicationLanguagePath(test.allData.find((item) => item.id === 916)).key === "chinese", "中文远程品牌视觉岗位被误分到英语备选");
check(test.locationBucket(test.allData.find((item) => item.id === 916)) === "other", "中文远程品牌视觉岗位未被隔离到西班牙资格未确认的手动区");
check(test.hasLowPayRisk(test.allData.find((item) => item.id === 916)), "中文远程品牌视觉岗位没有标记低薪风险");
check(test.progressValue(test.allData.find((item) => item.id === 871)) === "untracked", "未标记岗位默认进度错误");
test.state.preset = "profile";
const personalized = test.dedupedData.filter(
  (item) =>
    ["A", "B", "C"].includes(item.tier) &&
    test.matchesPreset(item) &&
    test.toLinks(item).length > 0 &&
    !test.hasLowPayRisk(item),
);
// Strict Chinese-only contact paths may correctly be empty after the original
// pages are rechecked; do not keep stale or low-quality cards merely to fill
// this view. The actual default is tested below as the Chinese-direction queue.
check(
  personalized.every(
    (item) =>
      ["barcelona", "remote"].includes(test.locationBucket(item)) &&
      test.applicationLanguagePath(item).key === "chinese" &&
      test.isChineseRelevant(item) &&
      !test.isResearchOnly(item) &&
      test.applicationStatus(item).key !== "closed" &&
      test.toLinks(item).length > 0,
  ),
  "“中文能投”默认预设混入了英文/西语硬门槛、非目标地点或无有效入口的岗位",
);
check(
  personalized.every(
    (item) => test.applicationLanguagePath(item).key === "chinese",
  ),
  "默认首页仍混入需要英文材料、英文沟通或基础西语的岗位",
);
check(personalized.every((item) => !test.hasLowPayRisk(item)), "默认首页仍混入已识别的低薪或无薪风险");
test.state.preset = "chinese";
const defaultChineseDirection = test.dedupedData.filter(
  (item) => ["A", "B", "C"].includes(item.tier) && test.matchesPreset(item),
);
check(defaultChineseDirection.length > 0, "巴塞中文方向默认预设没有结果");
check(
  defaultChineseDirection.every(
    (item) =>
      ["barcelona", "remote"].includes(test.locationBucket(item)) &&
      test.isChineseRelevant(item) &&
      test.isTargetOpportunity(item) &&
      test.applicationStatus(item).key !== "closed",
  ),
  "巴塞中文方向默认预设混入了非目标地点、非视觉机会或已关闭岗位",
);
test.state.preset = "actionable";
const actionableNow = test.dedupedData.filter(
  (item) => ["A", "B", "C"].includes(item.tier) && test.matchesPreset(item),
);
// A strict original-page audit may correctly leave this queue empty when every
// otherwise relevant current lead still has an anonymous employer or a
// verification-first application route. Do not force unsafe cards into it.
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
  chineseRelevant.every((item) => ["barcelona", "remote"].includes(test.locationBucket(item))),
  "“中文优先”混入了不在 Barcelona、Madrid 或西班牙远程范围内的岗位",
);
check(chineseRelevant.every((item) => test.directionKey(item) !== "other"), "“中文优先”混入了非目标设计/内容方向");
check(chineseRelevant.every((item) => ["A", "B", "C"].includes(item.tier)), "“中文优先”混入了 D / X 级低价值或排除项");
const madridRecords = test.dedupedData.filter((item) => test.locationBucket(item) === "madrid");
check(madridRecords.length > 0, "没有识别出马德里记录用于地点隔离回归测试");
test.state.preset = "chinese";
check(madridRecords.every((item) => !test.matchesPreset(item)), "中文优先预设仍然放行马德里岗位");
test.state.preset = "profile";

check(
  test.locationBucket({ locationTag: "Remote / Europe", location: "Global remote — work from anywhere; contractor eligibility not stated", rawColumns: {} }) === "other",
  "Global-remote cards without Spain/Europe eligibility leaked into the default remote bucket",
);
check(
  test.locationBucket({ locationTag: "Remote / Europe", location: "Spain remote; full-time", rawColumns: {} }) === "remote",
  "Explicit Spain-remote cards were incorrectly removed from the default remote bucket",
);

// Round 588 regression checks: exact original-page findings must survive a
// future tracker merge.  In particular, a generic remote label must never
// promote an eligibility-unknown role into the Barcelona/Europe default.
const r588Kave = test.allData.find((item) => item.id === 595);
const r588Sierra = test.allData.find((item) => item.id === 601);
const r588Thru = test.allData.find((item) => item.id === 1107);
const r588Ozero = test.allData.filter((item) => [656, 657, 658].includes(item.id));
check(r588Kave?.tier === "X" && test.locationBucket(r588Kave) === "other", "Round 588: Kave Home old Art Director was restored to the active Barcelona queue");
check(r588Sierra?.score === 106 && test.locationBucket(r588Sierra) === "barcelona" && test.applicationStatus(r588Sierra).key === "live", "Round 588: SIERRA live Barcelona Art Director evidence regressed");
check(r588Thru?.score === 108 && test.locationBucket(r588Thru) === "barcelona" && test.applicationStatus(r588Thru).key === "live", "Round 588/2026-08-12: THRU current official job detail was not promoted");
check(r588Ozero.length === 3 && r588Ozero.every((item) => item.tier === "D" && test.locationBucket(item) === "other"), "Round 588: Ozero global-remote eligibility-unknown cards leaked into the default queue");

// Round 651/652 regression checks: an expired LinkedIn snapshot must not stay
// active, while the current bsport official ATS page must remain a live
// Barcelona card with its original application route.
const r651Ogilvy = test.allData.find((item) => item.id === 437);
const r652Bsport = test.allData.find((item) => item.id === 209);
const r653Qonto = test.allData.find((item) => item.id === 251);
const r654OneKey = test.allData.find((item) => item.id === 917);
const r655Xinming = test.allData.find((item) => item.id === 1280);
const r656RemoteChina = test.allData.find((item) => item.id === 916);
check(r651Ogilvy && test.applicationStatus(r651Ogilvy).key === "closed" && r651Ogilvy.tier === "X", "Round 651: expired Ogilvy/CBA Brand Designer remained active");
check(test.dedupedData.some((item) => [92, 437].includes(item.id) && test.applicationStatus(item).key === "closed"), "Round 651: Ogilvy/CBA closed evidence disappeared after deduplication");
check(r652Bsport && test.applicationStatus(r652Bsport).key === "closed" && test.toLinks(r652Bsport).some((url) => /careers\.bsport\.io\/jobs\/7207663/i.test(url)), "Round 652/2026-08-12: bsport 410 closure evidence regressed");
check(r653Qonto && test.applicationStatus(r653Qonto).key === "closed" && r653Qonto.tier === "X", "Round 653: Qonto LinkedIn-only mirror remained active after official-board absence");
check(r654OneKey && r654OneKey.score === 64 && test.toLinks(r654OneKey).some((url) => /onekeyhq\.atlassian\.net\/wiki\/spaces\/OC\/pages\/127238234/i.test(url)) && /do(?:es)? not explicitly confirm Barcelona, Spain|Spain eligibility/i.test(r654OneKey.status), "Round 654: OneKey Spain-eligibility warning or official route regressed");
check(r655Xinming && r655Xinming.score === 66 && /Global remote|global remote/i.test(r655Xinming.location) && test.toLinks(r655Xinming).some((url) => /xinming\.sg\/about-careers/i.test(url)), "Round 655: Xinming global-remote visual-system evidence regressed");
check(r656RemoteChina && r656RemoteChina.score === 46 && test.toLinks(r656RemoteChina).some((url) => /zhaopin\.com\/jobdetail\/CCL1507666820J40977554902/i.test(url)), "Round 656: Chinese AIGC brand-visual original route regressed");
const r657OneKeyCanonical = test.allData.find((item) => item.id === 917);
const r657OneKeyDuplicate = test.allData.find((item) => item.id === 1353);
check(r657OneKeyCanonical && test.locationBucket(r657OneKeyCanonical) === "other" && r657OneKeyCanonical.tier === "D", "Round 657: OneKey global-remote canonical card leaked into the default location scope");
check(r657OneKeyDuplicate && test.applicationStatus(r657OneKeyDuplicate).key === "closed" && r657OneKeyDuplicate.tier === "X", "Round 657: OneKey duplicate tracker copy remained active");
check(test.locationBucket(test.allData.find((item) => item.id === 1280)) === "other", "Round 657: Xinming global talent-pool card leaked into Spain remote");

// Round 658 regression checks: Stripe's named Brand Designer requisition must
// not remain active when the official board has no matching role, and the
// partner-board Motion copy must not count beside the canonical official card.
const r658StripeBrand = test.allData.find((item) => item.id === 920003);
const r658StripeMotionCopy = test.allData.find((item) => item.id === 1309);
const r658StripeMotionCanonical = test.allData.find((item) => item.id === 859);
check(r658StripeBrand && test.applicationStatus(r658StripeBrand).key === "closed" && r658StripeBrand.tier === "X", "Round 658: Stripe Brand Designer requisition without a current official board match remained active");
check(r658StripeBrand && test.toLinks(r658StripeBrand).some((url) => /stripe\.com\/careers\/search\?gh_jid=7760378/i.test(url)), "Round 658: Stripe Brand Designer closure lost the official board evidence");
check(r658StripeMotionCopy && test.applicationStatus(r658StripeMotionCopy).key === "closed" && r658StripeMotionCopy.tier === "X", "Round 658: Atomico Stripe Motion duplicate remained active");
check(r658StripeMotionCanonical && test.applicationStatus(r658StripeMotionCanonical).key === "live" && test.toLinks(r658StripeMotionCanonical).some((url) => /stripe\.com\/careers\/apply\/motion-designer-stripe-identity\/7769564/i.test(url)), "Round 658: canonical Stripe Motion application route was not preserved");
const r659Ashby = test.allData.find((item) => item.id === 1033);
check(r659Ashby && test.applicationStatus(r659Ashby).key === "live" && test.locationBucket(r659Ashby) === "remote" && r659Ashby.score === 84, "Round 659: Ashby design-engineering ATS recheck did not preserve the live Spain-remote adjacent role");
check(r659Ashby && test.toLinks(r659Ashby).some((url) => /jobs\.ashbyhq\.com\/ashby\/87b96eef-edc1-4de4-adb6-d460126d02f8/i.test(url)), "Round 659: Ashby official application route was lost");
const r660Randstad = test.allData.find((item) => item.id === 840);
check(r660Randstad && test.applicationStatus(r660Randstad).key === "closed" && r660Randstad.tier === "X", "Round 660: Randstad closed junior graphic-design route remained active");
check(r660Randstad && test.toLinks(r660Randstad).some((url) => /randstad\.es\/candidatos\/ofertas-empleo\/oferta\/junior-graphic-designer-full-remote-pharma-interim-2984918/i.test(url)), "Round 660: Randstad closure evidence was lost");
const r661CasaCarlota = test.allData.find((item) => item.id === 119);
check(r661CasaCarlota && test.applicationStatus(r661CasaCarlota).key === "closed" && r661CasaCarlota.tier === "X", "Round 661: La Casa de Carlota closed Barcelona role remained active");
check(r661CasaCarlota && test.toLinks(r661CasaCarlota).some((url) => /linkedin\.com\/jobs\/view\/junior-graphic-designer-at-la-casa-de-carlota-4440995820/i.test(url)), "Round 661: La Casa de Carlota closure evidence was lost");
const r662Nacar = test.allData.find((item) => item.id === 1060);
check(r662Nacar && test.applicationStatus(r662Nacar).key === "closed" && r662Nacar.tier === "X", "Round 662: removed Nacar proactive application remained active");
check(r662Nacar && test.toLinks(r662Nacar).some((url) => /nacardesign\.recruitee\.com\/o\/proactive-application-2/i.test(url)), "Round 662: Nacar closure evidence was lost");
const r663Roboto = test.allData.find((item) => item.id === 341);
check(r663Roboto && test.applicationStatus(r663Roboto).key === "verify" && test.locationBucket(r663Roboto) === "other" && r663Roboto.score === 94, "Round 680: Roboto global-remote Brand Designer leaked into the Spain-remote queue");
check(r663Roboto && test.toLinks(r663Roboto).some((url) => /robotostudio\.com\/careers\/brand-designer/i.test(url)), "Round 663: Roboto official live role route was lost");
const r664Karmina = test.allData.find((item) => item.id === 1114);
check(r664Karmina && test.applicationStatus(r664Karmina).key === "closed" && r664Karmina.tier === "X", "Round 664: Karmina named role absent from current page remained active");
check(r664Karmina && test.toLinks(r664Karmina).some((url) => /agenciakarmina\.com\/en\/jobs/i.test(url)), "Round 664: Karmina generic careers evidence was lost");
const r665Deel = test.allData.find((item) => item.id === 1027);
check(r665Deel && test.applicationStatus(r665Deel).key === "closed" && r665Deel.tier === "X", "Round 665: removed Deel Art Director/Web Design requisition remained active");
check(r665Deel && test.toLinks(r665Deel).some((url) => /jobs\.ashbyhq\.com\/deel\/23db74a0-cb29-4a23-887d-d63bf74f59a5/i.test(url)), "Round 665: Deel closure evidence was lost");
const r666Trivelta = test.allData.find((item) => item.id === 952);
check(r666Trivelta && test.applicationStatus(r666Trivelta).key === "closed", "Round 666/2026-08-12: Trivelta duplicate history row remained active");
check(r666Trivelta && test.toLinks(r666Trivelta).some((url) => /job-boards\.greenhouse\.io\/trivelta\/jobs\/4235534009/i.test(url)), "Round 666: Trivelta official application route was lost");
const r667EMascaro = test.allData.find((item) => item.id === 838);
check(r667EMascaro && test.applicationStatus(r667EMascaro).key === "closed" && r667EMascaro.tier === "X", "Round 667: eMascaró named Brand Designer without an official current listing remained active");
check(r667EMascaro && test.toLinks(r667EMascaro).some((url) => /emascaro\.com\/en\/join-the-team/i.test(url)), "Round 667: eMascaró official careers evidence was lost");
const r668RobotoCopy = test.allData.find((item) => item.id === 930658)
  || test.allData.find((item) => item.id === 990346);
check(r668RobotoCopy && test.applicationStatus(r668RobotoCopy).key === "closed" && r668RobotoCopy.tier === "X", "Round 668: duplicate Roboto tracker copy remained active");
check(r668RobotoCopy && test.toLinks(r668RobotoCopy).some((url) => /robotostudio\.com\/careers\/brand-designer/i.test(url)), "Round 668: Roboto duplicate merge evidence was lost");
const r694RobotoCopy = test.allData.find((item) => item.id === 990411);
check(!r694RobotoCopy || (test.applicationStatus(r694RobotoCopy).key === "closed" && r694RobotoCopy.tier === "X"), "Round 694: later duplicate Roboto tracker copy remained active");
const r695Avidalia = test.allData.find((item) => item.id === 1276);
check(r695Avidalia && test.applicationStatus(r695Avidalia).key !== "closed" && r695Avidalia.score === 90 && test.locationBucket(r695Avidalia) === "barcelona", "Round 695: Avidalia current Indeed detail refresh regressed");
const r695Merchan = test.allData.find((item) => item.id === 154);
check(r695Merchan && test.applicationStatus(r695Merchan).key === "closed" && r695Merchan.tier === "X", "Round 695: expired Merchanservis LinkedIn route remained active");
const r695Dragons = test.allData.find((item) => item.id === 191);
check(r695Dragons && test.applicationStatus(r695Dragons).key === "closed" && r695Dragons.tier === "X", "Round 695: expired Dragons Creative Web LinkedIn route remained active");
const r695Imagina = test.allData.find((item) => item.id === 125);
check(r695Imagina && test.applicationStatus(r695Imagina).key === "closed" && r695Imagina.tier === "X", "Round 695: expired IMAGINA LinkedIn route remained active");
const r696Cinnamood = test.allData.find((item) => item.id === 291);
check(r696Cinnamood && test.applicationStatus(r696Cinnamood).key === "closed" && r696Cinnamood.tier === "X", "Round 696: expired Cinnamood LinkedIn route remained active");
const r696Tinkle = test.allData.find((item) => item.id === 252);
check(r696Tinkle && test.applicationStatus(r696Tinkle).key === "closed" && r696Tinkle.tier === "X", "Round 696: expired Tinkle LinkedIn route remained active");
const r696Flodesk = test.allData.find((item) => item.id === 288);
check(r696Flodesk && test.applicationStatus(r696Flodesk).key === "closed" && r696Flodesk.tier === "X", "Round 696: expired Flodesk LinkedIn route remained active");
const r696SpanishAlchemist = test.allData.find((item) => item.id === 329);
check(r696SpanishAlchemist && test.applicationStatus(r696SpanishAlchemist).key === "closed" && r696SpanishAlchemist.tier === "X", "Round 696: expired Spanish Alchemist LinkedIn route remained active");
const r697Frekuent = test.allData.find((item) => item.id === 175);
check(r697Frekuent && test.applicationStatus(r697Frekuent).key !== "closed" && r697Frekuent.score === 96 && test.locationBucket(r697Frekuent) === "barcelona", "Round 697: Frekuent official Factorial refresh regressed");
const r697SplitMetrics = test.allData.find((item) => item.id === 147);
check(r697SplitMetrics && test.applicationStatus(r697SplitMetrics).key === "closed" && r697SplitMetrics.tier === "X" && !test.MY_OPPORTUNITY_SET.has(147), "Round 24: SplitMetrics removed official requisition returned to the current board");
const r697FeelsLike = test.allData.find((item) => item.id === 531);
check(r697FeelsLike && test.applicationStatus(r697FeelsLike).key !== "closed" && r697FeelsLike.score === 88 && test.locationBucket(r697FeelsLike) === "barcelona", "Round 697: Feels Like official studio refresh regressed");
const r698Adsmurai = test.allData.find((item) => test.toLinks(item).some((url) => /adsmurai\.teamtailor\.com\/jobs\/8109023-digital-graphic-designer/i.test(url)));
check(!r698Adsmurai || (test.applicationStatus(r698Adsmurai).key !== "closed" && r698Adsmurai.score === 98 && test.locationBucket(r698Adsmurai) === "barcelona"), "Round 698: Adsmurai official Teamtailor refresh regressed");
const r698Catorce = test.allData.find((item) => item.id === 146);
check(r698Catorce && test.applicationStatus(r698Catorce).key === "closed" && r698Catorce.tier === "X", "Round 698: missing CATORCE DCO ATS route remained active");
const r698Circle = test.allData.find((item) => item.id === 928);
check(r698Circle && test.applicationStatus(r698Circle).key !== "closed" && r698Circle.score === 106 && test.locationBucket(r698Circle) === "remote", "Round 698: Circle official Greenhouse refresh regressed");
const r698Linear = test.allData.find((item) => item.id === 216);
const r698LinearReplacement = test.allData.find((item) => item.id === 930834);
check(r698Linear && test.applicationStatus(r698Linear).key === "closed" && r698LinearReplacement && test.applicationStatus(r698LinearReplacement).key === "live" && test.locationBucket(r698LinearReplacement) === "remote", "Round 698: closed Linear Web & Brand was not replaced by current Production Designer Europe");
const r699Coros = test.allData.find((item) => item.id === 668);
check(r699Coros && test.applicationStatus(r699Coros).key === "live" && r699Coros.score === 96 && test.locationBucket(r699Coros) === "remote", "Round 699/2026-08-12: COROS canonical official careers record regressed");
const r699AdsmuraiArt = test.allData.find((item) => item.id === 1023);
check(r699AdsmuraiArt && test.applicationStatus(r699AdsmuraiArt).key !== "closed" && r699AdsmuraiArt.score === 104 && test.locationBucket(r699AdsmuraiArt) === "barcelona", "Round 699: Adsmurai Digital Art Director refresh regressed");
const r700Iris = test.allData.find((item) => item.id === 142);
check(r700Iris && test.applicationStatus(r700Iris).key !== "closed" && r700Iris.score === 86 && test.locationBucket(r700Iris) === "barcelona", "Round 700: IRiS original LinkedIn refresh regressed");
const r700Mylva = test.allData.find((item) => item.id === 1278);
check(r700Mylva && test.applicationStatus(r700Mylva).key !== "closed" && r700Mylva.score === 96 && test.locationBucket(r700Mylva) === "barcelona", "Round 700: MYLVA InfoJobs refresh regressed");
const r700BusinessLook = test.allData.find((item) => item.id === 1253);
check(r700BusinessLook && test.applicationStatus(r700BusinessLook).key !== "closed" && r700BusinessLook.score === 84 && test.locationBucket(r700BusinessLook) === "barcelona", "Round 700: TheBusinessLook LinkedIn refresh regressed");
const r701Runroom = test.allData.find((item) => item.id === 105);
check(r701Runroom && test.applicationStatus(r701Runroom).key !== "closed" && r701Runroom.score === 78 && test.locationBucket(r701Runroom) === "barcelona", "Round 701: Runroom student-scope recalibration regressed");
const r701DdbJunior = test.allData.find((item) => item.id === 960);
check(r701DdbJunior && test.applicationStatus(r701DdbJunior).key === "live" && r701DdbJunior.score === 92 && test.locationBucket(r701DdbJunior) === "barcelona", "Round 701: DDB Art Director Junior ATS refresh regressed");
const r701Savills = test.allData.find((item) => item.id === 33);
check(r701Savills && r701Savills.tier === "D" && test.locationBucket(r701Savills) !== "barcelona" && test.applicationStatus(r701Savills).key !== "closed", "Round 701: Savills Málaga location correction regressed");
const r701StripeLegacy = test.allData.find((item) => item.id === 99);
check(r701StripeLegacy && test.applicationStatus(r701StripeLegacy).key === "closed" && r701StripeLegacy.tier === "X", "Round 701: Stripe legacy Brand Designer duplicate remained active");
const r702NextMedia = test.allData.find((item) => item.id === 1263);
check(r702NextMedia && test.applicationStatus(r702NextMedia).key === "closed" && r702NextMedia.tier === "X", "Round 702: Next'media closed LinkedIn role remained active");
const r702Crowdstrike = test.allData.find((item) => item.id === 1087);
check(r702Crowdstrike && test.applicationStatus(r702Crowdstrike).key === "closed" && r702Crowdstrike.tier === "X", "Round 702: CrowdStrike unavailable mirror role remained active");
const r703Euroleague = test.allData.find((item) => item.id === 287);
check(r703Euroleague && r703Euroleague.tier === "D" && test.applicationStatus(r703Euroleague).key !== "closed", "Round 703: EuroLeague editorial role remained in the visual target tier");
const r704Jirada = test.allData.find((item) => item.id === 86);
check(r704Jirada && test.applicationStatus(r704Jirada).key !== "closed" && r704Jirada.score === 70 && test.locationBucket(r704Jirada) === "barcelona", "Round 704: JIRADA trainee scope or score regressed");
const r705Mango = test.allData.find((item) => item.id === 930705);
check(r705Mango && r705Mango.score === 100 && test.locationBucket(r705Mango) === "barcelona" && test.applicationStatus(r705Mango).key === "live", "Round 15: MANGO Barcelona-province correction regressed");
const r706Lateral = test.allData.find((item) => test.toLinks(item).some((url) => /4436668875|art-director-63779/i.test(url)));
check(r706Lateral && r706Lateral.score === 100 && test.locationBucket(r706Lateral) === "barcelona" && test.applicationStatus(r706Lateral).key === "live", "Round 706/714: Lateral Thinking Barcelona Art Director live-detail refresh regressed");
const r707DragonsLead = test.allData.find((item) => item.id === 930707);
check(r707DragonsLead && r707DragonsLead.score === 102 && test.locationBucket(r707DragonsLead) === "barcelona" && test.applicationStatus(r707DragonsLead).key !== "closed", "Round 707: Dragons Lead Graphic Designer discovery regressed");
const r707DragonsHealthcare = test.allData.find((item) => item.id === 930708);
check(r707DragonsHealthcare && r707DragonsHealthcare.score === 96 && test.locationBucket(r707DragonsHealthcare) === "barcelona" && test.applicationStatus(r707DragonsHealthcare).key !== "closed", "Round 707: Dragons Senior Art Director Healthcare discovery regressed");
const r708ChineseAd = test.allData.find((item) => item.id === 778);
check(r708ChineseAd && r708ChineseAd.score === 10 && r708ChineseAd.tier === "X" && test.applicationStatus(r708ChineseAd).key === "closed", "Round 708/726: withdrawn InfoHuaxin graphic-design lead was not moved to history");
const r709Adsmurai = test.allData.find((item) => item.id === 1023);
check(r709Adsmurai && r709Adsmurai.score === 104 && test.locationBucket(r709Adsmurai) === "barcelona" && test.applicationStatus(r709Adsmurai).key === "live", "Round 709: Adsmurai Digital Art Director live-status refresh regressed");
const r709Bcome = test.allData.find((item) => item.id === 55);
check(r709Bcome && r709Bcome.score === 94 && test.locationBucket(r709Bcome) === "barcelona" && test.applicationStatus(r709Bcome).key === "live", "Round 709: BCome Digital Designer live-status refresh regressed");
const r709Fhios = test.allData.find((item) => item.id === 1217);
check(r709Fhios && r709Fhios.score === 94 && test.locationBucket(r709Fhios) === "barcelona" && test.applicationStatus(r709Fhios).key === "closed", "Round 709/2026-08-12: Fhios official closure evidence regressed");
const r709SlapsSenior = test.allData.find((item) => item.id === 134);
const r709SlapsJunior = test.allData.find((item) => item.id === 2942);
check(r709SlapsSenior && r709SlapsSenior.score === 100 && test.locationBucket(r709SlapsSenior) === "barcelona" && test.applicationStatus(r709SlapsSenior).key === "live", "Round 709: SLAPS Senior Art Director current application route regressed");
check(r709SlapsJunior && test.locationBucket(r709SlapsJunior) === "barcelona" && test.applicationStatus(r709SlapsJunior).key === "live", "Round 709: SLAPS Junior Graphic Designer current application route regressed");
for (const id of [479, 1055]) {
  const duplicateSlaps = test.allData.find((item) => item.id === id);
  check(duplicateSlaps && test.applicationStatus(duplicateSlaps).key === "closed" && duplicateSlaps.tier === "X", `Round 709: SLAPS duplicate history row ${id} remained active`);
}
const r710Kilograph = test.allData.find((item) => item.id === 1245);
check(r710Kilograph && test.locationBucket(r710Kilograph) === "barcelona" && test.applicationStatus(r710Kilograph).key === "closed" && test.toLinks(r710Kilograph).some((url) => /4437390159/i.test(url)), "Round 20/2026-08-12: Kilograph closed original detail correction regressed");
const r710VmlSenior = test.allData.find((item) => item.id === 981);
check(r710VmlSenior && r710VmlSenior.score === 102 && test.locationBucket(r710VmlSenior) === "barcelona" && test.applicationStatus(r710VmlSenior).key === "live", "Round 710: VML Senior Art Director recalibration regressed");
const r711KingNewGames = test.allData.find((item) => item.id === 224);
check(r711KingNewGames && r711KingNewGames.score === 90 && test.locationBucket(r711KingNewGames) === "barcelona" && test.applicationStatus(r711KingNewGames).key === "live" && test.toLinks(r711KingNewGames).some((url) => /R027791/i.test(url)), "Round 711: King Art Director official Workday refresh regressed");
const r711JungleEditor = test.allData.find((item) => item.id === 886);
check(r711JungleEditor && r711JungleEditor.score === 90 && test.locationBucket(r711JungleEditor) === "barcelona" && test.applicationStatus(r711JungleEditor).key === "live" && test.toLinks(r711JungleEditor).some((url) => /4441503440/i.test(url)), "Round 711: Jungle/MeMe Video Social Editor refresh regressed");
const r711Patterson = test.allData.find((item) => item.id === 999999);
check(r711Patterson && r711Patterson.score === 10 && r711Patterson.tier === "X" && test.applicationStatus(r711Patterson).key === "closed", "Round 711: Patterson expired original detail remained active");
const r711MemeSocial = test.allData.find((item) => item.id === 930711);
check(r711MemeSocial && r711MemeSocial.score === 86 && test.locationBucket(r711MemeSocial) === "barcelona" && test.applicationStatus(r711MemeSocial).key === "live" && test.toLinks(r711MemeSocial).some((url) => /4441035715/i.test(url)), "Round 711: MeMe Social Creative discovery missing or misclassified");
const r712ColourMonster = test.allData.find((item) => item.id === 1301);
check(r712ColourMonster && r712ColourMonster.score === 100 && test.locationBucket(r712ColourMonster) === "barcelona" && test.applicationStatus(r712ColourMonster).key === "verify" && test.toLinks(r712ColourMonster).some((url) => /4446592473/i.test(url)), "Round 16: The Colour Monster current readable/verify status regressed");
const r712Pepsi = test.allData.find((item) => item.id === 920001);
check(r712Pepsi && r712Pepsi.score === 112 && test.locationBucket(r712Pepsi) === "barcelona" && test.applicationStatus(r712Pepsi).key === "live" && test.toLinks(r712Pepsi).some((url) => /4440194840/i.test(url)), "Round 712: PepsiCo Senior Designer live-status audit regressed");
const r713Bav = test.allData.find((item) => item.id === 930712);
check(r713Bav && r713Bav.score === 104 && test.locationBucket(r713Bav) === "barcelona" && test.applicationStatus(r713Bav).key === "live" && test.toLinks(r713Bav).some((url) => /4443713564/i.test(url)), "Round 713: Bav Group Art Director discovery missing or misclassified");
const r714Desigual = test.allData.find((item) => item.id === 322);
check(r714Desigual && r714Desigual.score === 104 && test.locationBucket(r714Desigual) === "barcelona" && test.applicationStatus(r714Desigual).key === "closed" && test.toLinks(r714Desigual).some((url) => /4363154181/i.test(url)), "Round 714/2026-08-12: Desigual no-longer-accepting state regressed");
const r716LearnWise = test.allData.find((item) => item.id === 1234);
check(r716LearnWise && test.applicationStatus(r716LearnWise).key === "closed", "Round 716/2026-08-12: LearnWise no-longer-accepting state regressed");
const r718Canonical = test.allData.find((item) => item.id === 604);
const r718Sanofi = test.allData.find((item) => item.id === 930715);
check(r718Sanofi && test.locationBucket(r718Sanofi) === "barcelona" && test.applicationStatus(r718Sanofi).key === "closed" && test.toLinks(r718Sanofi).some((url) => /R2834888/i.test(url)), "Round 718/2026-08-12: Sanofi removed Workday state regressed");
check(r718Canonical && r718Canonical.score === 98 && test.locationBucket(r718Canonical) === "remote" && test.applicationStatus(r718Canonical).key === "live" && test.toLinks(r718Canonical).some((url) => /5326986/i.test(url)), "Round 718/2026-08-12: Canonical official ATS canonical record missing or misclassified");
const r719TeaLab = test.allData.find((item) => item.id === 25);
check(r719TeaLab && r719TeaLab.score === 86 && test.locationBucket(r719TeaLab) === "barcelona" && test.applicationStatus(r719TeaLab).key === "verify" && test.toLinks(r719TeaLab).some((url) => /Social-Media-Content-Creator-Chino-Espanol-Tea-Lab-Barcelona\.pdf/i.test(url)), "Round 719: Tea Lab Chinese-Spanish current-index recheck regressed");
const r720Amazon = test.allData.find((item) => item.id === 203);
check(r720Amazon && r720Amazon.score === 108 && test.locationBucket(r720Amazon) === "barcelona" && test.applicationStatus(r720Amazon).key === "live" && test.toLinks(r720Amazon).some((url) => /amazon\.jobs\/en-gb\/jobs\/3126194/i.test(url)), "Round 720: Amazon Elevated Shopping current-index recheck regressed");
const r721Stark = test.allData.find((item) => item.id === 190);
const r721Estudiferrer = test.allData.find((item) => item.id === 1239);
const r721Establishment = test.allData.find((item) => item.id === 930717);
check(r721Stark && r721Stark.score === 100 && test.locationBucket(r721Stark) === "barcelona" && test.applicationStatus(r721Stark).key === "live" && test.toLinks(r721Stark).some((url) => /4424557342/i.test(url)), "Round 721: Stark Future current-detail recheck regressed");
check(r721Estudiferrer && r721Estudiferrer.score === 94 && test.locationBucket(r721Estudiferrer) === "barcelona" && test.applicationStatus(r721Estudiferrer).key === "closed" && test.toLinks(r721Estudiferrer).some((url) => /4377161837/i.test(url)), "Round 721: Estudiferrer direct closed status regressed");
check(r721Establishment && r721Establishment.score === 72 && test.locationBucket(r721Establishment) === "barcelona" && test.applicationStatus(r721Establishment).key === "live" && test.toLinks(r721Establishment).some((url) => /4384477497/i.test(url)), "Round 721: Establishment Labs design-intern discovery missing or misclassified");
const r722Uniqlo = test.allData.find((item) => test.toLinks(item).some((url) => /R00000004175039|4415503040/i.test(url)) && /UNIQLO/i.test(`${item.source} ${item.opportunity}`));
check(r722Uniqlo && r722Uniqlo.score === 96 && test.locationBucket(r722Uniqlo) === "barcelona" && test.applicationStatus(r722Uniqlo).key === "closed" && test.toLinks(r722Uniqlo).some((url) => /fastretailing\.wd3\.myworkdayjobs\.com\/sv-SE/i.test(url)), "Round 722/2026-08-12: UNIQLO removed Workday state regressed");
const r722Ogilvy = test.allData.find((item) => test.toLinks(item).some((url) => /4429417187/i.test(url)));
check(r722Ogilvy && r722Ogilvy.score === 78 && test.locationBucket(r722Ogilvy) === "barcelona" && test.applicationStatus(r722Ogilvy).key === "live", "Round 722: Ogilvy graduate Art Director current-detail refresh regressed");
const r723Mango = test.allData.find((item) => test.toLinks(item).some((url) => /4444421303/i.test(url)) && /MANGO/i.test(`${item.source} ${item.opportunity}`));
check(r723Mango && r723Mango.score === 90 && test.locationBucket(r723Mango) === "barcelona" && test.applicationStatus(r723Mango).key === "live", "Round 723: MANGO Shop Window Creative Designer current-detail recheck regressed");
const r723Capitole = test.allData.find((item) => item.id === 930718);
check(r723Capitole && r723Capitole.score === 86 && test.locationBucket(r723Capitole) === "barcelona" && test.applicationStatus(r723Capitole).key === "live" && test.toLinks(r723Capitole).some((url) => /4438065600/i.test(url)), "Round 723: Capitole Email Designer discovery missing or misclassified");
const r724Rv = test.allData.find((item) => test.toLinks(item).some((url) => /9wP83M/i.test(url)));
check(r724Rv && r724Rv.score === 86 && test.locationBucket(r724Rv) === "barcelona" && test.applicationStatus(r724Rv).key === "live" && test.toLinks(r724Rv).some((url) => /jobtoday\.com\/es\/trabajo\/junior-motion-graphics-and-visual-designer-9wP83M/i.test(url)), "Round 724: RV Group duplicate score/status normalization regressed");
const r725Adsmurai = test.allData.find((item) => item.id === 930719);
const r725Ondeuev = test.allData.find((item) => item.id === 930720);
const r725Semrush = test.allData.find((item) => item.id === 206);
check(r725Adsmurai && r725Adsmurai.score === 98 && test.locationBucket(r725Adsmurai) === "barcelona" && test.applicationStatus(r725Adsmurai).key === "live" && test.toLinks(r725Adsmurai).some((url) => /8109023-digital-graphic-designer/i.test(url)), "Round 725: Adsmurai Barcelona ATS discovery missing or misclassified");
check(r725Ondeuev && r725Ondeuev.score === 90 && test.locationBucket(r725Ondeuev) === "barcelona" && test.applicationStatus(r725Ondeuev).key === "closed" && test.toLinks(r725Ondeuev).some((url) => /4403400813/i.test(url)), "Round 725: Ondeuev direct closed status regressed");
check(r725Semrush && r725Semrush.score === 108 && test.locationBucket(r725Semrush) === "barcelona" && test.applicationStatus(r725Semrush).key === "closed" && test.toLinks(r725Semrush).some((url) => /JR100590/i.test(url)), "Round 725: Semrush missing Workday route closure regressed");
const r669Remedy = test.allData.find((item) => item.id === 958);
check(r669Remedy && test.applicationStatus(r669Remedy).key === "live" && r669Remedy.score === 70 && test.isInternshipRole(r669Remedy), "Round 669: Remedy Edge internship status or score was not recalibrated");
check(r669Remedy && test.toLinks(r669Remedy).some((url) => /job-boards\.greenhouse\.io\/omnicomhealth\/jobs\/5207339008/i.test(url)), "Round 669/2026-08-12: Remedy Edge current official application route was lost");
const r670Ddb = test.allData.find((item) => item.id === 1095);
check(r670Ddb && test.applicationStatus(r670Ddb).key === "closed" && r670Ddb.tier === "X", "Round 26: removed DDB Creative Director requisition remained active");
check(r670Ddb && test.toLinks(r670Ddb).some((url) => /job-boards\.greenhouse\.io\/uneteaddbspain\/jobs\/5229086008/i.test(url)), "Round 670: DDB official application route was lost");
const r671Flodesk = test.allData.find((item) => item.id === 289);
check(r671Flodesk && test.applicationStatus(r671Flodesk).key === "closed" && r671Flodesk.tier === "X", "Round 671: Flodesk Senior Brand Designer without a current board match remained active");
check(r671Flodesk && test.toLinks(r671Flodesk).some((url) => /job-boards\.greenhouse\.io\/flodesk/i.test(url)), "Round 671: Flodesk official board evidence was lost");
for (const id of [1054, 1074]) {
  const legacyCatorce = test.allData.find((item) => item.id === id);
  check(legacyCatorce && test.applicationStatus(legacyCatorce).key === "closed" && legacyCatorce.tier === "X", `Round 672: CATORCE legacy row ${id} remained active`);
}
const r673Titan = test.allData.find((item) => item.id === 1207);
check(r673Titan && test.isResearchOnly(r673Titan) && r673Titan.tier === "D" && test.toLinks(r673Titan).length === 0, "Round 673: Titan OS no-route internship was not isolated as research-only");
const r674Turbopuffer = test.allData.find((item) => item.id === 12);
check(r674Turbopuffer && test.applicationStatus(r674Turbopuffer).key === "live" && r674Turbopuffer.score === 94 && r674Turbopuffer.tier === "B", "Round 674: turbopuffer official Designer role was not promoted");
check(r674Turbopuffer && test.toLinks(r674Turbopuffer).some((url) => /jobs\.ashbyhq\.com\/turbopuffer\/f3d9a49d-7ec1-4d9b-8dd2-d55bf05f32f6/i.test(url)), "Round 674: turbopuffer official application route was lost");

const r18Hp = test.allData.find((item) => item.id === 162);
check(r18Hp && test.MY_OPPORTUNITY_SET.has(162) && test.applicationStatus(r18Hp).key === "live" && test.locationBucket(r18Hp) === "barcelona" && test.toLinks(r18Hp).some((url) => /Graphic-Designer_3165191-1/i.test(url)), "Round 18: HP official Workday Graphic Designer audit missing or misclassified");
check(r18Hp && /marketing|communications|collateral/i.test(`${r18Hp.fit} ${r18Hp.analysis}`), "Round 18: HP misleading title is no longer qualified by its actual marketing-communications scope");
const r18Ps21 = test.allData.find((item) => item.id === 930854);
check(r18Ps21 && test.MY_OPPORTUNITY_SET.has(930854) && test.applicationStatus(r18Ps21).key === "live" && test.locationBucket(r18Ps21) === "barcelona" && test.directionKey(r18Ps21) === "motion" && test.toLinks(r18Ps21).some((url) => /4443271761/i.test(url)), "Round 18: PS21Barna original-detail motion opportunity missing or misclassified");
const r18Haan = test.allData.find((item) => item.id === 930855);
check(r18Haan && !test.MY_OPPORTUNITY_SET.has(930855) && test.applicationStatus(r18Haan).key === "closed" && test.toLinks(r18Haan).some((url) => /4378324658/i.test(url)), "Round 18: HAAN closed original detail was restored or lost");
const r18Ddb = test.allData.find((item) => item.id === 308);
check(r18Ddb && test.applicationStatus(r18Ddb).key === "live" && test.toLinks(r18Ddb).some((url) => /uneteaddbspain\/jobs\/5137116008/i.test(url)), "Round 18: DDB official Greenhouse refresh regressed");
const r18Lateral = test.allData.find((item) => item.id === 117);
check(r18Lateral && test.applicationStatus(r18Lateral).key === "live" && test.toLinks(r18Lateral).some((url) => /4436668875/i.test(url)), "Round 18: Lateral Thinking current original-detail refresh regressed");
const r19Miin = test.allData.find((item) => item.id === 9001);
check(r19Miin && !test.MY_OPPORTUNITY_SET.has(9001) && test.applicationStatus(r19Miin).key === "closed" && test.toLinks(r19Miin).some((url) => /empleos\.miin-cosmetics\.com\/jobs\/graphic-designer-barcelona-40h/i.test(url)), "Round 19: MiiN stale LinkedIn result was not anchored to the closed employer page");
const r19Revolut = test.allData.find((item) => item.id === 835);
check(r19Revolut && !test.MY_OPPORTUNITY_SET.has(835) && test.applicationStatus(r19Revolut).key === "closed" && test.toLinks(r19Revolut).some((url) => /4324505158/i.test(url)), "Round 19: Revolut stale fresh-result correction regressed");
for (const id of [930856, 930857, 930858]) {
  const closedLead = test.allData.find((item) => item.id === id);
  check(closedLead && !test.MY_OPPORTUNITY_SET.has(id) && test.applicationStatus(closedLead).key === "closed" && test.locationBucket(closedLead) === "barcelona", `Round 19: closed Barcelona lead ${id} was restored or lost`);
}
const r19Europastry = test.allData.find((item) => item.id === 930859);
check(r19Europastry && !test.MY_OPPORTUNITY_SET.has(930859) && test.applicationStatus(r19Europastry).key === "closed" && test.locationBucket(r19Europastry) === "barcelona" && test.toLinks(r19Europastry).length >= 1, "Round 20: Europastry stale indexed listing was not moved from review to history");

const r20Kilograph = test.allData.find((item) => item.id === 1245);
check(r20Kilograph && !test.MY_OPPORTUNITY_SET.has(1245) && test.applicationStatus(r20Kilograph).key === "closed" && test.locationBucket(r20Kilograph) === "barcelona", "Round 20: closed Kilograph original detail remained in the main ranking");
const r20Luppa = test.allData.find((item) => item.id === 930851);
check(r20Luppa && !test.MY_OPPORTUNITY_SET.has(930851) && test.applicationStatus(r20Luppa).key === "closed" && test.locationBucket(r20Luppa) === "barcelona", "Round 20: closed Luppa original detail remained in the main ranking");
const r20Supabase = test.allData.find((item) => item.id === 535);
check(r20Supabase && test.MY_OPPORTUNITY_SET.has(535) && test.applicationStatus(r20Supabase).key === "live" && test.locationBucket(r20Supabase) === "remote" && test.toLinks(r20Supabase).some((url) => /jobs\.ashbyhq\.com\/supabase\/4a85c92b-1d0d-43ee-8dbc-0e45a58be208/i.test(url)), "Round 20: Supabase global-remote official opportunity is missing or misclassified");
const r20Kraken = test.allData.find((item) => item.id === 930860);
check(r20Kraken && test.MY_OPPORTUNITY_SET.has(930860) && test.applicationStatus(r20Kraken).key === "live" && test.locationBucket(r20Kraken) === "remote" && /Spain/i.test(`${r20Kraken.location} ${r20Kraken.locationTag}`) && test.toLinks(r20Kraken).some((url) => /jobs\.ashbyhq\.com\/kraken\.com\/8ed4c65b-aaac-40d0-9d41-423683b7a1bd/i.test(url)), "Round 20: Kraken Spain-eligible remote official opportunity is missing or misclassified");
const r20Primer = test.allData.find((item) => item.id === 930861);
check(r20Primer && !test.MY_OPPORTUNITY_SET.has(930861) && test.applicationStatus(r20Primer).key === "closed", "Round 20: Primer Job not found result was not preserved as closed history");
check(test.MY_OPPORTUNITY_IDS.length >= 160, "Round 20: reviewed main opportunity count regressed");

const r21Breakout = test.allData.find((item) => item.id === 930846);
check(r21Breakout && !test.MY_OPPORTUNITY_SET.has(930846) && test.applicationStatus(r21Breakout).key === "closed" && test.toLinks(r21Breakout).some((url) => /3096a5c6-a4fc-4b09-9953-aefd72d423f3/i.test(url)), "Round 21: removed Kraken Breakout requisition remained in the main ranking or lost its historical evidence");
const r21Superside = test.allData.find((item) => item.id === 930862);
check(r21Superside && !test.MY_OPPORTUNITY_SET.has(930862) && test.applicationStatus(r21Superside).key === "closed" && test.toLinks(r21Superside).some((url) => /jobs\.lever\.co\/superside\/f3d3064a-6df5-4a65-af08-132eeaf3688c/i.test(url)), "Round 21: Superside LATAM-only official ATS correction regressed");
const r21Vml = test.allData.find((item) => item.id === 930712);
check(r21Vml && test.MY_OPPORTUNITY_SET.has(930712) && test.applicationStatus(r21Vml).key === "live" && test.locationBucket(r21Vml) === "barcelona" && test.toLinks(r21Vml).some((url) => /vml\.com\/careers\/job\/8634604002-es-art-director/i.test(url)), "Round 21: current official VML Barcelona Art Director replacement is missing or misclassified");
const r21Siemens = test.allData.find((item) => item.id === 930820);
check(r21Siemens && test.MY_OPPORTUNITY_SET.has(930820) && test.applicationStatus(r21Siemens).key === "live" && test.locationBucket(r21Siemens) === "barcelona" && test.toLinks(r21Siemens).some((url) => /JobDetail\/516087/i.test(url)), "Round 21: Siemens Barcelona UI / Visual Designer official route is missing or misclassified");
check(test.MY_OPPORTUNITY_IDS.indexOf(446) < test.MY_OPPORTUNITY_IDS.indexOf(930820) && test.MY_OPPORTUNITY_IDS.indexOf(930820) < test.MY_OPPORTUNITY_IDS.indexOf(930834), "Round 21: Siemens was not reranked between Refokus and Linear");
const r21CrowdStrike = test.allData.find((item) => item.id === 930836);
check(r21CrowdStrike && r21CrowdStrike.postedAt === "2026-08-08" && /Creative Content Designer/i.test(r21CrowdStrike.opportunity), "Round 21: CrowdStrike current title/date refresh regressed");
const r21Main = test.MY_OPPORTUNITY_IDS.map((id) => test.allData.find((item) => Number(item.id) === id)).filter(Boolean);
check(r21Main.length >= 160, "Round 21: reviewed main opportunity count regressed");
check(r21Main.filter((item) => test.locationBucket(item) === "barcelona").length >= 120 && r21Main.filter((item) => test.locationBucket(item) === "remote").length >= 40, "Round 21: Barcelona/remote main-board baseline regressed");
check(r21Main.filter((item) => test.applicationStatus(item).key === "live").length >= 156 && r21Main.filter((item) => test.applicationStatus(item).key === "verify").length >= 4, "Round 21: live/verify status baseline regressed");

const r22Studio = test.allData.find((item) => item.id === 930863);
check(r22Studio && test.MY_OPPORTUNITY_SET.has(930863) && test.applicationStatus(r22Studio).key === "live" && test.locationBucket(r22Studio) === "remote" && test.experienceInfo(r22Studio).key === "junior" && test.toLinks(r22Studio).some((url) => /thestudio\.na\.teamtailor\.com\/jobs\/682135/i.test(url)), "Round 22: THE/STUDIO official worldwide-remote brand-concept role is missing or misclassified");
const r22Prime = test.allData.find((item) => item.id === 930864);
check(r22Prime && test.MY_OPPORTUNITY_SET.has(930864) && test.applicationStatus(r22Prime).key === "live" && test.locationBucket(r22Prime) === "remote" && test.toLinks(r22Prime).some((url) => /4432554030/i.test(url)) && /part-time/i.test(r22Prime.searchText) && /contract/i.test(r22Prime.searchText), "Round 22: Prime Insights current remote role or its labor-condition caveat is missing");
const r22Jobgether = test.allData.find((item) => item.id === 930865);
check(r22Jobgether && test.MY_OPPORTUNITY_SET.has(930865) && test.applicationStatus(r22Jobgether).key === "verify" && test.locationBucket(r22Jobgether) === "remote" && test.hasOpaqueEmployerRisk(r22Jobgether) && test.toLinks(r22Jobgether).some((url) => /4451696654/i.test(url)), "Round 22: anonymous Jobgether listing was not kept at verify-first status");
const r22Hku = test.allData.find((item) => item.id === 24);
check(r22Hku && test.MY_OPPORTUNITY_SET.has(24) && test.applicationStatus(r22Hku).key === "live" && test.locationBucket(r22Hku) === "barcelona" && test.toLinks(r22Hku).some((url) => /Marketing-and-Branding-Officer-HKU-Europe-JD-13072026\.pdf/i.test(url)), "Round 22: Casa Asia / HKU current source refresh is missing");
check(test.MY_OPPORTUNITY_IDS.indexOf(930847) < test.MY_OPPORTUNITY_IDS.indexOf(930863) && test.MY_OPPORTUNITY_IDS.indexOf(930863) < test.MY_OPPORTUNITY_IDS.indexOf(930816), "Round 22: THE/STUDIO was not inserted at its audited high-fit rank");
check(test.MY_OPPORTUNITY_IDS.indexOf(930826) < test.MY_OPPORTUNITY_IDS.indexOf(930864) && test.MY_OPPORTUNITY_IDS.indexOf(930864) < test.MY_OPPORTUNITY_IDS.indexOf(930707), "Round 22: Prime Insights was not placed below stronger formal roles");
check(test.MY_OPPORTUNITY_IDS.indexOf(930865) < test.MY_OPPORTUNITY_IDS.indexOf(1243) && test.MY_OPPORTUNITY_IDS.at(-1) === 537, "Round 27: newly recovered low-confidence remote cards are not kept at the bottom");
const r22Main = test.MY_OPPORTUNITY_IDS.map((id) => test.allData.find((item) => Number(item.id) === id)).filter(Boolean);
check(r22Main.length >= 163, "Round 22: reviewed main opportunity baseline regressed below 163");
check(r22Main.filter((item) => test.locationBucket(item) === "barcelona").length >= 120 && r22Main.filter((item) => test.locationBucket(item) === "remote").length >= 43, "Round 22: Barcelona/remote baseline regressed below 120/43");
check(r22Main.filter((item) => test.applicationStatus(item).key === "live").length >= 158 && r22Main.filter((item) => test.applicationStatus(item).key === "verify").length >= 5, "Round 22: live/verify baseline regressed below 158/5");
check(r22Main.filter((item) => test.isChineseRelevant(item)).length === 6, "Round 27: Chinese-relevant current opportunity count must remain evidence-backed at 6");

const r23ById = (id) => test.allData.find((item) => Number(item.id) === id);
const r23Main = test.MY_OPPORTUNITY_IDS.map(r23ById).filter(Boolean);
const r23VisibleMain = test.dedupedData.filter((item) => test.MY_OPPORTUNITY_SET.has(Number(item.id)));
check(test.MY_OPPORTUNITY_IDS.length === 240 && new Set(test.MY_OPPORTUNITY_IDS).size === 240, "Round 28: audited ID ledger must contain exactly 240 unique opportunities");
check(r23Main.length === 240 && r23VisibleMain.length === 240, "Round 28: main ledger and visible deduplicated cards must both equal 240");
check(r23Main.filter((item) => test.locationBucket(item) === "barcelona").length === 182 && r23Main.filter((item) => test.locationBucket(item) === "remote").length === 58, "Round 28: Barcelona/remote split must be exactly 182/58");
check(r23Main.filter((item) => test.applicationStatus(item).key === "live").length === 219 && r23Main.filter((item) => test.applicationStatus(item).key === "verify").length === 21, "Round 28: live/verify split must be exactly 219/21");
check(r23Main.filter((item) => test.isChineseRelevant(item)).length === 6, "Round 28: Chinese-relevant current opportunity count must remain evidence-backed at 6");

for (const id of [930873, 930874, 930875]) {
  const item = r23ById(id);
  check(item && test.MY_OPPORTUNITY_SET.has(id) && test.locationBucket(item) === "barcelona" && test.applicationStatus(item).key === "live" && test.toLinks(item).length > 0, `Round 28: new Barcelona opportunity ${id} is missing, closed or lacks an original application route`);
}
check(test.toLinks(r23ById(930873)).some((url) => /grupoplaneta\.talentclue\.com\/es\/node\/127111935/i.test(url)), "Round 28: Grupo Planeta official TalentClue route is missing");
check(test.toLinks(r23ById(930874)).some((url) => /4434548567/i.test(url)), "Round 28: Ogilvy employer-origin application route is missing");
check(test.toLinks(r23ById(930875)).some((url) => /4405562504/i.test(url)) && test.applicationLanguagePath(r23ById(930875)).key === "spanish", "Round 28: Grupo Bimbo route or explicit Spanish gate is missing");
check(!test.MY_OPPORTUNITY_SET.has(955) && test.applicationStatus(r23ById(955)).key === "closed" && r23ById(955).tier === "X", "Round 28: Jobgether 404 requisition remained current or leaked into the main board");
check(test.MY_OPPORTUNITY_IDS.indexOf(930871) < test.MY_OPPORTUNITY_IDS.indexOf(930873) && test.MY_OPPORTUNITY_IDS.indexOf(930873) < test.MY_OPPORTUNITY_IDS.indexOf(930868), "Round 28: Grupo Planeta rank is incoherent");
check(test.MY_OPPORTUNITY_IDS.indexOf(1024) < test.MY_OPPORTUNITY_IDS.indexOf(930874) && test.MY_OPPORTUNITY_IDS.indexOf(930874) < test.MY_OPPORTUNITY_IDS.indexOf(990), "Round 28: Ogilvy Liquid Designer rank is incoherent");
check(test.MY_OPPORTUNITY_IDS.indexOf(930829) < test.MY_OPPORTUNITY_IDS.indexOf(930875) && test.MY_OPPORTUNITY_IDS.indexOf(930875) < test.MY_OPPORTUNITY_IDS.indexOf(382), "Round 28: Grupo Bimbo internship rank is incoherent");

const r27Promoted = [382, 1287, 142, 454, 996, 1021, 1243, 1026, 1257, 1310, 930871, 214, 649, 979, 1024, 1002, 537];
check(r27Promoted.every((id) => test.MY_OPPORTUNITY_SET.has(id) && test.toLinks(r23ById(id)).length > 0), "Round 27: a recovered relevant opportunity is missing from the ranked board or lost its source route");
check([1252, 843, 1022, 457, 849, 370, 945, 1000, 997, 197, 199, 1261].every((id) => !test.MY_OPPORTUNITY_SET.has(id) && test.applicationStatus(r23ById(id)).key === "verify"), "Round 27: reviewed-but-unconfirmed leads were not kept in the separate verification library");
const r27Archived = [355, 1013, 1047, 1316, 1317, 574, 999, 338, 594, 571, 44, 98, 121, 179, 222, 250, 353, 530, 941, 1052, 1282, 1284, 1313, 198, 366, 392, 570, 998, 17, 219, 53, 282, 285, 1251, 50, 967];
check(r27Archived.every((id) => !test.MY_OPPORTUNITY_SET.has(id) && test.applicationStatus(r23ById(id)).key === "closed"), "Round 27: audited duplicate, stale, inaccessible or off-scope records leaked back into the current board");
check(r23ById(930871) && /Familia Torres/i.test(r23ById(930871).source) && /Hungry Minds/i.test(r23ById(1310).source), "Round 27: the duplicated raw id 1310 was not split into stable Familia Torres and Hungry Minds identities");

for (const id of [886, 930711, 930870]) {
  const item = r23ById(id);
  check(item && test.MY_OPPORTUNITY_SET.has(id) && test.locationBucket(item) === "barcelona" && test.applicationStatus(item).key === "live" && test.toLinks(item).length > 0, `Round 26: current Barcelona visual/content opportunity ${id} is missing or misclassified`);
}
const r26Cba = r23ById(456);
check(r26Cba && test.MY_OPPORTUNITY_SET.has(456) && test.locationBucket(r26Cba) === "barcelona" && test.applicationStatus(r26Cba).key === "verify" && /cba-design\.com\/spain/i.test(test.toLinks(r26Cba).join(" ")), "Round 26: CBA Barcelona speculative brand-design route is missing or presented as a confirmed vacancy");
check([253, 376, 613, 644, 1088, 1100, 1266, 6, 635, 422, 900, 1034, 1089].every((id) => !test.MY_OPPORTUNITY_SET.has(id) && test.applicationStatus(r23ById(id)).key === "closed" && r23ById(id).tier === "X"), "Round 26: closed or off-scope candidate leaked into the current design board");

for (const id of [930866, 930867, 942]) {
  const item = r23ById(id);
  check(item && test.MY_OPPORTUNITY_SET.has(id) && test.applicationStatus(item).key === "live" && test.toLinks(item).length > 0, `Round 25: new or recovered official opportunity ${id} is missing, closed or lacks an application route`);
}
check(test.locationBucket(r23ById(930866)) === "barcelona" && /3b86049e/i.test(test.toLinks(r23ById(930866)).join(" ")), "Round 25: Preply official Barcelona Brand UGC route regressed");
check(test.locationBucket(r23ById(930867)) === "remote" && /jobs\.lever\.co\/fantasy\/e1833bc1/i.test(test.toLinks(r23ById(930867)).join(" ")), "Round 25: Fantasy official UK/EU remote route regressed");
check(test.locationBucket(r23ById(942)) === "remote" && /greenhouse\.io\/costar\/jobs\/6126693004/i.test(test.toLinks(r23ById(942)).join(" ")), "Round 25: Co-Star official worldwide-remote route regressed");
check([421, 651].every((id) => !test.MY_OPPORTUNITY_SET.has(id) && test.applicationStatus(r23ById(id)).key === "closed" && r23ById(id).tier === "X"), "Round 25: JOIN or Remote.com search-cache false positive leaked into the current board");

for (const id of [4, 375, 84, 990001, 443, 78, 284, 483]) {
  const item = r23ById(id);
  check(item && test.MY_OPPORTUNITY_SET.has(id) && test.applicationStatus(item).key === "live" && test.toLinks(item).length > 0, `Round 23: recovered/refreshed canonical opportunity ${id} is missing, closed or lacks an application route`);
}
check(test.locationBucket(r23ById(4)) === "remote" && /lever\.co\/lodgify/i.test(test.toLinks(r23ById(4)).join(" ")), "Round 23: Lodgify official Europe-remote route regressed");
check(test.locationBucket(r23ById(375)) === "barcelona" && /failfast\.design\/jobs\/senior-motion-designer/i.test(test.toLinks(r23ById(375)).join(" ")), "Round 23: Fail Fast Barcelona application route regressed");
check(test.locationBucket(r23ById(84)) === "remote" && /reboot\.studio\/apply/i.test(test.toLinks(r23ById(84)).join(" ")) && /Web Designer/i.test(r23ById(84).opportunity), "Round 23: reboot canonical current Web Designer regressed");
check(test.locationBucket(r23ById(990001)) === "barcelona" && /4430227072|2686782/i.test(test.toLinks(r23ById(990001)).join(" ")) && test.applicationLanguagePath(r23ById(990001)).key === "spanish", "Round 23: TWOJEYS current design role or Spanish gate regressed");
check(test.locationBucket(r23ById(443)) === "remote" && /duck-duck-go\/2b76bbee/i.test(test.toLinks(r23ById(443)).join(" ")) && test.experienceInfo(r23ById(443)).key === "senior", "Round 23: DuckDuckGo Spain-remote lead route regressed");
check(/textura-interiors\.com/i.test(test.toLinks(r23ById(78)).join(" ")) && /2713006/i.test(test.toLinks(r23ById(284)).join(" ")) && /workable\.com/i.test(test.toLinks(r23ById(483)).join(" ")), "Round 23: Textura, EuroLeague or Act Second canonical source refresh regressed");

for (const id of [264, 1655, 993020, 2269, 2273, 2334, 1031, 1040, 1311, 1131]) {
  const item = r23ById(id);
  check(item && !test.MY_OPPORTUNITY_SET.has(id) && test.applicationStatus(item).key === "closed", `Round 23: duplicate, stale or non-design correction ${id} leaked into the current board`);
}
check([2269, 2273, 2334].every((id) => test.toLinks(r23ById(id)).some((url) => /reboot\.studio\/apply/i.test(url))), "Round 23: reboot duplicate history lost its preserved source route");
check(/Job not found|Closed\/history/i.test(r23ById(1031).status), "Round 23: Voodoo Job-not-found correction regressed");
check(/no Junior Graphic Designer|no longer exists/i.test(r23ById(1040).status), "Round 23: Roman/LCDC stale-search correction regressed");
check(/hands-on graphic\/VI design vacancy|non-design|非设计/i.test(`${r23ById(1311).status} ${test.CURATED[1311].reason}`), "Round 23: live TWOJEYS Head of Brand was not kept out as a non-design role");
check(/200 per month|200\/month|USD 200/i.test(`${r23ById(1131).status} ${r23ById(1131).analysis}`), "Round 23: Spreadit low-pay exclusion evidence regressed");

for (const id of [147, 173, 957, 992]) {
  const item = r23ById(id);
  check(item && !test.MY_OPPORTUNITY_SET.has(id) && test.applicationStatus(item).key === "closed" && item.tier === "X", `Round 24: official-board or original-page closure ${id} leaked into the current board`);
}
check(/posting-api\/job-board\/splitmetrics/i.test(test.toLinks(r23ById(147)).join(" ")), "Round 24: SplitMetrics official job-board evidence was not preserved");
check(/posting-api\/job-board\/10xteam/i.test(test.toLinks(r23ById(957)).join(" ")), "Round 24: 10x Team official job-board evidence was not preserved");
check(/boards-api\.greenhouse\.io\/v1\/boards\/appspace/i.test(test.toLinks(r23ById(992)).join(" ")), "Round 24: Appspace official job-board evidence was not preserved");
check(test.MY_OPPORTUNITY_SET.has(604) && test.applicationStatus(r23ById(604)).key === "live" && test.MY_OPPORTUNITY_IDS.indexOf(4) < test.MY_OPPORTUNITY_IDS.indexOf(604) && test.MY_OPPORTUNITY_IDS.indexOf(604) < test.MY_OPPORTUNITY_IDS.indexOf(296), "Round 24: Canonical current official role was not raised into the audited remote brand-system group");
check(test.MY_OPPORTUNITY_SET.has(930719) && test.locationBucket(r23ById(930719)) === "barcelona" && test.toLinks(r23ById(930719)).some((url) => /8109023-digital-graphic-designer/i.test(url)) && !test.toLinks(r23ById(930719)).some((url) => /7993316-digital-graphic-designer/i.test(url)), "Round 24: Adsmurai Madrid requisition leaked into the Barcelona canonical card");

check(test.MY_OPPORTUNITY_IDS.indexOf(930816) < test.MY_OPPORTUNITY_IDS.indexOf(78) && test.MY_OPPORTUNITY_IDS.indexOf(78) < test.MY_OPPORTUNITY_IDS.indexOf(930839), "Round 23: Textura was not raised into the high-fit Barcelona group");
check(test.MY_OPPORTUNITY_IDS.indexOf(930860) < test.MY_OPPORTUNITY_IDS.indexOf(4) && test.MY_OPPORTUNITY_IDS.indexOf(4) < test.MY_OPPORTUNITY_IDS.indexOf(604), "Round 23: Lodgify recovered rank is incoherent");
check(test.MY_OPPORTUNITY_IDS.indexOf(535) < test.MY_OPPORTUNITY_IDS.indexOf(84) && test.MY_OPPORTUNITY_IDS.indexOf(84) < test.MY_OPPORTUNITY_IDS.indexOf(175), "Round 23: reboot canonical rank is incoherent");
check(test.MY_OPPORTUNITY_IDS.indexOf(930844) < test.MY_OPPORTUNITY_IDS.indexOf(443) && test.MY_OPPORTUNITY_IDS.indexOf(443) < test.MY_OPPORTUNITY_IDS.indexOf(930705), "Round 23: DuckDuckGo senior-stretch rank is incoherent");
check(test.MY_OPPORTUNITY_IDS.indexOf(930822) < test.MY_OPPORTUNITY_IDS.indexOf(375) && test.MY_OPPORTUNITY_IDS.indexOf(375) < test.MY_OPPORTUNITY_IDS.indexOf(867), "Round 23: Fail Fast motion-stretch rank is incoherent");
check(test.MY_OPPORTUNITY_IDS.indexOf(870) < test.MY_OPPORTUNITY_IDS.indexOf(990001) && test.MY_OPPORTUNITY_IDS.indexOf(990001) < test.MY_OPPORTUNITY_IDS.indexOf(27), "Round 23: TWOJEYS Spanish-hard-gate role is ranked too high or too low");

test.state.preset = "chinese";
const r588ScoreOrder = test.dedupedData.slice();
test.sortRecords(r588ScoreOrder);
check(r588ScoreOrder.every((item, index) => index === 0 || test.displayedScore(r588ScoreOrder[index - 1]) >= test.displayedScore(item)), "All-card displayed-score order is not strictly descending");
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
  latestRoundSection: test.latestRoundSection,
  latestRoundIds: test.latestRoundItems.map((item) => Number(item.id)),
  total: test.allData.length,
  deduped: test.dedupedData.length,
  mainTotal: auditedMain.length,
  mainLive: auditedMain.filter((item) => test.applicationStatus(item).key === "live").length,
  mainVerify: auditedMain.filter((item) => test.applicationStatus(item).key === "verify").length,
  mainBarcelona: auditedMain.filter((item) => test.locationBucket(item) === "barcelona").length,
  mainRemote: auditedMain.filter((item) => test.locationBucket(item) === "remote").length,
  mainChineseRelevant: auditedMain.filter((item) => test.isChineseRelevant(item)).length,
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
