import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import type { Basics } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateBasicsDto } from "../dto/create-basics.dto";
import { UpdateBasicsDto } from "../dto/update-basics.dto";
import { BasicsMapper } from "../mappers/basics.mapper";

@Injectable()
export class BasicsService {
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

  public async create(userId: string, dto: CreateBasicsDto): Promise<Basics> {
    await this.checkUser(userId);

    const existing = await this.prisma.basics.findUnique({ where: { userId } });
    if (existing) {
      throw new BadRequestException("Já existe dados básicos para esse usuário");
    }

    const data = BasicsMapper.toPrismaCreate(userId, dto);

    return this.prisma.basics.create({ data });
  }

  public async findOneByUserId(userId: string): Promise<Basics> {
    const basics = await this.prisma.basics.findUnique({ where: { userId } });
    if (!basics) {
      throw new NotFoundException("Não há dados básicos para este usuário");
    }
    return basics;
  }

  public async update(userId: string, dto: UpdateBasicsDto): Promise<Basics> {
    await this.checkUser(userId);

    const existing = await this.prisma.basics.findUnique({ where: { userId } });
    if (!existing) {
      throw new NotFoundException("Não há dados básicos cadastrado para este usuário");
    }

    const data = BasicsMapper.toPrismaUpdate(dto);

    return this.prisma.basics.update({
      where: { userId },
      data,
    });
  }

  public async delete(userId: string): Promise<{ message: string }> {
    await this.checkUser(userId);

    await this.prisma.basics.delete({ where: { userId } });

    return { message: "Dados básicos excluídos com sucesso" };
  }
}
