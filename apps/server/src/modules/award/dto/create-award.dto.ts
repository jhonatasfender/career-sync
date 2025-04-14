import { Transform } from "class-transformer";
import { IsOptional, IsString } from "class-validator";

export class CreateAwardDto {
  @IsString()
  public title: string;

  @IsOptional()
  @Transform(({ value }) => (value ? new Date(value) : null))
  public date?: Date;

  @IsOptional()
  @IsString()
  public awarder?: string;

  @IsOptional()
  @IsString()
  public summary?: string;
}
