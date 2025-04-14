import type { CreateCustomSectionDto } from "../dto/create-custom-section.dto";
import type { UpdateCustomSectionDto } from "../dto/update-custom-section.dto";

export class CustomSectionMapper {
  public static toPrismaCreate(userId: string, dto: CreateCustomSectionDto) {
    return {
      userId,
      name: dto.name,
      description: dto.description,
    };
  }

  public static toPrismaUpdate(dto: UpdateCustomSectionDto) {
    return {
      name: dto.name,
      description: dto.description,
    };
  }
}
