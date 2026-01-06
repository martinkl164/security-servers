# Change: Refactor banking frontend UI to follow project directives

## Why
The frontend UI currently uses repeated Tailwind utility groups and palette-specific color classes across pages/components.
This change standardizes reusable UI primitives (via Tailwind `@layer components`) and semantic design tokens, and ensures tests are co-located with the UI they validate.

## What Changes
- Introduce semantic design tokens (e.g., `primary`, `neutral`) mapped to the existing greenery-toned palette.
- Add shared UI building blocks via Tailwind `@layer components` (inputs, buttons, cards) to reduce duplication.
- Refactor existing UI components/pages to use the shared primitives and semantic tokens without changing UX.
- Align tests with the "co-locate tests with implementation" convention.

## Impact
- Affected specs: `banking-frontend-shared` (developer-facing frontend conventions)
- Affected code: `frontend/src/index.css`, `frontend/tailwind.config.ts`, and existing components/pages
- Risk: Low; refactor-only, guarded by existing tests and a production build.
