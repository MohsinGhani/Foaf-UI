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
        numInputs={4}
        // separator={<span>" " </span>}
        // placeholder="1,2,3,4"
        inputStyle={{
          width: "100px",
          height: "70px",
          borderRadius: "16px",
          background: "#F8F8F8",
          border: "none",
          fontSize: "20px",
        }}
        containerStyle={{ justifyContent: "space-between" }}
      />
    </div>
  );
};

export default OtpVerification;
