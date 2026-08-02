# Nothing Gets to You - website

Marketing site for the book **Nothing Gets to You** by Gaurav Srivastava. Static site built with
[Eleventy](https://www.11ty.dev/), hosted free on GitHub Pages, and self-updating.

## How it runs itself
- Blog posts live in `src/posts/` as markdown, each with a **future publish date**, one per week.
- The blog only shows posts whose date has arrived (`date <= today`).
- The GitHub Action (`.github/workflows/deploy.yml`) rebuilds and deploys **on a daily cron**, so each
  week the next scheduled post appears automatically. No server, no API, no cost.

## Editing
- **Add posts:** drop a `.md` file in `src/posts/` with front matter `title`, `date` (future date to
  schedule it), and `pageDescription`. Body is grounded in the book's ideas; end with the buy CTA.
- **Turn on Amazon links:** in `src/_data/site.js`, set `amazon.live: true` and paste the real
  `kindle` and `paperback` URLs. The buy buttons switch on everywhere.
- **Cover / text:** `src/assets/`, `src/index.njk`, `src/book.njk`, `src/author.njk`.

## Local preview
```
npm install
npm run serve
```

The book manuscripts are kept in a separate **private** repo; this repo is public for GitHub Pages.
