import Image from "next/image";

import { useState } from "react";
import StoryModal from "../storyModal";

export default function Story({ url, name, bgurl, classname }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <div
        className={` ${classname} story_main`}
        onClick={showModal}
        style={{
          backgroundImage: "url(" + bgurl + ")",
        }}
      >
        <div className="profile">
          <Image src={url} alt="profile" width="100%" height="100%" />
        </div>

        <div className="name">
          <p>{name}</p>
        </div>
      </div>
      <StoryModal visible={isModalVisible} unvisibel={setIsModalVisible} />
    </>
  );
}
