import { IsOptional, IsString } from "class-validator";

export class CreateReferenceDto {
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  public description?: string;

  @IsOptional()
  @IsString()
  public url?: string;

  @IsOptional()
  @IsString()
  public summary?: string;
}
