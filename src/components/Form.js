import React from 'react';
import { useEffect, useRef } from 'react';
import './button.css'

const Form = (props) => {

  const inputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const addTodo = (e) => {
    e.preventDefault();
    const value = inputRef.current.value
    if(!value.trim()) {
      formRef.current.reset(); 
      inputRef.current.focus(); 
      return
    }
    props.addTodo({text: value, id: new Date().getTime()});
    formRef.current.reset()
    inputRef.current.focus();
  }


  return (
    <form ref={formRef} onSubmit={addTodo}>
      <input type="textfield" ref={inputRef} placeholder="Введите текст своей заметки" />
      <button className="add-btn" type="submite"><span>Add Task</span></button>
    </form>
  );
}

export default Form;
