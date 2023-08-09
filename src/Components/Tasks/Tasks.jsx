import React from 'react'
import Task from './Task'



export default function Tasks({Tasks,onDelete,onToggle}) {
 
 
  return (
    <div>
      {Tasks.map((task)=>(<Task task={task} onToggle={onToggle} onDelete={onDelete}/>))}
    </div>
  )
}
