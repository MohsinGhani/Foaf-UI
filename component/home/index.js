/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { Menu } from "antd";
import CreateStory from "../nestedComponent/home/storySlider/createStory";
import MobileStories from "../nestedComponent/home/homeMobileStories";
import Post from "../nestedComponent/home/homePost";
import Request from "../nestedComponent/home/homeRequest";
import Sponsored from "../nestedComponent/home/homeSponsored/sponsoredcode";
// import Stories from "../nestedComponent/home/storySlider/homeStories";
import ToggelMobile from "../nestedComponent/home/toggelmobile";
// import StorySlider from "../nestedComponent/home/storySlider";
import Trending from "../nestedComponent/home/trending/showTrandings";
import Stories from "../nestedComponent/home/storySlider/stories";
import Sponsoreds from "../nestedComponent/home/homeSponsored/sponsoreds";
// import Toggel from "../nestedComponent/home/homeToggel";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../features/user";
import ShowTrending from "../nestedComponent/home/trending/showTrandings";
import FloatingBut from "../nestedComponent/home/floatingButton";
import FloatingOption from "../nestedComponent/home/floatingOption";
import { useEffect, useState } from "react";
import { Event } from "../re-usabelComponent/home/homeEventPost";
import { API } from "../../pages/api/home";
export default function HomeDashBoard() {
  const dispatch = useDispatch();
  const [post, setPost] = useState();
  const [state, setState] = useState(false);
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;

  useEffect(() => {
    FeedData();
  }, []);

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
      <div className="left-side">
        <MobileStories />
        <div className="seperator"></div>
        <ToggelMobile />
        <div className="status">
          <Stories />
        </div>
        {post &&
          post?.result?.data?.map((data, key) => {
            if (data?.postType === "article") {
              return (
                <div className="home_post" key={key}>
                  <Post
                    profile="/images/dashboard/samesize.svg"
                    time={data?.timestamp}
                    Post="/images/dashboard/post.svg"
                    profilecolor="grey"
                    name={data?.user?.username}
                  />
                </div>
              );
            }
          })}
        {/* <div className="home_post">
          <Event
            profile="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
            Post="/images/dashboard/post3.jpg"
            profilecolor="pink"
            name="Talan Bator"
            event={true}
          />
        </div> */}
        {/* <div className="home_post">
          <Post
            profile="/images/dashboard/ProfileImage2.svg "
            time="1hour ago"
            Post="/images/dashboard/post4.jpg"
            profilecolor="grey"
            name="Lydia Workman"
          />
        </div> */}
        {/* <div className="home_post">
          <Post
            profile="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
            Post="/images/dashboard/sponsored.svg"
            profilecolor="grey "
            name="Cristofer Westervelt"
          />
        </div> */}
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
    </div>
  );
}
