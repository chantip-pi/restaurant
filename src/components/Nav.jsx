import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/menu">MENU</Link>
    </nav>
  )
}

export default Nav