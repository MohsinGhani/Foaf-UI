import React from "react";
import ArticlePreview from "../articlePreview";
import ProjectCover from "../projectCover";

const Publish = ({ data }) => {
  return (
    <div className="publishPage">
      <div className="leftSide">
        <p>Article Preview</p>
        <ArticlePreview datadata={data} />
      </div>
      <div className="rightSide">
        <ProjectCover />
      </div>
    </div>
  );
};
export default Publish;
