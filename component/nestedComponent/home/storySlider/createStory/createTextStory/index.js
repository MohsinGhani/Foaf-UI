import CreateStoryButton from "../../../../../re-usabelComponent/storySlider/createStory/button";
import { Input } from "antd";
export default function CreateTextOption() {
  return (
    <div className="CreateTextStory_main">
      <div className="start_typing">
        <p>Text</p>
        <Input placeholder="start Typing" />
        <p>Choose Privacy</p>
      </div>

      <CreateStoryButton />
    </div>
  );
}
