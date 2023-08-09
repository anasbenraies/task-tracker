import React from 'react'
import { Button} from 'semantic-ui-react'


//creatring a custon button in which its features changes with the input
export default function CButton({color,inverted,text,onClick}) {

    

  return (
    <div>
        <Button onClick={onClick} color={color} inverted={inverted} >{text}</Button>
    </div>
      
  )
}
