const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const inspectScript = path.join(__dirname, "inspect-qualified-opportunities.js");

function inspect(mode) {
  return JSON.parse(
    execFileSync(process.execPath, [inspectScript, mode], {
      cwd: root,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    }),
  );
}

function csvCell(value) {
  const normalized = Array.isArray(value) ? value.join(" | ") : value ?? "";
  return `"${String(normalized).replaceAll('"', '""')}"`;
}

function ledgerBucket(row, currentIds) {
  if (currentIds.has(Number(row.id))) return "current-main";
  if (row.status === "closed") return "closed-history";
  if (row.locationBucket === "madrid") return "madrid-excluded";
  if (row.locationBucket === "other") return "other-location-or-unclear";
  if (row.status === "verify") return "review-required";
  return "researched-not-in-main";
}

const columns = [
  "ledger_bucket",
  "rank",
  "id",
  "company",
  "role_zh",
  "original_role",
  "tier",
  "status",
  "location_bucket",
  "location",
  "language_path",
  "experience_path",
  "experience_requirement",
  "direction",
  "chinese_relevant",
  "formal",
  "internship",
  "score",
  "source_score",
  "posted_at",
  "primary_url",
  "all_links",
  "status_evidence",
  "analysis",
];

function normalizedRow(row, index, bucket) {
  return {
    ledger_bucket: bucket,
    rank: index + 1,
    id: row.id,
    company: row.company,
    role_zh: row.role,
    original_role: row.originalRole,
    tier: row.tier,
    status: row.status,
    location_bucket: row.locationBucket,
    location: row.location,
    language_path: row.languagePath,
    experience_path: row.experiencePath,
    experience_requirement: row.experienceRequirement,
    direction: row.direction,
    chinese_relevant: row.chineseRelevant,
    formal: row.formal,
    internship: row.internship,
    score: row.score,
    source_score: row.sourceScore,
    posted_at: row.postedAt,
    primary_url: row.links?.[0] || "",
    all_links: row.links || [],
    status_evidence: row.statusEvidence,
    analysis: row.analysis,
  };
}

function writeCsv(filename, rows) {
  const body = [
    columns.map(csvCell).join(","),
    ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(",")),
  ].join("\r\n");
  fs.writeFileSync(path.join(root, filename), `\uFEFF${body}\r\n`, "utf8");
}

const current = inspect("mine").rows;
const all = inspect("all").rows;
const currentIds = new Set(current.map((row) => Number(row.id)));

const currentRows = current.map((row, index) => normalizedRow(row, index, "current-main"));
const allRows = all.map((row, index) => normalizedRow(row, index, ledgerBucket(row, currentIds)));

writeCsv("current-opportunity-ledger.csv", currentRows);
writeCsv("all-opportunity-ledger.csv", allRows);
fs.writeFileSync(
  path.join(root, "current-opportunity-ledger.json"),
  `${JSON.stringify(
    {
      exportedAt: "2026-08-13",
      total: currentRows.length,
      rows: currentRows,
    },
    null,
    2,
  )}\n`,
  "utf8",
);

console.log(
  JSON.stringify({
    current: currentRows.length,
    all: allRows.length,
    files: [
      "current-opportunity-ledger.csv",
      "current-opportunity-ledger.json",
      "all-opportunity-ledger.csv",
    ],
  }),
);
