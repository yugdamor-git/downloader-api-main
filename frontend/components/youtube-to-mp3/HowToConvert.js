import React from "react";

const HowToConvert = ({ cards, title }) => {
  return (
    <div className="pb-[48px] lg:pt-[48px] text-center px-[15px] md:max-w-[960px] lg:max-w-[1140px]  md:mx-auto">
      <h3 className="font-medium text-xl mb-6 sm:text-[32px] sm:mb-3 md:mb-8 ">
        {title}
      </h3>
      <div className="cards-container grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-10 lg:gap-[5em] sm:mb-8">
        {cards.map((c, index) => (
          <div className="card flex items-center" key={index}>
            <span
              className={`number inline-block w-[80px] h-[80px] rounded-[50%]  font-bold text-[45px] leading-[80px] mr-4 text-center`}
              style={{
                background:
                  (index == 0 && "#d2e3fc") ||
                  (index == 1 && "#fad2cf") ||
                  (index == 2 && "#ceead6"),
                color:
                  (index == 0 && "#4285f4") ||
                  (index == 1 && "#ed6357") ||
                  (index == 2 && "#34a853"),
              }}
            >
              {index + 1}
            </span>
            <span className="w-[70%] text-left text-[15px] text-[#4A474C]">
              {c.p}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToConvert;
