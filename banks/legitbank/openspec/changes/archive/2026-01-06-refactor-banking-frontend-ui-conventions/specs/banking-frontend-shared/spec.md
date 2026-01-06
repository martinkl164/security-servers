## ADDED Requirements

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
