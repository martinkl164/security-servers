# banking-login-page Specification

## Purpose
Provide a mock Login page at route `/login` with a fully frontend-mocked authentication flow. The page accepts non-empty credentials, displays a success state, and redirects to the Home page without requiring backend calls.

## Requirements
### Requirement: Provide a Login page at route /login
The system SHALL provide a Login page at route /login.

#### Scenario: User visits the Login page
- **WHEN** the user navigates to /login
- **THEN** the Login page content is displayed

### Requirement: Provide a mock login form
The Login page SHALL provide a mock login form containing:
- A username or email input
- A password input

#### Scenario: Login form fields are present
- **WHEN** the user views the Login page
- **THEN** the UI presents a username or email input
- **AND** the UI presents a password input

### Requirement: Mock login submit succeeds without backend calls
Submitting the login form with non-empty credentials SHALL be fully mocked and SHALL NOT require a backend.

On success, the UI SHALL show a mock success state and redirect the user to / shortly after.

#### Scenario: Mock login success and redirect
- **WHEN** the user submits the login form with non-empty credentials
- **THEN** the UI indicates a mock success state
- **AND** the user is redirected to / shortly after
