#!/usr/bin/env node

const urls = process.argv.slice(2);
if (!urls.length) {
  console.error("Usage: node scripts/check-official-json.js <url> [url ...]");
  process.exit(1);
}

async function inspect(url) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: {
        accept: "application/json, text/plain, */*",
        // Workday's CXS endpoint rejects a weighted locale list as an invalid
        // locale on some tenants; a single supported locale is accepted.
        "accept-language": "en-US",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136 Safari/537.36",
      },
    });
    const body = await response.text();
    let parsed = null;
    try {
      parsed = JSON.parse(body);
    } catch {
      // Keep a short text sample when the endpoint returns an HTML challenge.
    }
    return {
      requestedUrl: url,
      finalUrl: response.url,
      status: response.status,
      contentType: response.headers.get("content-type") || "",
      body: parsed || body.slice(0, 1200),
    };
  } catch (error) {
    return { requestedUrl: url, error: error.message };
  }
}

Promise.all(urls.map(inspect)).then((results) => console.log(JSON.stringify(results, null, 2)));
