import React from "react";
import { Upload, message } from "antd";
import Image from "next/image";

export const UplodOption = () => {
  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div className="upload_data">
      <Dragger {...props}>
        <div className="upload_image">
          <Image
            src="/images/CreatePost/upload.png"
            alt="background"
            width="90"
            height="90"
          />
        </div>
        <p className="text1">Upload Video</p>
        <p className="text2">or Drag and drop</p>
      </Dragger>
    </div>
  );
};
