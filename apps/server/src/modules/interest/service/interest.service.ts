import { Injectable, NotFoundException } from "@nestjs/common";
import { Interest } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateInterestDto } from "../dto/create-interest.dto";
import { UpdateInterestDto } from "../dto/update-interest.dto";
import { InterestMapper } from "../mappers/interest.mapper";

@Injectable()
export class InterestService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateInterestDto): Promise<Interest> {
    await this.checkUser(userId);
    const data = InterestMapper.toPrismaCreate(userId, dto);
    return this.prisma.interest.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Interest[]> {
    await this.checkUser(userId);
    return this.prisma.interest.findMany({ where: { userId } });
  }

  public async findOneById(userId: string, id: string): Promise<Interest> {
    await this.checkUser(userId);
    const item = await this.prisma.interest.findFirst({ where: { id, userId } });
    if (!item) throw new NotFoundException("Interesse não encontrado");
    return item;
  }

  public async update(userId: string, id: string, dto: UpdateInterestDto): Promise<Interest> {
    await this.findOneById(userId, id);
    const data = InterestMapper.toPrismaUpdate(dto);
    return this.prisma.interest.update({ where: { id }, data });
  }

  public async delete(userId: string, id: string): Promise<{ message: string }> {
    await this.findOneById(userId, id);
    await this.prisma.interest.delete({ where: { id } });
    return { message: "Interesse excluído com sucesso" };
  }
}
