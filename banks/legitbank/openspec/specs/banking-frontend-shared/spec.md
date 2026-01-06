# banking-frontend-shared Specification

## Purpose
TBD - created by archiving change add-banking-frontend-shared. Update Purpose after archive.
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

