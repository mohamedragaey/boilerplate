import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Topics'>Topics</Link></li>
      </ul>
    </div>
  )
}

export default NavBar