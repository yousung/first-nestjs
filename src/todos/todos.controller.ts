import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Todo } from './todos.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(readonly todoService: TodosService) {}
  @Get('/')
  index(): Todo[] {
    return this.todoService.idex();
  }

  @Get(':id')
  show(): Todo {
    return this.todoService.show();
  }

  @Post()
  store(): Todo {
    return this.todoService.store();
  }

  @Patch(':id')
  update(): Todo {
    return this.todoService.update();
  }

  @Delete(':id')
  destroy(): null {
    return this.todoService.delete();
  }
}
