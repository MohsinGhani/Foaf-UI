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
      {/* {width && ( */}
      <Modal
        wrapClassName="AddPost"
        className={`add_modal `}
        title={title}
        visible={!!isModalVisible}
        onCancel={handleCancel}
        // bodyStyle={{ height: "400px", width: "900px" }}
        width={width}
        // afterClose={() => {
        //   console.log("hello hello hello");
        // }}
      >
        {isModalVisible === "tag" && <PostTag />}
        {isModalVisible === "audience" && <PostAudience />}
      </Modal>
      {/* )} */}
    </div>
  );
};

export default AddInPost;
