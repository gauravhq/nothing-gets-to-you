// Per-post defaults + the infinite rotation hook (see src/_data/rotation.js).
// A post's date is its most recent airing; it publishes once its first airing week has arrived; and it
// cycles forever, so the blog always has a fresh weekly post with no API, no PC, and no manual work.
module.exports = {
  layout: "post.njk",
  tags: "posts",
  eleventyComputed: {
    date: (data) => data.rotation.dateFor[data.page.fileSlug] || data.page.date,
    permalink: (data) =>
      data.rotation.publishedSlugs.includes(data.page.fileSlug)
        ? `/blog/${data.page.fileSlug}/`
        : false,
    eleventyExcludeFromCollections: (data) =>
      !data.rotation.publishedSlugs.includes(data.page.fileSlug),
  },
};
