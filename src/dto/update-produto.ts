import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
  MaxLength,
  IsEAN,
  IsNumberString,
  Min,
} from 'class-validator';

export class UpdateProdutoDto {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Produto 1',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nome: string;

  @ApiProperty({
    description: 'Preco',
    example: '100.50',
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  preco: number;

  @ApiProperty({
    description: 'Código de barras',
    example: '1234567890123',
  })
  @MaxLength(13)
  @IsEAN({ message: 'O código de barras precisa ser válido' })
  @IsNumberString()
  @IsOptional()
  codigo_barras: string;

  @ApiProperty({
    description: 'Quantidade',
    example: '1',
  })
  @IsPositive()
  @IsNumber()
  @Min(1)
  @IsOptional()
  quantidade: number;
}
