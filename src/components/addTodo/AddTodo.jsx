import React from 'react';

import './AddTodo.scss';

const AddTodo = () => {
  return (
    <form className="form">
    <input
      type="text"
      className="form__input"
      placeholder="Enter A New Task To Add"
    />
    <button
      type="button"
      className="form__add"
      onClick={() => {}}
    >
      Add New Task
    </button>
  </form>
  )
}

export default AddTodo;