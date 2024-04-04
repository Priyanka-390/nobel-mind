import React from "react";

const Buttons = (props) => {
  return (
    <div className="">
      <button className={`${props.name} font-outfit before:hover:bg-black before:z-[-1] z-[1] before:transition-all before:ease-linear duration-300 before:duration-300 before:absolute before:top-[100%] before:bg-transparent before:hover:top-0 before:hover:w-full before:w-full before:h-full relative before:left-0 overflow-hidden text-white rounded-[4px] bg-button-gradient px-6 py-[14px] font-semibold md:leading-[24px] text-base`}>
       {props.text}
      </button>
    </div>
  );
};

export default Buttons;
