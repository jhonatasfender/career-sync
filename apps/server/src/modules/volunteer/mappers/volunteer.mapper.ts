import type { CreateVolunteerDto } from "../dto/create-volunteer.dto";
import type { UpdateVolunteerDto } from "../dto/update-volunteer.dto";

export class VolunteerMapper {
  public static toPrismaCreate(userId: string, dto: CreateVolunteerDto) {
    return {
      userId,
      organization: dto.organization,
      position: dto.position,
      startDate: dto.startDate,
      endDate: dto.endDate,
      summary: dto.summary,
      url: dto.url,
      location: dto.location,
    };
  }

  public static toPrismaUpdate(dto: UpdateVolunteerDto) {
    return {
      organization: dto.organization,
      position: dto.position,
      startDate: dto.startDate,
      endDate: dto.endDate,
      summary: dto.summary,
      url: dto.url,
      location: dto.location,
    };
  }
}
