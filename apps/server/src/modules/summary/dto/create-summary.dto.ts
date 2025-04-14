import { IsString } from "class-validator";

export class CreateSummaryDto {
  @IsString()
  public content: string;
}
