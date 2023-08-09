
import "./Header.css";

import CButton from "../CButton/CButton"
export default function Header({title,onAdd,showTasks}) {
   

    const sayHello=()=>{
        console.log("Button Working")
    }
    const AddTask="Add Task"
    const HideTask="Hide Task"

  return (
    <header className='header'>
      <h1>{title}</h1>
      <CButton inverted={true} color={showTasks?"red":"green"} text={showTasks?"Hide Tasks":"show Tasks"} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps={
    title:"add Title"
}