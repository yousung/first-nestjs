import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [TodosModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
