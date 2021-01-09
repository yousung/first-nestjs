import { Injectable } from '@nestjs/common';
import { Todo } from './todos.entity';

@Injectable()
export class TodosService {
  readonly todos: Todo[] = [];

  idex(): Todo[] {
    return this.todos;
  }

  show(): Todo {
    return null;
  }

  store(): Todo {
    return null;
  }

  update(): Todo {
    return null;
  }

  delete(): null {
    return null;
  }
}
