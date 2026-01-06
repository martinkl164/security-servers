## Context
The LegitBank frontend is a static Vite build intended for deployment to Cloudflare Pages.

## Goals / Non-Goals
- Goals:
  - Run automated checks (typecheck/lint, unit tests, production build) on GitHub.
  - Deploy to Cloudflare Pages only when checks pass on the default branch.
- Non-goals:
  - Adding end-to-end tests.
  - Adding backend/server infrastructure.
  - Creating preview deployments per PR (can be added later).

## CI Strategy
- Use GitHub Actions for CI.
- Treat TypeScript typecheck as "lint" to avoid adding ESLint until/unless it’s justified.

## Deployment Strategy (Cloudflare Pages)
- Use Wrangler CLI via `npx wrangler` in GitHub Actions.
- Deploy the build output directory: `banks/legitbank/frontend/dist/`.

### Required GitHub Secrets / Variables
- `CLOUDFLARE_API_TOKEN` (secret): API token with permissions to deploy Pages.
- `CLOUDFLARE_ACCOUNT_ID` (secret): Cloudflare account ID.
- `CLOUDFLARE_PAGES_PROJECT_NAME` (variable or secret): Pages project name.

## Notes
- The deploy job should be configured to run only on the default branch (typically `main`).
- If the repository default branch differs (e.g. `master`), update the workflow branch filter.
