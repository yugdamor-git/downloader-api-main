import React from "react";
const Images = ({ resolutions }) => {
  return (
    <>
      {" "}
      <hr
        className="mt-[3rem]"
        style={{
          " border-top": "3px solid rgba(0,0,0,.1)",
        }}
      ></hr>
      <div className="container text-center 5-images my-[3rem] px-[15px] mx-auto">
        <div className="images-container text-center sm:flex flex-wrap justify-center xl:w-[1140px] mx-auto">
          {resolutions && resolutions.map((image) => (
            <div
              className="image  px-[15px] mb-[48px] text-center flex flex-col items-center sm:w-[50%]"
              key={image.download_url}
            >
              <img
                src={image.download_url}
                alt={image.resolution}
                className="w-[320px] h-[180px] mb-[15px]"
              />
              <a
                href={image.download_url}
                download
                className="text-white bg-green-600  hover:bg-green-500  rounded-lg p-[15px] text-[17px] text-center  mb-2 font-[700] min-w-[180px] flex items-center cursor-pointer"
              >
                <span> {image.lable}</span>
                <img
                  src="/download.svg"
                  className="w-[18px] ml-[4px]"
                  alt="download"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Images;
