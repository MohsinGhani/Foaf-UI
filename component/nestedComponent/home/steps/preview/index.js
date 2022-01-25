import { Space } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CommonButton } from "../../../../re-usabelComponent/common/button";
import moment from "moment";

const Preview = ({ heading, setHeading, form, image, number }) => {
  const [previewData, setPreviewData] = useState([]);
  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);

  console.log(previewData, "hello");

  useEffect(() => {
    let temp = form?.getFieldsValue(true);
    temp["coverPhoto"] = image;
    let Month = moment(temp.startDate?._d).format("MMM");
    let date = moment(temp.startDate).format("D");
    let fullDate = moment(temp.startDate).format("dddd , D MMMM YYYY [At]");
    let time = moment(temp.startTime).format("h:mm [UTC+01]");
    let data = {
      ...temp,
      fullDate: `${fullDate}`,
      Month: `${Month}`,
      date: `${date}`,
      time: `${time}`,
    };
    setPreviewData(data);

    console.log(time, "datetem.startDate");
  }, [image, form]);
  if (number === 6) {
    console.log("hello");
  }
  return (
    <div className="parent">
      <div
        className="event_image"
        style={{ backgroundImage: `url(${previewData?.coverPhoto})` }}
      >
        <div className="footer">
          <div className="calender">
            <div className="date_box">
              <div className="month">
                <span>{previewData?.Month}</span>
              </div>
              <div className="date">
                <span>{previewData?.date}</span>
              </div>
            </div>
            <div className="date_name">
              <p className="event_name">{previewData?.event_name}</p>
              <p>{`${previewData?.fullDate}  ${previewData?.time}`}</p>
              <p>{previewData?.location}</p>
            </div>
          </div>
          <div className="button_site">
            <CommonButton
              icon="interested"
              butText="Intrested"
              className="event_button"
            />
            <CommonButton
              icon="going"
              butText="Going"
              className="event_button"
            />
            <CommonButton
              icon="invite"
              butText="invite"
              className="event_button"
            />
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
