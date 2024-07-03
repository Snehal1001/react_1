import React, { useState } from "react";

export function TodoForm ({ addTodo }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task)
    setTask('');
  }

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          onChange={handleChange}
          value={task}
        />
        <button type="submit" className="todo-btn">Add task</button>
      </form>
    </>
  );
};
