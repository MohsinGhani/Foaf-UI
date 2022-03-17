import React, { useContext, useEffect, useState } from "react";
import { Upload, Form, Input } from "antd";
import Image from "next/image";

import "react-h5-audio-player/lib/styles.css";
import { MyContext } from "../../../../shared/helper";
import VideoPost from "../../../re-usabelComponent/home/video";
import AudioPost from "../../../re-usabelComponent/home/audio";
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
    if (picture) {
      const data = await getBase64(info.file.originFileObj);

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
            <Form.Item name="discription">
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
              />
            </Form.Item>
          </Form>
        )}
      </div>

      <div className="upload_data">
        {!image ? (
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
          (video && <VideoPost url={image} />) ||
          (audio && <AudioPost url={image} />) ||
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
