import type { CreateEducationDto } from "../dto/create-education.dto";
import type { UpdateEducationDto } from "../dto/update-education.dto";

export class EducationMapper {
  public static toPrismaCreate(userId: string, dto: CreateEducationDto) {
    return {
      userId,
      institution: dto.institution,
      area: dto.area,
      studyType: dto.studyType,
      startDate: dto.startDate,
      endDate: dto.endDate,
      gpa: dto.gpa,
      website: dto.website,
      summary: dto.summary,
    };
  }

  public static toPrismaUpdate(dto: UpdateEducationDto) {
    return {
      institution: dto.institution,
      area: dto.area,
      studyType: dto.studyType,
      startDate: dto.startDate,
      endDate: dto.endDate,
      gpa: dto.gpa,
      website: dto.website,
      summary: dto.summary,
    };
  }
}
