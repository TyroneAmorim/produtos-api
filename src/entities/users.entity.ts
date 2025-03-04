import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  codigo: string;

  @Column({ length: 255 })
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;
}
