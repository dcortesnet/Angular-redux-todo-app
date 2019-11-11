import { Component, OnInit } from '@angular/core';
import * as fromFilterAction from '../../actions/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
@Component({
  selector: 'app-todo-controls',
  templateUrl: './todo-controls.component.html',
  styles: []
})
export class TodoControlsComponent implements OnInit {

  validFilters: fromFilterAction.validFilters[] = ['todos' , 'completados' , 'pendientes'];
  currentFilter: fromFilterAction.validFilters;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this._store.subscribe(state => {
      this.currentFilter = state.filter;
    });
  }

  changeFilter(filter: fromFilterAction.validFilters){
    this._store.dispatch(new fromFilterAction.FilterAction(filter));
  }

}
