import { Injectable, NotFoundException } from "@nestjs/common";
import type { Skill } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateSkillDto } from "../dto/create-skill.dto";
import { UpdateSkillDto } from "../dto/update-skill.dto";
import { SkillMapper } from "../mappers/skill.mapper";

@Injectable()
export class SkillService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });
    if (!user) {
      throw new NotFoundException("Usuário não encontrado");
    }
  }

  public async create(userId: string, dto: CreateSkillDto): Promise<Skill> {
    await this.checkUser(userId);
    const data = SkillMapper.toPrismaCreate(userId, dto);

    return this.prisma.skill.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Skill[]> {
    await this.checkUser(userId);
    return this.prisma.skill.findMany({
      where: { userId },
      orderBy: { name: "asc" },
    });
  }

  public async findOneById(userId: string, skillId: string): Promise<Skill> {
    await this.checkUser(userId);
    const skill = await this.prisma.skill.findFirst({
      where: { id: skillId, userId },
    });
    if (!skill) {
      throw new NotFoundException("Skill não encontrada para este usuário");
    }
    return skill;
  }

  public async update(userId: string, skillId: string, dto: UpdateSkillDto): Promise<Skill> {
    await this.findOneById(userId, skillId);
    const data = SkillMapper.toPrismaUpdate(dto);

    return this.prisma.skill.update({
      where: { id: skillId },
      data,
    });
  }

  public async delete(userId: string, skillId: string): Promise<{ message: string }> {
    await this.findOneById(userId, skillId);
    await this.prisma.skill.delete({ where: { id: skillId } });
    return { message: "Skill excluída com sucesso" };
  }
}
