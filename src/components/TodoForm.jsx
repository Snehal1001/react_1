import React, { useState } from "react";

export function TodoForm({ addTodo }) {
  const [taskDescription, setTaskDescription] = useState("");

  const handleChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(taskDescription);
    setTaskDescription("");
  };

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          onChange={handleChange}
          value={taskDescription}
        />
        <button type="submit" className="todo-btn">
          Add task
        </button>
      </form>
    </>
  );
}
