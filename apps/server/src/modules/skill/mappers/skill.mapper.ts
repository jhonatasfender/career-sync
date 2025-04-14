import type { CreateSkillDto } from "../dto/create-skill.dto";
import type { UpdateSkillDto } from "../dto/update-skill.dto";

export class SkillMapper {
  public static toPrismaCreate(userId: string, dto: CreateSkillDto) {
    return {
      userId,
      name: dto.name,
      level: dto.level,
      description: dto.description,
      keywords: dto.keywords ?? [],
    };
  }

  public static toPrismaUpdate(dto: UpdateSkillDto) {
    return {
      name: dto.name,
      level: dto.level,
      description: dto.description,
      keywords: dto.keywords,
    };
  }
}
