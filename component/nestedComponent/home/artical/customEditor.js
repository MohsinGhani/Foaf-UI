import { createReactEditorJS } from "react-editor-js";
// import EditorJS from "@editorjs/editorjs";

import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Paragraph from "@editorjs/paragraph";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import Header from "@editorjs/header";

import SimpleImage from "@editorjs/simple-image";
import { useEffect, useRef } from "react";
import Tooltip from "codex-tooltip";
import { Content } from "antd/lib/layout/layout";
// import Line from "./iconChange";

// const ImageTool = window.ImageTool;
// const mediaBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// const tooltip = new Tooltip();
// const element = document.getElementById("editorjs");
// tooltip.show(element, "Tooltip text");

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
  header: {
    class: Header,
    inlineToolbar: true,
  },
  linkTool: LinkTool,
  code: {
    class: Code,
  },
  delimiter: Delimiter,
  simpleImage: SimpleImage,
};
const ReactEditorJS = createReactEditorJS();

const CustomEditor = () => {
  const editor = useRef(null);

  // useEffect(() => {
  //   return () => {
  //     console.log("helololadjbas,dgskfgbksd");
  //     // editor.current.destroy();
  //   };
  // }, []);

  const saveData = async () => {
    console.log(editor, "edotor datata");
    const data = editor.current.save();
    data
      .then((outoput) => {
        console.log(outoput, "outoputoutoputoutoput");
      })
      .catch((err) => {
        console.log(err, "errrroutoputoutoputoutoput");
      });
    editor?.current?.destroy();
  };

  return (
    <div className="article_editor">
      <ReactEditorJS
        tools={EDITOR_JS_TOOLS}
        // editorInstance={(editorInstance) =>
        //   console.log(
        //     editorInstance,
        //     "editorInstanceeditorInstanceeditorInstance"
        //   )
        // }
        onInitialize={(instance) => {
          editor.current = instance;
        }}
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
