import React, { useState } from "react";
import formimg from "../assets/images/formimg.webp";
import Buttons from "./Buttons";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname: "",
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
      name: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.name.test(formData.lastname)) {
      errors.lastname = "Name is invalid.";
    }
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
      name: "",
      lastname: "",
      email: "",
    });
    setFormErrors({
      name: "",
      lastname: "",
      email: "",
    });
  };
  return (
    <div id="contact" className="lg:py-36 md:py-28 sm:py-20 py-10  overflow-x-clip">
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center flex-wrap -mx-3">
          <div className="md:w-6/12 px-3 flex md:justify-start justify-center flex-col md:mx-0 mx-auto" data-aos="fade-right">
            <h2 className=" font-outfit font-semibold lg:text-5xl sm:text-4xl text-3xl md:text-start text-center md:leading-[57.6px]">
              Contact <span className="font-light"> Us</span>{" "}
            </h2>
            <p className="lg:py-4 md:py-3 py-2 font-exo font-normal text-base text-[#5A594D]">
              Feel free to contact us any time . We will get back to you{" "}
              <span className="lg:block"></span> as soon as we can!{" "}
            </p>
            <form onSubmit={handleSubmit} className="md:max-w-[478px] w-full">
              <div className="flex w-full gap-3">
                <div className="flex flex-col w-1/2">
                  <label className="font-exo pb-[5px] font-normal text-base text-[#5A594D]">
                    Name
                  </label>
                  <input
                    type="text"
                    className=" w-full ps-3 focus-visible:outline-none h-[48px] rounded-lg border-solid border border-[#13120033]"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="text-red-600">{formErrors.name}</p>
                  )}
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="font-exo pb-[5px] font-normal text-base text-[#5A594D]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full ps-3 h-[48px] focus-visible:outline-none rounded-lg border-solid border border-[#13120033]"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {formErrors.lastname && (
                    <p className="text-red-600">{formErrors.lastname}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:py-4 py-3">
                <label className="font-exo pb-[5px] font-normal text-base text-[#5A594D]">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="text"
                  className="w-full h-[48px] ps-3 focus-visible:outline-none  rounded-lg border-solid border border-[#13120033]"
                />
                {formErrors.email && (
                  <p className=" text-red-600">{formErrors.email}</p>
                )}
              </div>
              <div className="flex pb-6 flex-col">
                <label className="font-exo pb-[5px] font-normal text-base text-[#5A594D]">
                  Message
                </label>
                <textarea
                  name="message"
                  className="h-[133px] focus-visible:outline-none p-3 resize-none w-full rounded-lg border-solid border border-[#13120033]"
                ></textarea>
              </div>
              {formErrors.checkbox && (
                <p className="text-red-600 pt-1">{formErrors.checkbox}</p>
              )}
              <div className="flex md:justify-start justify-center">
                <Buttons type="submit" text="Submit" />
              </div>
              {showSuccessPopup && (
                <div className="success-popup">
                  <p className="text-white pt-1">
                    Form submitted successfully!
                  </p>
               <Buttons onClick={handlePopupClose} text="close"/>
                </div>
              )}
            </form>
          </div>
          <div className="md:w-6/12 px-3 md:pb-0 pb-4" data-aos="fade-left">
            <img src={formimg} alt="imgf" className="rounded-[12px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
