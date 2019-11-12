import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import * as fromFilterAction from '../actions/filter.actions';

@Pipe({
  name: 'filterTodoPipe'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filterType: fromFilterAction.validFilters): Todo[] {
    switch (filterType) {
      case 'todos':
        return todos;
      case 'completados':
        return todos.filter((todo: Todo) => todo.isComplete );
      case 'pendientes':
        return todos.filter((todo: Todo) => !todo.isComplete );
      default:
        return todos;
    }
  }
}
