import { Space } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import { CommonButton } from "../../../../re-usabelComponent/common/button";

const Preview = ({ heading, setHeading }) => {
  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);
  return (
    <>
      <div className="event_image">
        <Image src="/images/dashboard/post4.jpg" alt="img" layout="fill" />
      </div>
      <div
        className="footer"
        style={{ backgroundImage: "url(/images/CreatePost/footer.png)" }}
      >
        <div className="calender">
          <div>
            <Image
              src="/images/CreatePost/calculator.png"
              alt="img"
              width="48"
              height="48"
            />
          </div>
          <div className="date">
            <p>FOAF EVENT</p>
            <p>Saturday, 24 March 2021 AT 12:00 UTC+01</p>
            <p>Texas, Dolby, United States</p>
          </div>
        </div>
        <div className="button_site">
          <CommonButton butText="Intrested" className="event_button" />
          <CommonButton butText="Going" className="event_button" />
          <CommonButton butText="invite" className="event_button" />
        </div>
      </div>
      <h3 className="about">About</h3>
      <div>
        <Image
          src="/images/CreatePost/detail.png"
          alt="img"
          width="400"
          height="200"
        />
      </div>
    </>
  );
};

export default Preview;
