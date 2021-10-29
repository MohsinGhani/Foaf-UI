import Post from "../nestedComponent/home/homePost";
import SearchBar from "../nestedComponent/search/searchBar";
import { Row, Col } from "antd";
import Toggel from "../nestedComponent/dashBoard/dashboardIcons/toggel";
import { useState } from "react";
export default function Search() {
  const [selected, setSelected] = useState(true);
  return (
    <div className="Search-main_page">
      <div className="searchBar_main">
        <SearchBar />
      </div>
      <div className="search_Toggel">
        <Toggel selected={selected} disSelected={setSelected} />
      </div>
      <div className="search_post_main">
        <div className="row">
          <div className="column">
            <div className="search_post">
              <Post
                profile="/images/dashboard/samesize.svg"
                Post="/images/dashboard/post.svg"
                time="10mins ago"
                trend="Trend #1"
                profilecolor={true}
              />
            </div>

            <div className="search_post">
              <Post
                profile="/images/dashboard/samesize.svg"
                Post="/images/dashboard/post.svg"
                time="10mins ago"
                trend="Trend #2"
                profilecolor={true}
              />
            </div>
          </div>

          <div className="column">
            <div className="search_post">
              <Post
                profile="/images/dashboard/ProfileImage2.svg"
                Post="/images/dashboard/postimage2.svg"
                time="1hour ago"
                trend="Trend #7"
                profilecolor={false}
              />
            </div>
            <div className="search_post">
              <Post
                profile="/images/dashboard/samesize.svg"
                Post="/images/dashboard/post.svg"
                time="10mins ago"
                trend="Trend #4"
                profilecolor={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
