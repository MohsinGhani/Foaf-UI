/* eslint-disable @next/next/no-img-element */
import { Divider, Form, Input, Space } from "antd";
import Image from "next/image";
import React from "react";
import { CommonButton } from "../../../re-usabelComponent/common/button";
import CommonInput from "../../../re-usabelComponent/common/inputField";

const Invite = () => {
  return (
    <div className="invite">
      <h1 className="heading">Invite a Friend </h1>
      <div className="picture">
        <Image
          src="/images/dashboard/invite.png"
          alt="heart"
          width="275"
          height="245"
        />
      </div>
      <Input
        placeholder="Http://hiuphvcccyuhhnkiooiiiuuhnjjjkkjiuuugfff"
        className="copy"
      />
      <Divider>OR</Divider>
      <Space>
        <Form.Item label="Email*">
          <Input placeholder="mail@friendsofaforever.com" />
        </Form.Item>
        <Form.Item label="Full name">
          <Input placeholder="Optional" />
        </Form.Item>
      </Space>
      <Space>
        <Form.Item label="Email*">
          <Input placeholder="mail@friendsofaforever.com" />
        </Form.Item>
        <Form.Item label="Full name">
          <Input placeholder="Optional" />
        </Form.Item>
      </Space>
      <Space className="addClass">
        <div>Add another friend</div>
        <CommonButton butText="Invite" className="inviteBut" />
      </Space>
    </div>
  );
};

export default Invite;
