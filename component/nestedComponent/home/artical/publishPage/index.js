import React from "react";
import ArticlePreview from "../articlePreview";
import ProjectCover from "../projectCover";

const Publish = () => {
  return (
    <div className="publishPage">
      <div className="leftSide">
        <ArticlePreview />
      </div>
      <div className="rightSide">
        <ProjectCover />
      </div>
    </div>
  );
};
export default Publish;
