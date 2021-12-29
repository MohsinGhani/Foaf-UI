import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CommonModal from "../../../re-usabelComponent/common/modal";

function FloatingOption({ state }) {
  const router = useRouter();
  const url = ["createPost", "recomand", "review", "celebrationpost", "other"];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible("createPost");
    router.push({
      pathname: "",
      query: { tab: router.query.tab || "statusUpdate" },
    });
  };
  return (
    <>
      <div
        className={`displaye ${
          state ? `scale-in-hor-right` : `scale-in-hor-right-reverse`
        }`}
      >
        {url.map((data, i) => (
          <div
            onClick={() => {
              {
                i == 0 && showModal();
              }
            }}
            key={i}
            className={`creates_icons ${data === "other" && "other_icon"}`}
          >
            <Image
              src={`/images/dashboard/${data}.svg`}
              alt="Badge"
              width={data === "other" ? "35" : "72"}
              height={data === "other" ? "38" : "44"}
            />
          </div>
        ))}
      </div>
      <CommonModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        title="Create"
      />
    </>
  );
}

export default FloatingOption;
