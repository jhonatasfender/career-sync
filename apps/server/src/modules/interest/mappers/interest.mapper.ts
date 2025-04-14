import type { CreateInterestDto } from "../dto/create-interest.dto";
import type { UpdateInterestDto } from "../dto/update-interest.dto";

export class InterestMapper {
  public static toPrismaCreate(userId: string, dto: CreateInterestDto) {
    return {
      userId,
      name: dto.name,
      keywords: dto.keywords ?? [],
    };
  }

  public static toPrismaUpdate(dto: UpdateInterestDto) {
    return {
      name: dto.name,
      keywords: dto.keywords,
    };
  }
}
