import React, { useState } from "react";
import { Upload, message, Input } from "antd";
import Image from "next/image";
import ReactPlayer from "react-player";

export const UplodOption = ({ video, audio }) => {
  const { Dragger } = Upload;
  const [image, setimage] = useState(null);
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const uploadData = (info) => {
    // const hello = async (info) => {
    //   // let data = await getBase64(info.file.originFileObj);
    //   // console.log(data, "i am here");
    //   // setimage(data);
    //   return setimage;
    // };
    // console.log("hello", hello(info));
    // let e = URL.createObjectURL(info.file);
    console.log("info ya hai bhai", info);
    if (process.browser) {
      setimage(URL.createObjectURL(info.file.originFileObj));
    }
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList, "uploading");
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const props = {
    name: "file",
    multiple: true,
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  console.log("imageimageimage", image);
  const { TextArea } = Input;
  return (
    <div className="uplaod_data_main">
      <div className={`text_area_upload ${image && "size_change"}`}>
        <TextArea
          placeholder={
            image
              ? "“The play button is the most compelling call to action on the web.”"
              : "What’s up?"
          }
          autoSize={{ minRows: 1, maxRows: 7 }}
          // defaultValue={}
        />
      </div>

      <div className="upload_data">
        {!image ? (
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
                  (audio && "/images/CreatePost/audioUpload.png")
                }
                alt="background"
                width="90"
                height="90"
              />
            </div>
            <p className="text1">
              Upload {(video && "Video") || (audio && "Audio")}
            </p>
            <p className="text2">or Drag and drop</p>
          </Dragger>
        ) : (
          <ReactPlayer
            className="react-player"
            url={image}
            width="100%"
            height="337px"
            playing={true}
            onStart={(e) => {
              console.log("hello hello", e);
            }}
          />
        )}
      </div>
    </div>
  );
};
