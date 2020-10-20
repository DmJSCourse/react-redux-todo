import React from 'react';

import TodoList from '../todoList/TodoList';
import AddTodo from '../addTodo/AddTodo';
import Filters from '../Filters/Filters';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__header-title">React-Redux Todo App</h1>
      </header>
      <AddTodo />
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;
