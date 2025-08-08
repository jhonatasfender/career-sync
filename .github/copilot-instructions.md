# GitHub Copilot Instructions for Reactive Resume

## Project Overview
Reactive Resume is a free and open-source resume builder that simplifies the process of creating, updating, and sharing resumes. The project is built as a monorepo using Nx workspace with modern full-stack technologies.

## Architecture & Technologies

### Frontend Stack
- **React 18** with TypeScript and Vite for fast development
- **TailwindCSS** for styling with PostCSS
- **Radix UI** components as the base design system
- **React Router 7** for navigation
- **Zustand** for state management
- **React Hook Form** with Zod for form validation
- **TanStack Query** for server state management
- **Framer Motion** for animations
- **Tiptap** for rich text editing

### Backend Stack
- **NestJS** framework with TypeScript
- **PostgreSQL** database with **Prisma ORM**
- **Passport** for authentication (Local, GitHub, Google OAuth)
- **JWT** for token-based authentication
- **MinIO** for object storage
- **Puppeteer** for PDF generation
- **OpenAI API** integration for AI features

### Development Tools
- **Nx** for monorepo management
- **Jest** and **Vitest** for testing
- **Cypress** for E2E testing
- **ESLint** with TypeScript, Prettier, and Unicorn plugins
- **Docker** for containerization
- **LinguiJS** for internationalization (i18n)

## Code Style & Conventions

### TypeScript Preferences
- Use `type` instead of `interface` for type definitions
- Prefer explicit typing over `any`
- Use strict TypeScript configuration
- Import types with `import type { }` syntax
- Use Zod schemas for runtime validation

### React Patterns
- Use functional components with hooks
- Prefer arrow functions for components
- Use TypeScript props types (no PropTypes)
- Keep components small and focused
- Use custom hooks for shared logic
- Follow the compound component pattern for complex UI

### Styling Guidelines
- Use TailwindCSS classes for styling
- Follow the utility-first approach
- Use `cn()` utility from `@reactive-resume/utils` for conditional classes
- Prefer Radix UI components as base building blocks
- Use CSS custom properties for theming
- Follow responsive design principles

### State Management
- Use Zustand for client state
- Use TanStack Query for server state
- Prefer local state when possible
- Use React Hook Form for form state
- Keep stores small and focused

### File Organization
- Follow the Nx workspace structure
- Use barrel exports (`index.ts`) for clean imports
- Group related files in feature folders
- Keep components, hooks, and utilities in separate directories
- Use descriptive file names

## Naming Conventions

### Files & Directories
- Use `kebab-case` for file and directory names
- Use `PascalCase` for React component files
- Use `camelCase` for utility functions and hooks
- End test files with `.spec.ts` or `.test.tsx`

### Variables & Functions
- Use `camelCase` for variables and functions
- Use `PascalCase` for React components and types
- Use `UPPER_SNAKE_CASE` for constants
- Use descriptive names, avoid abbreviations

### Components
- Export components as named exports
- Use component composition over complex props
- Prefer controlled components
- Use forwardRef when exposing DOM elements

## Library-Specific Guidelines

### Nx Workspace
- Follow the workspace structure with `apps/` and `libs/`
- Use project.json for project configuration
- Leverage workspace generators and executors
- Keep dependencies between libraries clean

### Prisma
- Use descriptive model names in PascalCase
- Add proper relations and constraints
- Use meaningful field names
- Include proper indexes for performance
- Use migrations for schema changes

### TailwindCSS
- Prefer utility classes over custom CSS
- Use responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Leverage design tokens for consistency
- Use arbitrary values sparingly
- Group related classes logically

### Form Handling
- Use React Hook Form with Zod schema validation
- Create reusable form components
- Handle loading and error states properly
- Provide good user feedback

## Testing Practices
- Write unit tests for utilities and hooks
- Use integration tests for components
- Write E2E tests for critical user flows
- Mock external dependencies
- Test error scenarios
- Use descriptive test names

## Error Handling
- Use try-catch blocks for async operations
- Provide meaningful error messages
- Handle network failures gracefully
- Use loading states for better UX
- Log errors appropriately

## Performance Considerations
- Use React.memo for expensive components
- Implement proper loading states
- Optimize bundle size with code splitting
- Use lazy loading for non-critical components
- Optimize database queries
- Implement proper caching strategies

## Security Guidelines
- Validate all inputs on both client and server
- Sanitize user content before rendering
- Use HTTPS in production
- Implement proper authentication flows
- Follow OWASP security guidelines
- Keep dependencies updated

## Accessibility
- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Test with screen readers
- Follow WCAG guidelines

## Development Workflow
- Use feature branches for development
- Write meaningful commit messages
- Run tests before pushing
- Use PR reviews for code quality
- Keep PRs focused and small
- Update documentation when needed

## Build & Deployment
- Use Docker for consistent environments
- Ensure environment variables are properly configured
- Run database migrations on deployment
- Monitor application performance
- Use proper logging for debugging

## Internationalization (i18n)
- Use LinguiJS for text extraction and translation
- Mark all user-facing text for translation
- Use ICU message format for complex translations
- Test with different locales
- Handle RTL languages properly

When generating code, prioritize:
1. Type safety and proper TypeScript usage
2. Component reusability and composition
3. Performance and accessibility
4. Consistent code style and patterns
5. Proper error handling and user feedback
6. Clean and maintainable code structure
