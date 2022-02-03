/* eslint-disable @next/next/no-img-element */
import { Space } from "antd";
import moment from "moment";
import Image from "next/image";
import { Avatar } from "../../../re-usabelComponent/common/avatar";
import { PostBottom } from "../../../re-usabelComponent/home/homePostBottom";
import Profile from "../../../re-usabelComponent/profile";

export default function Post(props) {
  let time = moment(props.time).fromNow();

  return (
    <div className="post-main">
      <Profile
        profile={props.profile}
        time={time}
        className={props.profilecolor}
        nameColor="homePostText"
        name={props.name}
        class="image"
      />
      <div className="post">
        <img src={props.Post} alt="post" width="100%" height="100%" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, netus
          nunc, vulputate at tempus, sed aliquet non. Nulla libero a a orci
          placerat. Viverra vitae congue in duis.
        </p>
      </div>
      <PostBottom />
    </div>
  );
}
