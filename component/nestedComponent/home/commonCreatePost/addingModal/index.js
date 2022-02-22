import { Modal } from "antd";
import React from "react";
import PostTag from "../addTag";

const AddInPost = ({ isModalVisible, setIsModalVisible, title, className }) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Modal
        className="add_modal"
        title={title}
        visible={!!isModalVisible}
        onCancel={handleCancel}
        bodyStyle={{ height: "400px" }}
        wrapClassName="AddPost"
        // afterClose={() => {
        //   console.log("hello hello hello");
        // }}
      >
        {isModalVisible === "tag" && <PostTag />}
      </Modal>
    </div>
  );
};

export default AddInPost;
