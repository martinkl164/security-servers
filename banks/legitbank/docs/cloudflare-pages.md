# Cloudflare Pages Setup (LegitBank)

This guide describes how to deploy the LegitBank frontend to Cloudflare Pages and configure GitHub Actions to deploy via the Wrangler CLI.

## Prerequisites
- A Cloudflare account
- A Cloudflare Pages project (created once)
- GitHub repository admin access (to add secrets/variables)

## 1) Create a Cloudflare Pages project
Create a Pages project in the Cloudflare dashboard.

- Project type: Static site
- Output directory (build output): `dist`

Notes:
- This repo’s frontend is a static Vite build (no server required).
- GitHub Actions will deploy using Wrangler, so you do not need to connect Pages to GitHub if you don’t want to.

## 2) Create a Cloudflare API token for CI
Create an API token to be used by GitHub Actions.

- Go to Cloudflare Dashboard → Profile → API Tokens
- Create a token with permissions sufficient to deploy Cloudflare Pages for your account

Keep it scoped to the minimum permissions needed for Pages deployments.

## 3) Find your Cloudflare Account ID
You can find the Account ID in the Cloudflare dashboard (Account Home), or by using Wrangler locally (optional):

```bash
npx wrangler@3 whoami
```

## 4) Configure GitHub repository secrets/variables
In GitHub: Repo → Settings → Secrets and variables → Actions

Add **Secrets**:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Add a **Variable** (or secret if you prefer):
- `CLOUDFLARE_PAGES_PROJECT_NAME`

Note: the workflow reads this from a GitHub Actions variable first, and falls back to a secret if provided.

## 5) Validate the deploy locally (optional)
From the frontend folder:

```bash
cd banks/legitbank/frontend
npm ci
npm test
npm run build
npx wrangler@3 pages deploy dist --project-name <your-pages-project-name>
```

## 6) How CI/CD behaves
- On pull requests: CI runs (typecheck/lint, unit tests, build). No deploy.
- On merge to the default branch (`main`): CI runs and, if green, deploy runs to Cloudflare Pages.

## Production URL
- https://bank-legit.pages.dev

## Troubleshooting
- If deploy fails in CI, confirm the token/account ID are correct and that `CLOUDFLARE_PAGES_PROJECT_NAME` matches your Pages project name.
- If `npm ci` fails, confirm `banks/legitbank/frontend/package-lock.json` is committed.
