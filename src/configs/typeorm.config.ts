import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '260814',
  database: 'pgsql',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};  