import Image from "next/image";
import React from "react";
import { CommonButton } from "../re-usabelComponent/common/button";

const SuccessfullResst = () => {
  return (
    <div>
      <div className="successfulMain">
        <div className="imageSide"></div>

        <div className="rightSide">
          <div className="topBar"></div>
          <div className="content">
            <Image src="/images/foaf.svg" alt="logo" width="147" height="64" />
            <p className="heading">Successful Password Reset</p>
            <Image
              src="/images/dashboard/successful.svg"
              alt="logo"
              width="152"
              height="152"
            />
            <div className="text">
              <p>Your password has been successfully reset.</p>
              <p>click below to log in magically.</p>
            </div>
            <CommonButton butText="Continue" className="continue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullResst;
