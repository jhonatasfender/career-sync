import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateCertificationDto } from "../dto/create-certification.dto";
import { UpdateCertificationDto } from "../dto/update-certification.dto";
import { CertificationService } from "../service/certification.service";

@ApiTags("Certification")
@Controller("certification")
@UseGuards(TwoFactorGuard)
export class CertificationController {
  constructor(private readonly service: CertificationService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.service.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") id: string) {
    return this.service.findOneById(userId, id);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateCertificationDto) {
    return this.service.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") id: string,
    @Body() dto: UpdateCertificationDto,
  ) {
    return this.service.update(userId, id, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") id: string) {
    return this.service.delete(userId, id);
  }
}
