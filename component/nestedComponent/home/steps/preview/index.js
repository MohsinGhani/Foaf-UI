/* eslint-disable react-hooks/exhaustive-deps */
import { Space } from "antd";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import moment from "moment";
import { MyContext } from "../../../../../shared/helper";
import DetailedImage from "../../../../re-usabelComponent/common/detailedImage";
import { API } from "../../../../../pages/api/home";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Preview = ({ heading, setHeading, form, image }) => {
  const [previewData, setPreviewData] = useState([]);
  const [singelPost, setSingelPost] = useState([]);
  const { allData, setAllData } = useContext(MyContext);
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  const router = useRouter();
  useEffect(() => {
    setHeading && setHeading(heading);
  }, [heading, setHeading]);

  useEffect(async () => {
    let id = router.query.id;
    if (id) {
      console.log("idsadasdsssssssssssssssssss", id);
      let formData = new FormData();
      formData.append("event_id", id);
      try {
        let response = await fetch(`${API.GET_SINGLE_EVENT_POST}`, {
          method: "POST",
          headers: {
            // "Content-Type":
            // "multipart/form-data; boundary=<calculated when request is sent>",
            Authorization: `Token ${data?.token}`,
          },
          body: formData,
        });
        const getPost = await response.json();
        setSingelPost(getPost);
        console.log(getPost, "SingelPOSt");
      } catch (err) {
        console.log(err), "error ";
      }
    }
  }, []);

  useEffect(() => {
    if (form) {
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
    }
  }, [image, form]);
  return (
    <div className="parent">
      <DetailedImage
        previewData={previewData}
        singelPost={singelPost?.result?.[0]}
        height="440px"
        footerHeight="85px"
      />
      <h3 className="about">About</h3>
      <p className="about_text">
        {(singelPost && singelPost?.result?.description) ||
          (previewData && previewData?.description)}
      </p>
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
            <p>{previewData?.location || singelPost?.result?.event_address}</p>
          </div>
        </div>
        <div className="right_site">
          <p className="detail_heading">Guest</p>
          <div className="guest_site">
            <div className="flex_two">
              <div className="Circle First">
                <p>
                  {singelPost
                    ? singelPost?.result?.going?.length
                      ? singelPost?.result?.going?.length + 1
                      : 0
                    : 0}
                </p>
              </div>
              <p>Going</p>
            </div>
            <div className="flex_two">
              <div className="Circle two">
                <p>
                  {singelPost
                    ? singelPost?.result?.interested?.length
                      ? singelPost?.result?.interested?.length + 1
                      : 0
                    : 0}
                </p>
              </div>
              <p>Interested</p>
            </div>
            <div className="flex_two">
              <div className="Circle three">
                <p>
                  {singelPost
                    ? singelPost?.result?.invited?.length
                      ? singelPost?.result?.invited?.length + 1
                      : 0
                    : 0}
                </p>
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
