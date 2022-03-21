import { Form, Select } from "antd";
import React from "react";

const Language = () => {
  const { Option } = Select;

  return (
    <div className="language">
      <h1 className="heading"> Pick your language and country/region </h1>
      <div className="selectData">
        <Form.Item name="language">
          <Select
            size="large"
            dropdownClassName="hello"
            placeholder="English(US)"
            style={{ width: "100%" }}
            allowClear="true"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Form.Item>
        <Form.Item name="country">
          <Select
            size="large"
            dropdownClassName="hello"
            placeholder="India"
            style={{ width: "100%" }}
            allowClear="true"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default Language;
