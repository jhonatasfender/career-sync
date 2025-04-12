import { Injectable, NotFoundException } from "@nestjs/common";
import type { Education } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateEducationDto } from "../dto/create-education.dto";
import { UpdateEducationDto } from "../dto/update-education.dto";
import { EducationMapper } from "../mappers/education.mapper";

@Injectable()
export class EducationService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId }, select: { id: true } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateEducationDto): Promise<Education> {
    await this.checkUser(userId);
    const data = EducationMapper.toPrismaCreate(userId, dto);
    return this.prisma.education.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Education[]> {
    await this.checkUser(userId);
    return this.prisma.education.findMany({ where: { userId }, orderBy: { startDate: "desc" } });
  }

  public async findOneById(userId: string, educationId: string): Promise<Education> {
    await this.checkUser(userId);
    const education = await this.prisma.education.findFirst({ where: { id: educationId, userId } });
    if (!education) throw new NotFoundException("Formação não encontrada para este usuário");
    return education;
  }

  public async update(
    userId: string,
    educationId: string,
    dto: UpdateEducationDto,
  ): Promise<Education> {
    await this.findOneById(userId, educationId);
    const data = EducationMapper.toPrismaUpdate(dto);
    return this.prisma.education.update({ where: { id: educationId }, data });
  }

  public async delete(userId: string, educationId: string): Promise<{ message: string }> {
    await this.findOneById(userId, educationId);
    await this.prisma.education.delete({ where: { id: educationId } });
    return { message: "Formação excluída com sucesso" };
  }
}
