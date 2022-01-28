/* eslint-disable react-hooks/exhaustive-deps */
import { Space } from "antd";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import moment from "moment";
import { MyContext } from "../../../../../shared/helper";
import DetailedImage from "../../../../re-usabelComponent/common/detailedImage";

const Preview = ({ heading, setHeading, form, image }) => {
  const [previewData, setPreviewData] = useState([]);
  const { allData, setAllData } = useContext(MyContext);
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
    setAllData({ ...allData, data });
    console.log(time, "datetem.startDate");
  }, [image, form]);
  return (
    <div className="parent">
      <DetailedImage previewData={previewData} />
      <h3 className="about">About</h3>
      <p className="about_text">{previewData?.description}</p>
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
