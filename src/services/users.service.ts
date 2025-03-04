import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user';
import { User } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from 'src/dto/update-user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.senha = String(await bcrypt.hash(createUserDto.senha, 10));

    const exists = await this.findByEmail(createUserDto.email);
    if (exists) throw new ConflictException('Usuário já existe');
    const user = this.repository.create(createUserDto);
    const userSaved = await this.repository.save(user);
    userSaved.senha = '';
    return userSaved;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email });
  }

  async update(
    codigo: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    await this.repository.update(codigo, updateUserDto);
    return this.repository.findOneBy({ codigo });
  }
}
