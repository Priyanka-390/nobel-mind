import React from "react";
import triangle from "../assets/images/herotriangle.webp"
import drivingimg from "../assets/images/drivingimg.webp"
import { One, Star, Three, Two } from "./Icon";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";

const Drivingsec = () => {
  return (
    <div id="driving" className="relative  overflow-x-clip">
      <img src={triangle} alt="triangle" className="absolute top-[5%] left-[3%] animate-bounce-slow" />
      <img src={triangle} alt="triangle" className="absolute bottom-[7%] right-[3%] animate-bounce-slow" />
          <img src={drivingimg} alt="driving" className="md:hidden block max-md:h-[567px] h-full object-cover px-3" />
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className="flex justify-center md:pt-0 pt-4" data-aos="flip-down">
          <p className="flex pr-2">
            <Star />
            <span className=" font-exo pl-2  font-normal sm:text-base text-sm md:leading-6">
              Why Choose Us
            </span>
          </p>
        </div>
        <h2 data-aos="flip-down" className=" font-light sm:pt-2 pt-1 text-center font-outfit md:leading-[57.6px] lg:text-5xl sm:text-4xl text-3xl text-black">
          Driving Innovation &{" "}
          <span className="font-semibold block">Transforming Industries</span>
        </h2>
              <Swiper
              breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Virtual, Navigation, Pagination, A11y, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="lg:!py-[52px] md:!py-10 !py-8">
            <SwiperSlide>
                <div className="card max-md:max-w-[364px] mx-auto cardslider h-[210px] p-[18px] border rounded-[12px]  border-[#A854E933]">
                  <div className="w-[36px] h-[36px] rounded-full flex justify-center items-center border-[6px] bg-white border-[#A854E93D]">
                    <One />
                  </div>
                  <p className="text-[#131200] font-normal text-[20px] font-outfit pt-3 md:leading-[25.2px]">
                    Customer-Centric
                  </p>
                  <p className="pt-1 text-[#5A5A4D] max-w-[297px] font-exo font-normal text-base">
                    Prioritize and anticipate client needs, ensuring our technology
                    solutions consistently deliver unparalleled value.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card max-md:max-w-[364px]  mx-auto cardslider h-[208px] p-[18px] border rounded-[12px]  border-[#A854E933]">
                  <div className="w-[36px] h-[36px] rounded-full flex justify-center items-center border-[6px] bg-white border-[#A854E93D]">
                    <Two />
                  </div>
                  <p className="text-[#131200] font-normal text-[20px] font-outfit pt-3 md:leading-[25.2px]">
                    Workplace Harmony
                  </p>
                  <p className="pt-1 text-[#5A5A4D] max-w-[297px] font-exo font-normal text-base">
                    Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family.
                  </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card max-md:max-w-[364px] mx-auto cardslider h-[208px] p-[18px] border rounded-[12px]  border-[#A854E933]">
                  <div className="w-[36px] h-[36px] rounded-full flex justify-center items-center border-[6px] bg-white border-[#A854E93D]">
                    <Three />
                  </div>
                  <p className="text-[#131200] font-normal text-[20px] font-outfit pt-3 md:leading-[25.2px]">
                    Ethical Leadership
                  </p>
                  <p className="pt-1 text-[#5A5A4D] max-w-[297px] font-exo font-normal text-base">
                    Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.
                  </p>
                </div>
                  </SwiperSlide>
                   <SwiperSlide>
                <div className="card mx-auto max-md:max-w-[364px] cardslider h-[208px] p-[18px] border rounded-[12px] border-[#A854E933]">
                  <div className="w-[36px] h-[36px] rounded-full flex justify-center items-center border-[6px] bg-white border-[#A854E93D]">
                    <Three />
                  </div>
                  <p className="text-[#131200] font-normal text-[20px] font-outfit pt-3 md:leading-[25.2px]">
                    Ethical Leadership
                  </p>
                  <p className="pt-1 text-[#5A5A4D] max-w-[297px] font-exo font-normal text-base">
                    Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.
                  </p>
                </div>
            </SwiperSlide>
              </Swiper>
              <img src={drivingimg} alt="driving" className="md:pt-8 hidden md:block w-full" data-aos="zoom-in" />
      </div>
    </div>
  );
};

export default Drivingsec;
