/* eslint-disable @next/next/no-img-element */
import React from "react";
import SearchBar from "../../../re-usabelComponent/searchBar";
import { Popover, Tabs } from "antd";
import Image from "next/image";
import Profile from "../../../re-usabelComponent/profile";
import PopOver from "./popover";
export default function ExploreTabs() {
  const { TabPane } = Tabs;
  return (
    <div className="explore-main_page">
      {/* <div className="searchBar_main">
        <SearchBar />
      </div> */}
      <div className="explore_tab">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Explore" key="1">
            <div className="explore_image">
              <div className="big_site">
                <div className="small_image">
                  <img
                    src="/images/explore/Rectangle1.png"
                    alt="image"
                    width="100%"
                  />
                  <img
                    src="/images/explore/Rectangle3.png"
                    alt="image"
                    width="100%"
                  />
                </div>
                <div className="big_image">
                  <img
                    className="big"
                    src="/images/explore/Rectangle2.png"
                    alt="image"
                    width="100%"
                  />
                  <div className="position">
                    <Profile
                      profile="/images/dashboard/samesize.svg"
                      time="10mins ago"
                      className="pink"
                      nameColor="storyText"
                      name="Lydia Workman"
                      class="image"
                      Popover={true}
                      component={<PopOver />}
                    />
                  </div>
                </div>
              </div>
              <div className="small_site">
                <img
                  src="/images/explore/Rectangle4.png"
                  alt="image"
                  width="100%"
                />
                <img
                  src="/images/explore/Rectangle5.png"
                  alt="image"
                  width="100%"
                />
                <img
                  src="/images/explore/Rectangle6.png"
                  alt="image"
                  width="100%"
                />
              </div>
            </div>
          </TabPane>
          <TabPane tab="Top" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="interests" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
