import { combineReducers } from 'redux';

import { initialTodos } from '../initialTodos';

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes';
import { filters } from './filters';

let listReducer = (state=initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    case DELETE_TODO:
      return state.filter(todo =>
          todo.id !== action.id
        )
    case TOGGLE_TODO:
      return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
    default:
      return state;
  }
}

let filterReducer = (state=filters.SHOW_ALL, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}

const reducer = combineReducers({
  listReducer,
  filterReducer
})

export default reducer;
