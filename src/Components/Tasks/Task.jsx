import React from 'react'
import {FaTimes} from 'react-icons/fa'

export default function Task({task,onDelete,onToggle}) {
    //const TaskStyle= task.done?"reminder task":"task"
  return (
    <div  className={`task ${task.done?"reminder":null}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>{task.text}  <FaTimes  onClick={()=>onDelete(task.id)} style={{color:'red', cursor:"pointer"}}/></h3>
      <p>{task.day}</p>
      {task.done?<p>Done</p>:<p>NotDone</p>}
    </div>
  )
}
