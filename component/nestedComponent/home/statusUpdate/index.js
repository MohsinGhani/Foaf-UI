/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Slider from "react-slick";
import { useState } from "react";
import { Input, Form } from "antd";
import Image from "next/image";
import { API } from "../../../../pages/api/create";
import { useSelector } from "react-redux";
export const StatusUpdate = ({ form, setfullVideo }) => {
  const { TextArea } = Input;

  const [backgroundimage, setBackgroundImage] = useState(false);
  const [image, setimage] = useState("");
  const [backImage, setBackImage] = useState("");
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;

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

  return (
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
          <Form name="basicDiscription" form={form}>
            <Form.Item name="discription">
              <TextArea
                placeholder="whats on you Mind?"
                autoSize={{ minRows: 1, maxRows: 7 }}
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
                  setimage(data?.background_image);
                  setBackgroundImage(!backgroundimage);
                  setfullVideo(data?.image_id);
                }}
              >
                <Image
                  src={`${data?.background_image}`}
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
