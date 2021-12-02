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
import FloatingButOption from "../nestedComponent/home/floatingButton";
import FloatingBut from "../nestedComponent/home/floatingButton";
import FloatingOption from "../nestedComponent/home/floatingOption";
import { useState } from "react";

export default function HomeDashBoard() {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
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
        {/* <div className="status_main"> */}
        {/* <div className="status"> */}
        {/* <div className="wow_2"> */}
        {/* <Stories
                url="/images/dashboard/samesize.svg"
                name="Erin Press"
                bgurl="/images/dashboard/story1.png"
              /> */}
        {/* <CreateStory /> */}
        {/* </div> */}
        {/* <div className="wow_2">
              <Stories
                url="/images/dashboard/requestProfile1.svg"
                name="Erin Press"
                bgurl="/images/dashboard/story2.png"
              /> */}
        {/* </div>
            <div className="wow_2">
              <Stories
                url="/images/dashboard/requestProfile3.svg"
                name="Erin Press"
                bgurl="/images/dashboard/story3.png"
              />
            </div>
            <div className="wow_2"> */}
        {/* <Stories
                url="/images/dashboard/samesize.svg"
                name="Erin Press"
                bgurl="/images/dashboard/story4.png"
              />
            </div> */}
        {/* <div className="wow_2">
              <Stories
                url="/images/dashboard/requestProfile3.svg"
                name="Erin Press"
                bgurl="/images/dashboard/story3.png"
              />
            </div> */}
        {/* <div className="wow_2">
              <Stories
                url="/images/dashboard/requestProfile1.svg"
                name="Erin Press"
                bgurl="/images/dashboard/story2.png"
              />
            </div> */}
        {/* <div className="wow_2">
              <img
                src="/images/dashboard/king.png"
                alt="king"
                width="100"
                height="140"
              /> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}

        <div className="home_post">
          <Post
            profile="/images/dashboard/samesize.svg"
            time="10mins ago"
            Post="/images/dashboard/post.svg"
            profilecolor="grey"
            name="Lydia Workman"
          />
        </div>

        <div className="home_post">
          <Post
            profile="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
            Post="/images/dashboard/post3.jpg"
            profilecolor="pink"
            name="Talan Bator"
          />
        </div>
        <div className="home_post">
          <Post
            profile="/images/dashboard/ProfileImage2.svg "
            time="1hour ago"
            Post="/images/dashboard/post4.jpg"
            profilecolor="grey"
            name="Lydia Workman"
          />
        </div>
        <div className="home_post">
          <Post
            profile="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
            Post="/images/dashboard/sponsored.svg"
            profilecolor="grey "
            name="Cristofer Westervelt"
          />
        </div>
      </div>
      <div className="right-side">
        {/* <div className="text">
          <p> Sponsored</p>
        </div> */}
        {/* <div>
          <Sponsored />
        </div> */}
        {/* <div>
          <Sponsored />
        </div> */}
        <div className="sponsoreds_main">
          <Sponsoreds />
        </div>
        <div className="show_trending_main">
          <ShowTrending />
        </div>

        {/* <div>
          <div className="request">
            <p>Requests</p>
            <div className="circle">3</div>
          </div>
          <div className="request-card">
            <Request
              url="/images/dashboard/requestProfile1.svg"
              name="Kianna Rosser"
            />
            <Request
              url="/images/dashboard/requestProfile2.svg"
              name="Kaylynn Torff"
            />
            <Request
              url="/images/dashboard/requestProfile3.svg"
              name="Rajat Sharma"
            />
            <Request
              url="/images/dashboard/requestProfile3.svg"
              name="Rajat Sharma"
            />

            <Request
              url="/images/dashboard/requestProfile3.svg"
              name="Rajat Sharma"
            />

            <Request
              url="/images/dashboard/requestProfile3.svg"
              name="Rajat Sharma"
            />
          </div>
        </div> */}
      </div>
      <div className="button_flot">
        <FloatingBut state={state} setState={setState} />
      </div>
      <div className="option_float">
        <FloatingOption state={state} />
      </div>
    </div>
  );
}
