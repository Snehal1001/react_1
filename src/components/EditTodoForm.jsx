import React, { useState } from "react";

export const EditTodoForm = ({ task, updateTask }) => {
  const [editTask, setEditTask] = useState(task);

  const taskChange = (changeTask) => {
    setEditTask({
      ...task,
      taskDescription: changeTask,
    });
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    updateTask(editTask);
  };

  const focusInput = () => {
    debugger;
    if (inputRef.current) {
    }
    inputRef.focus();
  };

  return (
    <form onSubmit={handleUpdateTask}>
      <input
        className="todo-input"
        type="text"
        defaultValue={editTask.taskDescription}
        onChange={(e) => taskChange(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Edit task
      </button>
    </form>
  );
};
