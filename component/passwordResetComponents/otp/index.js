import React, { useState } from "react";
import OtpInput from "react-otp-input";
const OtpVerification = () => {
  const [otpValue, setOtpValue] = useState("");
  return (
    <div className="Otp_main">
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
    </div>
  );
};

export default OtpVerification;
