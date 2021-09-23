/* eslint-disable @next/next/no-img-element */

import { Menu } from "antd";
import MobileStories from "../nestedComponent/home/homeMobileStories";
import Post from "../nestedComponent/home/homePost";
import Request from "../nestedComponent/home/homeRequest";
import Sponsored from "../nestedComponent/home/homeSponsored";
import Stories from "../nestedComponent/home/homeStories";
import ToggelMobile from "../nestedComponent/home/toggelmobile";
// import Toggel from "../nestedComponent/home/homeToggel";

export default function HomeDashBoard() {
  return (
    <div className="home_main">
      <div className="left-side">
        <MobileStories />
        <div className="seperator"></div>
        <ToggelMobile />

        <div className="status_1">
          <div className="status">
            <div className="wow_1">
              <div className="wow_2">
                <Stories
                  url="/images/dashboard/samesize.svg"
                  name="Erin Press"
                  bgurl="/images/dashboard/story1.png"
                />
              </div>
              <div className="wow_2">
                <Stories
                  url="/images/dashboard/requestProfile1.svg"
                  name="Erin Press"
                  bgurl="/images/dashboard/story2.png"
                />
              </div>
              <div className="wow_2">
                <Stories
                  url="/images/dashboard/requestProfile3.svg"
                  name="Erin Press"
                  bgurl="/images/dashboard/story3.png"
                />
              </div>
              <div className="wow_2">
                <Stories
                  url="/images/dashboard/samesize.svg"
                  name="Erin Press"
                  bgurl="/images/dashboard/story4.png"
                />
              </div>
              <div className="wow_2">
                <img
                  src="/images/dashboard/king.png"
                  alt="king"
                  width="100"
                  height="140"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home_post">
          <Post
            profile="/images/dashboard/samesize.svg"
            time="10mins ago"
            Post="/images/dashboard/post.svg"
            profilecolor={true}
          />
        </div>
        <hr />
        <div className="home_post">
          <Post
            profile="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
            Post="/images/dashboard/post.svg"
            profilecolor={false}
          />
        </div>
        <div className="home_post">
          <Post
            profile="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
            Post="/images/dashboard/post.svg"
            profilecolor={false}
          />
        </div>
        <div className="home_post">
          <Post
            profile="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
            Post="/images/dashboard/post.svg"
            profilecolor={false}
          />
        </div>
      </div>
      <div className="right-side">
        <div>
          <Sponsored />
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}
