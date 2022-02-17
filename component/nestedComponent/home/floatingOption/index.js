import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CommonModal from "../../../re-usabelComponent/common/modal";

function FloatingOption({ state }) {
  const router = useRouter();
  const url = ["createPost", "recomand", "review", "celebrationpost", "other"];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible("createPost");
    router.push({
      pathname: "",
      query: { tabs: router.query.tabs || "statusUpdate" },
    });
  };
  useEffect(() => {
    console.log("checking checking");
    if (!router.query.tabs) {
      console.log("checking checking under");
      setIsModalVisible(false);
    }
  }, [router.query]);

  console.log(router.query.tabs, "query");
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
