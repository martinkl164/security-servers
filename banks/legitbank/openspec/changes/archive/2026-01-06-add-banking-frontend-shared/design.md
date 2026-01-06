# Design: banking-frontend-shared

## Context
This change establishes cross-cutting frontend foundations used by all pages. It focuses on shared layout, branding, constraints (no API/DB), and HTTPS posture for local development and production deployment.

## Goals / Non-Goals
### Goals
- Provide a consistent app shell for Super Legit Bank pages.
- Ensure a clean, greenery-toned brand presentation with a text-based logo mark.
- Keep the frontend fully demoable without backend dependencies.
- Support local HTTPS with a trusted certificate and static production deployment.

### Non-Goals
- Real authentication, authorization, sessions, or user state.
- Any backend API integration or database usage.
- Real banking workflows (transfers, statements, payments).

## Decisions
### Decision: Use Vite + React + TypeScript for the frontend
**Why**: Fast iteration, strong typing, and simple static builds.

### Decision: Use Tailwind CSS for styling
**Why**: Consistent utility styling without introducing a bespoke component library.

### Decision: Use a locally trusted dev certificate for HTTPS in development
**Why**: A valid certificate locally means browsers trust it without interstitial warnings.

**Approach**: Recommend `mkcert` (or equivalent) to generate a local CA and issue a `localhost` cert/key, then configure the Vite dev server to use them.

**Implementation expectation**:
- The repo should not commit private keys.
- The dev server should support HTTPS when the developer provides a trusted cert/key.
- If the developer has not configured certs, the default dev experience may remain HTTP.

### Decision: Deploy as a static site to Cloudflare Pages for production
**Why**: Static hosting with HTTPS by default and low operational overhead.

**Approach**:
- Configure Cloudflare Pages to run the build command and publish Vite’s output directory.
- HTTPS termination is provided by the hosting platform.

## Risks / Trade-offs
- Local certificate tooling may vary by OS and organization policy.

**Mitigation**: Document one recommended path (mkcert) and provide fallback guidance.

## Production Notes (Cloudflare Pages)
- Build command: `npm ci && npm run build`
- Output directory: `dist`

## Open Questions
None for shared artifacts; page behavior is specified in page-level capabilities.
