/* eslint-disable @next/next/no-img-element */
import { Form, Input, Space } from "antd";
import Image from "next/image";
import React from "react";
import { CommonButton } from "../../../re-usabelComponent/common/button";
import CommonInput from "../../../re-usabelComponent/common/inputField";

const Invite = () => {
  return (
    <div className="invite">
      <h1 className="heading">Invite a Friend </h1>
      <Image
        src="/images/dashboard/invite.png"
        alt="heart"
        width="275"
        height="245"
      />
      <Input placeholder="input placeholder" />
      <Space>
        <Form.Item label="Email*">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Full name">
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Space>
      <Space>
        <Form.Item label="Email*">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Full name">
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Space>
      <Space>
        <div>
          <img
            src="/images/dashboard/addinvite.png"
            alt="pictiue"
            width="240px"
            height="40px"
          />
        </div>
        <CommonButton butText="Invite" className="inviteBut" />
      </Space>
    </div>
  );
};

export default Invite;
