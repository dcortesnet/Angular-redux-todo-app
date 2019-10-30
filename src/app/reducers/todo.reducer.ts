import * as fromTodoAction from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

const initalStateTodo: Todo[] = [];

export function todoReducer(state = initalStateTodo, action: fromTodoAction.TodoAction): Todo[] {
  switch (action.type) {

    case fromTodoAction.ADD_TODO:
      return _mapAddTodoToActionToState(state, action);

    default:
      return state;
  }
}

function _mapAddTodoToActionToState(state: any, action: fromTodoAction.TodoAction): Todo[] {
  const newTodo: Todo = new Todo(action.text);
  const cloneState = [...state, newTodo];
  return cloneState;
}
