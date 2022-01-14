import { createReactEditorJS } from "react-editor-js";
// import EditorJS from "@editorjs/editorjs";

import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Paragraph from "@editorjs/paragraph";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import Header from "@editorjs/header";

import SimpleImage from "@editorjs/simple-image";
// import Line from "./iconChange";

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

          return getBase64(file).then((res) => {
            return {
              success: 1,
              file: {
                url: res,
              },
            };
          });
        },
      },
    },
  },
  header: Header,
  linkTool: LinkTool,
  code: {
    class: Code,
  },
  delimiter: Delimiter,
  simpleImage: SimpleImage,
};
const ReactEditorJS = createReactEditorJS();

const CustomEditor = () => {
  let editor = null;
  const saveData = async () => {
    console.log(editor, "edotor datata");
    try {
      const outputData = await editor?.save();
      console.log("Article data: ", outputData);
    } catch (e) {
      console.log("Saving failed: ", e);
    }
  };
  return (
    <div className="article_editor">
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}
        editorInstance={(editorInstance) =>
          console.log(
            editorInstance,
            "editorInstanceeditorInstanceeditorInstance"
          )
        }
        holder="editorjs"
      >
        <div id="editorjs"></div>
      </ReactEditorJS>
      <button onClick={saveData}>save</button>
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
