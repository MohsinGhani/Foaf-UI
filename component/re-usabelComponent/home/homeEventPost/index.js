/* eslint-disable @next/next/no-img-element */
import React from "react";
import Profile from "../../profile";
import { PostBottom } from "../homePostBottom";
import moment from "moment";
export const Event = (props) => {
  let time = moment(props.time).fromNow();
  return (
    <div className="event-main">
      <Profile
        profile={props.profile}
        time={time}
        className={props.profilecolor}
        nameColor="homePostText"
        name={props.name}
        class="image"
        user={props?.user}
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
        <PostBottom
          event={props.event}
          reaction={props.reaction}
          comment={props.comment}
          view={props.view}
        />
      </div>
    </div>
  );
};
