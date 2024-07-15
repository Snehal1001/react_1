import React, { useState, useEffect } from 'react'

export const EditTodoForm = ({task}) => {
  const [editTask, setEditTask] = useState(task.task);
  const taskChange = (e) => {
    setEditTask(e.target.value);
  }

  useEffect(() => {
    setEditTask(task.task),[task.task]
  })

  return (
    <>
      <input className='todo-input' type="text" defaultValue={editTask} onChange={taskChange} />
      <button type="submit" className="todo-btn">Edit task</button>
    </>
  )
}
