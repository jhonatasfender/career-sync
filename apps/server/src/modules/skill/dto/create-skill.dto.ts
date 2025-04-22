import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSkillDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsNumber()
  public level?: number;

  @IsOptional()
  @IsString()
  public description?: string;

  @IsOptional()
  public keywords?: string[];
}
