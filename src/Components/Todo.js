import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash  } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete,dark}) => {
 
  return (
    <Tooltip title="Click on text to complete" placement="bottom-start">
    <div className={`${dark && 'Todo-dark' } ${task.completed && 'completed'} Todo`}>
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <Tooltip title="Edit">
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
</Tooltip>
       
        
        <Tooltip title="Delete">
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
</Tooltip>
        </div>
    </div>
</Tooltip>
  )
}
