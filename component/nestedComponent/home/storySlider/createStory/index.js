import Image from "next/image";
import { Modal } from "antd";
import { useState } from "react";
import { Button } from "react-bootstrap";
import CreateStoryOption from "./createStoryOption";
import CreateTextOption from "./createTextStory";
// import CreateStoryButton from "../../../../re-usabelComponent/storySlider/createStory/button";
export default function CreateStory() {
  const [storyOption, setstoryOption] = useState(false);
  const [showComponent, setShowComponent] = useState("");

  const showModal = () => {
    setstoryOption(true);
    setShowComponent("CreateStoryOption");
  };

  const handleCancel = () => {
    setstoryOption(false);
  };

  const condition = () => {
    switch (showComponent) {
      case "CreateStoryOption":
        return <CreateStoryOption contantCondition={setShowComponent} />;

      case "CreateTextOption":
        return <CreateTextOption />;

      default:
        return <></>;
    }
  };
  return (
    <>
      <div
        className="CreateStory_main"
        onClick={() => {
          showModal();
        }}
      >
        <Image
          src="/images/dashboard/createStory.svg"
          alt="createStory"
          width="89"
          height="130"
        />
      </div>

      <Modal
        className="createStoryModal_main"
        title="CreateStory"
        visible={storyOption}
        onCancel={handleCancel}
      >
        {condition()}
      </Modal>
    </>
  );
}
