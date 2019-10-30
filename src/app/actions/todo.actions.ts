import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] ADD_TODO';

export class AddTodoAction implements Action {
  type: string = ADD_TODO;
  constructor(public text: string) {}
}


export type TodoAction = AddTodoAction;
