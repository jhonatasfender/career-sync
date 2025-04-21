import type { CreateExperienceDto } from "../dto/create-experience.dto";
import type { UpdateExperienceDto } from "../dto/update-experience.dto";

export class ExperienceMapper {
  public static toPrismaCreate(userId: string, dto: CreateExperienceDto) {
    return {
      userId,
      company: dto.company,
      position: dto.position,
      summary: dto.summary,
      startDate: dto.startDate,
      endDate: dto.endDate,
      website: dto.website,
    };
  }

  public static toPrismaUpdate(dto: UpdateExperienceDto) {
    return {
      company: dto.company,
      position: dto.position,
      summary: dto.summary,
      startDate: dto.startDate,
      endDate: dto.endDate,
      website: dto.website,
    };
  }
}
