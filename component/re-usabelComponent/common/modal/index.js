import { Modal } from "antd";
import React, { useState } from "react";

export default function CommonModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div
        className="CreateStory_main"
        onClick={() => {
          showModal();
        }}
      >
        open the modal
      </div>

      <Modal
        className="common_modal"
        title="common"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        hello
      </Modal>
    </div>
  );
}
