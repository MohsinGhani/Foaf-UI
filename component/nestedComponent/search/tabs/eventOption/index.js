import React from "react";
import DropDown from "../../../../re-usabelComponent/search/dropDown";
import Switchs from "../../../../re-usabelComponent/search/switch";
import { Space } from "antd";
export default function EventOption() {
  return (
    <div className="event_option">
      <Space size={30}>
        <Switchs text="Online Events" />
        <Switchs text="Paid Events" />
        <Switchs text="Popular with friends" />
        <Switchs text="Family-Friendly" />
        <DropDown text="Location" />
        <DropDown text="Dates" />
        <DropDown text="Categories" />
      </Space>
    </div>
  );
}
