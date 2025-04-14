import { Injectable, NotFoundException } from "@nestjs/common";
import { Volunteer } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateVolunteerDto } from "../dto/create-volunteer.dto";
import { UpdateVolunteerDto } from "../dto/update-volunteer.dto";
import { VolunteerMapper } from "../mappers/volunteer.mapper";

@Injectable()
export class VolunteerService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateVolunteerDto): Promise<Volunteer> {
    await this.checkUser(userId);
    const data = VolunteerMapper.toPrismaCreate(userId, dto);
    return this.prisma.volunteer.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Volunteer[]> {
    await this.checkUser(userId);
    return this.prisma.volunteer.findMany({ where: { userId } });
  }

  public async findOneById(userId: string, id: string): Promise<Volunteer> {
    await this.checkUser(userId);
    const item = await this.prisma.volunteer.findFirst({ where: { id, userId } });
    if (!item) throw new NotFoundException("Trabalho voluntário não encontrado");
    return item;
  }

  public async update(userId: string, id: string, dto: UpdateVolunteerDto): Promise<Volunteer> {
    await this.findOneById(userId, id);
    const data = VolunteerMapper.toPrismaUpdate(dto);
    return this.prisma.volunteer.update({ where: { id }, data });
  }

  public async delete(userId: string, id: string): Promise<{ message: string }> {
    await this.findOneById(userId, id);
    await this.prisma.volunteer.delete({ where: { id } });
    return { message: "Trabalho voluntário excluído com sucesso" };
  }
}
