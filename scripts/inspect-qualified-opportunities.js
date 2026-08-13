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
    "\nglobalThis.auditApi = { CURATED, dedupedData, state, matchesPreset, toLinks, locationBucket, applicationStatus, isTargetOpportunity, isResearchOnly, hasLowPayRisk, hasOpaqueEmployerRisk, isInternshipRole, isFormalRole, isChineseRelevant, directionKey, applicationLanguagePath, scoreLanguageRisk, experienceInfo, identityKey, personalMatchScore, displayedScore, roleLabels, companyLabel, locationLabel, MY_OPPORTUNITY_SET };\n",
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
// Explicit id audits must return historical/closed rows too; otherwise a
// caller asking for a known id can get an empty result precisely after the
// record was correctly archived.
const requestedAll = mode === "all" || mode === "search" || mode === "ids";
const requestedCandidates = mode === "candidates";

function normalizedLink(value) {
  try {
    const url = new URL(value);
    url.hash = "";
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) =>
      url.searchParams.delete(key),
    );
    const query = [...url.searchParams.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, entry]) => `${key}=${entry}`)
      .join("&");
    return `${url.hostname.toLowerCase()}${url.pathname.toLowerCase().replace(/\/$/, "")}${query ? `?${query}` : ""}`;
  } catch {
    return String(value || "").trim().toLowerCase();
  }
}

function listingKey(item) {
  const company = api
    .companyLabel(item)
    .split("/")[0]
    .toLowerCase()
    .replace(/[^a-z0-9\u3400-\u9fff]+/g, "");
  const role = String(item.opportunity || "")
    .toLowerCase()
    .replace(/[^a-z0-9\u3400-\u9fff]+/g, "");
  return company && role ? `${company}|${role}` : "";
}

const representedMain = api.dedupedData.filter((item) => api.MY_OPPORTUNITY_SET.has(Number(item.id)));
const representedLinks = new Set(
  representedMain.flatMap((item) => api.toLinks(item).map(normalizedLink)).filter(Boolean),
);
const representedListings = new Set(representedMain.map(listingKey).filter(Boolean));
const isAlreadyRepresented = (item) =>
  api.toLinks(item).some((link) => representedLinks.has(normalizedLink(link))) ||
  representedListings.has(listingKey(item));

const core = api.dedupedData
  .filter(
    (item) =>
      (!requestedIds || requestedIds.has(Number(item.id))) &&
      (!requestedCandidates ||
        (!api.MY_OPPORTUNITY_SET.has(Number(item.id)) && !isAlreadyRepresented(item))) &&
      (!searchNeedle || String(item.searchText || "").toLowerCase().includes(searchNeedle)) &&
      (requestedAll || mode === "mine" || (mode === "stable" ? ["A", "B"] : ["A", "B", "C"]).includes(item.tier)) &&
      (requestedAll || ["barcelona", "remote"].includes(api.locationBucket(item))) &&
      (requestedAll || api.applicationStatus(item).key !== "closed") &&
      (requestedAll || mode === "mine" || api.isTargetOpportunity(item)) &&
      (requestedAll || !api.isResearchOnly(item)) &&
      // `mine` is the hand-audited ledger itself. Do not silently hide a
      // reviewed internship or low-pay-risk card from the audit output; the
      // risk remains visible on the card and in the score/order.
      (requestedAll || mode === "mine" || !api.hasLowPayRisk(item)) &&
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
  statusEvidence: api.CURATED[item.id]?.statusEvidence || item.status || "",
  analysis: item.analysis || "",
  score: api.displayedScore(item),
  sourceScore: Number(item.score) || 0,
  tier: item.tier,
  status: api.applicationStatus(item).key,
  locationBucket: api.locationBucket(item),
  location: api.locationLabel(item),
  languagePath: api.scoreLanguageRisk(item),
  experiencePath: api.experienceInfo(item).key,
  experienceRequirement: api.experienceInfo(item).label,
  direction: api.directionKey(item),
  chineseRelevant: api.isChineseRelevant(item),
  formal: api.isFormalRole(item),
  internship: api.isInternshipRole(item),
  opaqueEmployer: api.hasOpaqueEmployerRisk(item),
  postedAt: item.postedAt || "",
  personalMatch: api.personalMatchScore(item),
  links: api.toLinks(item),
  identity: api.identityKey(item),
  latestAuditSection: api.CURATED[item.id]?.latestAuditSection || item.section || "",
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
