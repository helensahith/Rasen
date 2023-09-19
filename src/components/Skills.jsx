import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Java from '../assets/java-logo-1.png'
import Reactimg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Oracle from '../assets/pngwing.com.png'


const Skills = () => {
  return (  
    <div className='bg-black md:w-full w-screen h-full flex flex-col min-w-full justify-center text-white'>
             <div className='ml-4'>
                <p className='font_rw_400 text-4xl text-white border-b-4 border-pink-600 inline'>Skills</p>
                <p className='font_rw_200 py-2 text-white mt-2 text-2xl'>//These are the technologies i've learned</p>
             </div>

             <div className='grid grid-cols-2 w-full text-center py-8 sm:grid-cols-4 gap-4'>
                <div className=' shadow-sm shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img src={HTML} className='w-20 mx-auto' />
                    <p className='my-2'>HTML</p>
                </div>
                <div className=' shadow-sm shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img src={CSS} className='w-20 mx-auto' />
                    <p className='my-2'>CSS</p>
                </div>
                <div className=' shadow-sm shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img src={JavaScript} className='w-20 mx-auto' />
                    <p className='my-2'>JavaScript</p>
                </div>
                <div className=' shadow-sm shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img src={Java} className='w-20 mx-auto' />
                    <p className='my-2'>Java</p>
                </div>
                <div className=' shadow-sm shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img src={Reactimg} className='w-20 mx-auto' />
                    <p className='my-2'>React</p>
                </div>
                <div className=' shadow-sm shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img src={Node} className='w-20 mx-auto' />
                    <p className='my-2'>NodeJs</p>
                </div>
                <div className=' shadow-sm shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img src={GitHub} className='w-20 mx-auto' />
                    <p className='my-2'>Github</p>
                </div>
                <div className=' shadow-sm shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img src={Tailwind} className='w-20 mx-auto' />
                    <p className='my-2'>Tailwind</p>
                </div>
             </div>
    </div>
  )
}

export default Skills