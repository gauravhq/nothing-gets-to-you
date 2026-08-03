// Every post is a permanent, indexable page (SEO). All 200 live at /blog/<slug>/.
// The homepage's weekly-rotating "reflection of the week" is computed in _data/featured.js.
module.exports = {
  layout: "post.njk",
  tags: "posts",
  eleventyComputed: {
    permalink: (data) => `/blog/${data.page.fileSlug}/`,
  },
};
