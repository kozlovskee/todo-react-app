import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const list = props.todos.map((todo) => {
    return (
      <TodoListItem key={todo.id} todo={todo} removeTodo={props.removeTodo}/>
    );
  });

  return (
    <main>
      <ul>
        {list}
      </ul>
    </main>
  );
}

export default TodoList;
