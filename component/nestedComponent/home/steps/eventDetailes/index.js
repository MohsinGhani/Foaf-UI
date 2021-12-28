import { DatePicker, Input, Space, TimePicker } from "antd";
import React, { useEffect, useState } from "react";

export const EventDetails = ({ heading, setHeading }) => {
  const [classChange, setClassChange] = useState("");
  const [endDate, setEndDate] = useState(false);
  const [endTime, setEndTime] = useState(false);
  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);
  return (
    <div className="event_details">
      <Space direction="vertical" size={25}>
        <div className={`event_name ${classChange}`}>
          <p>Event name</p>
          <Input
            onBlur={() => {
              setClassChange("");
            }}
            onClick={() => {
              setClassChange("active_text");
            }}
          />
        </div>
        <div className="select">
          <div>
            <p className="text">Start Date</p>
            <DatePicker
              className="select_date"
              onBlur={() => {
                setClassChange("");
              }}
              onClick={() => {
                setClassChange("active_text");
              }}
            />
            <p
              className="add_picker"
              onClick={() => {
                setEndDate(!endDate);
              }}
            >
              + End date
            </p>
            {endDate && <DatePicker className="select_date fade-in" />}
          </div>
          <div className="time">
            <p className="text">Start Time</p>
            <TimePicker className="select_time" />
            <p
              className="add_picker"
              onClick={() => {
                setEndTime(!endTime);
              }}
            >
              + End Time
            </p>
            {endTime && <TimePicker className="select_time fade-in" />}
          </div>
        </div>
      </Space>
    </div>
  );
};
