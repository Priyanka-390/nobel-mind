import React, { useState } from "react";
import triangle from "../assets/images/herotriangle.webp"

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
      <div id="subscribe" className="relative">
          <img src={triangle} alt="1" className="absolute top-0 left-[3%]" />
      <div className="container max-w-[1140px] px-3 mx-auto">
        <div className="bg-[url(./assets/images/newsbg.webp)] translate-y-24 rounded-[20px] py-16 bg-center bg-cover">
          <h2 className="text-center text-[#FDFDFF] text-5xl md:leading-[57.6px] font-outfit font-light">
            Subscribe to our <span className="font-semibold">Newsletter!</span>
          </h2>
          <p className="pt-2 pb-9 text-[#FDFDFF] sm:text-base text-sm font-normal text-center">
            Be the first to get exclusive offers and the latest news.
                  </p>
                  <form onSubmit={handleSubmit} className="max-w-[448px] rounded-md flex justify-between py-3 bg-transparent border-[#FDFDFF33] border mx-auto">
                      <input type="email" placeholder="Enter your email" className=" pl-6 w-full focus-visible:outline-none placeholder:text-[#FDFDFF] bg-transparent"  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
            <input type="submit" value="Subscribe" className="py-[14px] rounded-[4px] mr-[10px] px-6 border-[1px] text-[#FDFDFF] placeholder: border-solid border-[#FDFDFF] text-base font-semibold" />
                 </form>
              </div>
                 {formErrors.email && (
                  <p className=" text-red-600">{formErrors.email}</p>
                )}
                  
      </div>
    </div>
  );
};

export default Subscribesec;
