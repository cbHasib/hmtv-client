import React from "react";
import ReactHlsPlayer from "react-hls-player/dist";

const TV = ({ hlsUrl }) => {
  return (
    <div>
      <ReactHlsPlayer
        loop={true}
        autoPlay={true}
        controls={true}
        src={hlsUrl}
        className="lg:min-h-[485px] max-h-[490px] w-full h-full bg-black"
      />
    </div>
  );
};

export default TV;
