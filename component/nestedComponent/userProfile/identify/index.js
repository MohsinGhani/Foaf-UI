import React from "react";
import { Form, Radio, Space } from "antd";

const Identify = () => {
  return (
    <div className="identify">
      <h1 className="heading"> How Do You Identify </h1>
      <Form.Item name="identify">
        <Radio.Group defaultValue="Male">
          <Space direction="vertical" size={20}>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
            <Radio value="not"> Prefer not to say</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </div>
  );
};

export default Identify;
