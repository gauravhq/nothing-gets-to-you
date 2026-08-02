module.exports = {
  layout: "post.njk",
  tags: "posts",
  eleventyComputed: {
    // Scheduled backlog: a post is not written at all until its date arrives.
    // The daily GitHub Action rebuild publishes each one on its week automatically.
    permalink: (data) => {
      if (data.page.date.getTime() > Date.now()) return false;
      return `/blog/${data.page.fileSlug}/`;
    },
    eleventyExcludeFromCollections: (data) => data.page.date.getTime() > Date.now(),
  },
};
