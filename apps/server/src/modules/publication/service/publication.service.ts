import { Injectable, NotFoundException } from "@nestjs/common";
import { Publication } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreatePublicationDto } from "../dto/create-publication.dto";
import { UpdatePublicationDto } from "../dto/update-publication.dto";
import { PublicationMapper } from "../mappers/publication.mapper";

@Injectable()
export class PublicationService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreatePublicationDto): Promise<Publication> {
    await this.checkUser(userId);
    const data = PublicationMapper.toPrismaCreate(userId, dto);
    return this.prisma.publication.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Publication[]> {
    await this.checkUser(userId);
    return this.prisma.publication.findMany({ where: { userId } });
  }

  public async findOneById(userId: string, id: string): Promise<Publication> {
    await this.checkUser(userId);
    const item = await this.prisma.publication.findFirst({ where: { id, userId } });
    if (!item) throw new NotFoundException("Publicação não encontrada");
    return item;
  }

  public async update(userId: string, id: string, dto: UpdatePublicationDto): Promise<Publication> {
    await this.findOneById(userId, id);
    const data = PublicationMapper.toPrismaUpdate(dto);
    return this.prisma.publication.update({ where: { id }, data });
  }

  public async delete(userId: string, id: string): Promise<{ message: string }> {
    await this.findOneById(userId, id);
    await this.prisma.publication.delete({ where: { id } });
    return { message: "Publicação excluída com sucesso" };
  }
}
