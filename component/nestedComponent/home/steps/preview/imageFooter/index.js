import React from "react";
import { CommonButton } from "../../../../../re-usabelComponent/common/button";
import moment from "moment";
const PreviewFooter = ({ previewData, singelPost }) => {
  let Month = moment(singelPost?.start_date).format("MMM");
  let date = moment(singelPost?.start_date).format("D");
  let fullDate = moment(singelPost?.start_date).format(
    "dddd , D MMMM YYYY [At]"
  );
  let time = moment(singelPost?.start_date).format("h:mm [UTC+01]");
  console.log(Month, "month monthg");
  return (
    <>
      <div className="calender">
        <div className="date_box">
          <div className="month">
            <span>{previewData?.Month || Month}</span>
          </div>
          <div className="date">
            <span>{previewData?.date || date}</span>
          </div>
        </div>
        <div className="date_name">
          <p className="event_name">
            {previewData?.event_name || singelPost?.event_name}
          </p>
          <p>
            {(previewData
              ? ""
              : `${previewData?.fullDate}  ${previewData?.time}`) ||
              `${fullDate} ${time}`}
          </p>
          <p>{previewData?.location || singelPost?.event_address}</p>
        </div>
      </div>
      <div className="button_site">
        <CommonButton
          icon="interested"
          butText="Intrested"
          className="event_button"
        />
        <CommonButton icon="going" butText="Going" className="event_button" />
        <CommonButton icon="invite" butText="invite" className="event_button" />
      </div>
    </>
  );
};

export default PreviewFooter;
