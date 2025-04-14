import { Injectable, NotFoundException } from "@nestjs/common";
import type { Language } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

import { CreateLanguageDto } from "../dto/create-language.dto";
import { UpdateLanguageDto } from "../dto/update-language.dto";
import { LanguageMapper } from "../mappers/language.mapper";

@Injectable()
export class LanguageService {
  constructor(private readonly prisma: PrismaService) {}

  private async checkUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException("Usuário não encontrado");
    }
  }

  public async create(userId: string, dto: CreateLanguageDto): Promise<Language> {
    await this.checkUser(userId);
    const data = LanguageMapper.toPrismaCreate(userId, dto);

    return this.prisma.language.create({ data });
  }

  public async findAllByUserId(userId: string): Promise<Language[]> {
    await this.checkUser(userId);
    return this.prisma.language.findMany({
      where: { userId },
      orderBy: { name: "asc" },
    });
  }

  public async findOneById(userId: string, languageId: string): Promise<Language> {
    await this.checkUser(userId);
    const language = await this.prisma.language.findFirst({
      where: { id: languageId, userId },
    });
    if (!language) {
      throw new NotFoundException("Idioma não encontrado para este usuário");
    }
    return language;
  }

  public async update(
    userId: string,
    languageId: string,
    dto: UpdateLanguageDto,
  ): Promise<Language> {
    await this.findOneById(userId, languageId);
    const data = LanguageMapper.toPrismaUpdate(dto);

    return this.prisma.language.update({
      where: { id: languageId },
      data,
    });
  }

  public async delete(userId: string, languageId: string): Promise<{ message: string }> {
    await this.findOneById(userId, languageId);
    await this.prisma.language.delete({ where: { id: languageId } });
    return { message: "Idioma excluído com sucesso" };
  }
}
