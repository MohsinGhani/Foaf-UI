import CreateStoryButton from "../../../../../re-usabelComponent/storySlider/createStory/button";
import Image from "next/image";

export default function CreateStoryOption({ contantCondition }) {
  const showComponent = () => {
    contantCondition("CreateTextOption");
  };
  return (
    <div className="CreateStoryOption_main">
      <div className="create_story">
        <div className="story">
          <Image
            src="/images/dashboard/photoStory.svg"
            alt="photoStory"
            width="300px"
            height="390px"
            layout="fixed"
          />
        </div>
        <div
          className="story"
          onClick={() => {
            showComponent();
          }}
        >
          <Image
            src="/images/dashboard/textStory.svg"
            alt="textStory"
            width="300px"
            height="390px"
            layout="fixed"
          />
        </div>
      </div>
      <div>
        <CreateStoryButton />
      </div>
    </div>
  );
}
