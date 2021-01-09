export class Todo {
  id: number;
  title: string;
  context: string;
  state: State;
}

export enum State {
  READY = 'ready',
  DONE = 'done',
  ING = 'ing',
}
