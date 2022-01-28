import React from "react";
import { CommonButton } from "../../../../../re-usabelComponent/common/button";

const PreviewFooter = ({ previewData }) => {
  return (
    <>
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
        <CommonButton icon="going" butText="Going" className="event_button" />
        <CommonButton icon="invite" butText="invite" className="event_button" />
      </div>
    </>
  );
};

export default PreviewFooter;
