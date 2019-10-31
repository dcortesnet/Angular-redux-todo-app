import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoControlsComponent } from './components/todo-controls/todo-controls.component';
// ngrx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './reducers/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFilterComponent,
    TodoAddComponent,
    TodoControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      todos: todoReducer // Conectamos el objeto con el reducer encargado de realizar las operaciones
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
