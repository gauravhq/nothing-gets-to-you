// Infinite evergreen rotation (no API, no PC, no manual work).
//
// The blog runs forever off a fixed library of evergreen posts. Each daily GitHub Action rebuild
// recomputes the current week from EPOCH and airs one post per week, cycling through the library and
// looping back to the start at the end. So a fresh post is always "this week's" post, for life.
// Tradeoff: after the library cycles once, posts re-air (evergreen self-help does not go stale).
// Library size only sets the repeat interval (N posts => repeats every N weeks). Add more posts to
// lengthen the cycle; nothing else changes.
//
// A post is "published" once its first airing week has arrived. Its shown date is its MOST RECENT
// airing, so recycled posts always look current. URLs stay stable (/blog/<slug>/).

const fs = require("fs");
const path = require("path");

const WEEK = 7 * 24 * 3600 * 1000;
const EPOCH = Date.parse("2026-06-28T00:00:00Z"); // week 0 = the first post's airing

module.exports = function () {
  const dir = path.join(__dirname, "..", "posts");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
  const N = files.length;

  // ROTATION_NOW (ms since epoch) is a test hook; production uses the real clock.
  const now = process.env.ROTATION_NOW ? Number(process.env.ROTATION_NOW) : Date.now();
  let week = Math.floor((now - EPOCH) / WEEK);
  if (week < 0) week = 0;

  const dateFor = {};        // slug -> ISO date of its most recent (or first upcoming) airing
  const publishedSlugs = []; // slugs whose first airing has arrived

  files.forEach((f, idx) => {
    const slug = f.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
    if (week < idx) {
      // still in the very first cycle and this one has not aired yet
      dateFor[slug] = new Date(EPOCH + idx * WEEK).toISOString();
    } else {
      // most recent airing week w <= week with (w % N === idx)
      const w = week - ((week - idx) % N);
      dateFor[slug] = new Date(EPOCH + w * WEEK).toISOString();
      publishedSlugs.push(slug);
    }
  });

  return { week, N, dateFor, publishedSlugs };
};
