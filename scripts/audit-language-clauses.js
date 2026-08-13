const { execFileSync } = require("node:child_process");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const startRank = Math.max(1, Number(process.argv[2]) || 1);
const endRank = Math.max(startRank, Number(process.argv[3]) || startRank);
const ledger = JSON.parse(
  execFileSync(process.execPath, [path.join(__dirname, "inspect-qualified-opportunities.js"), "mine"], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 16 * 1024 * 1024,
  }),
);

const entityMap = new Map([
  ["&amp;", "&"],
  ["&quot;", '"'],
  ["&#39;", "'"],
  ["&lt;", "<"],
  ["&gt;", ">"],
  ["&nbsp;", " "],
]);

function clean(value) {
  return String(value || "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(amp|quot|#39|lt|gt|nbsp);/g, (entity) => entityMap.get(entity) || entity)
    .replace(/\\u([0-9a-f]{4})/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/\\n|\\r|\\t/g, " ")
    .replace(/\\\"/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

const clausePattern = /\b(?:english|spanish|catalan|català|castellano|inglés|ingles|español|espanol|idioma|language|languages|bilingual|native|fluent|fluency|proficien(?:t|cy)|nivel\s+(?:alto|medio|avanzado)|c1|c2|b2)\b/gi;

function snippets(text) {
  const matches = [...text.matchAll(clausePattern)];
  const unique = [];
  for (const match of matches) {
    const start = Math.max(0, match.index - 180);
    const snippet = text.slice(start, match.index + match[0].length + 220).trim();
    const key = snippet.toLowerCase().replace(/\W+/g, " ").slice(0, 180);
    if (!unique.some((entry) => entry.key === key)) unique.push({ key, snippet });
    if (unique.length >= 8) break;
  }
  return unique.map((entry) => entry.snippet);
}

async function inspect(row, rank) {
  const url = row.links?.[0];
  if (!url || /\.pdf(?:$|\?)/i.test(url)) return { rank, id: row.id, languagePath: row.languagePath, url, skipped: "missing-or-pdf" };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "accept-language": "en-US,en;q=0.9,es;q=0.8",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136.0 Safari/537.36",
      },
    });
    const html = await response.text();
    const text = clean(html);
    return {
      rank,
      id: row.id,
      company: row.company,
      languagePath: row.languagePath,
      status: response.status,
      finalUrl: response.url,
      clauses: snippets(text),
    };
  } catch (error) {
    return { rank, id: row.id, company: row.company, languagePath: row.languagePath, url, error: error.name === "AbortError" ? "timeout" : error.message };
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  const selected = ledger.rows.slice(startRank - 1, endRank);
  const results = [];
  for (let offset = 0; offset < selected.length; offset += 5) {
    const batch = selected.slice(offset, offset + 5);
    results.push(...(await Promise.all(batch.map((row, index) => inspect(row, startRank + offset + index)))));
  }
  console.log(JSON.stringify({ startRank, endRank, count: results.length, results }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
