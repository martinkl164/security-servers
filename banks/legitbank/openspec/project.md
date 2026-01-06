# Project Context

## Purpose
FakeBank is a spec-driven demo banking application used to showcase a clean frontend experience and OpenSpec-driven delivery.

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
- **Reuse-first**: Prefer reusing and extending existing components/utilities over introducing new ones.
	- Only add new abstractions when they reduce duplication and clarify intent.
- **Best practices + SOLID**:
	- Single Responsibility: keep modules focused.
	- Open/Closed: prefer extension over modification when practical.
	- Liskov + Interface Segregation: keep contracts small and substitutable.
	- Dependency Inversion: depend on abstractions for seams that need testing/mocking.
	- Keep side effects isolated and testable.

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
