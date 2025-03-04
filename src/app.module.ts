import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { AppDataSource } from '../db/data-source';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    ProdutosModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
