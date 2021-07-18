import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    console.log(id);
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(newTodos);
  }

  return (
    <div>
      <Header count={todos} />
      <TodoList todos={todos} removeTodo={removeTodo}/>
      <Form addTodo={addTodo}/>
    </div>
  );
}

export default App;
