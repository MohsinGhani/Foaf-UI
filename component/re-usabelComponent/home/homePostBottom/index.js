import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Popover, Space } from "antd";
import { CommonButton } from "../../common/button";
import { useRouter } from "next/router";
export const PostBottom = ({ event, comment, reaction, view, id, type }) => {
  const router = useRouter();
  const [image, setImage] = useState();

  const singelPostData = async (id, postType) => {
    router.push({
      pathname: "",
      query: { post: postType, id: id },
    });
  };
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
    }
  };
  const url = ["like", "celebration", "clap", "love", "sorry", "sick", "dead"];
  const content = (
    <div className="icon_parent fade-in">
      {url.map((data, index) => (
        <div
          key={index}
          className={`reaction_icon ${data}`}
          onClick={() => {
            switchData(data);
          }}
        >
          <Image
            src={`/images/dashboard/${data}.svg`}
            alt="heart"
            width="24"
            height="24"
          />
        </div>
      ))}
    </div>
  );
  return (
    <div className="bottom">
      {/* <Space size={20}> */}
      {/* <div className=""> */}
      {/* <div className="left_icons"> */}
      <div className="heart">
        <div className="heartIcon">
          <Popover
            placement="topLeft"
            content={content}
            trigger="hover"
            overlayClassName="reaction_popover"
          >
            <Image
              src={image ? image : `/images/dashboard/heartIcon.svg`}
              alt="heart"
              width="17"
              height="17"
              layout="fixed"
            />
          </Popover>
        </div>
        <p>{image ? reaction + 1 : reaction}</p>
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
      <div className="event_but">
        {event && (
          <CommonButton
            butText="Learn more"
            className="event_but"
            onclick={() => {
              singelPostData(id, type);
            }}
          />
        )}
      </div>
      {/* </Space> */}
      {/* </div> */}
    </div>
  );
};
