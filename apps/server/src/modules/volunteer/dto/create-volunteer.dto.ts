import { Transform } from "class-transformer";
import { IsDate, IsOptional, IsString } from "class-validator";

export class CreateVolunteerDto {
  @IsString()
  public organization: string;

  @IsString()
  public position: string;

  @IsOptional()
  @Transform(({ value }) => (value ? new Date(value) : null))
  @IsDate()
  public startDate?: Date;

  @IsOptional()
  @Transform(({ value }) => (value ? new Date(value) : null))
  @IsDate()
  public endDate?: Date;

  @IsOptional()
  @IsString()
  public summary?: string;

  @IsOptional()
  @IsString({ each: true })
  public highlights?: string[];
}
