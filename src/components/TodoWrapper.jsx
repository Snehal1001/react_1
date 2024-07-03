import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";

// uuidv4();

export function TodoWrapper() {
  const [todoTasks, setTodoTasks] = useState([]);

  const addTodo = (task) => {
    setTodoTasks([
      ...todoTasks,
      { id: uuidv4(), task: task, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todoTasks.map((task, index) => 
        <Todo
          task={task.task} key={index}
        />
      )}
    </div>
  );
};
