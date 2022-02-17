import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { PostTabs } from "../../../nestedComponent/home/createPostTabs";
import { useRouter } from "next/router";
export default function CommonModal({
  isModalVisible,
  setIsModalVisible,
  title,
}) {
  const router = useRouter();
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        className={`common_modal  ${
          router.query.tabs === "article" && "changeWidth"
        }`}
        title={title}
        visible={!!isModalVisible}
        onCancel={handleCancel}
        afterClose={() => {
          console.log("hello hello hello");
        }}
      >
        {isModalVisible === "createPost" && <PostTabs />}
      </Modal>
    </div>
  );
}
