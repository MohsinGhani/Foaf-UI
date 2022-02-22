import React from "react";
import CommonCode from "../commonCode";

const SuccessFullReset = () => {
  return (
    <div>
      <CommonCode
        heading="Successful Password Reset"
        FirstText="Your password has been successfully reset."
        secondText="click below to log in magically."
        ButtonText="Continue"
        src="/images/dashboard/successful.svg"
      />
    </div>
  );
};

export default SuccessFullReset;
