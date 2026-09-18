# The site is fully static, with no runtime backend

The site is an interactive poster for Paige's CV: all content is known at build time and changes only when Paige edits it. We decided the site is built ahead of time into static files, with content living in the repo, and no server, API or database at runtime. The 2020 version shipped an Express server and a Mirage-mocked `/api/projects` endpoint; both are intentionally dropped. If a genuine runtime need appears later (e.g. a contact form), prefer a single serverless function over reintroducing a backend.

## Considered Options

- **Fully static** (chosen): cheapest and simplest to host, nothing to patch or keep running, no SPA deep-link/refresh issues.
- **Static plus a few serverless functions**: deferred until a concrete need exists.
- **Full backend with a database** (e.g. an admin UI for editing content): rejected; content edits via the repo are sufficient for a single author.
