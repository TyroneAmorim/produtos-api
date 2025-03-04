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
    console.log(user);
    if (user && (await bcrypt.compare(senha, user.senha))) {
      const { ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Credenciais inválidas');
  }

  login(user: User) {
    const payload = { sub: user.codigo, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
