import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { EditTodoForm } from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";

// uuidv4();

export function TodoWrapper() {
  const [todoTasks, setTodoTasks] = useState([]);
  // const [editTaskMode, setEditTaskMode] = useState(false);

  const addTodo = (taskDescription) => {
    setTodoTasks([
      ...todoTasks,
      {
        id: uuidv4(),
        taskDescription: taskDescription,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const updateTask = (updatedTask) => {
    setTodoTasks(
      todoTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, taskDescription: updatedTask.taskDescription, isEditing: !updatedTask.isEditing } : task
      )
    );
  }

  const completeTask = (id) => {
    setTodoTasks(
      todoTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id) => {
    setTodoTasks(
      todoTasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todoTasks.map((task) =>
        task.isEditing ? (
          <EditTodoForm task={task} key={task.id} updateTask={updateTask} />
        ) : (
          <Todo
            task={task}
            key={task.id}
            completeTask={completeTask}
            editTask={editTask}
          />
        )
      )}
    </div>
  );
}
