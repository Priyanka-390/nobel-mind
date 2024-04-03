import React from 'react'
import { Star } from './Icon'

const Herosec = () => {
  return (
    <div id='home' className='flex-grow items-center flex'>
          <div className="container max-w-[1140px] mx-auto px-3">
                 <div className='flex md:justify-start justify-center'>
              <p className='flex sm:pb-2 pb-1'><Star /> <span className='pl-2 font-exo font-normal sm:text-base text-sm md:leading-[24px]'>AI With Noble Mind</span></p>  </div>
                  <h1 className=' font-outfit md:text-start text-center font-[300] lg:text-[64px] md:text-5xl text-4xl  md:leading-[76.8px] text-black'>Inspiring Innovation, <span className=' block'></span> Elevating Solutions  <span className=' font-Montserrat font-extrabold md:leading-[70.4px] block'>– Noble Mind"</span> </h1>
                  <p className=' font-exo font-normal md:text-start text-center sm:text-base text-sm md:leading-6 lg:pt-4 md:pt-3 pt-2 text-[#4D4D4D]'>At Noble Mind is a forward-thinking AI specialised company dedicated to <span className='block'></span> reshaping the future of how we live, work, and learn. Our mission is to create <span className='block'></span> ground-breaking AI solutions for Healthcare, Education, and beyond, aligning <span className='block'></span> with Saudi Arabia’s Vision 2030.”</p>
             
      </div>
    </div>
  )
}

export default Herosec
