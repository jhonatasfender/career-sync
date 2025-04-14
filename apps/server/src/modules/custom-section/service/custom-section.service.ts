import { Injectable, NotFoundException } from "@nestjs/common";
import { CustomSection } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateCustomSectionDto } from "../dto/create-custom-section.dto";
import { UpdateCustomSectionDto } from "../dto/update-custom-section.dto";
import { CustomSectionMapper } from "../mappers/custom-section.mapper";

@Injectable()
export class CustomSectionService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateCustomSectionDto): Promise<CustomSection> {
    await this.checkUser(userId);
    const data = CustomSectionMapper.toPrismaCreate(userId, dto);
    return this.prisma.customSection.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<CustomSection[]> {
    await this.checkUser(userId);
    return this.prisma.customSection.findMany({ where: { userId } });
  }

  public async findOneById(userId: string, id: string): Promise<CustomSection> {
    await this.checkUser(userId);
    const section = await this.prisma.customSection.findFirst({ where: { id, userId } });
    if (!section) throw new NotFoundException("Seção personalizada não encontrada");
    return section;
  }

  public async update(
    userId: string,
    id: string,
    dto: UpdateCustomSectionDto,
  ): Promise<CustomSection> {
    await this.findOneById(userId, id);
    const data = CustomSectionMapper.toPrismaUpdate(dto);
    return this.prisma.customSection.update({ where: { id }, data });
  }

  public async delete(userId: string, id: string): Promise<{ message: string }> {
    await this.findOneById(userId, id);
    await this.prisma.customSection.delete({ where: { id } });
    return { message: "Seção personalizada excluída com sucesso" };
  }
}
