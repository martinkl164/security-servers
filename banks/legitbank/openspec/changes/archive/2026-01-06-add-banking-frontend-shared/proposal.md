# Change: Add banking frontend shared artifacts (Super Legit Bank)

## Why
We need shared, reusable frontend foundations for a demo banking UI so that individual pages (Home, Login) can be developed independently while staying consistent in branding, constraints, and deployment posture.

## What Changes
Add shared UI artifacts for the Super Legit Bank frontend:
- App shell layout with header/footer
- Primary navigation links for Home and Login
- Greenery-toned visual language and a text-based “cat in the bank” logo mark (no image assets)

Enforce project constraints:
- No API/DB dependency required for core UX
- Local development supports HTTPS with a trusted dev certificate
- Production deploys as static assets with HTTPS handled by hosting (Cloudflare Pages)

## Impact
- Affected specs: new capability `banking-frontend-shared`
- Affected code: frontend shared components and configuration
- Breaking changes: none
