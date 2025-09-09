import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(function () {

        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.3,
            scale:1.2
        })
    }, [currentPath])



    return (
        <div>

            <div ref={stairParentRef} className='h-screen flex w-full fixed top-0 z-10'>
                <div className=' h-screen w-full flex '>
                    <div className=' stair w-1/5 h-full bg-black'></div>
                    <div className=' stair w-1/5 h-full bg-black'></div>
                    <div className=' stair w-1/5 h-full bg-black'></div>
                    <div className=' stair w-1/5 h-full bg-black'></div>
                    <div className=' stair w-1/5 h-full bg-black'></div>
                </div>

            </div>
            <div ref={pageRef}>
                {props.children}
            </div>

        </div>
    )
}

export default Stairs
