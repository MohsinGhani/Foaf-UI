/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import MobileStories from "../nestedComponent/home/homeMobileStories";
import Post from "../nestedComponent/home/homePost";
import ToggelMobile from "../nestedComponent/home/toggelmobile";
import Stories from "../nestedComponent/home/storySlider/stories";
import Sponsoreds from "../nestedComponent/home/homeSponsored/sponsoreds";
import { useSelector } from "react-redux";
import ShowTrending from "../nestedComponent/home/trending/showTrandings";
import FloatingBut from "../nestedComponent/home/floatingButton";
import FloatingOption from "../nestedComponent/home/floatingOption";
import { useEffect, useState } from "react";
import { Event } from "../re-usabelComponent/home/homeEventPost";
import { API } from "../../pages/api/home";
import Spinner from "../re-usabelComponent/common/spinner";
import { useRouter } from "next/router";
import Preview from "../nestedComponent/home/steps/preview";
import ArticlePreview from "../nestedComponent/home/artical/articlePreview";
export default function HomeDashBoard() {
  const [post, setPost] = useState();
  const [state, setState] = useState(false);
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  const router = useRouter();

  useEffect(() => {
    FeedData();
  }, [router]);

  const FeedData = async () => {
    if (data?.token) {
      try {
        let response = await fetch(`${API.HOME_FEED}`, {
          method: "GET",
          headers: {
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
            Authorization: `Token ${data.token}`,
          },
        });
        const fetchHomeData = await response.json();
        setPost(fetchHomeData);
        console.log(fetchHomeData, "fetchHomeData");
      } catch (err) {
        console.log(err), "error ";
      }
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="home_main">
      {(router.query.post === "event" && (
        <div className="Main">
          <Preview />
        </div>
      )) ||
        (router.query.post === "article" && (
          <div>
            <ArticlePreview />
          </div>
        )) || (
          <>
            <div className="left-side">
              <MobileStories />
              <div className="seperator"></div>
              <ToggelMobile />
              <div className="status">
                <Stories />
              </div>
              {post ? (
                post?.result?.data?.map((data, key) => {
                  let condition = data?.postType;
                  switch (condition) {
                    case "video":
                    case "audio":
                    case "text":
                      return (
                        <div className="home_post" key={key}>
                          <Post
                            profile={data?.user.avatar}
                            time={data?.timestamp}
                            Post={data?.background_image}
                            profilecolor={
                              data?.user?.isHavingStory ? "pink" : "grey"
                            }
                            name={data?.user?.username}
                            link={data?.link}
                            postType={data?.postType}
                            comment={data?.commentCount}
                            reaction={data?.reactionCount}
                            view={data?.views}
                            user={data?.user}
                            description={data?.description}
                          />
                        </div>
                      );

                    case "event":
                    case "article":
                      return (
                        <div className="home_post" key={key}>
                          <Event
                            id={data?.id}
                            type={data.postType}
                            profile={data?.user.avatar}
                            time={data?.timestamp}
                            Post={data?.coverPhoto}
                            profilecolor={
                              data?.user?.isHavingStory ? "pink" : "grey"
                            }
                            name={data?.user?.username}
                            event={true}
                            comment={data?.commentCount}
                            reaction={data?.reactionCount}
                            view={data?.views}
                            user={data?.user}
                          />
                        </div>
                      );
                  }
                })
              ) : (
                <Spinner />
              )}
            </div>
            <div className="right-side">
              <div className="sponsoreds_main">
                <Sponsoreds />
              </div>
              <div className="show_trending_main">
                <ShowTrending />
              </div>
            </div>
            <div className="button_float">
              <FloatingBut state={state} setState={setState} />
            </div>
            <div className="option_float">
              <FloatingOption state={state} />
            </div>
          </>
        )}
    </div>
  );
}
