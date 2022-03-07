import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Form } from "antd";

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
    </div>
  );
};

export default OtpVerification;
