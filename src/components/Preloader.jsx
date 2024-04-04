import React from 'react'
import logo from "../assets/images/navlogo.png"
import { Star } from './Icon'

const Preloader = () => {
  return (
   <div className="flex items-center justify-center h-screen">
    <div className="relative">
        <div className="h-[250px]  animate-spin w-[250px] rounded-full border-t-8 border-b-8 border-[#9761ED]"></div>
        <div className="absolute top-0 left-0 h-[250px] w-[250px] rounded-full flex-col flex justify-center items-center border-t-8 border-b-8 border-[#9761ED]">
          <img src={logo} alt="logo" className='w-[200px] h-12' />
        </div>
    </div>
</div>
  )
}

export default Preloader
