/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Modal } from "antd";
import { useState } from "react";
import CreateStoryOption from "./createStoryOption";
import CreateTextOption from "./createTextStory";

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
        <div className="background">
          <Image
            src="/images/dashboard/createBackground.png"
            alt="createStory"
            width="89"
            height="88"
          />
        </div>
        <div className="footer_create">
          <p>Create Story</p>
        </div>
        <div className="plus_icon">
          <Image
            src="/images/dashboard/createIcon.svg"
            alt="createStory"
            width="32"
            height="32"
          />
        </div>
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
