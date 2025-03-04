import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'Email',
    example: 'teste@teste.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Senha de acesso',
    example: 'SenhaSegura#18',
  })
  @IsString()
  @IsNotEmpty()
  senha: string;
}
