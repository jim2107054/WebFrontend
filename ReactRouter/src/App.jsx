import React from 'react'
import './App.css'
import Nav from './components/Nav'
import {Outlet} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet/>
      <Nav />
    </div>
  )
}

export default App