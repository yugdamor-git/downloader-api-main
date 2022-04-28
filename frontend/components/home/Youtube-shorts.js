import React from "react";
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    id: 1,
    img: "facebook.svg",
    alt: "facebook",
    url: "https://www.facebook.com/sharer/sharer.php?u=https://ytshorts.savetube.me",
  },
  {
    id: 2,
    img: "linkedin.svg",
    alt: "linkedin",
    url: "https://www.linkedin.com/sharing/share-offsite/?url=https://ytshorts.savetube.me",
  },
  {
    id: 3,
    img: "twitter.svg",
    alt: "twitter",
    url: "https://twitter.com/share?url=https://ytshorts.savetube.me",
  },
  {
    id: 4,
    img: "whatsapp.svg",
    alt: "whatsapp",
    url: "whatsapp://send?text=https://ytshorts.savetube.me",
  },
];

const YoutubeShorts = ({
  sec1_title,
  sec1_p,
  sec1_share,
  sec2_title,
  sec2_p1,
  sec2_p2,
  sec2_p3,
  sec2_p4,
  sec2_p5,
  sec2_p6,
  sec2_p7,
  sec3_title,
  sec3_p1,
  sec3_p2,
  sec3_p3,
  sec3_p4,
  sec3_p5,
  sec4_title,
  sec4_p1,
  sec4_p2,
  sec4_p3,
  sec4_p4,
  sec4_p5,
  sec4_p6,
}) => {
  return (
    <section>
      <hr />
      <div className="video-downloader text-center text-[#343a40] py-[48px] px-[15px] sm:py-[68px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] sm:mx-auto">
        <h3 className="font-medium text-xl mb-2 sm:text-[32px] sm:mb-3">
          {sec1_title}
        </h3>
        <p className=" mb-4">{sec1_p}</p>
        <p className="mb-4 font-bold">{sec1_share}</p>
        <ul className="flex justify-center">
          {SOCIAL_LINKS.map((s) => (
            <li key={s.id} className="mx-4 sm:last:hidden">
              <a href={s.url} target="_blank" rel="noreferrer">
                <Image src={`/${s.img}`} alt={s.alt} width={30} height={30} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="what-shorts text-[#212529] py-[48px] px-[10px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] sm:mx-auto">
        <h3 className="text-center font-medium text-xl mb-2 pb-4  sm:text-[32px] sm:mb-3">
          {sec2_title}
        </h3>
        <p className="mb-4">
          {sec2_p1}
          <strong>{sec2_p2} </strong>
          {sec2_p3}
          <strong>{sec2_p4}</strong> {sec2_p5}
        </p>
        <p>
          {sec2_p6}
          <strong>{sec2_p7}</strong>
        </p>
      </div>
      <hr />

      {/* how-section  */}
      <div className="how-section text-[#212529] py-[48px] px-[5px] sm:flex sm:items-center sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] sm:mx-auto">
        <img
          src="/create-a-short.jpg"
          alt="create-short"
          className="w-[100%]
          sm:w-[210px]
          sm:h-[280px]
          lg:w-[350px]
          lg:h-[466px]
          sm:mx-[15px]
          "
        />
        <div className="sm:mx-[15px]">
          <h3 className="text-center font-medium text-xl mb-2 py-4 sm:text-[32px] sm:text-left sm:leading-9">
            {sec3_title}
          </h3>
          <p className="mb-4">{sec3_p1}</p>
          <p className="font-bold mb-4">{sec3_p2}</p>
          <p className="font-bold mb-4"> {sec3_p3}</p>
          <p className="font-bold mb-4"> {sec3_p4}</p>
          <p className="mb-4">{sec3_p5}</p>
        </div>
      </div>
      <hr />

      {/* how to download section */}
      <div className="how-to-download text-[#212529] py-[48px] px-[15px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] sm:mx-auto">
        <h3 className="text-center font-medium text-xl mb-2 py-4 sm:text-[32px] ">
          {sec4_title}
        </h3>
        <p className="mb-4">{sec4_p1}</p>
        <p className="font-bold mb-4">{sec4_p2}</p>
        <p className="font-bold mb-4"> {sec4_p3}</p>
        <div className="flex">
          <img
            src="/first_shorts.jpg"
            alt="create-short"
            className="w-auto h-[300px] my-4 px-2"
          />
          <img
            src="/copylink.jpg"
            alt="create-short"
            className="w-auto h-[300px] my-4 px-2"
          />
        </div>

        <p className="font-bold mb-4">{sec4_p4}</p>
        <p className="font-bold mb-4">{sec4_p5}</p>
        <p className="mb-4">{sec4_p6}</p>
      </div>
      <hr />
    </section>
  );
};

export default YoutubeShorts;
