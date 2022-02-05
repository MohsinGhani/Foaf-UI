import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Popover, Space } from "antd";
export const PostBottom = ({ event, comment, reaction, view }) => {
  const [seleteImage, setselectImage] = useState();
  const [image, setImage] = useState();
  const switchData = (data) => {
    switch (data) {
      case "like":
        setImage("/images/dashboard/like.svg");
        break;
      case "celebration":
        setImage("/images/dashboard/celebration.svg");
        break;
      case "clap":
        setImage("/images/dashboard/clap.svg");
        break;
      case "love":
        setImage("/images/dashboard/love.svg");
        break;
      case "sorry":
        setImage("/images/dashboard/sorry.svg");
        break;
      case "sick":
        setImage("/images/dashboard/sick.svg");
        break;
      case "dead":
        setImage("/images/dashboard/dead.svg");
        break;

      // case "disLike":
      // setImage("/images/dashboard/disLike.svg");
      // break;
      //   default:
      //     setImage("/images/dashboard/heartIcon.svg");
    }
  };
  const url = [
    "like",
    "celebration",
    "clap",
    "love",
    "sorry",
    "sick",
    "dead",
    // "disLike",
  ];
  const content = (
    <div className="icon_parent fade-in">
      {url.map((data, index) => (
        <div
          key={index}
          className={`reaction_icon ${data}`}
          onClick={() => {
            switchData(data);
            console.log(data, "bhai ya data hai");
          }}
        >
          <Image
            src={`/images/dashboard/${data}.svg`}
            alt="heart"
            width="22"
            height="22"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bottom">
      <Space size={50}>
        {/* <div className="icons"> */}
        {/* <div className="left_icons"> */}
        <div className="heart">
          <div className="heartIcon">
            <Popover placement="topLeft" content={content}>
              <Image
                src={image ? image : `/images/dashboard/heartIcon.svg`}
                alt="heart"
                width="17"
                height="17"
                layout="fixed"
              />
            </Popover>
          </div>
          <p>{reaction}</p>
        </div>
        <div className="views">
          <div className="viewsIcon">
            <Image
              src="/images/dashboard/show.svg"
              alt="view"
              width="17"
              height="17"
              layout="fixed"
            />
          </div>
          <p>{view}</p>
        </div>
        {/* </div> */}
        {event ? (
          ""
        ) : (
          <div className="views">
            <div className="viewsIcon">
              <Image
                src="/images/dashboard/comment.svg"
                alt="view"
                width="17"
                height="17"
                layout="fixed"
              />
            </div>
            <p>{comment}</p>
          </div>
        )}
        <div className="event_but">{event && <Button>Learn More</Button>}</div>
        {/* </div> */}
      </Space>
    </div>
  );
};
