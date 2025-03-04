import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { User } from 'src/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(senha, user.senha))) {
      return user;
    }
    throw new UnauthorizedException('Credenciais inválidas');
  }

  login(user: User) {
    const payload = { codigo: user.codigo, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
