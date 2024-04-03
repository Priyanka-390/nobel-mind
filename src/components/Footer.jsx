import React from "react";
import footerlogo from "../assets/images/footerlogo.webp";
import { Facebookicon, Insta, Linkdin, Twitter } from "./Icon";

const Footer = () => {
  return (
    <div className=" pt-32 bg-[url(./assets/images/bg-footer.webp)]">
      <div className="container pt-2 max-w-[1140px] px-3 mx-auto">
        <div className="flex flex-wrap justify-between flex-row -mx-3 pb-[52px]">
          <div className="lg:w-1/3 md:w-1/2 px-3">
            <img src={footerlogo} alt="flogo" className="pb-7" />
            <p className=" font-exo pb-2 font-normal sm:text-base text-sm text-white">
              Follow Us
            </p>
            <div className="flex md:gap-4 gap-2">
              <div>
                <a
                  href="https://www.facebook.com/login/"
                  target="blank"
                  className="w-[44px] h-[44px] rounded-full border flex justify-center items-center border-[#FDFDFF]"
                >
                  <Facebookicon />
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="blank"
                  className="w-[44px] h-[44px] rounded-full border flex justify-center items-center border-[#FDFDFF]"
                >
                  <Insta />
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="https://twitter.com/i/flow/login"
                  target="blank"
                  className="w-[44px] h-[44px] rounded-full border flex justify-center items-center border-[#FDFDFF]"
                >
                  <Twitter />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/login"
                  target="blank"
                  className="w-[44px] h-[44px] rounded-full border flex justify-center items-center border-[#FDFDFF]"
                >
                  <Linkdin />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:pt-0 pt-4 md:w-1/2 w-full px-3">
            <div className="flex flex-wrap flex-row -mx-3">
              <div className="w-1/2 px-3 flex md:justify-end">
                <ul>
                  <li className=" font-outfit font-semibold sm:text-base text-sm pb-4 text-white">
                    Maine
                  </li>
                  <li className="pb-[14px]">
                    <a
                      href="#home"
                      className=" font-exo font-normal text-[#B7B7B4] sm:text-base text-sm"
                    >
                      Home
                    </a>
                                  </li>
                    <li className="pb-[14px]">
                    <a
                      href="#about"
                      className=" font-exo font-normal text-[#B7B7B4] sm:text-base text-sm"
                    >
                      About Us
                    </a>
                                  </li>
                                    <li className="pb-[14px]">
                    <a
                      href="#subscribe"
                      className=" font-exo font-normal text-[#B7B7B4] sm:text-base text-sm"
                    >
                      services
                    </a>
                                  </li>
                                   <li className="pb-[14px]">
                    <a
                      href="#driving"
                      className=" font-exo font-normal text-[#B7B7B4] sm:text-base text-sm"
                    >
                     Why Choose Us
                    </a>
                  </li>
                </ul>
                          </div>
                          <div className="w-1/2 px-3 flex md:justify-end">
                <ul>
                  <li className=" font-outfit font-semibold sm:text-base text-sm pb-4 text-white">
                    Legal
                  </li>
                  <li className="pb-[14px]">
                    <a
                      href=""
                      className=" font-exo font-normal text-[#B7B7B4] sm:text-base text-sm"
                    >
                     Term & Conduction
                    </a>
                                  </li>
                    <li className="pb-[14px]">
                    <a
                      href=""
                      className=" font-exo font-normal text-[#B7B7B4] sm:text-base text-sm"
                    >
                     Privacy Policy
                    </a>
                                  </li>
                                    <li className="pb-[14px]">
                    <a
                      href="#contact"
                      className=" font-exo font-normal text-[#B7B7B4] sm:text-base text-sm"
                    >
                     Contact
                    </a>
                                  </li>
                                   <li className="pb-[14px]">
                    <a
                      href=""
                      className=" font-exo font-normal text-[#B7B7B4] sm:text-base text-sm"
                    >
                    (629) 555-0129
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          </div>
          <div className="border-[#FFFFFF4D] border w-full"></div>
              <p className=" font-exo text-[#B8B8B4] pt-4 pb-9 text-center font-normal text-sm">© Copyright 2023 Noble Mind | All rights reserved. </p>
    </div>
  );
};

export default Footer;
