import { Input } from "antd";
import React, { useState } from "react";

export const EventDetails = () => {
  const [classChange, setClassChange] = useState();
  return (
    <div className={`event_details ${classChange ? "active" : "unactive"} `}>
      <p>Event name</p>
      <Input
        onClick={() => {
          setClassChange(!classChange);
        }}
      />
    </div>
  );
};
