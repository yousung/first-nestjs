import { Injectable, NotFoundException } from '@nestjs/common';
import { State, Todo } from './todos.entity';

@Injectable()
export class TodosService {
  readonly todos: Todo[] = [];
  todoId: number;

  // 모든 상품
  idex(): Todo[] {
    return this.todos;
  }

  // 상품 디테일
  show(id: number): Todo {
    const index = this.getTodo(id);
    return this.todos[index];
  }

  // 상품 등록
  store(todoData): Todo {
    const todo = {
      id: this.todoId++,
      title: todoData.title,
      context: todoData.context,
      state: State.READY,
    };
    this.todos.push(todo);

    return todo;
  }

  update(): Todo {
    return null;
  }

  delete(): null {
    return null;
  }

  getTodo(id: number): number {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (!index) {
      throw new NotFoundException('not found todo');
    }

    return index;
  }
}
