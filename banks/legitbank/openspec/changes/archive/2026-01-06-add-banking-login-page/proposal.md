# Change: Add Super Legit Bank Login page

## Why
We need a demo-friendly Login page that provides a realistic sign-in experience without implementing real authentication or requiring any backend.

## What Changes
- Add a Login page at route `/login`
- Provide a mock login form with username/email and password fields
- Provide mock submit behavior:
  - Submitting non-empty credentials shows a mock success state
  - User is redirected to `/` shortly after

## Impact
- Affected specs: new capability `banking-login-page`
- Affected code: Login page route and UI
- Breaking changes: none
