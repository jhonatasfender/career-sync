import type { CreateAwardDto } from "../dto/create-award.dto";
import type { UpdateAwardDto } from "../dto/update-award.dto";

export class AwardMapper {
  public static toPrismaCreate(userId: string, dto: CreateAwardDto) {
    return {
      userId,
      title: dto.title,
      date: dto.date,
      awarder: dto.awarder,
      summary: dto.summary,
      website: dto.website,
    };
  }

  public static toPrismaUpdate(dto: UpdateAwardDto) {
    return {
      title: dto.title,
      date: dto.date,
      awarder: dto.awarder,
      summary: dto.summary,
      website: dto.website,
    };
  }
}
