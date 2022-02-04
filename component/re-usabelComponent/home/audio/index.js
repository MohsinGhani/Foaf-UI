import Image from "next/image";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
const AudioPost = ({ url }) => {
  return (
    <div>
      <div
        className="backImage"
        style={{
          backgroundImage: "url(/images/CreatePost/audioBackground.png)",
        }}
      >
        <div className="border__1">
          <div className="border__2">
            <div className="border__3">
              <Image
                src="/images/CreatePost/hello12.png"
                alt="image"
                width="120px"
                height="120px"
                layout="fixed"
              />
            </div>
          </div>
        </div>

        <AudioPlayer src={url} controls customAdditionalControls={[]} />
      </div>
    </div>
  );
};

export default AudioPost;
