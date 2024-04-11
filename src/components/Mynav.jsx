import React, { useState } from 'react'
import navlogo from "../assets/images/svg/navlogo.svg"
import Buttons from './Buttons'

const Mynav = () => {
     const [show, setshow] = useState(true);
  function nav() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }
  return (
    <div>
          <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3">
              <div className='py-5 flex items-center justify-between'>
                  <a href="#"><img src={navlogo} alt="logo" className='max-sm:max-w-[140px]' /></a>
                  <ul className={`flex gap-6 items-center mobileView  ${ show ? "right-[-100%]" : "right-0"
              }`}>
                      <li><a href="#home" onClick={nav} className=' font-exo hover:text-[#131200] font-normal text-base md:leading-[24px] text-[#5A594D]'>Home</a></li>
                      <li><a href="#about" onClick={nav} className=' font-exo font-normal hover:text-[#131200] text-base md:leading-[24px] text-[#5A594D]'>About Us</a></li>
                      <li><a href="#subscribe" onClick={nav} className=' font-exo font-normal hover:text-[#131200] text-base md:leading-[24px] text-[#5A594D]'>Services</a></li>
                      <li><a href="#driving" onClick={nav} className=' font-exo font-normal hover:text-[#131200] text-base md:leading-[24px] text-[#5A594D]'>Why Choose Us</a></li>
                      <li><a href="#contact" onClick={nav} className=' font-exo font-normal text-base md:leading-[24px] text-[#5A594D]'>Blogs</a></li>
                      <li><a href="#faq" onClick={nav} className=' font-exo font-normal hover:text-[#131200] mr-4 text-base md:leading-[24px] text-[#5A594D]'>FAQ</a></li>
                      <li><a href="#contact">
                        <Buttons text="Contact Us" />
                      </a></li>
                  </ul>
                   <label className=" lg:hidden" onClick={nav}>
            {show ? (
              <div className="z-20 relative">
                <span className="flex bg-black h-[4px] rounded-3xl duration-300 w-6"></span>
                <span className="flex bg-black h-[4px] rounded-3xl duration-300 w-6 mt-1"></span>
                <span className="flex bg-black h-[4px] rounded-3xl duration-300 w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative">
                <span className="flex bg-black absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                <span className="flex bg-black absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
              </div>
            )}
          </label>
              </div>
      </div>
    </div>
  )
}

export default Mynav
