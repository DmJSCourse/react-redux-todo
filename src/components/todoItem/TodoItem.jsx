import React from 'react';

import './TodoItem.scss'

const TodoItem = ({ text, completed, id }) => {
  console.log(completed, typeof completed)
  return (
    <li className="item" key={id}>
      <input
        type="checkbox"
        className="item__checkbox"
        id={id}
      />
      <p className="item__text">
        {text}
      </p>
      <button
        type="button"
        className="item__delete"
        onClick={() => {}}
      >
        ✕
      </button>
    </li>
  )
}

export default TodoItem;
