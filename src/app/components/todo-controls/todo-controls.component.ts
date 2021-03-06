import { Component, OnInit } from '@angular/core';
import * as fromFilterAction from '../../actions/filter.actions';
import * as fromTodoAction from '../../actions/todo.actions';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-controls',
  templateUrl: './todo-controls.component.html',
  styles: []
})
export class TodoControlsComponent implements OnInit {

  validFilters: fromFilterAction.validFilters[] = ['todos' , 'completados' , 'pendientes'];
  currentFilter: fromFilterAction.validFilters;
  pendingTask: number;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this._store.subscribe(state => {
      this.currentFilter = state.filterType;
      this.pendingTask = this.countPendingTask(state.todos);
    });
  }

  changeFilter(filter: fromFilterAction.validFilters) {
    this._store.dispatch(new fromFilterAction.FilterAction(filter));
  }

  countPendingTask(todos: TodoModel[]): number {
    return todos.reduce((count: number, todo: TodoModel) => {
      if (!todo.isComplete) {
        count += 1;
      }
      return count;
    }, 0);
  }

  deleteAllTodo(){
    this._store.dispatch(new fromTodoAction.DeleteAllTodoAction());
  }

}
