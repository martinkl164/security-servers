# banking-frontend-shared Specification

## Purpose
Provide shared frontend foundations for the LegitBank demo app, including layout, branding, navigation, styling conventions, and CI/CD requirements for static hosting.
## Requirements
### Requirement: Provide shared frontend foundations for Super Legit Bank
The system SHALL provide shared frontend artifacts that can be reused across all Super Legit Bank pages.

#### Scenario: Shared layout is present
- **WHEN** the user loads any page in the frontend
- **THEN** the UI presents a consistent header and footer

### Requirement: Display Super Legit Bank brand name
The system SHALL display the brand name “Super Legit Bank” in the shared UI.

#### Scenario: Brand name is visible
- **WHEN** the user loads any page in the frontend
- **THEN** the UI shows the text “Super Legit Bank”

### Requirement: Use clean, greenery-toned branding and a text-based cat-in-bank logo mark
The system SHALL present a clean, professional design with greenery-toned accents.

The system SHALL include a text-based logo mark that requires no image assets (inline SVG is acceptable).

#### Scenario: Header shows greenery tone and logo mark
- **WHEN** the user views the site header
- **THEN** the header uses greenery-toned accents
- **AND** the header includes a text-based logo mark without relying on image files

### Requirement: Provide primary navigation for Home and Login
The system SHALL provide primary navigation links for Home and Login.

#### Scenario: Navigation links are available
- **WHEN** the user views the header navigation
- **THEN** the UI provides a Home navigation link
- **AND** the UI provides a Login navigation link

### Requirement: Require no API or database dependencies for core UX
The frontend SHALL function without any required API calls, server-side state, or database dependencies for the core UX.

#### Scenario: Browsing does not require an API
- **WHEN** the user navigates between pages in the frontend
- **THEN** the UX operates without contacting an API

### Requirement: Support local HTTPS with a trusted development certificate
Local development SHALL support HTTPS using a certificate trusted by the developer machine.

#### Scenario: Developer runs HTTPS locally
- **WHEN** the developer configures a trusted local certificate (for example, using mkcert)
- **THEN** the dev server can be started over HTTPS without browser trust warnings

### Requirement: Be deployable as a static site with HTTPS in production
The frontend SHALL be deployable as static assets.

Production hosting SHALL provide HTTPS termination for end users (for example, Cloudflare Pages).

#### Scenario: Static build output is suitable for hosting
- **WHEN** the project is built for production
- **THEN** the build produces static assets suitable for static hosting
- **AND** end users access the site over HTTPS in production

### Requirement: Display demo disclaimer in the footer
The shared UI SHALL display the footer disclaimer “Demo UI only — no real banking actions.”

#### Scenario: Footer disclaimer is visible
- **WHEN** the user views the site footer
- **THEN** the UI shows “Demo UI only — no real banking actions.”

### Requirement: Use semantic design tokens and shared UI primitives
The frontend shared UI SHALL use semantic design tokens (for example, `primary`, `neutral`) and shared UI primitives defined via Tailwind `@layer components` to reduce style duplication.

#### Scenario: Shared primitives are used across pages
- **WHEN** a developer updates shared styling for inputs, buttons, or cards
- **THEN** the change can be applied in one place and reused across pages/components

### Requirement: Co-locate UI tests with UI implementations
UI component and page tests SHALL be co-located next to the UI modules they validate (for example, `Component.tsx` with `Component.test.tsx`).

#### Scenario: Tests are discoverable next to UI code
- **WHEN** a developer opens a page or component module
- **THEN** the related `.test.tsx` file is located alongside it

### Requirement: Post PR preview URL after preview deploy
When a pull request preview deploy completes successfully, the CI system SHALL publish the preview URL in the pull request.

#### Scenario: Preview URL is posted on the PR
- **WHEN** a pull request preview deploy succeeds
- **THEN** the pull request shows a comment containing the Cloudflare Pages preview URL
- **AND** the comment is updated on subsequent commits to avoid posting duplicates

### Requirement: Auto-create pull requests for new branches
The CI system SHALL automatically create a pull request when a new branch is pushed, excluding production branches.

#### Scenario: New branch triggers auto-PR creation
- **WHEN** a developer pushes a new branch to the repository
- **AND** the branch is not `main` or `master`
- **THEN** a pull request is automatically created targeting the production branch
- **AND** the PR includes an auto-generated title
- **AND** the PR body prompts the developer to complete the description

