# banking-home-page Specification

## Purpose
Provide a marketing-focused Home page at route `/` with professional copy, feature highlights, and a trust indicator. The page serves as the landing page for the LegitBank demo and does not include account-specific widgets or data.
## Requirements
### Requirement: Provide a Home page at route /
The system SHALL provide a Home page at route /.

#### Scenario: User visits the Home page
- **WHEN** the user navigates to /
- **THEN** the Home page content is displayed

### Requirement: Present professional marketing copy on the Home page
The Home page SHALL present professional, marketing-focused mock content suitable for demos.

#### Scenario: Home page shows required headline
- **WHEN** the user views the Home page
- **THEN** the page shows the headline “Simple banking for modern life.”
- **AND** the page shows supporting marketing copy “Super Legit Bank provides straightforward accounts and reliable everyday tools designed for clarity and control.”
- **AND** the page shows the trust line “Trusted by 1,200,000+ clients worldwide (mock).”

### Requirement: Present a feature list with icons on the Home page
The Home page SHALL include a “Features” section that presents a short list of key features.

Each feature SHALL include a simple icon, a title, and descriptive text.

The Home page SHALL include the following feature titles:
- “Everyday Checking & Savings”
- “Fast Transfers”
- “Mobile App Access”
- “Security”

#### Scenario: Features section is visible
- **WHEN** the user views the Home page
- **THEN** the page shows a “Features” section
- **AND** each feature includes an icon, a title, and descriptive text

### Requirement: Avoid account-specific widgets on the Home page
The Home page SHALL NOT include account summary, balances, recent activity, or other account-specific widgets.

#### Scenario: No account widgets appear
- **WHEN** the user views the Home page
- **THEN** the page does not present account summary
- **AND** the page does not present recent activity

