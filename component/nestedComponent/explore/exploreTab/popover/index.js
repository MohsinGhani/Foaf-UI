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
