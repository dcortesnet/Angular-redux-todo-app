import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ToggleAllTodoAction } from 'src/app/actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  isComplete = false;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  ToggleAll() {
    this.isComplete = !this.isComplete;
    this._store.dispatch(new ToggleAllTodoAction(this.isComplete));
  }

}
