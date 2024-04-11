import React, { useState } from "react";
import triangle from "../assets/images/svg/triangle.svg"

const Subscribesec = () => {
     const [formData, setFormData] = useState({
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
    };
    const errors = {};
    if (!regex.email.test(formData.email)) {
      errors.email = "email is invalid.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      email: "",
    });
    setFormErrors({
      email: "",
    });
  };
  return (
      <div id="subscribe" className="relative overflow-x-clip max-md:-mt-5">
          <img src={triangle} alt="1" className="absolute md:block hidden top-0 left-[3%] animate-bounce-slow" />
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className="bg-[url(./assets/images/newsbg.webp)] px-3 translate-y-24 rounded-[20px] py-16 bg-center bg-cover">
          <h2 data-aos="fade-down" className="text-center text-[#FDFDFF] lg:text-5xl sm:text-4xl text-3xl md:leading-[57.6px] font-outfit font-light">
            Subscribe to our <span className="font-semibold">Newsletter!</span>
          </h2>
          <p data-aos="fade-down" className="sm:pt-2 pt-1 md:pb-9 sm:pb-6 pb-4 text-[#FDFDFF] sm:text-base text-sm font-normal text-center">
            Be the first to get exclusive offers and the latest news.
                  </p>
                  <form onSubmit={handleSubmit} className="max-w-[448px] bg-[#8E61D9] text-white rounded-md flex justify-between py-3 bg-transparent border-[#FDFDFF33] border mx-auto">
                      <input type="email" placeholder="Enter your email" className=" pl-6 w-full focus-visible:outline-none text-white placeholder:text-[#FDFDFF] bg-transparent"  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
            <input type="submit" value="Subscribe" className="py-[14px] ml-2 cursor-pointer hover:bg-white hover:text-purple-600 duration-300 transition-all rounded-[4px] mr-[10px] sm:px-6 px-3 border-[1px] text-[#FDFDFF] placeholder: border-solid border-[#FDFDFF] text-base font-semibold" />
          </form>
            {formErrors.email && (
                  <p className=" text-white text-center">{formErrors.email}</p>
          )}
          {showSuccessPopup && (
                <div className="success-popup">
                  <p className="text-white text-center pt-1">
                    Form submitted successfully!
                  </p>
                </div>
              )}
              </div>
               
                  
      </div>
    </div>
  );
};

export default Subscribesec;
