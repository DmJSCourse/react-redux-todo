import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes';

export const addTodo = (id, text) => (
  {
      type: ADD_TODO,
      id,
      text,
  }
)

export const deleteTodo = (id) => (
  {
      type: DELETE_TODO,
      id
  }
)

export const toggleTodo = (id) => (
  {
      type: TOGGLE_TODO,
      id
  }
)

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
})