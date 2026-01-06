# Change: Add Super Legit Bank Home page

## Why
We need a professional, marketing-focused Home page that demonstrates the product experience without showing account-specific data or requiring any backend.

## What Changes
- Add a Home page at route `/` with mock marketing content suitable for demos
  - Headline and supporting copy
  - Feature list with simple icons (text-based / inline SVG)
- Ensure the Home page does not present account-specific widgets (balances, recent activity, account summary)

## Impact
- Affected specs: new capability `banking-home-page`; modified `banking-frontend-shared`
- Affected code: Home page route and shared UI (header/footer)
- Breaking changes: none
