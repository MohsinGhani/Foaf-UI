import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { API } from "../../../../../pages/api/home";
import { useRouter } from "next/router";
const ArticlePreview = ({ articleData }) => {
  const [singelPost, setSingelPost] = useState([]);
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;

  const router = useRouter();

  let CustomEditor;
  if (typeof window !== "undefined") {
    CustomEditor = dynamic(() => import("../customEditor.js"));
  }

  useEffect(() => {
    let id = router.query.id;
    const fetch = async () => {
      if (id) {
        let formData = new FormData();
        formData.append("article_id", id);
        try {
          let response = await fetch(`${API.GET_SINGLE_ARTICLE_POST}`, {
            method: "POST",
            headers: {
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
  }, [data?.token, router.query.id]);

  return (
    <div>
      {CustomEditor && <CustomEditor articleData={articleData || singelPost} />}
    </div>
  );
};
export default ArticlePreview;
