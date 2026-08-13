#!/usr/bin/env node

const pageCount = Math.max(1, Math.min(250, Number(process.argv[2]) || 60));
const base = "https://www.es02.com/jobs/jobs.html";
const designPattern = /(?:平面|设计|品牌|视觉|美工|新媒体|小红书|抖音|视频|剪辑|摄影|修图|电商|运营|网页|网站|广告|海报|包装|陈列|橱窗|art\s*director|graphic|visual|brand|designer|motion)/i;

function decode(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchPage(page) {
  const url = page === 1 ? base : `${base}/${page}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.7",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136.0 Safari/537.36",
      },
    });
    const html = await response.text();
    const rows = [];
    const seen = new Set();
    for (const match of html.matchAll(/href=["']([^"']*\/jobs\/Recruitment\/[^"']+\/i\d+\.html)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
      const urlValue = match[1].replace(/&amp;/g, "&");
      const title = decode(match[2]);
      if (!title || seen.has(urlValue)) continue;
      seen.add(urlValue);
      rows.push({ title, url: urlValue.startsWith("http") ? urlValue : new URL(urlValue, base).href });
    }
    return { page, url, status: response.status, rows };
  } catch (error) {
    return { page, url, status: 0, error: error.name === "AbortError" ? "timeout" : error.message, rows: [] };
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  const pages = [];
  const numbers = Array.from({ length: pageCount }, (_, index) => index + 1);
  for (let offset = 0; offset < numbers.length; offset += 6) {
    pages.push(...(await Promise.all(numbers.slice(offset, offset + 6).map(fetchPage))));
  }
  const listings = new Map();
  for (const page of pages) {
    for (const row of page.rows) {
      if (!listings.has(row.url)) listings.set(row.url, { ...row, firstPage: page.page });
    }
  }
  const matches = [...listings.values()].filter((row) => designPattern.test(row.title));
  console.log(
    JSON.stringify(
      {
        scannedAt: new Date().toISOString(),
        requestedPages: pageCount,
        successfulPages: pages.filter((page) => page.status === 200).length,
        failedPages: pages.filter((page) => page.status !== 200).map(({ page, status, error }) => ({ page, status, error })),
        listingCount: listings.size,
        matchCount: matches.length,
        matches,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
