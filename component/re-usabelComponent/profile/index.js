import React from "react";
import Image from "next/image";
import { Popover } from "antd";
import PopOver from "../../nestedComponent/search/popover";

export default function Profile(props) {
  return (
    <div className={props.classMain}>
      <div className="profile-main">
        <div className="profile-image">
          <Popover placement="bottom" content={<PopOver />} title="Title">
            <div className="profile">
              <Image
                src={props.profile}
                alt="postProfile"
                width="100%"
                height="100%"
              />
            </div>
          </Popover>
          <div className="name">
            <div className="display">
              <div className="text">Lydia Workman</div>
              <Image
                src="/images/dashboard/Badge.svg"
                alt="Badge"
                width="11"
                height="11.72"
              />
            </div>
            <p>{props.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
