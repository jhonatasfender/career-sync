import { IsOptional, IsString, IsUrl } from "class-validator";

export class CreateProfileDto {
  @IsString()
  public network: string;

  @IsString()
  public username: string;

  @IsUrl()
  public url: string;

  @IsOptional()
  @IsString()
  public icon?: string;
}
