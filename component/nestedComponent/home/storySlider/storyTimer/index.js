import { Progress } from "antd";
import { useState } from "react";
export default function StoryTimer() {
  const [per, setPer] = useState(0);

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
