import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('todos').subscribe(todoList => this.todoList = todoList);
  }

}
