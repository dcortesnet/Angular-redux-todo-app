import { Action } from '@ngrx/store';

export const FILTER_TODO = '[FILTER] FILTER_TODO';

export type validFilters = 'todos' | 'completados' | 'pendientes';

export class FilterAction implements Action {
  type: string = FILTER_TODO;
  constructor(public filterType: validFilters) { }
}
