import Image from "next/image";
// import { useRouter } from "next/router";
// import { Form } from "antd";
import React from "react";
import OtpVerification from "../otp";
// import { CommonButton } from "../../re-usabelComponent/common/button";

const CommonCode = ({ heading, FirstText, secondText, src, type }) => {
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

            {type === "verification" && <OtpVerification type={type} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCode;
