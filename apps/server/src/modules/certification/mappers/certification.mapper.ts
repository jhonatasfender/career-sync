import type { CreateCertificationDto } from "../dto/create-certification.dto";
import type { UpdateCertificationDto } from "../dto/update-certification.dto";

export class CertificationMapper {
  public static toPrismaCreate(userId: string, dto: CreateCertificationDto) {
    return {
      userId,
      name: dto.name,
      date: dto.date,
      issuer: dto.issuer,
      summary: dto.summary,
      website: dto.website,
    };
  }

  public static toPrismaUpdate(dto: UpdateCertificationDto) {
    return {
      name: dto.name,
      date: dto.date,
      issuer: dto.issuer,
      summary: dto.summary,
      website: dto.website,
    };
  }
}
