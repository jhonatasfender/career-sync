---
applyTo: "apps/client/**/*"
---

# Frontend Development Instructions

## React Component Guidelines

When creating React components for the client app:

### Component Structure
- Use functional components with TypeScript
- Export as named exports (not default)
- Use proper TypeScript props interface
- Implement proper error boundaries when needed

```typescript
type ComponentProps = {
  title: string;
  isLoading?: boolean;
  className?: string;
};

export const MyComponent = ({ title, isLoading = false, className }: ComponentProps) => {
  // Component logic here
};
```

### UI Components
- Always use components from `@reactive-resume/ui` when available
- Import Radix UI components through the design system
- Use the `cn()` utility for conditional classes
- Follow the established design patterns

### State Management
- Use Zustand stores for global state
- Use TanStack Query for server state
- Prefer local state (useState) for component-specific state
- Use React Hook Form for form state

### Styling
- Use TailwindCSS utility classes
- Follow responsive design patterns
- Use design tokens from the theme
- Maintain consistent spacing and typography

### Routing
- Use React Router v7 patterns
- Implement proper loading states
- Handle route protection for authenticated pages
- Use proper error boundaries for route errors

### Forms
- Use React Hook Form with Zod validation
- Implement proper error handling and display
- Use controlled components
- Provide good UX with loading states

### Data Fetching
- Use TanStack Query for all API calls
- Implement proper loading and error states
- Use optimistic updates when appropriate
- Handle offline scenarios

### Internationalization
- Use LinguiJS macros for all user-facing text
- Extract text strings properly
- Handle pluralization and context
- Test with different locales

### Performance
- Use React.memo for expensive components
- Implement proper list virtualization for large datasets
- Use code splitting for route components
- Optimize bundle size with dynamic imports
