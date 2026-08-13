#!/usr/bin/env node

const urls = process.argv.slice(2);

if (!urls.length) {
  console.error("Usage: node scripts/check-source-language.js <url> [url ...]");
  process.exit(1);
}

const languagePattern = /\b(?:english|spanish|catalan|castilian|language|languages|fluent|fluency|proficient|proficiency|bilingual|native)\b|ingl[eé]s|espa[nñ]ol|castellano|catal[aà]n|idioma|idiomas/giu;

function decodeEntities(value) {
  return value
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function normalizeHtml(raw, removeScripts) {
  let value = raw;
  if (removeScripts) value = value.replace(/<script\b[\s\S]*?<\/script>/gi, " ");
  value = value
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\\u003c/gi, "<")
    .replace(/\\u003e/gi, ">")
    .replace(/\\n|\\r|\\t/g, " ")
    .replace(/\\"/g, '"');
  return decodeEntities(value).replace(/\s+/g, " ").trim();
}

function contexts(text, limit = 16) {
  const matches = [];
  const seen = new Set();
  languagePattern.lastIndex = 0;
  for (const match of text.matchAll(languagePattern)) {
    const start = Math.max(0, match.index - 180);
    const end = Math.min(text.length, match.index + match[0].length + 220);
    const excerpt = text.slice(start, end).trim();
    const key = excerpt.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      matches.push(excerpt);
    }
    if (matches.length >= limit) break;
  }
  return matches;
}

function structuredJobPostings(raw) {
  const postings = [];
  const visit = (value) => {
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (typeof value !== "object") return;
    if (value["@type"] === "JobPosting") {
      postings.push({
        title: value.title || "",
        description: normalizeHtml(String(value.description || ""), true),
        date_posted: value.datePosted || "",
        valid_through: value.validThrough || "",
        employment_type: value.employmentType || "",
      });
    }
    if (value["@graph"]) visit(value["@graph"]);
  };
  for (const match of raw.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      visit(JSON.parse(match[1]));
    } catch {
      // Some sites expose malformed analytics JSON-LD. Ignore it and retain
      // the visible-text evidence instead of treating parse failure as data.
    }
  }
  return postings;
}

async function inspect(url) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: {
        "accept-language": "en-US,en;q=0.9,es;q=0.8",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136 Safari/537.36",
      },
    });
    const raw = await response.text();
    const visible = normalizeHtml(raw, true);
    const embedded = normalizeHtml(raw, false);
    const title = decodeEntities(raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "")
      .replace(/\s+/g, " ")
      .trim();
    const visibleContexts = contexts(visible);
    return {
      requested_url: url,
      final_url: response.url,
      status: response.status,
      title,
      visible_text_length: visible.length,
      language_contexts: visibleContexts.length ? visibleContexts : contexts(embedded),
      job_postings: structuredJobPostings(raw),
    };
  } catch (error) {
    return { requested_url: url, error: error.message };
  }
}

Promise.all(urls.map(inspect)).then((results) => {
  console.log(JSON.stringify(results, null, 2));
  if (results.some((result) => result.error || result.status >= 400)) process.exitCode = 2;
});
