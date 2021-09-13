/* eslint-disable @next/next/no-img-element */

import Post from "../nestedComponent/home/homePost";
import Request from "../nestedComponent/home/homeRequest";
import Sponsored from "../nestedComponent/home/homeSponsored";
import Stories from "../nestedComponent/home/homeStories";
// import Toggel from "../nestedComponent/home/homeToggel";

export default function HomeDashBoard() {
  return (
    <div className="home_main">
      <div className="left-side">
        <div className="status_1">
          <div className="status">
            <div className="wow_1">
              <div className="wow_2">
                <Stories
                  url="/images/dashboard/profile1.svg"
                  name="Erin Press"
                />
              </div>
              <div className="wow_2">
                <Stories
                  url="/images/dashboard/profile2.svg"
                  name="Erin Press"
                />
              </div>
              <div className="wow_2">
                <Stories
                  url="/images/dashboard/profile3.svg"
                  name="Erin Press"
                />
              </div>
              <div className="wow_2">
                <Stories
                  url="/images/dashboard/profile1.svg"
                  name="Erin Press"
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
        <div className="post">
          <Post
            url="/images/dashboard/ProfileImage.svg"
            time="10mins ago"
            profilecolor={true}
          />
        </div>
        <div className="post">
          <Post
            url="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
            profilecolor={false}
          />
        </div>
        <div className="post">
          <Post
            url="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
            profilecolor={false}
          />
        </div>
        <div className="post">
          <Post
            url="/images/dashboard/ProfileImage2.svg"
            time="1hour ago"
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
            <p>Request</p>
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
