import * as fromFilter from '../actions/filter.actions';

const initalStateFilter: fromFilter.validFilters = 'todos';

export function filterReducer(state = initalStateFilter, action: any): fromFilter.validFilters {
  switch (action.type) {
    case fromFilter.FILTER_TODO:
        return action.filter;
    default:
      return state;
  }
}
