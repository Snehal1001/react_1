import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function Todo({task, deleteTask, editTask, completeTask}) {
  const editTask = () => {
    
  }
  return (
    <div className='Todo'>
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={()=> completeTask(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTask(task.id)} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}
