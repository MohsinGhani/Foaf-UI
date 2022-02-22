import Image from "next/image";
import React from "react";
import { CommonButton } from "../../re-usabelComponent/common/button";
import OtpVerification from "../otp";

const CommonCode = ({
  heading,
  FirstText,
  secondText,
  ButtonText,
  src,
  otp,
}) => {
  return (
    <div>
      <div className="successfulMain">
        <div className="imageSide"></div>

        <div className="rightSide">
          <div className="topBar"></div>
          <div className="content">
            <Image src="/images/foaf.svg" alt="logo" width="147" height="64" />
            <p className="heading">{heading}</p>
            <Image src={src} alt="logo" width="152" height="152" />
            <div className="text">
              <p>{FirstText}</p>
              <p>{secondText}</p>
            </div>

            {otp && <OtpVerification />}

            <CommonButton butText={ButtonText} className="continue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCode;
