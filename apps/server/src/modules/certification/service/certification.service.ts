import { Injectable, NotFoundException } from "@nestjs/common";
import { Certification } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateCertificationDto } from "../dto/create-certification.dto";
import { UpdateCertificationDto } from "../dto/update-certification.dto";
import { CertificationMapper } from "../mappers/certification.mapper";

@Injectable()
export class CertificationService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException("Usuário não encontrado");
  }

  public async create(userId: string, dto: CreateCertificationDto): Promise<Certification> {
    await this.checkUser(userId);
    const data = CertificationMapper.toPrismaCreate(userId, dto);
    return this.prisma.certification.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Certification[]> {
    await this.checkUser(userId);
    return this.prisma.certification.findMany({ where: { userId } });
  }

  public async findOneById(userId: string, id: string): Promise<Certification> {
    await this.checkUser(userId);
    const cert = await this.prisma.certification.findFirst({ where: { id, userId } });
    if (!cert) throw new NotFoundException("Certificação não encontrada");
    return cert;
  }

  public async update(
    userId: string,
    id: string,
    dto: UpdateCertificationDto,
  ): Promise<Certification> {
    await this.findOneById(userId, id);
    const data = CertificationMapper.toPrismaUpdate(dto);
    return this.prisma.certification.update({ where: { id }, data });
  }

  public async delete(userId: string, id: string): Promise<{ message: string }> {
    await this.findOneById(userId, id);
    await this.prisma.certification.delete({ where: { id } });
    return { message: "Certificação excluída com sucesso" };
  }
}
