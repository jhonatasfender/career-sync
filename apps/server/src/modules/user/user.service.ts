import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { ErrorMessage } from "@reactive-resume/utils";
import { PrismaService } from "nestjs-prisma";

import { StorageService } from "@/server/storage/storage.service";

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  public async findOneById(id: string) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id },
      include: { secrets: true },
    });

    if (!user.secrets) {
      throw new InternalServerErrorException(ErrorMessage.SecretsNotFound);
    }

    return user;
  }

  public async findOneByIdentifier(identifier: string) {
    const user = await (async (identifier: string) => {
      // First, find the user by email
      const user = await this.prisma.user.findUnique({
        where: { email: identifier },
        include: { secrets: true },
      });

      // If the user exists, return it
      if (user) return user;

      // Otherwise, find the user by username
      // If the user doesn't exist, throw an error
      return this.prisma.user.findUnique({
        where: { username: identifier },
        include: { secrets: true },
      });
    })(identifier);

    return user;
  }

  public async findOneByIdentifierOrThrow(identifier: string) {
    const user = await (async (identifier: string) => {
      // First, find the user by email
      const user = await this.prisma.user.findUnique({
        where: { email: identifier },
        include: { secrets: true },
      });

      // If the user exists, return it
      if (user) return user;

      // Otherwise, find the user by username
      // If the user doesn't exist, throw an error
      return this.prisma.user.findUniqueOrThrow({
        where: { username: identifier },
        include: { secrets: true },
      });
    })(identifier);

    return user;
  }

  public async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data, include: { secrets: true } });
  }

  public async updateByEmail(email: string, data: Prisma.UserUpdateArgs["data"]) {
    return this.prisma.user.update({ where: { email }, data });
  }

  public async updateByResetToken(resetToken: string, data: Prisma.SecretsUpdateArgs["data"]) {
    await this.prisma.secrets.update({ where: { resetToken }, data });
  }

  public async deleteOneById(id: string) {
    await this.storageService.deleteFolder(id);

    return this.prisma.user.delete({ where: { id } });
  }
}
