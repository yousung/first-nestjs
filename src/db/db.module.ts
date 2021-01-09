import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33060,
      username: 'root',
      password: 'secret',
      database: 'todos',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class DbModule {}
