import React from "react";
import dynamic from "next/dynamic";

const Article = ({ data, setDataCheck }) => {
  let CustomEditor;
  if (typeof window !== "undefined") {
    CustomEditor = dynamic(() => import("./customEditor"));
  }
  return (
    <>
      {CustomEditor && <CustomEditor data={data} setDataCheck={setDataCheck} />}
    </>
  );
};

export default Article;
