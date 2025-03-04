import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProdutosService } from 'src/services/produtos.service';
import { CreateProdutoDto } from '../dto/create-produto';
import { UpdateProdutoDto } from '../dto/update-produto';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.produtosService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':codigo')
  async findOne(@Param('codigo') codigo: string) {
    const produto = await this.produtosService.findOne(codigo);
    if (produto) return produto;
    else throw new NotFoundException('Produto não encontrado');
  }

  @UseGuards(JwtAuthGuard)
  @Put(':codigo')
  async update(
    @Param('codigo') codigo: string,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ) {
    const updated = await this.produtosService.update(codigo, updateProdutoDto);
    if (updated) return updated;
    else throw new NotFoundException('Produto não encontrado');
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':codigo')
  async remove(@Param('codigo') codigo: string) {
    const deleted = await this.produtosService.remove(codigo);
    if (!deleted.affected)
      throw new NotFoundException('Produto não encontrado');
  }
}
