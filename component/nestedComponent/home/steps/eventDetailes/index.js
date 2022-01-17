import { DatePicker, Input, Space, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import { Form } from "antd";
export const EventDetails = ({ heading, setHeading, form }) => {
  const [classChange, setClassChange] = useState("");
  const [endDate, setEndDate] = useState(false);
  const [endTime, setEndTime] = useState(false);

  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);
  return (
    <div className="event_details">
      <Form name="basic" form={form} autoComplete="off">
        <Space direction="vertical" size={25}>
          <div className={`event_name ${classChange}`}>
            <p>Event name</p>
            <Form.Item
              name="event_name"
              rules={[
                {
                  required: true,
                  message: "Please input event name",
                },
              ]}
            >
              <Input
                onBlur={() => {
                  setClassChange("");
                }}
                onClick={() => {
                  setClassChange("active_text");
                }}
              />
            </Form.Item>
          </div>
          <div className="select">
            <div>
              <p className="text">Start Date</p>
              <Form.Item name="startDate">
                <DatePicker
                  className="select_date"
                  onBlur={() => {
                    setClassChange("");
                  }}
                  onClick={() => {
                    setClassChange("active_text");
                  }}
                />
              </Form.Item>
              <p
                className="add_picker"
                onClick={() => {
                  setEndDate(!endDate);
                }}
              >
                + End date
              </p>
              {endDate && (
                <Form.Item name="endDate">
                  <DatePicker className="select_date fade-in" />
                </Form.Item>
              )}
            </div>
            <div className="time">
              <p className="text">Start Time</p>
              <Form.Item name="startTime">
                <TimePicker className="select_time" />
              </Form.Item>
              <p
                className="add_picker"
                onClick={() => {
                  setEndTime(!endTime);
                }}
              >
                + End Time
              </p>
              {endTime && (
                <Form.Item name="endTime">
                  <TimePicker className="select_time fade-in" />
                </Form.Item>
              )}
            </div>
          </div>
        </Space>
      </Form>
    </div>
  );
};
