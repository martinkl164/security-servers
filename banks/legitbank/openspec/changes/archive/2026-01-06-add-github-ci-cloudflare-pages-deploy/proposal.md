# Change: Add GitHub CI pipeline and Cloudflare Pages deployment

## Why
We want a repeatable, automated pipeline that verifies the frontend stays buildable and tested, and that deploys only when checks are green.

## What Changes
- Add a GitHub Actions workflow that runs, for the LegitBank frontend:
  - Typecheck (used as lint)
  - Unit tests
  - Production build
- Add a deployment job that deploys the built static assets to Cloudflare Pages using the Wrangler CLI.
- Document required Cloudflare secrets and configuration values.

## Impact
- Affected specs: `banking-frontend-shared`
- Affected code:
  - GitHub Actions workflow under `.github/workflows/`
  - `banks/legitbank/frontend/package.json` (add `lint` script)
- Risk: Medium (introduces CI/CD automation). The workflow is gated to deploy only after checks pass.
