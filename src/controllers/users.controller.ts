import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/create-user';
import { UpdateUserDto } from 'src/dto/update-user';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { UsersService } from 'src/services/users.service';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Cria um novo usuário' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Atualiza os dados de cadastro de um usuário' })
  @Put(':codigo')
  async update(
    @Param('codigo') codigo: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const updated = await this.userService.update(codigo, updateUserDto);
    if (updated) return updated;
    else throw new NotFoundException('Usuário não encontrado');
  }
}
