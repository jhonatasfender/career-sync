# Write Tests

You are tasked with writing comprehensive tests for the Reactive Resume application.

## Test Types:
- **Unit Tests**: Individual functions, components, services
- **Integration Tests**: Component interactions, API endpoints
- **E2E Tests**: Complete user workflows

## Testing Tools:
- **Jest/Vitest**: Unit and integration testing
- **React Testing Library**: Component testing
- **Cypress**: End-to-end testing
- **Supertest**: API testing

## Guidelines:

### Unit Tests:
```typescript
describe('ComponentName', () => {
  it('should render with correct props', () => {
    // Test implementation
  });

  it('should handle user interactions', async () => {
    // Test user events
  });

  it('should handle error states', () => {
    // Test error scenarios
  });
});
```

### API Tests:
```typescript
describe('POST /api/endpoint', () => {
  it('should create resource with valid data', async () => {
    // Test successful creation
  });

  it('should return 400 for invalid data', async () => {
    // Test validation errors
  });
});
```

### E2E Tests:
```typescript
describe('User Journey', () => {
  it('should complete full workflow', () => {
    // Test complete user story
  });
});
```

## Test Requirements:
- Descriptive test names
- Arrange-Act-Assert pattern
- Mock external dependencies
- Test error scenarios
- Achieve good coverage
- Fast execution time

## Files to Reference:
- Existing tests in each module
- [Jest Config](jest.config.ts)
- [Cypress Config](cypress.config.ts)

Please write tests based on the code or requirements provided in the chat.
