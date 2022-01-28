import { Space } from "antd";
import Image from "next/image";
import React from "react";
import { CommonButton } from "../../../../re-usabelComponent/common/button";
import DetailedImage from "../../../../re-usabelComponent/common/detailedImage";
import Tags from "./tags";

const ProjectCover = () => {
  return (
    <div>
      <DetailedImage ProjectCover={true} image="/images/CreatePost/cover.png" />
      <Space size={25}>
        <div className="image">
          <Space>
            <Image
              src="/images/CreatePost/Edit.png"
              alt="edit"
              width="16px"
              height="16px"
            />
            <p>Edit Cover Image</p>
          </Space>
          <p>
            Publishing to: <span> Lydia Workaman </span>
          </p>
          <p>
            Add or change tags (up to 5) so readers know what your Article is
            about
          </p>
          <Tags />
          <p>Learn more about what happens to your post when you publish.</p>
        </div>
      </Space>
      <CommonButton butText="Publish now" className="publish_button" />
    </div>
  );
};

export default ProjectCover;
