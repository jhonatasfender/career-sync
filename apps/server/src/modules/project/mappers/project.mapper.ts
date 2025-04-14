import type { CreateProjectDto } from "../dto/create-project.dto";
import type { UpdateProjectDto } from "../dto/update-project.dto";

export class ProjectMapper {
  public static toPrismaCreate(userId: string, dto: CreateProjectDto) {
    return {
      userId,
      name: dto.name,
      description: dto.description,
      highlights: dto.highlights ?? [],
      keywords: dto.keywords ?? [],
      url: dto.url,
      startDate: dto.startDate,
      endDate: dto.endDate,
    };
  }

  public static toPrismaUpdate(dto: UpdateProjectDto) {
    return {
      name: dto.name,
      description: dto.description,
      highlights: dto.highlights,
      keywords: dto.keywords,
      url: dto.url,
      startDate: dto.startDate,
      endDate: dto.endDate,
    };
  }
}
