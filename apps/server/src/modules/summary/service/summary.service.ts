import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, Summary } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateSummaryDto } from "../dto/create-summary.dto";
import { UpdateSummaryDto } from "../dto/update-summary.dto";
import { SummaryMapper } from "../mappers/summary.mapper";

@Injectable()
export class SummaryService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const exists = await this.prisma.user.count({ where: { id: userId } });
    if (!exists) throw new NotFoundException("Usuário não encontrado");
  }

  public findOneByUserId(userId: string): Promise<Summary | null> {
    return this.prisma.summary.findUnique({ where: { userId } });
  }

  public async save(userId: string, dto: CreateSummaryDto): Promise<Summary> {
    await this.checkUser(userId);

    const data = SummaryMapper.toPrismaCreate(userId, dto);

    return this.prisma.summary.upsert({
      where: { userId },
      create: data,
      update: data,
    });
  }

  public async update(userId: string, dto: UpdateSummaryDto): Promise<Summary> {
    await this.checkUser(userId);

    const data = SummaryMapper.toPrismaUpdate(dto);

    return this.prisma.summary.upsert({
      where: { userId },
      create: { userId, ...data } as Prisma.SummaryUncheckedCreateInput,
      update: data,
    });
  }

  public async delete(userId: string): Promise<{ message: string }> {
    await this.checkUser(userId);
    await this.prisma.summary.deleteMany({ where: { userId } });
    return { message: "Resumo excluído com sucesso" };
  }
}
