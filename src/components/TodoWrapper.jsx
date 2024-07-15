import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import {EditTodoForm } from "./EditTodoForm"
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";

// uuidv4();

export function TodoWrapper() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [editTaskMode, setEditTaskMode] = useState(false);

  const addTodo = (task) => {
    setTodoTasks([
      ...todoTasks,
      { id: uuidv4(), task: task, completed: false, isEditing: false },
    ]);
  };

  const completeTask = (id) => {
    console.log(id);
    setTodoTasks(
      todoTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  }

  const editTask = (id) => {
    console.log(id);
    setEditTaskMode(true);
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      { todoTasks.map((task) => 
      editTaskMode ? 
      <EditTodoForm task={task} /> :
      <Todo
          task={task} key={task.id} completeTask={completeTask} editTask={editTask}
        />
      )}
    </div>
  );
};
