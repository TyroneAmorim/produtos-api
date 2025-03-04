import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome',
    example: 'Fulano de Tal',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  nome: string;

  @ApiProperty({
    description: 'Email',
    example: 'teste@teste.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha de acesso',
    example: 'SenhaSegura#$18',
  })
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 8,
      minUppercase: 2,
      minSymbols: 1,
      minNumbers: 2,
    },
    {
      message:
        'O campo de senha precisa ter: 2 letras maiúsculas, 2 números, 2 símbolos e no mínimo 8 caracteres',
    },
  )
  senha: string;
}
