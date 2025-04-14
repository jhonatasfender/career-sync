import type { CreateLanguageDto } from "../dto/create-language.dto";
import type { UpdateLanguageDto } from "../dto/update-language.dto";

export class LanguageMapper {
  public static toPrismaCreate(userId: string, dto: CreateLanguageDto) {
    return {
      userId,
      name: dto.name,
      level: dto.level,
      description: dto.description,
    };
  }

  public static toPrismaUpdate(dto: UpdateLanguageDto) {
    return {
      name: dto.name,
      level: dto.level,
      description: dto.description,
    };
  }
}
