const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const dataSource = fs.readFileSync(path.join(root, "data.js"), "utf8");
let appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");

const stub = {
  value: "all",
  checked: false,
  hidden: false,
  textContent: "",
  innerHTML: "",
  dataset: {},
  classList: { toggle() {} },
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
    "\nglobalThis.auditApi = { CURATED, dedupedData, state, matchesPreset, toLinks, locationBucket, applicationStatus, isTargetOpportunity, isResearchOnly, hasLowPayRisk, hasOpaqueEmployerRisk, isInternshipRole, isFormalRole, isChineseRelevant, directionKey, applicationLanguagePath, identityKey, personalMatchScore, displayedScore, roleLabels, companyLabel, locationLabel };\n",
  );
vm.runInContext(appSource, context, { filename: "app.js" });

const api = context.auditApi;
const mode = process.argv[2] || "core";
const presetByMode = {
  mine: "mine",
  stable: "stable",
  chinese: "chinese",
  actionable: "actionable",
  profile: "profile",
};
if (presetByMode[mode]) api.state.preset = presetByMode[mode];
const requestedIds = mode === "ids" ? new Set(process.argv.slice(3).map(Number)) : null;
const searchNeedle = mode === "search" ? process.argv.slice(3).join(" ").trim().toLowerCase() : "";
const requestedAll = mode === "all" || mode === "search";

const core = api.dedupedData
  .filter(
    (item) =>
      (!requestedIds || requestedIds.has(Number(item.id))) &&
      (!searchNeedle || String(item.searchText || "").toLowerCase().includes(searchNeedle)) &&
      (requestedAll || (mode === "stable" ? ["A", "B"] : ["A", "B", "C"]).includes(item.tier)) &&
      (requestedAll || ["barcelona", "remote"].includes(api.locationBucket(item))) &&
      (requestedAll || api.applicationStatus(item).key !== "closed") &&
      (requestedAll || api.isTargetOpportunity(item)) &&
      (requestedAll || !api.isResearchOnly(item)) &&
      (requestedAll || !api.hasLowPayRisk(item)) &&
      (requestedAll || api.toLinks(item).length > 0) &&
      (!presetByMode[mode] || api.matchesPreset(item)),
  )
  .sort((a, b) => api.displayedScore(b) - api.displayedScore(a));

const rows = core.map((item) => ({
  id: item.id,
  company: api.companyLabel(item),
  role: api.roleLabels(item).zh,
  originalCompany: item.source,
  originalRole: item.opportunity,
  curated: Boolean(api.CURATED[item.id]),
  statusEvidence: item.status || "",
  analysis: item.analysis || "",
  score: api.displayedScore(item),
  sourceScore: Number(item.score) || 0,
  tier: item.tier,
  status: api.applicationStatus(item).key,
  locationBucket: api.locationBucket(item),
  location: api.locationLabel(item),
  languagePath: api.applicationLanguagePath(item).key,
  direction: api.directionKey(item),
  chineseRelevant: api.isChineseRelevant(item),
  formal: api.isFormalRole(item),
  internship: api.isInternshipRole(item),
  opaqueEmployer: api.hasOpaqueEmployerRisk(item),
  postedAt: item.postedAt || "",
  personalMatch: api.personalMatchScore(item),
  links: api.toLinks(item),
  identity: api.identityKey(item),
}));

const summary = rows.reduce(
  (result, row) => {
    result.status[row.status] = (result.status[row.status] || 0) + 1;
    result.location[row.locationBucket] = (result.location[row.locationBucket] || 0) + 1;
    result.language[row.languagePath] = (result.language[row.languagePath] || 0) + 1;
    result.direction[row.direction] = (result.direction[row.direction] || 0) + 1;
    if (row.chineseRelevant) result.chineseRelevant += 1;
    if (row.formal) result.formal += 1;
    return result;
  },
  { total: rows.length, status: {}, location: {}, language: {}, direction: {}, chineseRelevant: 0, formal: 0 },
);

console.log(JSON.stringify({ summary, rows }, null, 2));
