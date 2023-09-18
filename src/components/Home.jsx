import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='md:w-full md:h-screen w-screen h-screen  bg-black text-white flex flex-col justify-center items-start'>
      <p className='  md:ml-[120px] ml-[60px] text-pink-500  text-sm font_rw_200'>Hi my name is , </p>
        <h1 className='md:text-6xl text-3xl font_rw_500 text-[#ACB7C2] md:ml-[120px] ml-[60px]'>Helen Sahith Sadhe</h1>
        <h1 className='md:text-6xl text-3xl font_rw_500 text-[#626970] md:ml-[120px] ml-[60px]'>I'm a Full Stack Developer.</h1>
        <p className=' md:ml-[120px] ml-[60px]   my-2  font_rw_200'>I'm a Software Developer passionate about transforming ideas into elegant code. </p>
        <button className='group md:ml-[120px] ml-[60px] my-2 border-2 p-3 flex flex-row justify-center items-center  hover:bg-pink-700 hover:border-pink-700'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
           <HiArrowNarrowRight className='ml-2'/>
          </span>
        </button>
    </div>
  )
}

export default Home