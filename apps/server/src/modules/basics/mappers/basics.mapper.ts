import type { CreateBasicsDto } from "../dto/create-basics.dto";
import type { UpdateBasicsDto } from "../dto/update-basics.dto";

export class BasicsMapper {
  public static toPrismaCreate(userId: string, dto: CreateBasicsDto) {
    return {
      userId,
      name: dto.name,
      label: dto.label,
      image: dto.image,
      email: dto.email,
      phone: dto.phone,
      url: dto.url,
      summary: dto.summary,
      location: dto.location,
    };
  }

  public static toPrismaUpdate(dto: UpdateBasicsDto) {
    return {
      name: dto.name,
      label: dto.label,
      image: dto.image,
      email: dto.email,
      phone: dto.phone,
      url: dto.url,
      summary: dto.summary,
      location: dto.location,
    };
  }
}
