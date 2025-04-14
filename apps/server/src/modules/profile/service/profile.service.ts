import { Injectable, NotFoundException } from "@nestjs/common";
import { Profile } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateProfileDto } from "../dto/create-profile.dto";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { ProfileMapper } from "../mappers/profile.mapper";

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateProfileDto): Promise<Profile> {
    await this.checkUser(userId);
    const data = ProfileMapper.toPrismaCreate(userId, dto);
    return this.prisma.profile.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Profile[]> {
    await this.checkUser(userId);
    return this.prisma.profile.findMany({ where: { userId } });
  }

  public async findOneById(userId: string, id: string): Promise<Profile> {
    await this.checkUser(userId);
    const item = await this.prisma.profile.findFirst({ where: { id, userId } });
    if (!item) throw new NotFoundException("Perfil não encontrado");
    return item;
  }

  public async update(userId: string, id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findOneById(userId, id);
    const data = ProfileMapper.toPrismaUpdate(dto);
    return this.prisma.profile.update({ where: { id }, data });
  }

  public async delete(userId: string, id: string): Promise<{ message: string }> {
    await this.findOneById(userId, id);
    await this.prisma.profile.delete({ where: { id } });
    return { message: "Perfil excluído com sucesso" };
  }
}
