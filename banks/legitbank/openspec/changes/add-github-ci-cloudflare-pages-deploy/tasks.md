## 1. Implementation
- [x] 1.1 Add a `lint` script for the LegitBank frontend (typecheck-based) so CI can run `npm run lint`
- [x] 1.2 Add a GitHub Actions workflow that runs `npm ci`, `npm run lint`, `npm test`, and `npm run build` for LegitBank frontend on PRs and pushes
- [x] 1.3 Add a deploy job that runs only on `master`, and deploys `banks/legitbank/frontend/dist/` to Cloudflare Pages using the Wrangler CLI
- [x] 1.4 Add a preview deploy job for pull requests that runs only after CI is green
- [x] 1.5 Document required GitHub repository secrets/variables for Cloudflare Pages deploy
- [x] 1.5 Run `npm run build` and `npm run lint` and `npm test` locally to ensure no regressions
