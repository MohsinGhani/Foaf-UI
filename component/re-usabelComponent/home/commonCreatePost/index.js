import Image from "next/image";
import React from "react";
import Profile from "../../profile";
import Slider from "react-slick";
import { useState } from "react";

export default function CreatePostContent() {
  const url = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7];
  const [backgroundimage, setBackgroundImage] = useState("");
  const [image, setimage] = useState("");
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    swipeToSlide: true,
  };
  console.log(image, "image ya rahi bhai");
  return (
    <div className="Create_content">
      <Profile
        profile="/images/dashboard/samesize.svg"
        className="CreatePostProfile"
        nameColor="CreatePostColor"
        name="Lydia Workman"
        class="image"
        privacy={true}
      />
      <div
        className="background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      >
        <p>whats up?</p>
      </div>
      {backgroundimage ? (
        <div
          onClick={() => {
            setBackgroundImage(!backgroundimage);
          }}
        >
          <Slider {...settings}>
            {url.map((data, i) => (
              <div
                key={i}
                className="back_image"
                onClick={() => {
                  (data === 1 && setimage("/images/CreatePost/back1.png")) ||
                    (data === 2 && setimage("/images/CreatePost/back2.png"));
                }}
              >
                <Image
                  src={`/images/CreatePost/background${data}.png`}
                  alt="background"
                  width="80"
                  height="80"
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div
          onClick={() => {
            setBackgroundImage(!backgroundimage);
          }}
        >
          <Image
            src="/images/CreatePost/backgroundColor.png"
            width="50"
            height="50"
            alt="color"
          />
        </div>
      )}
      <div className="POst_image_i">
        <Image
          src="/images/CreatePost/Post.png"
          alt="post"
          width="950"
          height="60"
          layout="fixed"
        />
      </div>
    </div>
  );
}
