import React from "react";

import Card from "../ui/Card";

const Cards = ({ cards, title, p }) => {
  return (
    <div className="py-[48px] text-center px-[15px] md:max-w-[960px] lg:max-w-[1140px]  md:mx-auto">
      <div className="text text-[#212529] mb-[16px]">
        <h3 className="font-medium text-xl mb-2 sm:text-[32px] sm:mb-3">
          {title}
        </h3>
        <p className="mb-[16px]">{p}</p>
      </div>
      <div className="cards-container grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-10 lg:gap-[5em] sm:mb-8">
        {cards.map((c) => (
          <Card key={c.id} data={c} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
