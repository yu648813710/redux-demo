import React from 'react'
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import FilterLink from './FilterLink';
const App = () => (
  <div>
    <FilterLink />
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
