// Homepage "reflection of the week": a weekly-rotating pick from the permanent 200-post library.
// All posts stay live/indexable; this only chooses which one the homepage highlights this week,
// so the site keeps a fresh weekly element. Advances on the daily GitHub Action rebuild.
const fs = require("fs");
const path = require("path");
const WEEK = 7 * 24 * 3600 * 1000;
const EPOCH = Date.parse("2026-06-28T00:00:00Z");

module.exports = function () {
  const dir = path.join(__dirname, "..", "posts");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
  const N = files.length;
  const now = process.env.ROTATION_NOW ? Number(process.env.ROTATION_NOW) : Date.now();
  let wk = Math.floor((now - EPOCH) / WEEK);
  if (wk < 0) wk = 0;
  const f = files[((wk % N) + N) % N];
  const slug = f.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(dir, f), "utf8");
  const title = (raw.match(/title:\s*"([^"]*)"/) || [])[1] || slug;
  const description = (raw.match(/pageDescription:\s*"([^"]*)"/) || [])[1] || "";
  return { slug, title, description, url: `/blog/${slug}/` };
};
