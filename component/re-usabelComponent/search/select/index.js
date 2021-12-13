import { Select } from "antd";
import React from "react";

export default function SelectDropDown({ text, select }) {
  const { Option } = Select;
  return (
    <div className="main_select">
      <Select
        dropdownClassName="hello"
        placeholder={text}
        style={{ width: 120 }}
        allowClear="true"
      >
        {select?.map((data, key) => (
          <Option key={key} value={data}>
            {data}
          </Option>
        ))}
      </Select>
    </div>
  );
}
