import { Progress } from "antd";
import { useState } from "react";
export default function StoryTimer() {
  const [per, setPer] = useState(0);

  const move = () => {
    // setInterval(() => {
    //   let t = per;
    //   if (per !== 100) {
    //     setPer(t + 10);
    //     t = t + 10;
    //   }
    // }, 500);
    // setTimeout(() => {
    //   clearInterval();
    // }, 3000);
    // console.log("I RAN");
    // for (let i = 0; i <= 100; i++) {
    //   setPer(i);
    // }
    // console.log(i, "peerrrr");
    // console.log("I RAN KHTM");
  };
  return (
    <div className="story_progress">
      <div className="progress">
        <Progress percent={per} size="small" />
      </div>
      <div className="progress">
        <Progress percent={per} size="small" />
      </div>
      <div className="progress">
        <Progress percent={per} size="small" />
      </div>
      <div className="progress">
        <Progress percent={per} size="small" />
      </div>
      <div className="progress">
        <Progress percent={per} size="small" />
      </div>
    </div>
  );
}
