import React from "react";
import ProjectCoverFooter from "../../../nestedComponent/home/artical/projectCover/projectCoverFooter";
import PreviewFooter from "../../../nestedComponent/home/steps/preview/imageFooter";
const DetailedImage = ({
  previewData,
  ProjectCover,
  image,
  height,
  footerHeight,
}) => {
  return (
    <div
      className="event_image"
      style={{
        height: `${height}`,
        backgroundImage: `url(${
          previewData ? previewData?.coverPhoto : image
        })`,
      }}
    >
      <div className="footer" style={{ height: `${footerHeight}` }}>
        {previewData && <PreviewFooter previewData={previewData} />}
        {ProjectCover && <ProjectCoverFooter />}
      </div>
    </div>
  );
};

export default DetailedImage;
