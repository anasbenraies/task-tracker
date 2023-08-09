import React, { useState } from 'react'

export default function AddTask({AddCard}) {
    const [text,setText]=useState("")
    const [day,setDay]=useState("")
    const [done,setDone]=useState(false)

    const onSubmit =async(e)=>{
      e.preventDefault();
      if(!text){
        alert("Please add Task name")
        return
      }
      AddCard({text:text,day:day,done:done})
      const res = await fetch(`http://localhost:5000/tasks`,{method:"POST",
      headers:{
        "Content-type":"application/json"
      } , 
      body:JSON.stringify({
        text:text,
        day:day,
        done:done
      })
      })
    }

  return (
    <form className='add-form' onSubmit={(e)=>onSubmit(e)}>
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder='add Task' onChange={(e)=>setText(e.target.value)}/>
      </div>

      <div className='form-control'>
        <label>Day & time</label>
        <input type="text" placeholder='add Task' onChange={(e)=>setDay(e.target.value)} />
      </div>

      <div className='form-control form-control-check'>
        <label>Done</label>
        <input type="checkbox" placeholder='add Task' onChange={(e)=>setDone(e.currentTarget.checked)}/>
      </div>

      <input type="submit" value="Save Task"className='btn btn-block'/>
    </form>
  )
}
