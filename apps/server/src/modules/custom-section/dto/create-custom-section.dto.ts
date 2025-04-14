import { IsOptional, IsString } from "class-validator";

export class CreateCustomSectionDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public description?: string;
}
