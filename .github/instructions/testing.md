---
applyTo: "**/*.test.{ts,tsx,js,jsx}"
---

# Testing Instructions

## Testing Guidelines

When writing tests for any part of the application:

### Test Structure
- Use descriptive test names that explain the behavior
- Follow the Arrange-Act-Assert pattern
- Group related tests with `describe` blocks
- Use `beforeEach` and `afterEach` for setup/cleanup

```typescript
describe('UserService', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    // Setup test module
  });

  afterEach(() => {
    // Cleanup
  });

  describe('createUser', () => {
    it('should create a new user with valid data', async () => {
      // Arrange
      const userData = { email: 'test@example.com', name: 'Test User' };
      
      // Act
      const result = await userService.createUser(userData);
      
      // Assert
      expect(result).toEqual(expect.objectContaining({
        email: userData.email,
        name: userData.name,
      }));
    });

    it('should throw error when email already exists', async () => {
      // Test error scenario
    });
  });
});
```

### Unit Tests
- Test individual functions and methods
- Mock external dependencies
- Test both happy path and error scenarios
- Aim for high code coverage

### Integration Tests
- Test component interactions
- Use real dependencies when appropriate
- Test API endpoints end-to-end
- Verify database operations

### React Component Tests
- Use React Testing Library
- Test user interactions, not implementation
- Test accessibility features
- Mock external services

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LoginForm', () => {
  it('should submit form with valid credentials', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    
    render(<LoginForm onSubmit={onSubmit} />);
    
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password');
    await user.click(screen.getByRole('button', { name: /sign in/i }));
    
    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
    });
  });
});
```

### Mock Strategies
- Mock external APIs and services
- Use factory functions for test data
- Mock Prisma Client for database tests
- Use MSW for API mocking in integration tests

### E2E Tests (Cypress)
- Test critical user journeys
- Use data attributes for element selection
- Clean up test data after each test
- Test responsive behavior

```typescript
describe('Resume Creation', () => {
  beforeEach(() => {
    cy.login('user@example.com');
  });

  it('should create a new resume', () => {
    cy.visit('/dashboard');
    cy.get('[data-cy="create-resume"]').click();
    cy.get('[data-cy="resume-title"]').type('My Resume');
    cy.get('[data-cy="create-button"]').click();
    
    cy.url().should('include', '/builder/');
    cy.contains('My Resume').should('be.visible');
  });
});
```

### Test Data Management
- Use factories for creating test data
- Keep test data isolated
- Use realistic but safe test data
- Clean up after tests

### Performance Testing
- Test rendering performance for large datasets
- Verify memory leaks don't occur
- Test bundle size impacts
- Monitor test execution time

### Accessibility Testing
- Test keyboard navigation
- Verify screen reader compatibility
- Check color contrast requirements
- Test with accessibility tools
