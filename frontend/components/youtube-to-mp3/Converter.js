import React from "react";

const Converter = ({ title, p, button }) => {
  return (
    <div className="pb-[48px] lg:pt-[48px]  text text-[#212529] mb-[16px] text-center md:max-w-[960px] lg:max-w-[1140px] mx-[15px]  md:mx-auto">
      <h3 className="font-medium text-xl mb-2 sm:text-[32px] sm:mb-3">
        {title}
      </h3>
      <p className="mb-[16px]">{p}</p>
      <button
        type="submit"
        className="text-white w-44 h-14 font-bold bg-[#fd0054] hover:bg-[#dc2260] focus:outline-none  rounded-lg  text-center text-[17px]"
      >
        {button}
      </button>
    </div>
  );
};

export default Converter;
