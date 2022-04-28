import { useRouter } from "next/router";
import React, { useState } from "react";

const demoVideo = {
  src: "https://res.cloudinary.com/freelancer3223/video/upload/v1650470787/pharaohs/yt1s.com_-_Nocopyright_INTRO_Video_NCIO_01_1_d9b5h4.mp4",
  vid_title: "Nocopyright INTRO Video - NCIO #01 ",
};


async function fetchDownloadUrl(cid,id,quality,contentType)
    {
        
        const url = `http://api.savetube.me/api/v1/convert`
        console.log(cid)
        console.log(id)
        console.log(quality)
        const formData = new URLSearchParams();
        formData.append("cid",cid)
        formData.append("id",id)
        formData.append("format",contentType)
        formData.append("quality",quality)
        
        console.log(formData)

        const response = await fetch(
            url,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                method:"POST",
                body:formData
            }
        )
        
        const jsonData = await response.json();
        
        console.log(jsonData)

        // FileSaver.saveAs(
        //     jsonData.url,
        //     `${title}.mp4`
        // )

        return jsonData

        
    }



const Video = ({currentVideoData,contentType}) => {
  const router = useRouter();
  const [btns, setBtns] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [video, setVideo] = useState("");

  const getDownloadButton = async(currentVideoData,contentType) => {
    setBtns(false);
    setLoading(true);
    const quality = document.getElementById("quality").value
    const res = await fetchDownloadUrl(currentVideoData.cid,currentVideoData.id,quality,contentType)

    setVideo(res.url)

    setLoading(false);
    setShowDownload(true);
  };

  console.log(video);
  console.log(currentVideoData);
  const NextHandler = () => {
    router.reload();
  };
  return (
    <div id="downloadSection" className="my-2 p-[20px] custom:min-h-[400px] min-h-[470px] border-[1px] border-solid border-[#00000020] bg-[#e9ecef] mt-[50px] sm:flex  sm:gap-8 mx-[24px] lg:max-w-[920px]  lg:mx-auto sm:min-h-[250px]">
      <img
        src={currentVideoData.thumbnail}
        alt="image"
        className="w-[100%] max-w-[100%] sm:w-[275px] lg:w-[300px] "
      />

      <div className="sm:w-[75%] text-left">
        <h3 className="text-left mt-2 text-[#212529] font-[500] text-[16px] sm:text-[22px]">
          {currentVideoData.title}
        </h3>
        {/* <p className="text-left">Joseph Yatim</p> */}
        <p className="text-left">{Math.round(currentVideoData.duration/60)} min</p>
        <hr
          className="my-[.3rem]"
          style={{
            " borderTop": "3px solid rgba(0,0,0,.1)",
          }}
        ></hr>
        {btns && (
          <div className="btn-group flex">
            <select
              className="h-[40px] text-[#444] border border-[#aaa] rounded-[.5rem] w-[50%] mr-[10px] "
              style={{
                "backgroundImage": `url(""),
                linear-gradient(to bottom,#ffffff 0%,#e5e5e5 100%)`,
                padding: "0.4em 1.4em 0.5em 0.8em",
                "lineHeight": 1.3,
              }}
              id="quality"
            >
             
                {contentType == "video" &&
                  currentVideoData.video_formats.map((item)=>
                  (
                     <option key={item} value={item}>{item}p</option>
                  ))
                }

                {contentType == "audio" &&
                  currentVideoData.audio_formats.map((item)=>
                  (
                     <option key={item} value={item}>{item}kbps</option>
                  ))
                }
               
         
            </select>
            <button
              className="w-[130px] py-[10px] font-[500] border-0 outline-0  bg-green-600 hover:bg-green-500 transition text-white text-[14px]  flex justify-center rounded-[6px]"
              onClick={async()=> getDownloadButton(currentVideoData,contentType)}
            >
              Get Link
            </button>
          </div>
        )}
        {loading && (
          <button
            disabled
            type="button"
            className="text-white bg-yellow-400  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-left"
          >
            <svg
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Converting, please wait...
          </button>
        )}

        {showDownload && (
          <div className="download btn text-left">
            <a
              type="button"
              className="text-white bg-green-600  hover:bg-green-500  font-medium rounded-lg text-sm px-7 py-3 text-center mr-2 mb-2"
              href={video}
              download
            >
              Download
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
