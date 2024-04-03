import React from "react";

const Buttons = (props) => {
  return (
    <div className="">
      <button className={`${props.name} font-outfit text-white rounded-[4px] bg-button-gradient px-6 py-[14px] font-semibold md:leading-[24px] text-base`}>
       {props.text}
      </button>
    </div>
  );
};

export default Buttons;
