const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  // Google Search Console HTML-file verification, served at the site root.
  eleventyConfig.addPassthroughCopy({ "googlec02e90d782ab43ba.html": "googlec02e90d782ab43ba.html" });
  // rewrites internal href/src to include the pathPrefix (project GitHub Pages site)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Only posts whose date has ARRIVED are published (scheduled backlog), newest first.
  // All posts are permanent, indexable pages, newest first.
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date.getTime() - a.date.getTime())
  );

  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("rssDate", (d) => new Date(d).toUTCString());
  // BreadcrumbList JSON-LD for every inner page (GEO structure; checklist 25 item 14p). Built in JS to
  // avoid Nunjucks loop-scoping and to guarantee valid JSON via JSON.stringify. Returns "" for the home
  // page. URLs are absolute (site.url already carries the project path), so the base plugin leaves them.
  eleventyConfig.addFilter("breadcrumbLd", (url, pageTitle, siteUrl) => {
    if (!url || url === "/") return "";
    const segs = url.split("/").filter(Boolean);
    const items = [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl + "/" }];
    let acc = "";
    segs.forEach((seg, i) => {
      acc += "/" + seg;
      const last = i === segs.length - 1;
      const name = last && pageTitle
        ? pageTitle
        : seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      items.push({ "@type": "ListItem", position: i + 2, name, item: siteUrl + acc + "/" });
    });
    return '<script type="application/ld+json">' +
      JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items }) +
      "</script>";
  });
  // Recent posts excluding one URL, so the homepage "latest" list never repeats the featured card.
  eleventyConfig.addFilter("recentExcluding", (posts, url, n) =>
    (posts || []).filter((p) => p.url !== url).slice(0, n || 3)
  );
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    pathPrefix: process.env.PATH_PREFIX || "/nothing-gets-to-you/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
