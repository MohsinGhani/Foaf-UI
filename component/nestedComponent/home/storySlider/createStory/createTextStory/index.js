import CreateStoryButton from "../../../../../re-usabelComponent/storySlider/createStory/button";
import { Input } from "antd";
import { Select } from "antd";
export default function CreateTextOption() {
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="CreateTextStory_main">
      <div className="start_typing">
        <p>Text</p>
        <Input placeholder="start Typing" />
        <p>Choose Privacy</p>

        <Select defaultValue="lucy" onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>

          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>

      <CreateStoryButton />
    </div>
  );
}
