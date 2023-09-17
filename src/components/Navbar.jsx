import React from 'react'
import Logo from '../assets/logo.png'
import {FaBars,FaTimes} from 'react-icons/fa'


export const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-black'>
        <div>
            <img src={Logo} width={80}></img>
        </div>

        <div>
            <ul className='flex flex-row flex-nowrap justify-between align-middle font_rw_400 gap-10 px-3 mr-4 text-white'>
                <li className='hover:text-pink-500 cursor-pointer'>Home</li>
                <li className='hover:text-pink-500 cursor-pointer'>About</li>
                <li className='hover:text-pink-500 cursor-pointer'>Skills</li>
                <li className='hover:text-pink-500 cursor-pointer'>Projects</li>
            </ul>
        </div>

        <div className=' hidden'>
            <FaBars></FaBars>
        </div>

        <div className=' hidden'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>

            </ul>
        </div>


    </div>
  )
}
