import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div
      className={`rounded-[17px] bg-[#fff] shadow-3xl ${
        data.id == 3 || data.id == 6 ? "mb-[48px]" : ""
      } sm:mb-0`}
    >
      <div className="image p-[20px] pb-[15px]">
        <Image
          src={`/${data.img}`}
          className=" mx-auto "
          alt="card"
          width={150}
          height={180}
        />
      </div>
      <div className="text text-left p-[20px] text-[#212529]">
        <h4 className="font-semibold mb-[10px] text-xl">{data.title}</h4>
        <p className="min-h-[100px] leading-[18px]">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
