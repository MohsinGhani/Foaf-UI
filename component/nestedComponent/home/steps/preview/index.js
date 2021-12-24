import { Space } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import { CommonButton } from "../../../../re-usabelComponent/common/button";

const Preview = ({ heading, setHeading }) => {
  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);
  return (
    <div className="parent">
      <div
        className="event_image"
        style={{ backgroundImage: "url(/images/dashboard/post.svg)" }}
      >
        <div className="footer">
          <div className="calender">
            <div className="">
              <Image
                src="/images/CreatePost/calculator.png"
                alt="img"
                width="48"
                height="48"
                layout="fixed"
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
      </div>
      <h3 className="about">About</h3>
      <div className="about_details">
        <div className="left_site">
          <div className="detail_heading">Details</div>
          <div className="flex">
            <Image
              src="/images/CreatePost/details1.png"
              alt="img"
              width="30"
              height="30"
              layout="fixed"
            />

            <p>Public | Anyone or off FOAF</p>
          </div>
          <div className="flex">
            <Image
              src="/images/CreatePost/details2.png"
              alt="img"
              width="30"
              height="30"
              layout="fixed"
            />

            <p>1 Regular responded</p>
          </div>
          <div className="flex">
            <Image
              src="/images/CreatePost/details3.png"
              alt="img"
              width="30"
              height="30"
            />
            <p>Texas, Dolby, United States</p>
          </div>
        </div>
        <div className="right_site">
          <p className="detail_heading">Guest</p>
          <div className="guest_site">
            <div className="flex_two">
              <div>
                <Image
                  src="/images/CreatePost/guest1.png"
                  alt="img"
                  width="33"
                  height="33"
                />
              </div>
              <p>Going</p>
            </div>
            <div className="flex_two">
              <div>
                <Image
                  src="/images/CreatePost/guest2.png"
                  alt="img"
                  width="33"
                  height="33"
                />
              </div>
              <p>Interested</p>
            </div>
            <div className="flex_two">
              <div>
                <Image
                  src="/images/CreatePost/guest3.png"
                  alt="img"
                  width="33"
                  height="33"
                />
              </div>
              <p>Invited</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="map"
        style={{ backgroundImage: "url(/images/CreatePost/map.png)" }}
      >
        <div className="map_footer">
          <p>Texas, Dolby, United States</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
