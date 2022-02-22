import React from "react";
import ProjectCoverFooter from "../../../nestedComponent/home/artical/projectCover/projectCoverFooter";
import PreviewFooter from "../../../nestedComponent/home/steps/preview/imageFooter";
const DetailedImage = ({
  previewData,
  ProjectCover,
  image,
  height,
  footerHeight,
  singelPost,
}) => {
  console.log("previewData?.coverPhotopreviewData?.coverPhoto", previewData);
  console.log("singelPostsingelPost", singelPost);
  console.log("imageimage", image);
  return (
    <div
      className="event_image"
      style={{
        height: `${height}`,
        backgroundImage: `url(${
          singelPost?.coverPhoto || previewData?.coverPhoto || image
        })`,
      }}
    >
      <div className="footer" style={{ height: `${footerHeight}` }}>
        {previewData && (
          <PreviewFooter previewData={previewData} singelPost={singelPost} />
        )}
        {ProjectCover && <ProjectCoverFooter />}
      </div>
    </div>
  );
};

export default DetailedImage;
