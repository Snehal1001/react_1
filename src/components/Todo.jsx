import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function Todo({ task, deleteTask, editTask, completeTask }) {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => completeTask(task.id)}
      >
        {task.taskDescription}
      </p>
      <div>
        {!task.completed && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => editTask(task.id)}
          />
        )}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
}
