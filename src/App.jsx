import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Home from './components/Home'
import {FaBars,FaTimes} from 'react-icons/fa'

function App() {

  return (
    <>
      <Navbar />  
      <Home />
    </>
  )
}

export default App
