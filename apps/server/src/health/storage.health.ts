import { Injectable } from "@nestjs/common";
import { HealthIndicatorService } from "@nestjs/terminus";

import { StorageService } from "../storage/storage.service";

@Injectable()
export class StorageHealthIndicator {
  constructor(
    private readonly storageService: StorageService,
    private readonly health: HealthIndicatorService,
  ) {}

  public async isHealthy() {
    const indicator = this.health.check("storage");

    try {
      await this.storageService.bucketExists();
      return indicator.up();
    } catch (error: unknown) {
      return indicator.down({ message: (error as Error).message });
    }
  }
}
