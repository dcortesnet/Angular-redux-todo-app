import * as fromTodoAction from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

const initalStateTodo: Todo[] = [
  {id: 1, isComplete: false, text: 'Todo número 1'},
  {id: 2, isComplete: false, text: 'Todo número 2'},
  {id: 3, isComplete: false, text: 'Todo número 3'}
];

export function todoReducer(state = initalStateTodo, action: any): Todo[] {
  switch (action.type) {

    case fromTodoAction.ADD_TODO:
      return _mapAddTodoToActionToState(state, action);

    case fromTodoAction.TOGGLE_TODO:
      return _mapToogleTodoActionToState(state, action);
    default:
      return state;
  }
}

function _mapAddTodoToActionToState(state: Todo[], action: fromTodoAction.AddTodoAction): Todo[] {
  const newTodo: Todo = new Todo(action.text);
  const cloneState = [...state, newTodo];
  return cloneState;
}

function _mapToogleTodoActionToState(state: Todo[], action: fromTodoAction.ToggleTodoAction): Todo[] {
  return state.map((todo: Todo) => {
    if (todo.id === action.idTodo) {
      todo.isComplete = !todo.isComplete;
      return todo;
    } else {
      return todo;
    }
  });
}
