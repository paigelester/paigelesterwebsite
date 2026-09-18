# Next.js (static export) as the framework

The site is a single static CV page, for which Astro would be the most natural fit. We chose Next.js with static export (`output: 'export'`) instead, because the repo doubles as a public code sample and Next.js + React + TypeScript is the most widely recognised stack in the roles the site supports. The static-export constraint is deliberate (see ADR 0001): Next.js features that need a server (API routes, server actions, on-demand image optimisation, ISR) are off the table.

## Considered Options

- **Astro with React components**: best technical fit for a content site, but a weaker hiring signal.
- **Angular**: strong in UK enterprise hiring, but heavy for one page and not the target market.
- **Vite + React SPA**: weakest fit for static content, no extra signal over the others.
