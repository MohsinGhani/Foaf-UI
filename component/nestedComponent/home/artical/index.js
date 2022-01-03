import React from "react";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";

const Article = () => {
  const ReactEditorJS = createReactEditorJS();
  return (
    <div>
      <ReactEditorJS tools={EDITOR_JS_TOOLS} />
    </div>
  );
};

export default Article;
