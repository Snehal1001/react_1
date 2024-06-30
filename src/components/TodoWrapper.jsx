import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";

// uuidv4();

export const TodoWrapper = () => {
  const [todoTasks, setTodoTasks] = useState([]);

  const addTodo = (todo) => {
    console.log('todo', todo);
    setTodoTasks([
      ...todoTasks,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);

    console.log(todoTasks);
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todoTasks.map((task, index) => {
        <Todo 
        // task={todo} key={index}
         />
      })}
      <Todo />
    </div>
  );
};
