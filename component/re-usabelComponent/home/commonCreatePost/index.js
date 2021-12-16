import Image from "next/image";
import React, { useState } from "react";
import Profile from "../../profile";
import { Space } from "antd";

import { CreateEvent } from "../../../nestedComponent/home/createEvent";
import { StatusUpdate } from "../../../nestedComponent/home/statusUpdate";
import { UplodOption } from "../UploadOption";
import Steps from "../../../nestedComponent/home/steps";
export default function CreatePostContent({ status, video, audio, event }) {
  const [steps, setSteps] = useState(false);
  console.log("step is here", steps);
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

          {status && <StatusUpdate />}
          {video && <UplodOption video />}
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
        </div>
      )}
      {steps && <Steps />}
    </>
  );
}
