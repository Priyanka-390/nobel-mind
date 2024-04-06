import React from "react";
import aboutimg from "../assets/images/aboutusimg.webp";
import triangle from "../assets/images/herotriangle.webp"
import { Star } from "./Icon";
import Buttons from "./Buttons";

const Aboutus = () => {
  return (
    <div id="about" className=" lg:py-36 md:py-28 sm:py-20 py-10 relative overflow-x-clip">
      <img src={triangle} alt="triangle" className=" absolute top-[-5%] left-[5%] animate-bounce-slow" />
      <img src={triangle} alt="triangle" className=" absolute bottom-[15%] right-[5%] lg:block hidden animate-bounce-slow" />
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className="flex items-center flex-row -mx-3 flex-wrap">
          <div className="md:w-6/12 px-3 flex md:justify-start md:mx-0 mx-auto justify-center" data-aos="fade-right">
            <div className=" flex md:justify-start justify-center md:mx-0 mx-auto md:items-start items-center"><img src={aboutimg} alt="img" className="w-full md:pr-16"  /></div>
          </div>
          <div className="md:w-6/12 md:pt-0 pt-4 px-3 " data-aos="fade-left">
            <div className="flex md:justify-start justify-center">
              <p className="flex pr-2">
                <Star />
                <span className=" font-exo pl-2 font-normal sm:text-base text-sm md:leading-6">
                  About Us
                </span>
              </p>
            </div>
            <h2 className="sm:pt-2 pt-1 font-outfit font-light lg:text-5xl sm:text-4xl text-3xl md:text-start text-center md:leading-[57.6px]">
              Pioneering Vision & <span className="lg:block"></span> Mission
              <span className=" font-semibold">
                -Driven Sectoral <span className="lg:block"></span> Innovation
              </span>
            </h2>
            <p className=" font-exo text-[#4D4D4D] lg:pt-4 md:pt-3 pt-2 md:pb-11 sm:pb-9 pb-4 font-normal md:text-start text-center sm:text-base text-sm md:leading-6">
              Imagine a future in Saudi Arabia influenced by the potential of
              Al, <span className="lg:block"></span> with Noble Mind at the
              forefront of this transformation. Healthcare
              <span className="lg:block"></span> stands to gain with the promise of
              enhanced data precision. In <span className="lg:block"></span>
              education, there's the potential for individualized learning
              <span className="lg:block"></span> experiences. Finance could witness
              seamless transactions, and entertainment may revel in customized
              experiences. Through Al's <span className="lg:block"></span> promise,
              transportation could innovate and cities might adapt
              <span className="lg:block"></span> smarter infrastructures. In every
              domain, the vision of Noble Mind <span className="md:block"></span>
              hints at a brighter, more efficient nation.
                      </p>
                      <div className="flex md:justify-start justify-center">
                        <Buttons text="Read More" />
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
