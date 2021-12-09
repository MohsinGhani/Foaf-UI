import { Modal } from "antd";
import React, { useState } from "react";
import { PostTabs } from "../../../nestedComponent/home/createPostTabs";

export default function CommonModal({
  isModalVisible,
  setIsModalVisible,
  title,
}) {
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  console.log(isModalVisible, "isModalVisibleisModalVisibleisModalVisible");
  return (
    <div>
      <Modal
        className="common_modal"
        title={title}
        visible={!!isModalVisible}
        onCancel={handleCancel}
      >
        {isModalVisible === "createPost" && <PostTabs />}
      </Modal>
    </div>
  );
}
