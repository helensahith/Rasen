import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Home from './components/Home'
import {FaBars,FaTimes} from 'react-icons/fa'
import About from './components/About'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />  
      <Home />
      <About />
      <Skills />
    </>
  )
}

export default App
