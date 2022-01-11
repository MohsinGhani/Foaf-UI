import { createReactEditorJS } from "react-editor-js";
// import EditorJS from "@editorjs/editorjs";

import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Paragraph from "@editorjs/paragraph";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import { API } from "../../../../pages/api/create";
import { useSelector } from "react-redux";
import SimpleImage from "@editorjs/simple-image";
// import SimpleImage from "./iconChange";

// const ImageTool = window.ImageTool;
// const mediaBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
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
      uploader: {
        uploadByFile(file) {
          function getBase64(file) {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = (error) => reject(error);
            });
          }

          // your own uploading logic here
          return getBase64(file).then((res) => {
            return {
              success: 1,
              file: {
                url: res,
                // any other image data you want to store, such as width, height, color, extension, etc
              },
            };
          });
        },
      },
      // endpoints: {
      // byFile: `https://codex.so/editor/transport/{}`, // Your backend file uploader endpoint
      // byUrl: "https://codex.so/editor/transport", // Your endpoint that provides uploading by Url
      // },
      //   // field: "image",
      //   // types: "image/*",
      //   // accept: "image/*",
      //   // additionalRequestHeaders: {
      //   //   Authorization: `Token ${data.token}`,
      //   // },
    },
  },
  linkTool: LinkTool,
  code: Code,
  delimiter: Delimiter,
  simpleImage: SimpleImage,
};
const ReactEditorJS = createReactEditorJS();

const CustomEditor = () => {
  return (
    <div className="article_editor">
      <ReactEditorJS tools={EDITOR_JS_TOOLS} holder="custom">
        <div id="custom" />
      </ReactEditorJS>
    </div>
  );
};

// const Hello = () => {
//   const statedata = useSelector((state) => state);
//   var data = statedata?.user?.userDetailes?.result?.user;
//   const id = document.getElementById("editorjs");
//   const editor = new EditorJS({
//     holderId: id,
//     tools: {
//       paragraph: {
//         class: Paragraph,
//         inlineToolbar: true,
//         config: {
//           placeholder: "Tell your story....",
//         },
//       },
//       image: {
//         class: Image,
//         config: {
//           endpoints: {
//             byFile: "", // Your backend file uploader endpoint
//             byUrl: "", // Your endpoint that provides uploading by Url
//           },
//           // field: "image",
//           // types: "image/*",
//           // accept: "image/*",
//         },
//       },
//       linkTool: LinkTool,
//       code: Code,
//       delimiter: Delimiter,
//       // simpleImage: SimpleImage,
//     },
//   });
//   console.log("editor", editor);
//   return <div id="editorjs"></div>;
// };

export default CustomEditor;
