import type { CreateProfileDto } from "../dto/create-profile.dto";
import type { UpdateProfileDto } from "../dto/update-profile.dto";

export class ProfileMapper {
  public static toPrismaCreate(userId: string, dto: CreateProfileDto) {
    return {
      userId,
      network: dto.network,
      username: dto.username,
      url: dto.url,
      icon: dto.icon,
    };
  }

  public static toPrismaUpdate(dto: UpdateProfileDto) {
    return {
      network: dto.network,
      username: dto.username,
      url: dto.url,
      icon: dto.icon,
    };
  }
}
