import { Modal } from "antd";
import React from "react";
import PostAudience from "../addAudience";
import PostTag from "../addTag";

const AddInPost = ({ isModalVisible, setIsModalVisible, title, width }) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        wrapClassName="AddPost"
        className={`add_modal `}
        title={title}
        visible={!!isModalVisible}
        onCancel={handleCancel}
        width={width}
      >
        {isModalVisible === "tag" && <PostTag />}
        {isModalVisible === "audience" && <PostAudience />}
      </Modal>
    </div>
  );
};

export default AddInPost;
