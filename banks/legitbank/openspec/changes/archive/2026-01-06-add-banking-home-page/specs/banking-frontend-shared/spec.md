## MODIFIED Requirements

### Requirement: Use clean, greenery-toned branding and a text-based cat-in-bank logo mark
The system SHALL present a clean, professional design with greenery-toned accents.

The system SHALL include a text-based logo mark that requires no image assets (inline SVG is acceptable).

#### Scenario: Header shows greenery tone and logo mark
- **WHEN** the user views the site header
- **THEN** the header uses greenery-toned accents
- **AND** the header includes a text-based logo mark without relying on image files

## ADDED Requirements

### Requirement: Display demo disclaimer in the footer
The shared UI SHALL display the footer disclaimer “Demo UI only — no real banking actions.”

#### Scenario: Footer disclaimer is visible
- **WHEN** the user views the site footer
- **THEN** the UI shows “Demo UI only — no real banking actions.”
