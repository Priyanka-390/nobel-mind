import React from 'react'
import { Star } from './Icon'

const Herosec = () => {
  return (
    <div id='home' className='flex-grow items-center flex  overflow-x-clip'>
          <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
                 <div className='flex md:justify-start justify-center' data-aos="fade-right">
              <p data-aos="fade-right" className='flex sm:pb-2 pb-1'><Star /> <span className='pl-2 font-exo font-normal sm:text-base text-sm md:leading-[24px]'>AI With Noble Mind</span></p>  </div>
                  <h1 data-aos="fade-right" className=' font-outfit md:text-start text-center font-[300] lg:text-[64px] md:text-5xl text-3xl  md:leading-[76.8px] text-black'>Inspiring Innovation, <span className=' lg:block'></span> Elevating Solutions <span className=' font-Montserrat font-extrabold md:leading-[70.4px]'></span> – <span className='lg:block font-Montserrat font-extrabold md:leading-[70.4px] '> Noble Mind"</span> </h1>
                  <p data-aos="fade-right" className=' font-exo font-normal md:text-start text-center sm:text-base text-sm md:leading-6 lg:pt-4 md:pt-3 pt-2 text-[#4D4D4D]'>At Noble Mind is a forward-thinking AI specialised company dedicated to <span className='lg:block'></span> reshaping the future of how we live, work, and learn. Our mission is to create <span className='lg:block'></span> ground-breaking AI solutions for Healthcare, Education, and beyond, aligning <span className='lg:block'></span> with Saudi Arabia’s Vision 2030.”</p>
             
      </div>
    </div>
  )
}

export default Herosec
