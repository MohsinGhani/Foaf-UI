/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import CreateStory from "../createStory";
import { useRouter } from "next/router";
import Story from "../homeStories";
import { API } from "../../../../../pages/api/create";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { videoStatus } from "../../../../features/Create";
export default function Stories() {
  const [allVideoStatus, setallvideoStatus] = useState();
  const router = useRouter();
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  const dispatch = useDispatch();
  const getVideoStatus = async () => {
    if (data?.token) {
      try {
        let response = await fetch(`${API.GET_VIDEO_STATUS}`, {
          method: "GEt",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${data?.token}`,
          },
        });
        const Status = await response.json();
        setallvideoStatus(Status);
        dispatch(videoStatus(Status));
        console.log(Status, "get all videoStatus");
      } catch (err) {
        console.log(err), "error araha hai";
      }
    }
  };

  useEffect(() => {
    getVideoStatus();
  }, []);
  console.log(videoStatus?.result?.friends, "friendVedio");
  return (
    <div className="stories_main">
      <CreateStory />

      {allVideoStatus?.result?.friends?.map((data, index) => {
        if (index < 1) {
          return (
            <Story
              key={index}
              classname="hide1"
              url="/images/dashboard/samesize.svg"
              name={data.username}
              bgurl="/images/dashboard/post.svg"
              status={data.status}
            />
          );
        }
      })}

      <Story
        classname="hide2"
        url="/images/dashboard/requestProfile1.svg"
        name="Charlie Carder"
        bgurl="/images/dashboard/story2.png"
      />

      <Story
        classname="hide3"
        url="/images/dashboard/samesize.svg"
        name="Alfredo Schleifer"
        bgurl="/images/dashboard/story3.png"
      />

      <Story
        classname="hide4"
        url="/images/dashboard/requestProfile3.svg"
        name="Tatiana Dorwart"
        bgurl="/images/dashboard/story4.png"
      />

      <Story
        classname="hide5"
        url="/images/dashboard/requestProfile1.svg"
        name="Lincoln Carder"
        bgurl="/images/dashboard/story4.png"
      />
      <div className="arrow">
        <div
          className="arrow_arrow"
          onClick={() => {
            router.push("/stories");
          }}
        >
          <Image
            src="/images/dashboard/arrow.svg"
            alt="arrow"
            width="20"
            height="20"
          />
        </div>
      </div>
    </div>
  );
}
