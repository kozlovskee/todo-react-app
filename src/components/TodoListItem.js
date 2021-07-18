import React from 'react';

const TodoListItem = (props) => {

  const removeTodo = () => {
    props.removeTodo(props.todo.id);
  }

  return (
    <li>
        <p>{props.todo.text}</p>
        <button onClick={removeTodo}>Удалить</button>
    </li>
  );
}

export default TodoListItem;
