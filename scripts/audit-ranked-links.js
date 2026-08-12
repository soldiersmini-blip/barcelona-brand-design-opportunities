const { execFileSync } = require("node:child_process");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const startRank = Math.max(1, Number(process.argv[2]) || 1);
const endRank = Math.max(startRank, Number(process.argv[3]) || startRank);
const compact = process.argv.includes("--compact");
const ledgerMode = process.argv.includes("--candidates") ? "candidates" : "mine";

const ledger = JSON.parse(
  execFileSync(process.execPath, [path.join(__dirname, "inspect-qualified-opportunities.js"), ledgerMode], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 16 * 1024 * 1024,
  }),
);

const selected = ledger.rows.slice(startRank - 1, endRank);
const entityMap = new Map([
  ["&amp;", "&"],
  ["&quot;", '"'],
  ["&#39;", "'"],
  ["&lt;", "<"],
  ["&gt;", ">"],
  ["&nbsp;", " "],
]);

function cleanHtml(html) {
  return String(html || "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(amp|quot|#39|lt|gt|nbsp);/g, (entity) => entityMap.get(entity) || entity)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/\s+/g, " ")
    .trim();
}

function pageTitle(html) {
  const match = String(html || "").match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return cleanHtml(match?.[1] || "").slice(0, 240);
}

function evidenceWindow(text, needles) {
  const lower = text.toLowerCase();
  const index = needles
    .map((needle) => lower.indexOf(String(needle || "").toLowerCase()))
    .filter((position) => position >= 0)
    .sort((a, b) => a - b)[0];
  const start = index >= 0 ? Math.max(0, index - 320) : 0;
  return text.slice(start, start + 1800);
}

async function inspect(row, index) {
  const url = row.links?.[0] || "";
  if (!url) return { rank: startRank + index, id: row.id, error: "missing-link" };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "accept-language": "en-US,en;q=0.9,es;q=0.8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136.0 Safari/537.36",
      },
    });
    const html = await response.text();
    const text = cleanHtml(html);
    const lowered = text.toLowerCase();
    const routeText = `${lowered} ${response.url.toLowerCase()}`;
    const closedPatterns = [
      "job is no longer available",
      "job is no longer open",
      "no longer accepting applications",
      "this job has expired",
      "listing has expired",
      "vacante cerrada",
      "oferta cerrada",
      "empleo ya no está disponible",
      "ya no se aceptan solicitudes",
      "no se aceptan más candidaturas",
      "desafortunadamente esta oferta de empleo no está disponible",
      "job you're looking for isn't available",
      "expired_jd_redirect",
      "error=true",
    ];
    const applyPatterns = [
      "apply now",
      "apply for this job",
      "apply for this role",
      "submit application",
      "send application",
      "enviar solicitud",
      "inscribirme",
      "solicitar",
    ];
    return {
      rank: startRank + index,
      id: row.id,
      company: row.company,
      role: row.originalRole,
      trackedStatus: row.status,
      trackedLocation: row.location,
      requestedUrl: url,
      statusCode: response.status,
      finalUrl: response.url,
      redirected: response.url !== url,
      title: pageTitle(html),
      bytes: Buffer.byteLength(html),
      signals: {
        apply: applyPatterns.filter((pattern) => lowered.includes(pattern)),
        closed: closedPatterns.filter((pattern) => routeText.includes(pattern)),
        httpError: response.status >= 400,
        noOpenings: /no (?:job )?openings|no open positions|no hay vacantes/i.test(text),
        hasRoleText: row.originalRole
          .split(/[–—|/]/)[0]
          .trim()
          .split(/\s+/)
          .slice(0, 3)
          .join(" ")
          .toLowerCase()
          .split(" ")
          .filter(Boolean)
          .every((token) => lowered.includes(token)),
      },
      evidence: compact ? undefined : evidenceWindow(text, [row.originalRole, "apply", "solicitar", "closed", "expired"]),
    };
  } catch (error) {
    return {
      rank: startRank + index,
      id: row.id,
      company: row.company,
      role: row.originalRole,
      requestedUrl: url,
      error: error.name === "AbortError" ? "timeout" : error.message,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  const results = [];
  for (let offset = 0; offset < selected.length; offset += 5) {
    const batch = selected.slice(offset, offset + 5);
    results.push(...(await Promise.all(batch.map((row, index) => inspect(row, offset + index)))));
  }
  console.log(JSON.stringify({ ledgerMode, startRank, endRank, count: results.length, results }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
