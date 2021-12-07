import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Popover } from "antd";
export const PostBottom = ({ event }) => {
  const [seleteImage, setselectImage] = useState();
  const [image, setImage] = useState();

  const switchData = (data) => {
    switch (data) {
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
      case "like":
        setImage("/images/dashboard/like.svg");
        break;
      case "disLike":
        setImage("/images/dashboard/disLike.svg");
        break;
      //   default:
      //     setImage("/images/dashboard/heartIcon.svg");
    }
  };
  const url = [
    "celebration",
    "clap",
    "love",
    "sorry",
    "sick",
    "dead",
    "like",
    "disLike",
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
    <div className={"bottom"}>
      <div className="icons">
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
          <p>10,720 Reactions</p>
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
          <p>24,928 Views</p>
        </div>
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
          <p>25,992 Comments</p>
        </div>
        <div className="event_but">{event && <Button>Learn More</Button>}</div>
      </div>
    </div>
  );
};
