import Image from "next/image";
import React, { useState } from "react";
import Profile from "../../profile";
import { Space, Form } from "antd";

import { CreateEvent } from "../../../nestedComponent/home/createEvent";
import { StatusUpdate } from "../../../nestedComponent/home/statusUpdate";
import { UplodOption } from "../UploadOption";
import Steps from "../../../nestedComponent/home/steps";
import { CommonButton } from "../../common/button";
import { useSelector } from "react-redux";
import { API } from "../../../../pages/api/create";
import { array } from "yup";
export default function CreatePostContent({ status, video, audio, event }) {
  const statedata = useSelector((state) => state);
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
          formData.append(type, fullVideo?.originFileObj);
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

          {status && <StatusUpdate form={form} />}
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
          {event && <CreateEvent setSteps={setSteps} steps={steps} />}

          <div className="add_post">
            <div className="text">Add to your post</div>
            <div>
              <Space>
                <Image
                  src="/images/CreatePost/add1.png"
                  width="30"
                  height="30"
                  alt="color"
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
        </div>
      )}
      {steps && <Steps />}
    </>
  );
}
