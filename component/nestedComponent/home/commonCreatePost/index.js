import Image from "next/image";
import React, { useState } from "react";
import Profile from "../../../re-usabelComponent/profile";
import { Space, Form } from "antd";

import { CreateEvent } from "../createEvent";
import { StatusUpdate } from "../statusUpdate";
import { UplodOption } from "../UploadOption";
import Steps from "../steps";
import { CommonButton } from "../../../re-usabelComponent/common/button";
import { useSelector } from "react-redux";
import { API } from "../../../../pages/api/create";
import { array } from "yup";
import Article from "../artical";
import Preview from "../steps/preview";
import ProjectCover from "../artical/projectCover";
import Publish from "../artical/publishPage";
import { useRouter } from "next/router";
import {} from "next/router";
import AddInPost from "./addingModal";

export default function CreatePostContent({
  status,
  video,
  audio,
  event,
  article,
}) {
  const statedata = useSelector((state) => state);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  var data = statedata?.user?.userDetailes?.result?.user;
  const [image, setimage] = useState(null);
  const [steps, setSteps] = useState(false);
  const [fullVideo, setfullVideo] = useState(null);

  const [form] = Form.useForm();
  const post = () => {
    console.log(fullVideo, "fullVideofullVideofullVideo");
    console.log(data.token, "data token");
    form
      .validateFields()
      .then((values) => {
        console.log(values, "valuesss");
        console.log(fullVideo, "fullVideofullVideo");
        console.log("file", fullVideo);
        const uploadData = async (url, type) => {
          let formData = new FormData();
          {
            status
              ? formData.append(type, fullVideo)
              : formData.append(type, fullVideo?.originFileObj);
          }
          formData.append("description", values.discription);
          try {
            let response = await fetch(`${url}`, {
              method: "POST",
              headers: {
                // "Content-Type": "multipart/form-data",
                // "Content-Type": "multipart/form-data",
                Authorization: `Token ${data.token}`,
              },
              body: formData,
            });
            const createVideo = await response.json();
            console.log(createVideo, "createStatus");
            setfullVideo("");
            setimage("");
            form.resetFields();
            router.push("/");
          } catch (err) {
            console.log(err), "error araha hai";
          }
        };

        {
          video && uploadData(API.CREATE_VIDEO_STATUS, "video");
        }
        {
          audio && uploadData(API.CREATE_AUDIO_STATUS, "audio");
        }
        {
          status && uploadData(API.CREATE_STATUS, "background_image");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {!steps && (
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
            <StatusUpdate
              form={form}
              fullVideo={fullVideo}
              setfullVideo={setfullVideo}
            />
          )}
          {video && (
            <UplodOption
              video
              form={form}
              setimage={setimage}
              image={image}
              fullVideo={fullVideo}
              setfullVideo={setfullVideo}
            />
          )}
          {audio && (
            <UplodOption
              audio
              setimage={setimage}
              image={image}
              fullVideo={fullVideo}
              setfullVideo={setfullVideo}
            />
          )}
          {article && <Article />}
          {/* {article && !preview && <Publish />} */}
          {event && <CreateEvent setSteps={setSteps} steps={steps} />}
          {!article ? (
            <>
              <div className="add_post">
                <div className="text">Add to your post</div>
                <div>
                  <Space>
                    <Image
                      src="/images/CreatePost/add1.png"
                      width="30"
                      height="30"
                      alt="color"
                      onClick={() => {
                        setIsModalVisible("tag");
                      }}
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
              <CommonButton className="post" butText="Post" onclick={post} />
            </>
          ) : (
            // <CommonButton
            //   className="post article"
            //   butText="Next"
            //   onclick={() => {
            //     setPreview(false);
            //   }}
            // />
            ""
          )}
        </div>
      )}
      {steps && <Steps />}
      <AddInPost
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        title="Add to your Post"
        className="addInPost"
      />
    </>
  );
}
