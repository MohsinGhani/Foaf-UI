import { Select } from "antd";
import React from "react";

export default function SelectDropDown({ text }) {
  const { Option } = Select;
  return (
    <div>
      <Select
        dropdownClassName="hello"
        placeholder={text}
        style={{ width: 120 }}
        allowClear="true"
      >
        <Option value="Pakistan">Pakistan</Option>
        <Option value="India">India</Option>
        <Option value="USA">USA</Option>
      </Select>
    </div>
  );
}
