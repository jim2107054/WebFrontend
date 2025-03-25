import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <h2>Logo</h2>
        <ul>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>
    </nav>
  )
}

export default Nav