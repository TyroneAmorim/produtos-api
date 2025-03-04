import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from 'src/controllers/produtos.controller';
import { Produto } from 'src/entities/produtos.entity';
import { ProdutosService } from 'src/services/produtos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
