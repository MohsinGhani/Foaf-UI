import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Form } from "antd";
import { CommonButton } from "../../re-usabelComponent/common/button";

const OtpVerification = ({ form }) => {
  const [otpValue, setOtpValue] = useState("");

  return (
    <div className="Otp_main">
      <Form form={form}>
        <Form.Item name="otp">
          <OtpInput
            value={otpValue}
            onChange={(e) => {
              setOtpValue(e);
            }}
            numInputs={6}
            // separator={<span>" " </span>}
            // placeholder="1,2,3,4"
            inputStyle="box"
            containerStyle={{ justifyContent: "space-between" }}
          />
        </Form.Item>
      </Form>
      <CommonButton butText="verify" className="continue" onclick={verify} />
    </div>
  );
};

export default OtpVerification;
