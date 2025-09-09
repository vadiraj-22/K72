import React from 'react'

const ProjectsCard = (props) => {
    return (
        <>
            <div className='lg:w-1/2 w-full group transition-all ease-in-out duration-200 relative rounded-none hover:rounded-[50px] overflow-hidden h-full'>
                <img className='h-full w-full object-cover' src={props.image1} alt="work" />
                <div className='opacity-0 group-hover:opacity-100 transition-all h-full w-full absolute top-0 left-0 flex items-center justify-center bg-black/10'>
                    <h2 className='uppercase text-6xl font-[font1] border-3 rounded-full  pt-2 px-4 text-white border-white '>View project</h2>
                </div>
            </div>

            <div className='lg:w-1/2 w-full group transition-all ease-in-out duration-200 relative rounded-none hover:rounded-[50px] overflow-hidden h-full'>
                <img className='h-full w-full object-cover' src={props.image2} alt="work" />
                <div className='opacity-0 group-hover:opacity-100 transition-all h-full w-full absolute top-0 left-0 flex items-center justify-center bg-black/10'>
                    <h2 className='uppercase text-6xl font-[font1] border-3 rounded-full  pt-2 px-4 text-white border-white '>View project</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectsCard
