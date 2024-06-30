import React, {useState, useRef} from "react";

export const TodoForm = ({addTodo}) => {
  const [task, setTask] = useState('');
  // const taskRef = useRef('');

  const handleChange = (e) => {
    setTask(e.target.value)
    console.log('form', task);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task)
    setTask('');
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={handleChange}
        // ref={taskRef}
        value={task}
      />
      <button type="submit" className="todo-btn">Add task</button>
    </form>
  );
};
