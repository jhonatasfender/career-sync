import { Injectable, NotFoundException } from "@nestjs/common";
import { Project } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateProjectDto } from "../dto/create-project.dto";
import { UpdateProjectDto } from "../dto/update-project.dto";
import { ProjectMapper } from "../mappers/project.mapper";

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateProjectDto): Promise<Project> {
    await this.checkUser(userId);
    const data = ProjectMapper.toPrismaCreate(userId, dto);
    return this.prisma.project.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Project[]> {
    await this.checkUser(userId);
    return this.prisma.project.findMany({ where: { userId } });
  }

  public async findOneById(userId: string, id: string): Promise<Project> {
    await this.checkUser(userId);
    const item = await this.prisma.project.findFirst({ where: { id, userId } });
    if (!item) throw new NotFoundException("Projeto não encontrado");
    return item;
  }

  public async update(userId: string, id: string, dto: UpdateProjectDto): Promise<Project> {
    await this.findOneById(userId, id);
    const data = ProjectMapper.toPrismaUpdate(dto);
    return this.prisma.project.update({ where: { id }, data });
  }

  public async delete(userId: string, id: string): Promise<{ message: string }> {
    await this.findOneById(userId, id);
    await this.prisma.project.delete({ where: { id } });
    return { message: "Projeto excluído com sucesso" };
  }
}
