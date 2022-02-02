import React from "react";
import ArticlePreview from "../articlePreview";
import ProjectCover from "../projectCover";

const Publish = ({ data }) => {
  return (
    <div className="publishPage">
      <div className="leftSide">
        <p>Article Preview</p>
        <ArticlePreview articleData={data} />
      </div>
      <div className="rightSide">
        <ProjectCover articleData={data} />
      </div>
    </div>
  );
};
export default Publish;
