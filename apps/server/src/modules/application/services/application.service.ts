import { Injectable } from "@nestjs/common";

import { CreateApplicationDto } from "../dto/create-application.dto";
import { CreateApplicationService } from "./create-application.service";

@Injectable()
export class ApplicationService {
  constructor(private readonly createApplication: CreateApplicationService) {}

  public async create(userId: string, dto: CreateApplicationDto) {
    return this.createApplication.execute(userId, dto);
  }
}
