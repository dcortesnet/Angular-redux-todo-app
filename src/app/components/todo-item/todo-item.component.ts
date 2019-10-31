import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @ViewChild('txtEdit', { static: false }) txtEdit: ElementRef;
  isEditing = false;

  constructor() { }

  changeComplete() {
    this.todo.isComplete = !this.todo.isComplete;
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
  }

}
