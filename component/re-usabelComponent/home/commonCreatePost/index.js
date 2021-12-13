import Image from "next/image";
import React from "react";
import Profile from "../../profile";
import Slider from "react-slick";
import { useState } from "react";
import { Input, Space } from "antd";
import { UplodOption } from "./UploadOption";

export default function CreatePostContent({ status, video }) {
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
    <div className="Create_content">
      <Profile
        profile="/images/dashboard/samesize.svg"
        className="CreatePostProfile"
        nameColor="CreatePostColor"
        name="Lydia Workman"
        class="image"
        privacy={true}
      />

      {status && (
        <>
          <div className="text_background">
            <div className="background">
              {image && <Image src={image} alt="background" layout="fill" />}
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
                      (data === 1 &&
                        setimage("/images/CreatePost/back1.png")) ||
                        (data === 2 &&
                          setimage("/images/CreatePost/back2.png"));
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
      )}
      {video && <UplodOption />}

      <div className="add_post">
        <div className="text">Add to your post</div>
        <div>
          <Space>
            <Image
              src="/images/CreatePost/add1.png"
              width="30"
              height="30"
              alt="color"
            />
            <Image
              src="/images/CreatePost/add2.png"
              width="30"
              height="30"
              alt="color"
            />
            <Image
              src="/images/CreatePost/add3.png"
              width="30"
              height="30"
              alt="color"
            />
            <Image
              src="/images/CreatePost/dots.png"
              width="20"
              height="4"
              alt="color"
            />
          </Space>
        </div>
      </div>
    </div>
  );
}
