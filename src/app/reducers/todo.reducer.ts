import * as fromTodoAction from '../actions/todo.actions';
import { Todo } from '../models/todo.model';

const initalStateTodo: Todo[] = [
  { id: 1, isComplete: false, text: 'Todo número 1' },
  { id: 2, isComplete: false, text: 'Todo número 2' },
  { id: 3, isComplete: false, text: 'Todo número 3' }
];

export function todoReducer(state = initalStateTodo, action: any): Todo[] {
  switch (action.type) {

    case fromTodoAction.ADD_TODO:
      return _mapAddTodoToActionToState(state, action);

    case fromTodoAction.TOGGLE_TODO:
      return _mapToogleTodoActionToState(state, action);

    case fromTodoAction.UPDATE_TODO:
      return _mapUpdateTodoActionToState(state, action);

    case fromTodoAction.DELETE_TODO:
      return _mapDeleteTodoActionToState(state, action);

    case fromTodoAction.TOGGLE_ALL_TODO:
      return _mapToggleAllTodoActionToState(state, action);

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
    }
    return todo;
  });
}

function _mapUpdateTodoActionToState(state: Todo[], action: fromTodoAction.UpdateTodoAction): Todo[] {
  return state.map((todo: Todo) => {
    if (todo.id === action.idTodo) {
      todo.text = action.text;
    }
    return todo;
  });
}

function _mapDeleteTodoActionToState(state: Todo[], action: fromTodoAction.DeleteTodoAction): Todo[] {
  return state.filter((todo: Todo) => todo.id !== action.idTodo );
}


function _mapToggleAllTodoActionToState(state: Todo[], action: fromTodoAction.ToggleAllTodoAction): Todo[]{
  return state.map((todo: Todo) => {
    todo.isComplete = action.isComplete;
    return todo;
  });
}