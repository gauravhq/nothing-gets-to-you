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
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    pathPrefix: process.env.PATH_PREFIX || "/nothing-gets-to-you/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
