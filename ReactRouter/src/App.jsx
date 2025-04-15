import React from 'react'
import './App.css'
import Nav from './components/Nav'
import {Outlet} from 'react-router-dom'
import Toggle from './Others/Toggle'

const App = () => {
  return (
    <div>
      {/* <Nav />
      <Outlet/>
      <Nav /> */}
      <Toggle/>
    </div>
  )
}

export default App