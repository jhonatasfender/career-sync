---
applyTo: "tools/prisma/**/*"
---

# Database & Prisma Instructions

## Database Schema Guidelines

When working with Prisma and the database:

### Schema Design
- Use descriptive model names in PascalCase
- Define proper relationships between models
- Add appropriate indexes for performance
- Use meaningful field names

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  resumes Resume[]
  
  @@map("users")
}

model Resume {
  id     String @id @default(cuid())
  title  String
  userId String
  
  // Relations
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  // Indexes
  @@index([userId])
  @@map("resumes")
}
```

### Migrations
- Create descriptive migration names
- Test migrations on development data
- Handle data transformations carefully
- Never edit existing migrations

### Data Access Patterns
- Use proper Prisma Client patterns
- Implement efficient queries with includes/selects
- Use transactions for related operations
- Handle unique constraint violations

```typescript
// Efficient query with relations
const userWithResumes = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    resumes: {
      select: {
        id: true,
        title: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: 'desc' },
    },
  },
});

// Transaction for related operations
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({ data: userData });
  await tx.resume.create({ 
    data: { ...resumeData, userId: user.id } 
  });
});
```

### Performance Considerations
- Use proper indexing strategies
- Implement pagination for large datasets
- Use connection pooling appropriately
- Monitor query performance

### Data Validation
- Use Prisma schema validations
- Implement application-level validations
- Handle constraint violations gracefully
- Provide meaningful error messages

### Backup and Recovery
- Implement regular backup strategies
- Test backup restoration procedures
- Document recovery processes
- Monitor database health
