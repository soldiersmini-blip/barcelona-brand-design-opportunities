const keywords = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      "Brand Designer",
      "Graphic Designer",
      "Visual Designer",
      "Digital Designer",
      "Motion Designer",
      "Art Director",
      "Diseñador gráfico",
      "Director de arte",
    ];

const location = "Barcelona, Catalonia, Spain";
const starts = [0, 25, 50];

function cleanHtml(value) {
  return String(value || "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstMatch(value, expression) {
  return cleanHtml(String(value || "").match(expression)?.[1] || "");
}

function jobIdFromUrl(value) {
  return String(value || "").match(/-(\d{8,})(?:\?|$)/)?.[1] || "";
}

function parseCards(html, keyword) {
  const cards = String(html || "").match(/<li>[\s\S]*?<\/li>/gi) || [];
  return cards
    .map((card) => {
      const rawUrl = card.match(/href="([^"]*\/jobs\/view\/[^"]+)"/i)?.[1] || "";
      const url = rawUrl.replace(/&amp;/g, "&").split("?")[0];
      return {
        id: jobIdFromUrl(url),
        title: firstMatch(card, /<h3[^>]*>([\s\S]*?)<\/h3>/i),
        company: firstMatch(card, /<h4[^>]*>([\s\S]*?)<\/h4>/i),
        location: firstMatch(card, /class="job-search-card__location"[^>]*>([\s\S]*?)<\/span>/i),
        postedAt: card.match(/datetime="([^"]+)"/i)?.[1] || "",
        url,
        keyword,
      };
    })
    .filter((job) => job.id && job.title && job.url);
}

async function fetchPage(keyword, start) {
  const url = new URL("https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search");
  url.searchParams.set("keywords", keyword);
  url.searchParams.set("location", location);
  url.searchParams.set("f_TPR", "r604800");
  url.searchParams.set("start", String(start));
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "accept-language": "en-US,en;q=0.9,es;q=0.8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136.0 Safari/537.36",
      },
    });
    return {
      keyword,
      start,
      statusCode: response.status,
      jobs: response.ok ? parseCards(await response.text(), keyword) : [],
    };
  } catch (error) {
    return {
      keyword,
      start,
      statusCode: 0,
      error: error.name === "AbortError" ? "timeout" : error.message,
      jobs: [],
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function main() {
  const pages = [];
  const requests = keywords.flatMap((keyword) => starts.map((start) => ({ keyword, start })));
  for (let offset = 0; offset < requests.length; offset += 6) {
    const batch = requests.slice(offset, offset + 6);
    pages.push(...(await Promise.all(batch.map(({ keyword, start }) => fetchPage(keyword, start)))));
  }
  const jobs = new Map();
  for (const page of pages) {
    for (const job of page.jobs) {
      const existing = jobs.get(job.id);
      if (existing) existing.keywords = [...new Set([...existing.keywords, job.keyword])];
      else jobs.set(job.id, { ...job, keywords: [job.keyword] });
    }
  }
  console.log(
    JSON.stringify(
      {
        scannedAt: new Date().toISOString(),
        location,
        keywords,
        pages: pages.map(({ keyword, start, statusCode, error, jobs: pageJobs }) => ({
          keyword,
          start,
          statusCode,
          error,
          count: pageJobs.length,
        })),
        jobs: [...jobs.values()].sort((a, b) => b.postedAt.localeCompare(a.postedAt) || a.title.localeCompare(b.title)),
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
