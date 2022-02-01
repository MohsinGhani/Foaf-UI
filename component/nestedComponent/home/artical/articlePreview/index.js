import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { article } from "../../../../features/articleData.js";
const ArticlePreview = ({ datadata }) => {
  console.log("datadatadatadata", datadata);
  const dispatch = useDispatch();
  const [dataArticle, setDataArticle] = useState(null);
  const statedata = useSelector((state) => state);
  console.log(statedata, "statedatastatedatastatedatastatedata");
  let CustomEditor;
  if (typeof window !== "undefined") {
    CustomEditor = dynamic(() => import("../customEditor.js"));
  }
  // const data = {
  //   time: 1643615571626,
  //   blocks: [{ type: "paragraph", data: { text: "hello i am here" } }],
  //   version: "2.19.1",
  // };

  return (
    <div>
      {CustomEditor && (
        <CustomEditor
          articleData={datadata && datadata}
          // setDataArticle={setDataArticle}
          // dataArticle={dataArticle}
        />
      )}
    </div>
  );
};
export default ArticlePreview;
