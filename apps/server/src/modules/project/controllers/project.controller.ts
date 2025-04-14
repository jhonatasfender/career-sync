import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { TwoFactorGuard } from "../../auth/guards/two-factor.guard";
import { User } from "../../user/decorators/user.decorator";
import { CreateProjectDto } from "../dto/create-project.dto";
import { UpdateProjectDto } from "../dto/update-project.dto";
import { ProjectService } from "../service/project.service";

@ApiTags("Project")
@Controller("project")
@UseGuards(TwoFactorGuard)
export class ProjectController {
  constructor(private readonly service: ProjectService) {}

  @Get()
  public findAll(@User("id") userId: string) {
    return this.service.findAllByUserId(userId);
  }

  @Get(":id")
  public findOne(@User("id") userId: string, @Param("id") id: string) {
    return this.service.findOneById(userId, id);
  }

  @Post()
  public create(@User("id") userId: string, @Body() dto: CreateProjectDto) {
    return this.service.create(userId, dto);
  }

  @Patch(":id")
  public update(
    @User("id") userId: string,
    @Param("id") id: string,
    @Body() dto: UpdateProjectDto,
  ) {
    return this.service.update(userId, id, dto);
  }

  @Delete(":id")
  public delete(@User("id") userId: string, @Param("id") id: string) {
    return this.service.delete(userId, id);
  }
}
