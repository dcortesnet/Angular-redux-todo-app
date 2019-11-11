import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ToggleTodoAction, UpdateTodoAction, DeleteTodoAction } from 'src/app/actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @ViewChild('txtEdit', { static: false }) txtEdit: ElementRef;
  isEditing = false;

  constructor(
    private _store: Store<AppState>,
  ) { }

  changeComplete() {
    this.todo.isComplete = !!this.todo.isComplete;
    this._store.dispatch(new ToggleTodoAction(this.todo.id));
  }

  private changeIsEditing() {
    this.isEditing = !this.isEditing;
  }

  private focusInput() {
    this.txtEdit.nativeElement.focus();
  }

  editInput() {
    this.changeIsEditing();
    if (this.isEditing) {
      setTimeout(() => {
        this.focusInput();
      }, 1);
    }
  }

  endEditInput() {
    this.isEditing = false;
    this._store.dispatch(new UpdateTodoAction(this.todo.id, this.todo.text));
  }

  deleteTodo() {
    this._store.dispatch(new DeleteTodoAction(this.todo.id));
  }

}
