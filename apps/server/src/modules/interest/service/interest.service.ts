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
    return this.prisma.interest.findMany({ where: { userId },
    orderBy: {name: "asc"}, });

  }

  public async findOneById(userId: string, intrestId: string): Promise<Interest> {
    await this.checkUser(userId);
    const item = await this.prisma.interest.findFirst({ where: { id: intrestId, userId } });
    if (!item) {
      throw new NotFoundException("Interesse não encontrado");}
    return item;
  }

  public async update(userId: string, intrestId: string, dto: UpdateInterestDto): Promise<Interest>
  {
    await this.findOneById(userId, intrestId);
    const data = InterestMapper.toPrismaUpdate(dto);

    return this.prisma.interest.update({ where: { id: intrestId },
    data });
  }


  public async delete(userId: string, intrestId: string): Promise<{ message: string }> {
    await this.findOneById(userId, intrestId);
    await this.prisma.interest.delete({ where: { id: intrestId } });
    return { message: "Interesse excluído com sucesso" };
  }
}
