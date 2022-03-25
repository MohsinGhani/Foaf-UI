import React from "react";
import DropDown from "../../../../re-usabelComponent/search/dropDown";
import Switchs from "../../../../re-usabelComponent/search/switch";
import { DatePicker, Select, Space } from "antd";
import packageInfo from "../../../../../shared/json/index.json";
import SelectDropDown from "../../../../re-usabelComponent/search/select";
export default function EventOption() {
  const { select, date } = packageInfo;
  return (
    <div className="event_option fade-in">
      <Space size={30}>
        <Switchs text="Online Events" />
        <Switchs text="Paid Events" />
        <Switchs text="Popular with friends" />
        <Switchs text="Family-Friendly" />
        <SelectDropDown text="Location" select={select} />
        <SelectDropDown text="date" select={date} />
        <SelectDropDown text="Categories" select={select} />
      </Space>
    </div>
  );
}
