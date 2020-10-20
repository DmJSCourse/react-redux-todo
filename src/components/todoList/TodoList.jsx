import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from '../todoItem/TodoItem';

const TodoList = () => {
  return (
    <ul className="list">
      {
        useSelector(list => list.map(({ text, completed, id }) => (
          <TodoItem
            id={id}
            text={text}
            completed={completed}
          />
        )))
      }
    </ul>
  )
}

export default TodoList;