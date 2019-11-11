import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] ADD_TODO';
export const TOGGLE_TODO = '[TODO] TOGGLE_TODO';
export const UPDATE_TODO = '[TODO] UPDATE_TODO';

export class AddTodoAction implements Action {
  type: string = ADD_TODO;
  constructor(public text: string) {}
}

export class ToggleTodoAction implements Action {
  type: string = TOGGLE_TODO;
  constructor(public idTodo: number) {}
}

export class UpdateTodoAction implements Action {
  type: string = UPDATE_TODO;
  constructor(public idTodo: number, public text: string) {};
}

export type TodoAction = AddTodoAction | ToggleTodoAction;
