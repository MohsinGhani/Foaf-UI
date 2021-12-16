import { Space } from "antd";
import React, { useState } from "react";
import { CommonButton } from "../../../re-usabelComponent/common/button";
import { EventData } from "../../../re-usabelComponent/home/eventData";

export default function Steps() {
  const [number, setNumber] = useState(1);

  const arrey = [
    { number: 2, title: "Location" },
    { number: 3, title: "Description" },
    { number: 4, title: "cover Photo" },
    { number: 5, title: "Preview" },
    ,
  ];
  console.log(number);
  return (
    <>
      <div className="steps_main">
        <div className="steps_main_one">
          <div className="main2">
            <div className="stepOne2">
              <div className="round">1</div>
            </div>
          </div>
          {arrey.map((data, i) => (
            <div key={i} className={`main ${number > i + 1 && "color"}`}>
              <div className="vector"></div>
              <div className="stepOne">
                <div className="round">{data.number}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="steps_main_two">
          <p>Event Details</p>
          <p>Location</p>
          <p>Description</p>
          <p>Cover Photo</p>
          <p>Preview</p>
        </div>
      </div>
      <div className="event_data">
        <div>
          <EventData Details={true} />
        </div>
        <div className="bottom_next">
          <Space>
            <div
              onClick={() => {
                setNumber(number - 1);
              }}
            >
              <CommonButton butText="back" className="back" />
            </div>
            <div
              onClick={() => {
                setNumber(number + 1);
              }}
            >
              <CommonButton butText="Next" className="next" />
            </div>
          </Space>
        </div>
      </div>
    </>
  );
}
