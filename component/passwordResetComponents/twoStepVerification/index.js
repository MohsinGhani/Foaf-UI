import React from "react";
import CommonCode from "../commonCode";

const StepVerification = () => {
  return (
    <div>
      <CommonCode
        heading="Two-Step Verification"
        FirstText="Enter the verification code we sent to"
        // secondText="+1*******179"
        ButtonText="Verify"
        src="/images/dashboard/stepVerfication.svg"
        type="verification"
      />
    </div>
  );
};

export default StepVerification;
