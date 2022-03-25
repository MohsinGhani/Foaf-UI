import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { PostTabs } from "../../../nestedComponent/home/createPostTabs";
import { useRouter } from "next/router";
export default function CommonModal({
  isModalVisible,
  setIsModalVisible,
  title,
  className,
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
        } ${className}`}
        title={title}
        visible={!!isModalVisible}
        onCancel={handleCancel}
      >
        {isModalVisible === "createPost" && <PostTabs />}
      </Modal>
    </div>
  );
}
