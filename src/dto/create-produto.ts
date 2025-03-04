import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateProdutoDto {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Produto 1',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Preco',
    example: '100.50',
  })
  @IsDecimal()
  preco: number;

  @ApiProperty({
    description: 'Código de barras',
    example: '1234567890123',
  })
  @IsString()
  codigo_barras: string;

  @ApiProperty({
    description: 'Quantidade',
    example: '1',
  })
  @IsDecimal()
  quantidade: number;
}
