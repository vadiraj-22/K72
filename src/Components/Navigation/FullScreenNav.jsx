import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {
    const fullNavLinkRef = useRef(null)
    const fullScreenRef = useRef(null)
    const navigate = useNavigate()

    const [navOpen, setnavOpen] = useContext(NavbarContext)
  


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.2
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none'
        })
    }

    useGSAP(function () {

        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }

    }, [navOpen])

    return (
        <div ref={fullScreenRef} className=' fullscreennav hidden text-white z-30 overflow-hidden h-screen w-full absolute  '>
            <div className='h-screen w-full fixed '>
                <div className=' h-screen w-full flex '>
                    <div className=' stairing w-1/5 h-full bg-black'></div>
                    <div className=' stairing w-1/5 h-full bg-black'></div>
                    <div className=' stairing w-1/5 h-full bg-black'></div>
                    <div className=' stairing w-1/5 h-full bg-black'></div>
                    <div className=' stairing w-1/5 h-full bg-black'></div>
                </div>
            </div>

            <div ref={fullNavLinkRef} className='relative'>
                <div className='navlink flex w-full justify-between items-start p-2.5 '>
                    <div 
                        className=' lg:w-29 w-27 lg:pl-0 pl-1 cursor-pointer'
                        onClick={() => {
                            navigate('/')
                            setnavOpen(false)
                        }}
                    >
                        <svg className='w-full ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div onClick={() => {
                        setnavOpen(false)
                    }} className='h-29 w-29  relative'>
                        <div className='lg:h-40 h-33 w-0.5 absolute lg:left-0 left-5 -rotate-45 origin-top bg-white'></div>
                        <div className='lg:h-40 h-33 w-0.5 absolute  right-0  rotate-45 origin-top bg-white '></div>
                    </div>
                </div>

                <div id='allLinks' className='lg:pt-0  pt-25 ' >
                    <div 
                        className='link origin-top relative  border-y-1 border-white/40 cursor-pointer'
                        onClick={() => {
                            navigate('/projects')
                            setnavOpen(false)
                        }}
                    >
                        <h1 className='uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center leading-[0.8] lg:pt-5 pt-2'>Work</h1>
                        <div className=' moveLink absolute flex top-0 text-black bg-[#D3FD50] '>
                            <div className='moveX flex gap-5  items-center'>
                                <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[13.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>See everything </h2>
                                <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="/images/nav1.jpg" alt="" />
                                <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[13.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2   lg:pt-5 pt-0'>See everything </h2>
                                <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="/images/nav2.jpg" alt="" />
                            </div>
                            <div className='moveX flex gap-5  items-center'>
                                <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[13.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>See everything </h2>
                                <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[13.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>See everything </h2>
                                <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    className='link origin-top relative  border-y-1 border-white/40 cursor-pointer'
                    onClick={() => {
                        navigate('/agence')
                        setnavOpen(false)
                    }}
                >
                    <h1 className='uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center leading-[0.8] lg:pt-5 pt-2'>agency</h1>
                    <div className=' moveLink absolute flex top-0 text-black bg-[#D3FD50] '>
                        <div className='moveX flex gap-5 items-center'>
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>know us </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>know us </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/teamMembers/PLP_640x280-640x290.jpg" alt="" />
                        </div>
                        <div className='moveX flex gap-5 items-center'>
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>know us </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg" alt="" />
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>know us </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/teamMembers/PLP_640x280-640x290.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='link origin-top relative  border-y-1 border-white/40'>
                    <h1 className='uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center leading-[0.8] lg:pt-5 pt-2'>contact</h1>
                    <div className=' moveLink absolute flex top-0 text-black bg-[#D3FD50] '>
                        <div className='moveX flex gap-5 items-center'>
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'> send us a fax </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-coverr' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'> send us a fax </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        </div>
                        <div className='moveX flex gap-5 items-center'>
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'> send us a fax</h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'> send us a fax </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                        </div>

                    </div>
                </div>
                <div className='link origin-top relative  border-y-1 border-white/40'>
                    <h1 className='uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center leading-[0.8] lg:pt-5 pt-2'>blog</h1>
                    <div className=' moveLink absolute flex top-0 text-black bg-[#D3FD50] '>
                        <div className='moveX flex gap-5 items-center'>
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>read article </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>read article </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                        </div>
                        <div className='moveX flex gap-5 items-center'>
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>read article </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" alt="" />
                            <h2 className='whitespace-nowrap uppercase lg:text-[8vw] text-[14.5vw] font-[font2] text-center lg:leading-[0.8] leading-[0.2] lg:mt-0 mt-2  lg:pt-5 pt-0'>read article </h2>
                            <img className='lg:h-20 h-13 py-1.5 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default FullScreenNav
