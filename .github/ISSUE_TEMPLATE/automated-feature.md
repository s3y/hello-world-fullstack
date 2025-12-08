---
name: Automated Feature
about: Feature that can be implemented via automation pipeline
labels: automation
---

## Feature

[Brief one-line description]

## Acceptance Criteria (BDD Format)

### Scenario 1: [Description]
**Given** [initial context/state]
**When** [action/trigger]
**Then** [expected outcome]
**And** [additional expectations]

### Scenario 2: [Description]
**Given** [initial context/state]
**When** [action/trigger]
**Then** [expected outcome]

## Technical Context

**Files to modify:**
- `path/to/file.ts` - [what changes are needed]
- `path/to/test.spec.ts` - [what tests are needed]

**Dependencies:**
- List any related issues or PRs
- List any external dependencies

**Out of Scope:**
- Explicitly list what should NOT be done in this issue

## Test Requirements

- [ ] Unit tests for all new functions
- [ ] Integration tests for API endpoints (if applicable)
- [ ] E2E tests for user-facing features (if applicable)

## Notes

[Any additional context, design decisions, or gotchas]

---

## ✅ Good Issue Example

```markdown
Title: Add email validation to registration form

## Feature
Validate email format in registration form with visual feedback

## Acceptance Criteria

### Scenario: Valid email submission
**Given** I am on the registration page
**When** I enter "user@example.com" in the email field
**Then** the field should show a green checkmark
**And** the submit button should be enabled

### Scenario: Invalid email submission
**Given** I am on the registration page
**When** I enter "invalid-email" in the email field
**Then** the field should show an error message "Please enter a valid email"
**And** the submit button should be disabled

## Technical Context
**Files to modify:**
- `src/components/RegistrationForm.tsx` - Add email validation logic
- `src/components/RegistrationForm.spec.tsx` - Add validation tests
- `src/utils/validation.ts` - Create email validator function

**Dependencies:** None

**Out of Scope:**
- Backend email validation
- Email uniqueness checking
- Other form field validation

## Test Requirements
- [x] Unit tests for email validator function
- [x] Component tests for form behaviour
- [ ] Integration tests (not needed for this feature)
```

## Issue Size Guidelines

### ✅ Good (LLM-friendly):
- Single component, single feature
- 1-3 files modified
- Clear acceptance criteria (2-4 scenarios max)
- Estimated < 200 lines of code changes
- Specific "Files to modify" list
- Clear "Out of Scope" boundaries

### ❌ Too Large (Split into smaller issues):
- Multiple features in one issue
- Entire module refactor
- >5 files to modify
- Vague requirements ("Improve performance", "Fix bugs")
- No clear acceptance criteria
- Missing technical context

## Tips for Writing Automation-Friendly Issues

1. **Be Specific**: Instead of "Add validation", say "Add email format validation using regex pattern"
2. **Include Examples**: Show example input/output in scenarios
3. **List Files**: Guide the LLM to the right files
4. **Define Boundaries**: Use "Out of Scope" to prevent scope creep
5. **Think TDD**: Write scenarios that translate directly to tests
6. **Keep It Small**: If you can't describe it in 2-4 scenarios, split it up
