/* eslint-disable @next/next/no-img-element */
import React from "react";
import Profile from "../../profile";
import { PostBottom } from "../homePostBottom";

export const Event = (props) => {
  return (
    <div className="event-main">
      <Profile
        profile={props.profile}
        time="10mins ago"
        className={props.profilecolor}
        nameColor="homePostText"
        name={props.name}
        class="image"
      />
      <div className="post">
        <img src={props.Post} alt="post" width="100%" />
      </div>
      <div className="event_bottom">
        <p className="heading">Lorem ipsum dolor sit amet,</p>
        <p className="paragraph">
          consectetur adipiscing elit. Arcu, netus nunc, vulputate at tempus,
          sed aliquet non. Nulla libero a a orci placerat. Viverra vitae congue
          in duis.
        </p>
        <PostBottom event={props.event} />
      </div>
    </div>
  );
};
