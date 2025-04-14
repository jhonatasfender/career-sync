import type { CreateReferenceDto } from "../dto/create-reference.dto";
import type { UpdateReferenceDto } from "../dto/update-reference.dto";

export class ReferenceMapper {
  public static toPrismaCreate(userId: string, dto: CreateReferenceDto) {
    return {
      userId,
      name: dto.name,
      reference: dto.reference,
      description: dto.description,
    };
  }

  public static toPrismaUpdate(dto: UpdateReferenceDto) {
    return {
      name: dto.name,
      reference: dto.reference,
      description: dto.description,
    };
  }
}
