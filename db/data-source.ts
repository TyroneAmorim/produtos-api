import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
  entities: [__dirname + '/../src/**/*.entity.{ts,js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/*.{ts,js}'],
});
