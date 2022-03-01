import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Form } from "antd";
import { CommonButton } from "../../re-usabelComponent/common/button";
import { useRouter } from "next/router";
import { API } from "../../../pages/api/resetPassword";

const OtpVerification = () => {
  const [otpValue, setOtpValue] = useState("");

  const router = useRouter();
  const [form] = Form.useForm();
  const verify = async () => {
    form.validateFields().then(async (value) => {
      console.log(value);
      try {
        let response = await fetch(`${API.VERIFY_EMAIL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            key: value.otp,
            email: router.query.email,
          }),
        });
        const verification = await response.json();
        router.push({
          pathname: `/resetPassword-page`,
          query: { data: verification.user_token, email: router.query.email },
        });
        // setPost(verification);
        console.log(verification, "verification");
      } catch (err) {
        console.log(err), "error ";
      }
    });
  };

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
      <CommonButton
        butText="ButtonText"
        className="continue"
        onclick={verify}
      />
    </div>
  );
};

export default OtpVerification;
