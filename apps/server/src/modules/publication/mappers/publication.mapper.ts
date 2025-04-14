import type { CreatePublicationDto } from "../dto/create-publication.dto";
import type { UpdatePublicationDto } from "../dto/update-publication.dto";

export class PublicationMapper {
  public static toPrismaCreate(userId: string, dto: CreatePublicationDto) {
    return {
      userId,
      name: dto.name,
      publisher: dto.publisher,
      releaseDate: dto.releaseDate,
      url: dto.url,
      summary: dto.summary,
    };
  }

  public static toPrismaUpdate(dto: UpdatePublicationDto) {
    return {
      name: dto.name,
      publisher: dto.publisher,
      releaseDate: dto.releaseDate,
      url: dto.url,
      summary: dto.summary,
    };
  }
}
