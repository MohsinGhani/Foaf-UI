import { createReactEditorJS } from "react-editor-js";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Paragraph from "@editorjs/paragraph";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import { API } from "../../../../pages/api/create";
import SimpleImage from "@editorjs/simple-image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CommonButton } from "../../../re-usabelComponent/common/button";
import Publish from "./publishPage";
import { article } from "../../../features/articleData";

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

const CustomEditor = ({ articleData, setDataArticle }) => {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(true);

  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  const editor = useRef(null);
  console.log(
    statedata,
    "statedatastatedatastatedatastatedatastatedatastatedata"
  );
  // data g&& dispatch(article(data));

  const saveData = async () => {
    setPreview(false);
    console.log(editor, "edotor datata");
    const articleData = editor.current.save();
    articleData
      .then(async (outPut) => {
        console.log(outPut, "outPutoutPutoutPut");
        setDataArticle(outPut);
        // dispatch(article(outPut));
        // dispatch(article(outPut));
        // let formData = new FormData();
        // formData.append("article_name", "some name");
        // formData.append("article_data", JSON.stringify(outPut));
        // formData.append("category", "some category");
        // formData.append("tags", "some tags");
        // formData.append("location", "");
        // formData.append("liked_by", "[]");
        // try {
        //   let response = await fetch(`${API.CREATE_ARTICLE}`, {
        //     method: "POST",
        //     headers: {
        //       // "Content-Type":
        //       //   "multipart/form-data; boundary=<calculated when request is sent>",
        //       Authorization: `Token ${data.token}`,
        //     },
        //     body: formData,
        //   });
        //   const createArticle = await response.json();
        //   console.log(createArticle, "createEvent");
        // } catch (err) {
        //   console.log(err), "error ";
        // }
      })
      .catch((err) => {
        console.log(err, "errrroutoputoutoputoutoput");
      });
    // editor?.current?.destroy();
  };
  console.log(articleData, "Data is here");
  return (
    <>
      {preview ? (
        <div className="article_editor">
          <ReactEditorJS
            tools={EDITOR_JS_TOOLS}
            data={articleData}
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
          <CommonButton
            className="post article"
            butText="Next"
            onclick={saveData}
          />
          {/* <button onClick={saveData}>save</button> */}
        </div>
      ) : (
        <Publish />
      )}
    </>
  );
};
export default CustomEditor;
