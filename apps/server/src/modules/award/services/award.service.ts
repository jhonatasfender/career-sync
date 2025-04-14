import { Injectable, NotFoundException } from "@nestjs/common";
import { Award } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateAwardDto } from "../dto/create-award.dto";
import { UpdateAwardDto } from "../dto/update-award.dto";
import { AwardMapper } from "../mappers/award.mapper";

@Injectable()
export class AwardService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateAwardDto): Promise<Award> {
    await this.checkUser(userId);
    const data = AwardMapper.toPrismaCreate(userId, dto);
    return this.prisma.award.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Award[]> {
    await this.checkUser(userId);
    return this.prisma.award.findMany({ where: { userId } });
  }

  public async findOneById(userId: string, id: string): Promise<Award> {
    await this.checkUser(userId);
    const item = await this.prisma.award.findFirst({ where: { id, userId } });
    if (!item) throw new NotFoundException("Prêmio não encontrado");
    return item;
  }

  public async update(userId: string, id: string, dto: UpdateAwardDto): Promise<Award> {
    await this.findOneById(userId, id);
    const data = AwardMapper.toPrismaUpdate(dto);
    return this.prisma.award.update({ where: { id }, data });
  }

  public async delete(userId: string, id: string): Promise<{ message: string }> {
    await this.findOneById(userId, id);
    await this.prisma.award.delete({ where: { id } });
    return { message: "Prêmio excluído com sucesso" };
  }
}
