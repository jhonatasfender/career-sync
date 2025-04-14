import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreatePublicationDto } from "../dto/create-publication.dto";
import { UpdatePublicationDto } from "../dto/update-publication.dto";
import { PublicationService } from "../service/publication.service";

@ApiTags("Publication")
@Controller("publication")
@UseGuards(TwoFactorGuard)
export class PublicationController {
  constructor(private readonly service: PublicationService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.service.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") id: string) {
    return this.service.findOneById(userId, id);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreatePublicationDto) {
    return this.service.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") id: string,
    @Body() dto: UpdatePublicationDto,
  ) {
    return this.service.update(userId, id, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") id: string) {
    return this.service.delete(userId, id);
  }
}
