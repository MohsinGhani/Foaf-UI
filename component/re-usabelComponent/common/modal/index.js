import { Modal } from "antd";
import React, { useState } from "react";

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
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        hello
      </Modal>
    </div>
  );
}
