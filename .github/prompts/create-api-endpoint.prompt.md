# Create NestJS API Endpoint

You are tasked with creating a new API endpoint for the Reactive Resume backend.

## Requirements:
- Use NestJS framework patterns
- Implement proper DTOs for request/response validation
- Add Swagger documentation
- Include proper error handling
- Use Prisma for database operations
- Follow RESTful conventions

## Files to create/modify:
1. **Controller** - Handle HTTP requests
2. **Service** - Business logic implementation  
3. **DTOs** - Request/response validation
4. **Tests** - Unit tests for service and controller

## Example Structure:

### Controller:
```typescript
@Controller('endpoint')
@ApiTags('Endpoint')
export class EndpointController {
  constructor(private readonly service: EndpointService) {}

  @Post()
  @ApiOperation({ summary: 'Create new item' })
  @ApiResponse({ status: 201, type: ResponseDto })
  async create(@Body() dto: CreateDto): Promise<ResponseDto> {
    return this.service.create(dto);
  }
}
```

### Service:
```typescript
@Injectable()
export class EndpointService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateDto): Promise<ResponseDto> {
    // Implementation with proper error handling
  }
}
```

## Guidelines:
- Validate all inputs with class-validator
- Use proper HTTP status codes
- Implement proper error handling
- Add comprehensive tests
- Document with Swagger decorators
- Follow security best practices

Please create the endpoint based on the requirements provided in the chat.
