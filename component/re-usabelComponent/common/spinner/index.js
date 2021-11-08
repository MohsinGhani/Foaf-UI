import React from "react";
import { Spin } from "antd";

export default function Spinner({ name }) {
  return (
    <div className={`spin ${name}`}>
      <Spin size="large" />
    </div>
  );
}
