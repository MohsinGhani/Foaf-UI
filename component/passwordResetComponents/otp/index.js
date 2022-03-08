import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Form } from "antd";
import { useEffect } from "react";

const OtpVerification = ({ form, autoCall }) => {
  // const [otpValue, setOtpValue] = useState("");

  // console.log("otpValue", otpValue.split(""));

  // const data = (e) => {};

  // form.setFieldsValue({
  //   [fname]: fvalue,
  // });

  return (
    <div className="Otp_main">
      <Form form={form}>
        <Form.Item name="otp">
          <OtpInput
            // value={otpValue}
            onChange={(e) => {
              if (e.split("").length > 5) autoCall(e);
              // console.log(e?.length());
              // autoCall();
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
