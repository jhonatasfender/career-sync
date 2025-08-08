# Create Database Migration

You are tasked with creating a new Prisma database migration for the Reactive Resume application.

## Requirements:
- Follow Prisma schema conventions
- Use descriptive model and field names
- Add proper indexes for performance
- Include necessary relations
- Handle constraints appropriately

## Schema Guidelines:
```prisma
model ModelName {
  id        String   @id @default(cuid())
  field     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  relation RelatedModel @relation(fields: [relationId], references: [id], onDelete: Cascade)
  relationId String
  
  // Indexes
  @@index([field])
  @@map("table_name")
}
```

## Migration Process:
1. Update the schema file
2. Generate migration with descriptive name
3. Review the migration SQL
4. Test on development database
5. Update related types/DTOs if needed

## Considerations:
- Existing data preservation
- Performance impact of new indexes
- Foreign key constraints
- Data validation rules
- Backward compatibility

## Files to Reference:
- [Prisma Schema](tools/prisma/schema.prisma)
- Existing migrations in `tools/prisma/migrations/`

Please create the migration based on the requirements provided in the chat.
