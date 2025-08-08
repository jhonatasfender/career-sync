---
applyTo: "libs/**/*"
---

# Library Development Instructions

## Shared Libraries Guidelines

When developing shared libraries:

### Library Structure
- Keep libraries focused on single responsibility
- Export everything through barrel exports (index.ts)
- Use proper TypeScript configurations
- Maintain clean dependencies

### Types and DTOs (`libs/dto`)
- Define clear, reusable types
- Use Zod schemas for runtime validation
- Export types and schemas separately
- Document complex types with JSDoc

```typescript
// Define schema
export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().min(1),
});

// Export inferred type
export type User = z.infer<typeof userSchema>;
```

### UI Components (`libs/ui`)
- Build reusable, composable components
- Use Radix UI as the foundation
- Implement proper styling with TailwindCSS
- Support theming and customization

```typescript
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Utilities (`libs/utils`)
- Create pure, testable utility functions
- Use proper TypeScript generics
- Handle edge cases appropriately
- Write comprehensive tests

### Hooks (`libs/hooks`)
- Create reusable custom hooks
- Follow React hooks rules
- Handle cleanup properly
- Use proper TypeScript for hook parameters and return types

```typescript
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
```

### Parser Library (`libs/parser`)
- Handle different resume formats
- Validate input data
- Provide good error messages
- Support extensible parsing

### Schema Library (`libs/schema`)
- Define comprehensive data schemas
- Use Zod for validation
- Support schema versioning
- Provide schema utilities

### Testing Libraries
- Write comprehensive unit tests
- Test edge cases and error scenarios
- Use proper mocking for external dependencies
- Maintain high test coverage

### Dependencies
- Keep external dependencies minimal
- Use peer dependencies when appropriate
- Document dependency requirements
- Regularly update dependencies

### Documentation
- Write clear README files
- Document API with JSDoc
- Provide usage examples
- Keep documentation up to date
