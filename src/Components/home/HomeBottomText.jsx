import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className=' text-white font-[font2] flex justify-center items-center gap-2'>
      <p className='absolute font-[font1] lg:w-80 w-[70%]  right-0  lg:bottom-40 bottom-20 lg:text-[2vh] text-[1.9vh] lg:leading-relaxed '> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>

      <div className=' hover:border-[#D3FD50] hover:text-[#D3FD50] lg:pt-3 border-3   p-0  rounded-full lg:px-12 px-4 border-white uppercase'>
         <Link className=' lg:leading-[6.5vw] leading-[11vw] lg:text-[6.5vw] text-[8.5vw] ' to='/projects'>Work</Link>
      </div>
     
     <div className=' hover:border-[#D3FD50] hover:text-[#D3FD50] lg:pt-3 border-3   p-0  rounded-full lg:px-12 px-4 border-white uppercase'>
        <Link className='lg:leading-[6.5vw] leading-[11vw] lg:text-[6.5vw] text-[8.5vw] 'to='/agence'>Agency</Link>
     </div>
      
    </div>
  )
}

export default HomeBottomText
