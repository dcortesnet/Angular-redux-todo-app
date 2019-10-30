import { Todo } from '../models/todo.model';

// Estado global de la aplicación
export interface AppState {
  todos: Todo[];
}
