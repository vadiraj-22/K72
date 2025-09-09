import React from 'react'
import ProjectsCard from '../Components/projects/ProjectsCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  const projects = [{
    image1:'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },{
    image1:'https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'
  },]
gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(function(){
    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.6
      },
      scrollTrigger:{
        trigger:'.pj',
        start: 'top 85%',
        end:'top -175%',
        scrub:true
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
        return <div key={idx} className='hero w-full lg:h-[600px] mb-4 flex lg:flex-row  flex-col lg:gap-4 gap-2'>
           <ProjectsCard image1={elem.image1} image2={elem.image2}/>
        </div>
        })}
      </div>
    </div>
  )
}

export default Projects
