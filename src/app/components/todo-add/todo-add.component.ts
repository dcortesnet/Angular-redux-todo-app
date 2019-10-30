import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { AddTodoAction } from 'src/app/actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInputTodo: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.txtInputTodo = new FormControl('', Validators.required);
  }

  addTodo() {
    if (this.txtInputTodo.invalid) {
      return;
    }
    this.store.dispatch(new AddTodoAction(this.txtInputTodo.value));
    this.txtInputTodo.reset();
  }

}
