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
export default function CreatePostContent({ status, video, audio, event }) {
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  const [steps, setSteps] = useState(false);
  const [description, setDiscription] = useState("");
  const [form] = Form.useForm();
  const post = () => {
    form
      .validateFields()
      .then(async (values) => {
        console.log(values, "valuesss");
        const statusData = {
          description: values.discription,
        };
        // try {
        //   let response = await fetch(`${API.CREATE_STATUS}`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Token ${data.token}`,
        //     },
        //     body: JSON.stringify(statusData),
        //   });
        //   const createStatus = await response.json();

        //   console.log(createStatus, "createStatus");
        // } catch (err) {
        //   console.log(err), "error araha hai";
        // }
        try {
          let response = await fetch(`${API.CREATE_VIDEO_STATUS}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${data.token}`,
            },
            body: JSON.stringify(statusData),
          });
          const createVideo = await response.json();
          // setgetAllFriends(getallfriends);

          console.log(createVideo, "createStatus");
        } catch (err) {
          console.log(err), "error araha hai";
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
          {video && <UplodOption video form={form} />}
          {audio && <UplodOption audio />}
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
