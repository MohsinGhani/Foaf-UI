import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { article } from "../../../../features/articleData.js";
import { API } from "../../../../../pages/api/home";
import { useRouter } from "next/router";
const ArticlePreview = ({ articleData }) => {
  const [singelPost, setSingelPost] = useState([]);
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  console.log("ArticleDataArticleData", articleData);
  const router = useRouter();

  let CustomEditor;
  if (typeof window !== "undefined") {
    CustomEditor = dynamic(() => import("../customEditor.js"));
  }
  // const data = {
  //   time: 1643615571626,
  //   blocks: [{ type: "paragraph", data: { text: "hello i am here" } }],
  //   version: "2.19.1",
  // };

  useEffect(() => {
    const fetch = async () => {
      let id = router.query.id;
      if (id) {
        console.log("idsadasdsssssssssssssssssss", id);
        let formData = new FormData();
        formData.append("article_id", id);
        try {
          let response = await fetch(`${API.GET_SINGLE_ARTICLE_POST}`, {
            method: "POST",
            headers: {
              // "Content-Type":
              // "multipart/form-data; boundary=<calculated when request is sent>",
              Authorization: `Token ${data?.token}`,
            },
            body: formData,
          });
          const getPost = await response.json();
          setSingelPost(getPost);
          console.log(getPost, "SingelPOSt");
        } catch (err) {
          console.log(err), "error ";
        }
      }
    };
    fetch();
  }, [data?.token]);

  return (
    <div>
      {CustomEditor && (
        <CustomEditor
          articleData={articleData || singelPost}
          // setDataArticle={setDataArticle}
          // dataArticle={dataArticle}
        />
      )}
    </div>
  );
};
export default ArticlePreview;
