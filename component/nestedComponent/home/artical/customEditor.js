import { createReactEditorJS } from "react-editor-js";
import EditorJS from "@editorjs/editorjs";

import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Paragraph from "@editorjs/paragraph";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import { API } from "../../../../pages/api/create";
import { useSelector } from "react-redux";
// import SimpleImage from "./iconChange";

// const ImageTool = window.ImageTool;

const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: "Tell your story....",
    },
  },
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: `${API.CREATE_VIDEO_STATUS}`, // Your backend file uploader endpoint
        // byUrl: "http://localhost:3000", // Your endpoint that provides uploading by Url
      },
      // field: "image",
      // types: "image/*",
      // accept: "image/*",
      // additionalRequestHeaders: {
      //   Authorization: `Token ${data.token}`,
      // },
    },
  },
  linkTool: LinkTool,
  code: Code,
  delimiter: Delimiter,
  // simpleImage: SimpleImage,
};
// const ReactEditorJS = createReactEditorJS();

// const CustomEditor = () => {
//   return (
//     <div className="article_editor">
//       <ReactEditorJS tools={EDITOR_JS_TOOLS} />
//     </div>
//   );
// };

const Hello = () => {
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  const id = document.getElementById("editorjs");
  const editor = new EditorJS({
    holderId: id,
    tools: {
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
        config: {
          placeholder: "Tell your story....",
        },
      },
      image: {
        class: Image,
        config: {
          endpoints: {
            byFile: "", // Your backend file uploader endpoint
            byUrl: "", // Your endpoint that provides uploading by Url
          },
          // field: "image",
          // types: "image/*",
          // accept: "image/*",
        },
      },
      linkTool: LinkTool,
      code: Code,
      delimiter: Delimiter,
      // simpleImage: SimpleImage,
    },
  });
  console.log("editor", editor);
  return <div id="editorjs"></div>;
};

export default Hello;
