import { Injectable, NotFoundException } from "@nestjs/common";
import type { Experience } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateExperienceDto } from "../dto/create-experience.dto";
import { UpdateExperienceDto } from "../dto/update-experience.dto";
import { ExperienceMapper } from "../mappers/experience.mapper";

@Injectable()
export class ExperienceService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId }, select: { id: true } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateExperienceDto): Promise<Experience> {
    await this.checkUser(userId);
    const data = ExperienceMapper.toPrismaCreate(userId, dto);
    return this.prisma.experience.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Experience[]> {
    await this.checkUser(userId);
    return this.prisma.experience.findMany({ where: { userId }, orderBy: { startDate: "desc" } });
  }

  public async findOneById(userId: string, experienceId: string): Promise<Experience> {
    await this.checkUser(userId);
    const experience = await this.prisma.experience.findFirst({
      where: { id: experienceId, userId },
    });
    if (!experience) throw new NotFoundException("Experiência não encontrada com esse ID");
    return experience;
  }

  public async update(
    userId: string,
    experienceId: string,
    dto: UpdateExperienceDto,
  ): Promise<Experience> {
    await this.findOneById(userId, experienceId);
    const data = ExperienceMapper.toPrismaUpdate(dto);
    return this.prisma.experience.update({ where: { id: experienceId }, data });
  }

  public async delete(userId: string, experienceId: string): Promise<{ message: string }> {
    await this.findOneById(userId, experienceId);
    await this.prisma.experience.delete({ where: { id: experienceId } });
    return { message: "Experiência excluída com sucesso" };
  }
}
