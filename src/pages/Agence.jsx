import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const ImageArray = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
    '/images/img7.jpg',
    '/images/img8.jpg',
    '/images/img9.jpg',
    '/images/img10.jpg',
    '/images/img11.jpg',
    '/images/img12.jpg',
    '/images/img13.jpg',
    '/images/img14.jpg',
  ]

  gsap.registerPlugin(ScrollTrigger)


  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        start: 'top 0%',
        end: 'top -190%',
        onUpdate: (elem) => {
          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.max(0, Math.floor(elem.progress * (ImageArray.length - 1)))
          } else {
            imageIndex = ImageArray.length - 1
          }
          imageRef.current.src = ImageArray[imageIndex]
        }
      }
    })
  }, [])

  return (
    <div>
      <div className="section1 py-1">
        <div ref={imageDivRef} className=' absolute overflow-hidden  object-cover lg:h-[20vw] h-[15vh] lg:w-[15vw] w-[11vh] lg:rounded-3xl rounded-xl lg:top-30 top-25 lg:left-[30vw] left-[15vh]'>
          <img ref={imageRef} className='h-full w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>

        <div className=' relative lg:mt-[55vh] mt-[28vh]'>
          <h1 className='text-center lg:text-[20vw] text-[18vw] uppercase leading-[17vw] font-[font2]'>SEVEN7Y
            TWO</h1>
        </div>

        <div className='relative lg:pl-[40%] pl-3'>
          <p className='lg:text-6xl text-2xl font-[font2] lg:leading-15 leading-5 lg:mt-0 mt-25'>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;    We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
          </p>
        </div>
      </div>

      <div className="section2 h-screen">

      </div>
    </div>
  )
}

export default Agence
