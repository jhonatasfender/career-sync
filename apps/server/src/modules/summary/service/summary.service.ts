import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Summary } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateSummaryDto } from "../dto/create-summary.dto";
import { UpdateSummaryDto } from "../dto/update-summary.dto";
import { SummaryMapper } from "../mappers/summary.mapper";

@Injectable()
export class SummaryService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateSummaryDto): Promise<Summary> {
    await this.checkUser(userId);

    const exists = await this.prisma.summary.findUnique({ where: { userId } });
    if (exists) throw new BadRequestException("Resumo já cadastrado para este usuário");

    const data = SummaryMapper.toPrismaCreate(userId, dto);
    return this.prisma.summary.create({ data });
  }

  public async findOneByUserId(userId: string): Promise<Summary> {
    const summary = await this.prisma.summary.findUnique({ where: { userId } });
    if (!summary) throw new NotFoundException("Resumo não encontrado para este usuário");
    return summary;
  }

  public async update(userId: string, dto: UpdateSummaryDto): Promise<Summary> {
    await this.findOneByUserId(userId);
    const data = SummaryMapper.toPrismaUpdate(dto);
    return this.prisma.summary.update({ where: { userId }, data });
  }

  public async delete(userId: string): Promise<{ message: string }> {
    await this.findOneByUserId(userId);
    await this.prisma.summary.delete({ where: { userId } });
    return { message: "Resumo excluído com sucesso" };
  }
}
