import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default function Navbar() {
  return (
    <div>
        
      <nav >
        <ul style={{display:"flex",justifyContent:"space-around",margin:"2%"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
