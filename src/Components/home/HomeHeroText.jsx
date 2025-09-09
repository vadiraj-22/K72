import React from 'react'

const HomeHeroText = () => {
  return (
    <div className=' text-white font-[font1] lg:pt-3 pt-70  text-center'>
      <div className='lg:text-[10vw] text-[12vw] uppercase lg:leading-[9vw] leading-[12vw]  justify-center flex items-center'>The spark for</div>

      <div className='lg:text-[10vw] text-[12vw] uppercase lg:leading-[8vw] leading-[12vw]  justify-center flex items-start'>
        all
        <div className='lg:h-[7vw] lg:w-[16vw] h-[5vh] w-[20vw] rounded-full overflow-hidden '>
          <video 
            className='h-full w-full object-cover  rounded-full' 
            autoPlay 
            loop 
            muted  
            src="/videos/video.mp4"
          ></video>
        </div>
        things
      </div>

      <div className='text-[9.5vw] uppercase leading-[9vw] justify-center flex items-center'>creative</div>
    </div>
  )
}

export default HomeHeroText



