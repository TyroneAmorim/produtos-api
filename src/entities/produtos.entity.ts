import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn('uuid')
  codigo: string;

  @Column({ length: 255 })
  nome: string;

  @Column({ nullable: true })
  codigo_barras: string;

  @Column('decimal', { precision: 10, scale: 3 })
  quantidade: number;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;
}
