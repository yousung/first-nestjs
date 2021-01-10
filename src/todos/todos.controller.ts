import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from './todos.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(readonly todoService: TodosService) {}

  @Get('/')
  index(): Promise<Todo[]> {
    return this.todoService.idex();
  }

  @Get(':id')
  show(@Param(':id') id: number): Promise<Todo> {
    return this.todoService.show(id);
  }

  // @Post()
  // store(@Body() todoBody): Todo {
  //   return this.todoService.store(todoBody);
  // }

  // @Patch(':id')
  // update(): Todo {
  //   return this.todoService.update();
  // }

  @Delete(':id')
  destroy(@Param(':id') id: number): any {
    return this.todoService.delete(id);
  }
}
