import * as fromTodoAction from '../actions/todo.actions';
import { TodoModel } from '../models/todo.model';

const initalStateTodo: TodoModel[] = [
  { id: 1, isComplete: false, text: 'Tarea 1' },
  { id: 2, isComplete: false, text: 'Tarea 2' },
  { id: 3, isComplete: false, text: 'Tarea 3' }
];

export function todoReducer(state = initalStateTodo, action: any): TodoModel[] {
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

    case fromTodoAction.DELETE_ALL_TODO:
      return _mapDeleteAllTodoActionToState(state, action);

    default:
      return state;
  }
}

function _mapAddTodoToActionToState(state: TodoModel[], action: fromTodoAction.AddTodoAction): TodoModel[] {
  const newTodo: TodoModel = new TodoModel(action.text);
  const cloneState = [...state, newTodo];
  return cloneState;
}

function _mapToogleTodoActionToState(state: TodoModel[], action: fromTodoAction.ToggleTodoAction): TodoModel[] {
  return state.map((todo: TodoModel) => {
    if (todo.id === action.idTodo) {
      todo.isComplete = !todo.isComplete;
    }
    return todo;
  });
}

function _mapUpdateTodoActionToState(state: TodoModel[], action: fromTodoAction.UpdateTodoAction): TodoModel[] {
  return state.map((todo: TodoModel) => {
    if (todo.id === action.idTodo) {
      todo.text = action.text;
    }
    return todo;
  });
}

function _mapDeleteTodoActionToState(state: TodoModel[], action: fromTodoAction.DeleteTodoAction): TodoModel[] {
  return state.filter((todo: TodoModel) => todo.id !== action.idTodo );
}


function _mapToggleAllTodoActionToState(state: TodoModel[], action: fromTodoAction.ToggleAllTodoAction): TodoModel[] {
  return state.map((todo: TodoModel) => {
    todo.isComplete = action.isComplete;
    return todo;
  });
}


function _mapDeleteAllTodoActionToState(state: TodoModel[], action: fromTodoAction.DeleteAllTodoAction): TodoModel[] {
  return [];
}
