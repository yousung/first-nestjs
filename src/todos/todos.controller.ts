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
  index(): Todo[] {
    return this.todoService.idex();
  }

  @Get(':id')
  show(@Param(':id') id: number): Todo {
    return this.todoService.show(id);
  }

  @Post()
  store(@Body() todoBody): Todo {
    return this.todoService.store(todoBody);
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
