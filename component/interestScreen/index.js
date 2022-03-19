import React from "react";
import Card from "../nestedComponent/interestScreen";
import { CommonButton } from "../re-usabelComponent/common/button";
import { Checkbox, Form } from "antd";
import { interestImg } from "../../shared/json/index.json";
import { Row, Col } from "antd";
const Interest = () => {
  const [form] = Form.useForm();
  const done = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values, "form");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="interest_container">
      <div className="main_interest">
        <div className="top">
          <h2>Choose Your interests</h2>
          <CommonButton className="interest" butText="Done" onclick={done} />
        </div>
        <div className="content">
          <Form name="interest" form={form}>
            <Form.Item name="interestssss">
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
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Interest;
