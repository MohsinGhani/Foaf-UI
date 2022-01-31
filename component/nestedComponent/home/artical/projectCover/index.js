import { Space } from "antd";
import Image from "next/image";
import React from "react";
import { CommonButton } from "../../../../re-usabelComponent/common/button";
import DetailedImage from "../../../../re-usabelComponent/common/detailedImage";
import Tags from "./tags";
const ProjectCover = () => {
  return (
    <div className="project_cover">
      <p className="Project_heading">Project Cover</p>
      <DetailedImage
        ProjectCover={true}
        height="300px"
        image="/images/CreatePost/cover.png"
        footerHeight="70px"
      />
      <div className="image">
        <Space size={10} direction="vertical">
          <Space>
            <Image
              src="/images/CreatePost/Edit.png"
              alt="edit"
              width="16px"
              height="16px"
            />
            <p className="">Edit Cover Image</p>
          </Space>
          <p className="publishName">
            Publishing to: <span className="userName"> Lydia Workaman </span>
          </p>
          <p>
            Add or change tags (up to 5) so readers know what your Article is
            about
          </p>
          <div className="tags">
            <Tags />
          </div>
          <p>Learn more about what happens to your post when you publish.</p>
        </Space>
      </div>
      <CommonButton butText="Publish now" className="publish_button" />
    </div>
  );
};

export default ProjectCover;
