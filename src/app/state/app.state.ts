import { Todo } from '../models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodoReducers from '../reducers/todo.reducer';
import * as fromFilterReducers from '../reducers/filter.reducer';
import * as fromFilterAction from '../actions/filter.actions';

// Estado global de la aplicación
export interface AppState {
  todos: Todo[];
  filter: fromFilterAction.validFilters;
}

// Combinación de reducers
export const appCombineReducers: ActionReducerMap<AppState> = {
  todos: fromTodoReducers.todoReducer,
  filter: fromFilterReducers.filterReducer
};
