## ADDED Requirements

### Requirement: Provide CI checks for the frontend
The system SHALL provide a GitHub Actions workflow that runs automated checks for the LegitBank frontend.

The workflow SHALL run typecheck (as lint), unit tests, and a production build on pull requests.

#### Scenario: Pull request checks are enforced
- **WHEN** a pull request is opened or updated
- **THEN** the pipeline runs typecheck (lint)
- **AND** the pipeline runs unit tests
- **AND** the pipeline runs a production build

### Requirement: Deploy static frontend to Cloudflare Pages via Wrangler
The system SHALL deploy the LegitBank frontend static build to Cloudflare Pages using the Wrangler CLI.

The production deployment SHALL run only when all CI checks pass on the default branch (`master`).

#### Scenario: Deployment runs only on green builds
- **WHEN** a commit is pushed to the default branch (`master`)
- **AND** the CI checks pass
- **THEN** the pipeline deploys the static build output to Cloudflare Pages

### Requirement: Deploy preview builds for pull requests
The system SHALL deploy a Cloudflare Pages preview build for pull requests when CI checks are green.

#### Scenario: Preview deploy runs after green PR checks
- **WHEN** a pull request is opened or updated
- **AND** the CI checks pass
- **THEN** the pipeline deploys a preview build to Cloudflare Pages
