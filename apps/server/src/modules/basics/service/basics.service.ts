import { Injectable, NotFoundException } from "@nestjs/common";
import { Basics, Prisma } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateBasicsDto } from "../dto/create-basics.dto";
import { UpdateBasicsDto } from "../dto/update-basics.dto";
import { BasicsMapper } from "../mappers/basics.mapper";

@Injectable()
export class BasicsService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const exists = await this.prisma.user.count({ where: { id: userId } });
    if (!exists) throw new NotFoundException("Usuário não encontrado");
  }

  public findOneByUserId(userId: string): Promise<Basics | null> {
    return this.prisma.basics.findUnique({ where: { userId } });
  }

  public async save(userId: string, dto: CreateBasicsDto): Promise<Basics> {
    await this.checkUser(userId);

    const data = BasicsMapper.toPrismaCreate(userId, dto);

    return this.prisma.basics.upsert({
      where: { userId },
      create: data,
      update: data,
    });
  }

  public async update(userId: string, dto: UpdateBasicsDto): Promise<Basics> {
    await this.checkUser(userId);

    const updateData = BasicsMapper.toPrismaUpdate(dto);

    return this.prisma.basics.upsert({
      where: { userId },
      create: {
        userId,
        name: dto.name ?? "",
        ...updateData,
      } as Prisma.BasicsUncheckedCreateInput,
      update: updateData,
    });
  }

  public async delete(userId: string): Promise<{ message: string }> {
    await this.checkUser(userId);
    await this.prisma.basics.delete({ where: { userId } });
    return { message: "Dados básicos excluídos com sucesso" };
  }
}
