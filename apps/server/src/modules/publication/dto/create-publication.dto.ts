import { Transform } from "class-transformer";
import { IsDate, IsOptional, IsString, IsUrl } from "class-validator";

export class CreatePublicationDto {
  @IsString()
  public name: string;

  @IsString()
  public publisher: string;

  @IsOptional()
  @Transform(({ value }) => (value ? new Date(value) : null))
  @IsDate()
  public releaseDate?: Date;

  @IsOptional()
  @IsUrl()
  public url?: string;

  @IsOptional()
  @IsString()
  public summary?: string;
}
