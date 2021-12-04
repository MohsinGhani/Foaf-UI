import React from "react";
import DropDown from "../../../../re-usabelComponent/search/dropDown";
import Switchs from "../../../../re-usabelComponent/search/switch";
import { DatePicker, Select, Space } from "antd";
import SelectDropDown from "../../../../re-usabelComponent/search/select";
export default function EventOption() {
  return (
    <div className="event_option fade-in">
      <Space size={30}>
        <Switchs text="Online Events" />
        <Switchs text="Paid Events" />
        <Switchs text="Popular with friends" />
        <Switchs text="Family-Friendly" />
        <SelectDropDown text="Location" />
        <DatePicker />
        <SelectDropDown text="Categories" />
      </Space>
    </div>
  );
}
