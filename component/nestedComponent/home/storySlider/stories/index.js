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
  const router = useRouter();

  return (
    <div className="stories_main">
      <CreateStory />

      <Story
        classname="hide2"
        url="/images/dashboard/samesize.svg"
        name="Erin Press"
        bgurl="/images/dashboard/post.svg"
      />
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
