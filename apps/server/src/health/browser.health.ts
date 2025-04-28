import { Injectable } from "@nestjs/common";
import { HealthIndicatorService } from "@nestjs/terminus";

import { PrinterService } from "../printer/printer.service";

@Injectable()
export class BrowserHealthIndicator {
  constructor(
    private readonly printerService: PrinterService,
    private readonly healthIndicatorService: HealthIndicatorService,
  ) {}

  public async isHealthy() {
    const indicator = this.healthIndicatorService.check("browser");

    try {
      const version = await this.printerService.getVersion();
      return indicator.up({ version });
    } catch (error) {
      return indicator.down({ message: error.message });
    }
  }
}
