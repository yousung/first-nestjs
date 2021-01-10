import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum State {
  READY = 'ready',
  DONE = 'done',
  ING = 'ing',
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ comment: '할일 제목' })
  title!: string;

  @Column({ comment: '할일 내용' })
  context!: string;

  @Column({
    type: 'enum',
    enum: State,
    default: State.READY,
    comment: '상태',
  })
  state!: State;

  @CreateDateColumn({ comment: '생성시간' })
  createdAt?: Date;

  @UpdateDateColumn({ comment: '수정시간' })
  updatedAt?: Date;

  @DeleteDateColumn({ comment: '삭제시간' })
  delatedAt?: Date;
}
