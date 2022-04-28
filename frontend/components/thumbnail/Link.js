import React, { useState, useEffect } from "react";
import Loading from "../ui/Loading";
import Images from "./Images";

async function fetchThumbnailData(url) {
  const formData = new URLSearchParams();

  formData.append("url", url);

  const response = await fetch(`http://api.savetube.me/api/v1/thumbnails?url=${url}`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  console.log(data)

  return data
}



const Demo_Images = [
  {
    id: 1,
    image: "/demo.jpg",
    resolution: "HD Image (1280x720)",
    name: "demo",
  },
  {
    id: 2,
    image: "/demo.jpg",
    resolution: "SD Image (640x480)",
    name: "demo",
  },
  {
    id: 3,
    image: "/demo.jpg",
    resolution: "Normal Image (480x360)",
    name: "demo",
  },
  {
    id: 4,
    image: "/demo.jpg",
    resolution: "Normal Image (320x180)",
    name: "demo",
  },
  {
    id: 5,
    image: "/demo.jpg",
    resolution: "Small Image (120x90)",
    name: "demo",
  },
];
const Link = ({ data,contentType }) => {
  const [isUrl, setIsUrl] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVid, setShowVid] = useState(false);
  const [images,setImages] = useState(null)

  useEffect(() => {
    if (inputVal.length == 0) {
      setIsUrl("");
    } else {
      validURL(inputVal);
    }
  }, [inputVal]);

  ///////////// validate url function //////////
  const validURL = async(str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    setIsUrl(pattern.test(str));

    if (pattern.test(str)) {
      setLoading(true);
      
      const data = await fetchThumbnailData(str)

      setImages(data)

      setLoading(false);
      setShowVid(true);
    }

    return !!pattern.test(str);
  };

  ////////// get video function ////////
  const getVideoHandler = async(e) => {
    e.preventDefault();
    if (e.target.value) {
      setLoading(true);
      /// fetch function here
      const data = await fetchThumbnailData(e.target.value)

      setImages(data)
        setLoading(false);
        setShowVid(true);
      
    }
  };
  return (
    <div className="text-center mt-12 mb-11 text-[#343a40] ">
      <h1 className="font-medium sm:text-[40px] text-2xl w-[20rem] sm:w-full sm:mb-2 m-auto">
        {data.title}
      </h1>
      <p className=" mb-4 mx-[15px]">{data.p}</p>

      <form
        className="custom:w-5/6 w-[350px] sm:w-[650px] lg:w-[778px] sm:my-[28px]  mx-auto sm:flex sm:justify-center md-w[960px]"
        onSubmit={getVideoHandler}
      >
        <div className="mb-2 sm:w-[450px] md:w-[640px] lg:w-[760px]   ">
          <input
            type="search"
            className="sm:w-[495px] lg:w-[615px] outline-none py-[14px] px-5  text-[#4b4c4d] text-[14px] rounded-xl block w-full border-2 border-[#ffc4c4]"
            placeholder={data.placeholder}
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            required
          />
        </div>

        <button
          type="submit"
          className="text-white w-[100%] h-[50px] sm:w-[152px] sm:h-[52px] font-[600] bg-[#fd0054] hover:bg-[#dc2260] focus:outline-none  rounded-lg  text-center text-[17px] shadow-2xl xl:w-[180px]"
        >
          Get Thumbnail
        </button>
      </form>

      {isUrl && loading && <Loading />}
      {showVid && images && <Images resolutions={images.resolutions} />}
      {inputVal.length > 0 && !isUrl && (
        <p className="text-[#dc3545] text-center mt-1">{data.wrong}</p>
      )}
    </div>
  );
};

export default Link;
