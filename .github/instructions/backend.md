---
applyTo: "apps/server/**/*"
---

# Backend Development Instructions

## NestJS Guidelines

When developing the server application:

### Module Structure
- Follow NestJS module patterns
- Use proper dependency injection
- Implement guards, interceptors, and filters appropriately
- Keep modules focused and cohesive

```typescript
@Module({
  imports: [TypeOrmModule.forFeature([Entity])],
  controllers: [Controller],
  providers: [Service],
  exports: [Service],
})
export class FeatureModule {}
```

### Controllers
- Use proper HTTP methods and status codes
- Implement request validation with DTOs
- Use proper error handling
- Document APIs with Swagger decorators

```typescript
@Controller('endpoint')
export class FeatureController {
  @Get(':id')
  @ApiOperation({ summary: 'Get item by ID' })
  @ApiResponse({ status: 200, type: ResponseDto })
  async findOne(@Param('id') id: string): Promise<ResponseDto> {
    // Implementation
  }
}
```

### Services
- Keep business logic in services
- Use proper dependency injection
- Implement proper error handling
- Follow single responsibility principle

### DTOs and Validation
- Use class-validator for input validation
- Create proper DTOs for requests and responses
- Use class-transformer for serialization
- Implement proper type safety

### Database (Prisma)
- Use Prisma Client for database operations
- Write efficient queries
- Use transactions for related operations
- Handle database errors properly

```typescript
async createWithRelations(data: CreateDto): Promise<Entity> {
  return this.prisma.$transaction(async (tx) => {
    // Multiple related operations
  });
}
```

### Authentication & Authorization
- Use Passport strategies for authentication
- Implement proper JWT handling
- Use guards for route protection
- Handle refresh tokens securely

### File Upload & Storage
- Use MinIO for file storage
- Validate file types and sizes
- Handle upload errors gracefully
- Implement proper cleanup

### Email Services
- Use Nodemailer for email sending
- Handle email template rendering
- Implement retry mechanisms
- Log email sending status

### Error Handling
- Use proper HTTP exception filters
- Log errors appropriately
- Return meaningful error messages
- Don't expose sensitive information

### Testing
- Write unit tests for services
- Use proper mocking for dependencies
- Test error scenarios
- Maintain good test coverage

### Security
- Validate all inputs
- Use proper CORS settings
- Implement rate limiting
- Sanitize user content
- Use helmet for security headers
