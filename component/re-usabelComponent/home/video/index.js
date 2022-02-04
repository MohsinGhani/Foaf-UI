import React from "react";
import ReactPlayer from "react-player";

const VideoPost = ({ url }) => {
  return (
    <div>
      <ReactPlayer controls className="react-player" url={url} width="100%" />
    </div>
  );
};

export default VideoPost;
