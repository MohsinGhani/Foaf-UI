import React from "react";
import dynamic from "next/dynamic";
const Article = () => {
  let CustomEditor;
  if (typeof window !== "undefined") {
    CustomEditor = dynamic(() => import("./customEditor"));
  }
  return <>{CustomEditor && <CustomEditor />}</>;
};

export default Article;
