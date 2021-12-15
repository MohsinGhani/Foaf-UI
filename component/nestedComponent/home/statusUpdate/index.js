import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { Input } from "antd";
import Image from "next/image";
export const StatusUpdate = () => {
  const { TextArea } = Input;
  const url = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7];
  const [backgroundimage, setBackgroundImage] = useState(false);
  const [image, setimage] = useState("");
  const [text, setText] = useState("");

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    swipeToSlide: true,
  };
  console.log(image, "image ya rahi bhai");
  return (
    <>
      <div className="text_background">
        <div className="background">
          {image && (
            <Image
              src={
                (image === 1 && "/images/CreatePost/back1.png") ||
                (image === 2 && "/images/CreatePost/back2.png")
              }
              alt="background"
              layout="fill"
            />
          )}
        </div>
        <div
          className={`text_area ${
            !image ? "text_color_grey" : "text_color_white"
          }`}
        >
          {true && (
            <TextArea
              // placeholder="whats on you Mind?"
              autoSize={{ minRows: 1, maxRows: 7 }}
              defaultValue="whats on you Mind?"
            />
          )}
        </div>
      </div>
      {backgroundimage ? (
        <div>
          <Slider {...settings}>
            {url.map((data, i) => (
              <div
                key={i}
                className="back_image"
                onClick={() => {
                  (data === 1 && setimage(1)) || (data === 2 && setimage(2));
                  setBackgroundImage(!backgroundimage);
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
    </>
  );
};
