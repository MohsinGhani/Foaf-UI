import React, { useContext, useEffect, useState } from "react";
import { Upload, Form, Input } from "antd";
import Image from "next/image";
import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MyContext } from "../../../../shared/helper";
export const UplodOption = ({
  heading,
  setHeading,
  video,
  audio,
  picture,
  form,
  setimage,
  image,
  setfullVideo,
  formCover,
}) => {
  const { Dragger } = Upload;
  const { allData, setAllData } = useContext(MyContext);
  useEffect(() => {
    {
      picture && setHeading(heading);
    }
  }, [picture, setHeading, heading]);
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const uploadData = async (info) => {
    console.log("info ya hai bhai", info);

    if (picture) {
      const data = await getBase64(info.file.originFileObj);
      // console.log(data, "datainfo.file.originFileObj");
      setimage(data);
      setAllData({ imageFile: info.file.originFileObj });
    } else {
      setimage(URL.createObjectURL(info.file.originFileObj));
      setfullVideo(info.file);
    }
  };
  const props = {
    name: "file",
    multiple: true,
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const { TextArea } = Input;
  return (
    <div className="uplaod_data_main">
      <div className={`text_area_upload ${image && "size_change"}`}>
        {!picture && (
          <Form name="basic" form={form}>
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
                placeholder={
                  image
                    ? (video &&
                        "“The play button is the most compelling call to action on the web.”") ||
                      (audio &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique dictum consectetur aliquam feugiat posuere eget enim.")
                    : "What’s up?"
                }
                autoSize={{ minRows: 1, maxRows: 7 }}
                // defaultValue={}
              />
            </Form.Item>
          </Form>
        )}
      </div>

      <div className="upload_data">
        {!image ? (
          // <Form name="location" form={formCover} autoComplete="off">
          <Form.Item
            name="coverPhoto"
            rules={[
              {
                required: true,
                message: "Please select picture.",
              },
            ]}
          >
            <Dragger
              {...props}
              onChange={(info) => {
                uploadData(info);
              }}
            >
              <div className="upload_image">
                <Image
                  src={
                    (video && "/images/CreatePost/upload.png") ||
                    (audio && "/images/CreatePost/voice.png") ||
                    (picture && "/images/CreatePost/CoverPhoto.png")
                  }
                  alt="background"
                  width="80"
                  height="80"
                />
              </div>
              <p className="text1">
                Upload{" "}
                {(video && "Video") ||
                  (audio && "Audio") ||
                  (picture && "Picture")}
              </p>
              <p className="text2">or Drag and drop</p>
            </Dragger>
          </Form.Item>
        ) : (
          // </Form>
          (video && (
            <ReactPlayer
              controls
              className="react-player"
              url={image}
              width="100%"
            />
          )) ||
          (audio && (
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

              <AudioPlayer src={image} controls customAdditionalControls={[]} />
            </div>
          )) ||
          (picture && image && (
            <Image
              src={image}
              width="780"
              height="350"
              alt="image"
              layout="fixed"
            />
          ))
        )}
      </div>
    </div>
  );
};
