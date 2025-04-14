import type { CreateSummaryDto } from "../dto/create-summary.dto";
import type { UpdateSummaryDto } from "../dto/update-summary.dto";

export class SummaryMapper {
  public static toPrismaCreate(userId: string, dto: CreateSummaryDto) {
    return {
      userId,
      content: dto.content,
    };
  }

  public static toPrismaUpdate(dto: UpdateSummaryDto) {
    return {
      content: dto.content,
    };
  }
}
