import { createReactEditorJS } from "react-editor-js";

import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Paragraph from "@editorjs/paragraph";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import SimpleImage from "./iconChange";

const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: "Tell your story....",
    },
  },
  image: Image,
  linkTool: LinkTool,
  code: Code,
  delimiter: Delimiter,
  simpleImage: SimpleImage,
};
const ReactEditorJS = createReactEditorJS();

const CustomEditor = () => {
  return (
    <div className="article_editor">
      <ReactEditorJS defaultValue="" tools={EDITOR_JS_TOOLS} />
    </div>
  );
};

export default CustomEditor;
