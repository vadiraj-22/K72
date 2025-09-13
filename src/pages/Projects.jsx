import React from 'react'
import ProjectsCard from '../Components/projects/ProjectsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  const projects = [{
    image1:'/images/project1.jpg',
    image2:'/images/project2.jpg'
  },{
    image1:'/images/project3.jpg',
    image2:'/images/project4.jpg'
  },{
    image1:'/images/project5.jpg',
    image2:'/images/project6.jpg'
  },{
    image1:'/images/project7.jpg',
    image2:'/images/project8.jpg'
  },

]

gsap.registerPlugin(ScrollTrigger)

useGSAP(function () {
  gsap.from('.hero', {
    height: '100px',
    stagger: {
      amount: 0.5
    },
    scrollTrigger: {
      trigger: '.pj',
      start: 'top 85%',
      end: 'top -175%',
      scrub: true
    }
  })
})



  return (
    <div className='lg:p-4 p-2'>
      <div className=' pt-[40vh]'>
        <h2 className='font-[font1] uppercase lg:text-[14vw] text-8xl '>work</h2>
      </div>

      <div className='-lg:mt-20  pj'>
        {projects.map(function(elem,idx){
        return <div key={idx} className='hero w-full  lg:h-[600px] h-[650px] lg:mb-4 mb-2 flex lg:flex-row  flex-col lg:gap-4 gap-2'>
           <ProjectsCard image1={elem.image1} image2={elem.image2}/>
        </div>
        })}
      </div>
    </div>
  )
}

export default Projects
