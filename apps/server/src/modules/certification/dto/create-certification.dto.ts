import { Transform } from "class-transformer";
import { IsDate, IsOptional, IsString } from "class-validator";

export class CreateCertificationDto {
  @IsString()
  public name: string;

  @IsOptional()
  @Transform(({ value }) => (value ? new Date(value) : null))
  @IsDate()
  public date?: Date;

  @IsString()
  public issuer: string;

  @IsOptional()
  @IsString()
  public summary?: string;
}
