import { Popover } from "antd";
import Image from "next/image";
import React from "react";

export const Avatar = (props) => {
  return (
    <div className={props.classtext}>
      {props.Popover ? (
        <Popover placement="bottom" content={props.component}>
          <Image
            src={props?.profile}
            alt="postProfile"
            width="50"
            height="50"
          />
        </Popover>
      ) : (
        <Image src={props?.profile} alt="postProfile" width="50" height="50" />
      )}
    </div>
  );
};
