import React, { useState, useEffect } from "react";

export const EditTodoForm = ({ task, updateTask }) => {
  const [editTask, setEditTask] = useState(task);

  const taskChange = (changeTask) => {
    setEditTask((task) => ({
      ...task,
      taskDescription: changeTask,
    }));
  };

  useEffect(() => {
    setEditTask(task.taskDescription), [task.taskDescription];
  });

  const handleUpdateTask = (e) => {
    e.preventDefault();
    // updateTask(task);
    setEditTask((task) => ({
      ...task,
      isEditing: false,
    }));
    console.log('Edit', task);
  }

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
