import { Injectable, NotFoundException } from "@nestjs/common";
import { Reference } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateReferenceDto } from "../dto/create-reference.dto";
import { UpdateReferenceDto } from "../dto/update-reference.dto";
import { ReferenceMapper } from "../mappers/reference.mapper";

@Injectable()
export class ReferenceService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateReferenceDto): Promise<Reference> {
    await this.checkUser(userId);
    const data = ReferenceMapper.toPrismaCreate(userId, dto);
    return this.prisma.reference.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Reference[]> {
    await this.checkUser(userId);
    return this.prisma.reference.findMany({ where: { userId } });
  }

  public async findOneById(userId: string, id: string): Promise<Reference> {
    await this.checkUser(userId);
    const item = await this.prisma.reference.findFirst({ where: { id, userId } });
    if (!item) throw new NotFoundException("Referência não encontrada");
    return item;
  }

  public async update(userId: string, id: string, dto: UpdateReferenceDto): Promise<Reference> {
    await this.findOneById(userId, id);
    const data = ReferenceMapper.toPrismaUpdate(dto);
    return this.prisma.reference.update({ where: { id }, data });
  }

  public async delete(userId: string, id: string): Promise<{ message: string }> {
    await this.findOneById(userId, id);
    await this.prisma.reference.delete({ where: { id } });
    return { message: "Referência excluída com sucesso" };
  }
}
