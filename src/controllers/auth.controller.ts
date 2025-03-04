import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { LoginUserDto } from 'src/dto/login-user';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Faz autenticação na api' })
  @Post('login')
  async login(@Body() body: LoginUserDto) {
    const user = await this.authService.validateUser(body.email, body.senha);
    return this.authService.login(user);
  }
}
