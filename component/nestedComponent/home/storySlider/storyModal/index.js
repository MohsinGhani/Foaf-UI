import { Modal } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import SilkSlider from "../silkSlider";
import StoryProfile from "../storyProfile";
import StoryReply from "../storyReply";
import StoryTimer from "../storyTimer";
import Profile from "../../../../re-usabelComponent/profile";
export default function StoryModal(Props) {
  const handleOk = () => {
    Props.unvisibel(false);
  };

  const handleCancel = () => {
    Props.unvisibel(false);
  };
  return (
    <div>
      <Modal
        className="story_modal"
        title={
          <LeftOutlined
            onClick={() => {
              handleOk();
            }}
          />
        }
        visible={Props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <StoryProfile />

        <SilkSlider status={Props.status} />
        {/* <StoryTimer /> */}
        <StoryReply />
      </Modal>
    </div>
  );
}
