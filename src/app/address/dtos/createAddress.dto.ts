import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateAddresDto {
  @IsString()
  @IsOptional()
  complement: string;

  @IsInt()
  numberAddress: number;

  @IsString()
  cep: string;

  @IsInt()
  cityId: number;
}
