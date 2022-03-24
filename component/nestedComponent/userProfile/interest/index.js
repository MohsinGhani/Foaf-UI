import React from "react";
import Card from "./card";

import { Checkbox, Form } from "antd";
import { interestImg } from "../../../../shared/json";
import { Row, Col } from "antd";
import { CommonButton } from "../../../re-usabelComponent/common/button";
const Interest = ({ formData }) => {
  return (
    <div className="interest_container">
      <div className="main_interest">
        <div className="top">
          <h2>Choose Your interests</h2>
          <CommonButton
            className="interest"
            butText="Done"
            onclick={formData}
          />
        </div>
        <div className="content">
          <Form.Item name="interests">
            <Checkbox.Group>
              <Row gutter={[16, 16]} justify="center">
                {interestImg.map(({ src, name }, key) => (
                  <Col key={key} sm={14} md={12} lg={8} xl={6}>
                    <Checkbox value={name}>
                      <Card src={src} name={name} key={key} />
                    </Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default Interest;
