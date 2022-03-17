/* eslint-disable @next/next/no-img-element */

import moment from "moment";
import { PostBottom } from "../../../re-usabelComponent/home/homePostBottom";
import Profile from "../../../re-usabelComponent/profile";
import VideoPost from "../../../re-usabelComponent/home/video";
import AudioPost from "../../../re-usabelComponent/home/audio";
export default function Post(props) {
  console.log(
    "HUHUHUHUHUHUHUUHU",
    moment().local().utc(props.time).format("YYYY-MMM-DD h:mm A")
  );
  let timeZone = moment().local().utc(props.time).format("DD-MM-YYYY, h:mm A");
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
        user={props?.user}
      />
      <div className="post">
        {props?.postType === "video" && <VideoPost url={props?.link} />}
        {props?.postType === "audio" && <AudioPost url={props?.link} />}

        {props?.postType === "text" && (
          <img src={props?.Post} alt="post" width="100%" height="100%" />
        )}
        <p>{props.description}</p>
      </div>
      <PostBottom
        comment={props.comment}
        reaction={props.reaction}
        view={props.view}
      />
    </div>
  );
}
