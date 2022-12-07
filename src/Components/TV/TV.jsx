import React from "react";
import ReactHlsPlayer from "react-hls-player/dist";

const TV = ({ hlsUrl }) => {
  return (
    <div>
      <ReactHlsPlayer
        loop={true}
        width="100%"
        height="auto"
        autoPlay={true}
        controls={true}
        src={hlsUrl}
      />
    </div>
  );
};

export default TV;
