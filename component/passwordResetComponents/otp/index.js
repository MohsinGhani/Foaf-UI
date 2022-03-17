import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Form } from "antd";
import { useEffect } from "react";

const OtpVerification = ({ form, autoCall }) => {
  return (
    <div className="Otp_main">
      <Form form={form}>
        <Form.Item name="otp">
          <OtpInput
            onChange={(e) => {
              if (e.split("").length > 5) autoCall(e);
            }}
            numInputs={6}
            inputStyle="box"
            containerStyle={{ justifyContent: "space-between" }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default OtpVerification;
