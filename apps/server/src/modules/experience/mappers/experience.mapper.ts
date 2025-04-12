import type { CreateExperienceDto } from "../dto/create-experience.dto";
import type { UpdateExperienceDto } from "../dto/update-experience.dto";

export class ExperienceMapper {
  public static toPrismaCreate(userId: string, dto: CreateExperienceDto) {
    return {
      userId,
      company: dto.company,
      position: dto.position,
      startDate: dto.startDate,
      endDate: dto.endDate,
      summary: dto.summary,
      highlights: dto.highlights ?? [],
    };
  }

  public static toPrismaUpdate(dto: UpdateExperienceDto) {
    return {
      company: dto.company,
      position: dto.position,
      startDate: dto.startDate,
      endDate: dto.endDate,
      summary: dto.summary,
      highlights: dto.highlights,
    };
  }
}
