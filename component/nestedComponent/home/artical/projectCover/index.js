import { Space, Upload } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { CommonButton } from "../../../../re-usabelComponent/common/button";
import DetailedImage from "../../../../re-usabelComponent/common/detailedImage";
import { API } from "../../../../../pages/api/create";
import Tags from "./tags";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const ProjectCover = ({ articleData }) => {
  const [photo, setPhoto] = useState("");
  const [tags, setTags] = useState("");
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  const router = useRouter();
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
    const data = await getBase64(info.file.originFileObj);
    setPhoto(data);
  };

  const publish = async () => {
    console.log("articleDataarticleDataarticleData ya raha bhai", articleData);
    let formData = new FormData();
    formData.append("article_name", "some name");
    formData.append("article_data", JSON.stringify(articleData));
    formData.append("category", "some category");
    formData.append("tags", "some tags");
    formData.append("location", "");
    formData.append("liked_by", "[]");
    try {
      let response = await fetch(`${API.CREATE_ARTICLE}`, {
        method: "POST",
        headers: {
          // "Content-Type":
          //   "multipart/form-data; boundary=<calculated when request is sent>",
          Authorization: `Token ${data.token}`,
        },
        body: formData,
      });
      const createArticle = await response.json();
      console.log(createArticle, "createEvent");
      router.push("/");
    } catch (err) {
      console.log(err), "error ";
    }
  };

  return (
    <div className="project_cover">
      <p className="Project_heading">Project Cover</p>
      <DetailedImage
        ProjectCover={true}
        height="300px"
        image={photo ? photo : "/images/CreatePost/cover.png"}
        footerHeight="70px"
      />
      <div className="image">
        <Space size={10} direction="vertical">
          <Upload
            showUploadList={false}
            onChange={(info) => {
              uploadData(info);
            }}
          >
            <Space>
              <Image
                src="/images/CreatePost/Edit.png"
                alt="edit"
                width="16px"
                height="16px"
              />
              <p className="Cover_image">Edit Cover Image</p>
            </Space>
          </Upload>
          <p className="publishName">
            Publishing to: <span className="userName"> Lydia Workaman </span>
          </p>
          <p>
            Add or change tags (up to 5) so readers know what your Article is
            about.
          </p>
          <div className="tags">
            <Tags setTags={setTags} tags={tags} />
          </div>
          <p>Learn more about what happens to your post when you publish.</p>
        </Space>
      </div>
      <CommonButton
        butText="Publish now"
        className="publish_button"
        onclick={publish}
      />
    </div>
  );
};

export default ProjectCover;
