import React, { useState } from "react";
// import { Editor, createEditorState } from "medium-draft";
// import "medium-draft/lib/index.css";

const Article = () => {
  let [state, setState] = useState();
  return (
    <div>
      {/* <Editor editorState={state} onChange={setState} /> */}

      <p>hello</p>
    </div>
  );
};

export default Article;
