import React from "react";
import { Switch } from "antd";
import { Space } from "antd";
export default function Switchs({ text }) {
  return (
    <div className="switch">
      <Space size={10}>
        <p>{text}</p>

        <Switch />
      </Space>
    </div>
  );
}
