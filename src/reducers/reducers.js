import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/actions';

import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters;

function todos(state = [], action) {
  switch (action.type){
    case ADD_TODO:
      return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
          if(index === action.index) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        });
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoAppCombined = combineReducers({
  visibilityFilter,
  todos
});

export default todoAppCombined;
