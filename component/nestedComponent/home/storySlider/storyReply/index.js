import Image from "next/image";
import { Input } from "antd";
import Searchicon from "../../../dashBoard/dashboardIcons/search";
export default function StoryReply() {
  return (
    <div className="story_reply_main">
      <div className="Story_reply">
        <div className="image">
          <Image
            src="/images/dashboard/smile.svg"
            alt="smile"
            width="40"
            height="40"
          />
        </div>
        <div className="text">
          <Input placeholder="Type a reply..." />
          <div className="image">
            <Image
              src="/images/dashboard/navigate.svg"
              alt="send"
              width="20"
              height="20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
