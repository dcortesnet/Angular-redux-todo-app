import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import * as fromFilterAction from '../actions/filter.actions';

@Pipe({
  name: 'filterTodoPipe'
})
export class FilterPipe implements PipeTransform {

  transform(todos: TodoModel[], filterType: fromFilterAction.validFilters): TodoModel[] {
    switch (filterType) {
      case 'todos':
        return todos;
      case 'completados':
        return todos.filter((todo: TodoModel) => todo.isComplete );
      case 'pendientes':
        return todos.filter((todo: TodoModel) => !todo.isComplete );
      default:
        return todos;
    }
  }
}
