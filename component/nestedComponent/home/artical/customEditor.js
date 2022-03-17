import { createReactEditorJS } from "react-editor-js";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Paragraph from "@editorjs/paragraph";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import SimpleImage from "@editorjs/simple-image";
import { useRef, useState } from "react";
import { CommonButton } from "../../../re-usabelComponent/common/button";
import Publish from "./publishPage";

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

const CustomEditor = ({ articleData }) => {
  const [dataArticle, setDataArticle] = useState(null);
  const preData = useRef(null);

  const editor = useRef(null);

  const saveData = () => {
    setPreview(false);

    const articleData = editor.current.save();

    articleData
      .then(async (outPut) => {
        preData.current = outPut;
        setDataArticle(outPut);
        console.log(outPut, "outPutoutPutoutPut");
      })
      .catch((err) => {
        console.log(err, "errrroutoputoutoputoutoput");
      });
  };

  return (
    <>
      {dataArticle === null ? (
        <div className="article_editor">
          <ReactEditorJS
            tools={EDITOR_JS_TOOLS}
            data={articleData}
            onInitialize={(instance) => {
              editor.current = instance;
            }}
            holder="editorjs"
          >
            <div id="editorjs"></div>
          </ReactEditorJS>
          {articleData ? (
            ""
          ) : (
            <CommonButton
              className="post article"
              butText="Next"
              onclick={saveData}
            />
          )}
        </div>
      ) : (
        <Publish data={preData.current} />
      )}
    </>
  );
};
export default CustomEditor;
