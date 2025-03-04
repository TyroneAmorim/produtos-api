import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from 'src/entities/produtos.entity';
import { CreateProdutoDto } from '../dto/create-produto';
import { UpdateProdutoDto } from '../dto/update-produto';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = this.repository.create(createProdutoDto);
    return this.repository.save(produto);
  }

  async findAll(): Promise<Produto[]> {
    return this.repository.find();
  }

  async findOne(codigo: string): Promise<Produto | null> {
    return this.repository.findOneBy({ codigo });
  }

  async update(
    codigo: string,
    updateProdutoDto: UpdateProdutoDto,
  ): Promise<Produto | null> {
    await this.repository.update(codigo, updateProdutoDto);
    return this.findOne(codigo);
  }

  async remove(codigo: string): Promise<DeleteResult> {
    return await this.repository.delete(codigo);
  }
}
