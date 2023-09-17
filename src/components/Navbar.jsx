import React from 'react'
import Logo from '../assets/logo.png'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from 'react'

export const Navbar = () => {
  const [menu,setMenu]=useState(false);
  return (
    <div className='sticky w-full h-[80px] flex justify-between items-center bg-black'>
        <div className=' flex flex-shrink-0'>
            <img src={Logo} width={80}></img>
        </div>

        <div>
            <ul className='hidden md:flex flex-row flex-nowrap justify-between align-middle font_rw_400 gap-10 px-3 mr-4 text-white'>
                <li className='hover:text-pink-500 cursor-pointer'>Home</li>
                <li className='hover:text-pink-500 cursor-pointer'>About</li>
                <li className='hover:text-pink-500 cursor-pointer'>Skills</li>
                <li className='hover:text-pink-500 cursor-pointer'>Projects</li>
            </ul>
        </div>

        <div className='mr-4 z-10 opacity-100 md:opacity-0 md:hidden ' onClick={()=>setMenu(!menu)}>
            {!menu ? <FaBars color='white'/> : <FaTimes color='white' />}
        </div>

        {menu? <ul className='animate md:hidden absolute h-screen w-full top-0 left-0 text-white bg-black flex flex-col flex-nowrap justify-evenly    items-center'>
                <li className='text-4xl font_rw_400 hover:text-pink-500 '>Home</li>
                <li className='text-4xl font_rw_400 hover:text-pink-500 '>About</li>
                <li className='text-4xl font_rw_400 hover:text-pink-500 '>Skills</li>
                <li className='text-4xl font_rw_400 hover:text-pink-500 '>Projects</li>
        </ul>:<></>}
    </div>
  )
}
