import React from 'react'

const About = () => {
  return (
    <div className='bg-black md:w-full  w-screen h-screen text-white flex flex-col flex-nowrap justify-center items-center'>
      <div className='max-w-[1000px] md:w-full mb-2  grid grid-cols-2 gap-8'>
        <div className='pb-3 pl-2 sm:text-right'>
          <p className='text-4xl border-b-4 inline border-pink-600'>
            About
          </p>
        </div>
        <div></div>
      </div>
      <div className='max-w-[1000px] w-full py-3 sm:grid grid-cols-2 gap-5 justify-center items-center'>
        <div className='pb-3 pl-2 sm:text-right'>
          <p className='sm:text-3xl sm:text-right text-xl  text-gray-300 font-bold'>
             Hi.I'm Sahith, nice to meet you. Please take a look around!
          </p>
        </div>
        <div className='pb-3 pl-2'>
        <p className='font_rw_200 sm:text-xl text-start  '>
              I am passionate about building excellent software that improves the lives of those around me. As a current student, I'm passionate about honing my problem-solving skills. I approach challenges with an analytical mindset, eager to contribute innovative solutions to the software development field.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About