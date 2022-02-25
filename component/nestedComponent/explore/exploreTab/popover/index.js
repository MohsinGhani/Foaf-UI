/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Button } from "react-bootstrap";

import React from "react";
import Profile from "../../../../re-usabelComponent/profile";
import { PlusCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Space } from "antd";

export default function PopOver() {
  return (
    <div className="pop_main">
      <div className="profile_site">
        <Profile
          profile="/images/dashboard/samesize.svg"
          time="10mins ago"
          className="popOverAvater"
          nameColor="popOver"
          name="Lydia Workman"
          class="image"
        />
        <Button className="buttononer">
          <p>Add Friends</p> <PlusCircleOutlined />
        </Button>
      </div>
      <div className="image_site">
        <img src="/images/explore/pop1.png" />
        <img src="/images/explore/pop2.png" />
        <img src="/images/explore/pop3.png" />
      </div>
      <Space size="small" align="baseline">
        <div className={"bottom"}>
          <div className="icons">
            <div className="heart">
              <div className="heartIcon">
                <Image
                  src="/images/dashboard/heartIcon.svg"
                  alt="heart"
                  width="18"
                  height="16"
                />
              </div>
              <p>10,720 Reactions</p>
            </div>
            <div className="views">
              {/* <span>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.09756 8C6.09756 10.1333 7.8439 11.8691 10 11.8691C12.1463 11.8691 13.8927 10.1333 13.8927 8C13.8927 5.85697 12.1463 4.12121 10 4.12121C7.8439 4.12121 6.09756 5.85697 6.09756 8ZM15.7366 2.04606C17.4439 3.36485 18.8976 5.29455 19.9415 7.70909C20.0195 7.89333 20.0195 8.10667 19.9415 8.28121C17.8537 13.1103 14.1366 16 10 16H9.99024C5.86341 16 2.14634 13.1103 0.0585366 8.28121C-0.0195122 8.10667 -0.0195122 7.89333 0.0585366 7.70909C2.14634 2.88 5.86341 0 9.99024 0H10C12.0683 0 14.0293 0.717576 15.7366 2.04606ZM10.0012 10.4124C11.3378 10.4124 12.4304 9.32635 12.4304 7.99787C12.4304 6.65968 11.3378 5.57362 10.0012 5.57362C9.8841 5.57362 9.76702 5.58332 9.65971 5.60272C9.62068 6.66938 8.74263 7.52272 7.65971 7.52272H7.61093C7.58166 7.67787 7.56215 7.83302 7.56215 7.99787C7.56215 9.32635 8.65483 10.4124 10.0012 10.4124Z"
                    fill="#838383"
                  />
                </svg>
              </span> */}
              <Image
                src="/images/dashboard/show.svg"
                alt="view"
                width="17"
                height="17"
                layout="fixed"
              />
              <p>24,928 Views</p>
            </div>
          </div>
        </div>
      </Space>
    </div>
  );
}
