import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { TodoModel } from 'src/app/models/todo.model';
import * as fromFilterAction from '../../actions/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todoList: TodoModel[];
  filterType: fromFilterAction.validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.todoList = state.todos;
      this.filterType = state.filterType;
    });
  }

}
