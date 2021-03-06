import Image from "next/image";
import { useRouter } from "next/router";
import { Form } from "antd";
import React from "react";
import { CommonButton } from "../../re-usabelComponent/common/button";
import OtpVerification from "../otp";
import { API } from "../../../pages/api/resetPassword";
import Cookies from "js-cookie";
const CommonCode = ({
  heading,
  FirstText,
  secondText,
  src,
  type,
  ButtonText,
}) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const verify = async () => {
    if (type === "verification") {
      form.validateFields().then(async (value) => {
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

          if (verification?.status === 200) {
            if (router.query.user === "create") {
              Cookies.set("token", verification.user_token);
              router.push({
                pathname: `/user_Profile`,
              });
            } else {
              router.push({
                pathname: `/resetPassword-page`,
                query: {
                  data: verification.user_token,
                  email: router.query.email,
                },
              });
            }
          } else {
            alert(verification?.message);
          }
          console.log(verification, "verification");
        } catch (err) {
          console.log(err), "error ";
        }
      });
    } else {
      router.push({
        pathname: `/login-page`,
      });
    }
  };
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
              <p>{secondText ? secondText : router.query.email}</p>
            </div>

            {type === "verification" && (
              <OtpVerification form={form} autoCall={verify} />
            )}
            <CommonButton
              butText={ButtonText}
              className="continue"
              onclick={verify}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonCode;
