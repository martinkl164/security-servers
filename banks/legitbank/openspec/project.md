
# Project Context

## Purpose
LegitBank (Super Legit Bank) is a spec-driven demo banking application used to showcase a clean frontend experience and OpenSpec-driven delivery.

## Tech Stack
- Primary language: TypeScript
- Frontend: Vite + React
- Styling: Tailwind CSS
- Tooling: OpenSpec for proposals/specs/validation

## Deployment
- Target: Cloudflare Pages
- Assumption: Frontend is a static build artifact produced by Vite (no server required for production).

## Project Conventions

### Core Directives
- **TDD-first**: Write tests from acceptance criteria (ACs) and scenarios in OpenSpec specs.
	- Implement the minimum code to satisfy the ACs.
	- Refactor after tests pass; keep behavior unchanged.
- **Reuse-first**:
	- Prefer reusing existing components, utilities, patterns, and content instead of creating new.
	- Refactor and generalize when practical; avoid duplication (DRY) and keep interfaces consistent.
	- Share UI building blocks via Tailwind `@layer components` and design tokens; prioritize consistency over novelty.
	- Reuse data models and API endpoints; evolve schemas with backward-compatible changes and clear migrations.
	- Introduce new dependencies or primitives only with documented rationale and allowlisting; keep the stack lean.
- **Best practices + SOLID**:
	- Single Responsibility: keep modules focused.
		- UI components render UI; move non-trivial logic into hooks/services.
	- Open/Closed: prefer extension over modification when practical.
		- Prefer composable components and configuration over one-off forks.
	- Liskov + Interface Segregation: keep contracts small and substitutable.
		- Prefer small prop/types; avoid “god” interfaces that force unrelated deps.
	- Dependency Inversion: depend on abstractions for seams that need testing/mocking.
		- Hide side effects behind interfaces/adapters; inject via props/hooks where practical.
	- Keep side effects isolated and testable.

### Tailwind Practices
- **Tailwind Usage**: Allowed as utility-first CSS.
	- Configure `content` purge to remove unused classes.
	- Avoid inline `style` attributes.
	- Prefer `@layer components` for reusable patterns.
	- Keep CSS minimal and respect performance budgets.
	- Do not include third-party UI kits that inject scripts or tracking.
- **Design Tokens**:
	- Define colors, spacing, and typography in `tailwind.config.*` theme extension.
	- Reference via semantic names (e.g., `primary`, `surface`) instead of hardcoded values.

### React + Vite Practices
- Prefer functional components + hooks; keep components mostly pure and deterministic.
- Keep state local by default; lift state only when multiple siblings truly need it.
- Avoid hidden coupling: pass data via props, not module-level singletons.
- Keep browser-safe code: do not rely on Node-only APIs in the frontend.
- Use Vite environment variables via `import.meta.env` (never `process.env`).
- Keep the bundle lean: prefer small dependencies and avoid unnecessary polyfills.

### Frontend Organization
- Keep routes in `src/AppRoutes.tsx` and pages in `src/pages/*`.
- Keep reusable UI in `src/components/*`; prefer small, composable components.
- Keep shared styling primitives in `src/index.css` using Tailwind `@layer` (minimal custom CSS).
- Co-locate tests next to what they validate (e.g., `Home.test.tsx` next to `Home.tsx`).

### Code Style
- Prefer clear, explicit names over cleverness.
- Keep functions small and cohesive; avoid deeply nested conditionals.
- Avoid “utility dumping grounds”; place code near its primary usage.

### Architecture Patterns
- Favor simple composition over heavy frameworks and custom patterns.
- Keep UI state local where possible; only lift state when necessary.
- Separate UI rendering from business logic to enable unit testing.

### Testing Strategy
- Derive tests directly from OpenSpec requirements/scenarios and acceptance criteria.
- Prefer fast, deterministic tests:
	- Unit tests for logic and utilities.
	- Component tests for UI behavior.
	- Minimal end-to-end/smoke coverage to confirm routing and basic flows.
- Tests must be stable (no reliance on network, real APIs, or time unless controlled).

### Git Workflow
- Keep changes small and reviewable.
- Prefer atomic commits aligned to tasks/acceptance criteria.

## Domain Context
- This project simulates a banking UI for demo and learning purposes.
- No real banking integrations are assumed unless explicitly specified in an approved proposal.

## Important Constraints
- Follow the OpenSpec workflow:
	- Propose changes under `openspec/changes/<change-id>/`.
	- Do not implement until the proposal is reviewed/approved.
- Avoid unnecessary dependencies and complexity.

## External Dependencies
- None by default. Any external dependency must be justified in a proposal and documented in the change `design.md`.

## Platform Notes
- For frontend UX changes, prefer implementing with the existing Vite + React + Tailwind stack rather than introducing alternative frameworks.
- If a change requires additional Cloudflare Pages configuration (build command, output directory, environment variables), capture it in the change `design.md`.
