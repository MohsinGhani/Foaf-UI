import Image from "next/image";
import React, { useState } from "react";
import Profile from "../../../re-usabelComponent/profile";
import Steps from "../steps";

export const CreateEvent = ({ steps, setSteps }) => {
  console.log(steps, "steps is here 2222");
  return (
    <>
      <div className="event_main">
        <div className="event_child">
          <Image
            src="/images/CreatePost/event1.png"
            width="225px"
            height="292px"
            alt="event"
          />
        </div>
        <div
          className="event_child"
          onClick={() => {
            setSteps(true);
          }}
        >
          <Image
            src="/images/CreatePost/event2.png"
            width="225px"
            height="292px"
            alt="event"
          />
        </div>
      </div>
    </>
  );
};
