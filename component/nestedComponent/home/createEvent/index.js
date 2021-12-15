import Image from "next/image";
import React, { useState } from "react";
import Steps from "../steps";

export const CreateEvent = () => {
  const [steps, setSteps] = useState();
  return (
    <div>
      {!steps && (
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
      )}
      {steps && <Steps />}
    </div>
  );
};
