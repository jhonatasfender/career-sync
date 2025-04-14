import { IsOptional, IsString } from "class-validator";

export class CreateInterestDto {
  @IsString()
  public name: string;

  @IsOptional()
  public keywords?: string[];
}
