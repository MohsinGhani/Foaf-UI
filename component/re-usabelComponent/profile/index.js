/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { Space } from "antd";

import { Avatar } from "../common/avatar";

export default function Profile(props) {
  return (
    <div className="profile_main">
      <div className="profile-image">
        <Avatar
          profile={props?.profile}
          classtext={props?.className}
          Popover={props?.Popover}
          component={props?.component}
        />
        <div className={` name  ${props?.nameColor}`}>
          <Space size={1} direction="vertical">
            <div className="user_name">
              {props?.name}
              {props?.user?.isVerified && (
                <Image
                  src="/images/dashboard/Badge.svg"
                  alt="Badge"
                  width="11"
                  height="11.72"
                />
              )}
            </div>
            <p>{props?.time}</p>
            <div>
              {props?.privacy && (
                <img src="/images/CreatePost/PublicPost.png" />
              )}
            </div>
          </Space>
        </div>
      </div>

      {props?.nameColor === "homePostText" && (
        <div className="dot">
          <Image
            src="/images/dashboard/dots.svg"
            alt="dot"
            width="20"
            height="30"
          />
        </div>
      )}
    </div>
  );
}
