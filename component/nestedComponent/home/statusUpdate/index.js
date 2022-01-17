/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Slider from "react-slick";
import { useState } from "react";
import { Input, Form } from "antd";
import Image from "next/image";
import { API } from "../../../../pages/api/create";
import { useSelector } from "react-redux";
export const StatusUpdate = ({ form }) => {
  const { TextArea } = Input;

  const url = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7];
  const [backgroundimage, setBackgroundImage] = useState(false);
  const [image, setimage] = useState("");
  const [text, setText] = useState("");
  const [backImage, setBackImage] = useState("");
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  console.log("hello hello", backImage?.result?.background_image);
  useEffect(() => {
    getBackgroundImage();
  }, []);
  const getBackgroundImage = async () => {
    try {
      let response = await fetch(`${API.BACKGROUND_IMAGE}`, {
        method: "GEt",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${data.token}`,
        },
      });
      const backgroundImage = await response.json();
      // setgetAllFriends(getallfriends);
      setBackImage(backgroundImage);
      console.log(backgroundImage, "get all backgroundImage");
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };

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
          <Form
            name="basicDiscription"
            form={form}
            initialValues={{ discription: "whats on you Mind?" }}
          >
            <Form.Item
              name="discription"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input text!",
              //   },
              // ]}
            >
              <TextArea
                // placeholder="whats on you Mind?"
                autoSize={{ minRows: 1, maxRows: 7 }}
                // defaultValue="whats on you Mind?"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
      {backgroundimage ? (
        <div>
          <Slider {...settings}>
            {backImage?.result?.map((data, i) => (
              <div
                key={i}
                className="back_image"
                onClick={() => {
                  (data === 1 && setimage(1)) || (data === 2 && setimage(2));
                  setBackgroundImage(!backgroundimage);
                }}
              >
                <Image
                  src={`${data.background_image}`}
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
