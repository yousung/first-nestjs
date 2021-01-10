import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State, Todo } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  // 모든 상품
  idex(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  // 상품 디테일
  show(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  // 상품 등록
  // store(todoData): Promise<Todo> {
  //   return this.todoRepository.create(todoData);
  // }

  // update(): Todo {
  //   return null;
  // }

  delete(id: number): any {
    return this.todoRepository.delete(id);
  }
}
