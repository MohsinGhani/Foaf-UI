import CreateStoryButton from "../../../../../re-usabelComponent/storySlider/createStory/button";
import Image from "next/image";
import Modal from "antd/lib/modal/Modal";
export default function CreateStoryOption(props) {
  const showModal = () => {
    props.contantCondition("CreateTextOption");
  };
  return (
    <div className="CreateStoryOption_main">
      <div className="create_story">
        <div className="story">
          <Image
            src="/images/dashboard/photoStory.svg"
            alt="photoStory"
            width="300"
            height="390"
          />
        </div>
        <div
          className="story"
          onClick={() => {
            showModal();
          }}
        >
          <Image
            src="/images/dashboard/textStory.svg"
            alt="textStory"
            width="300"
            height="390"
          />
        </div>
      </div>
      <div>
        <CreateStoryButton />
      </div>
    </div>
  );
}
