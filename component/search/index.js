/* eslint-disable @next/next/no-img-element */
import React from "react";
import SearchBar from "../nestedComponent/search/searchBar";
import { Tabs } from "antd";
import Image from "next/image";
export default function Search() {
  const { TabPane } = Tabs;
  return (
    <div className="Search-main_page">
      <div className="searchBar_main">
        <SearchBar />
      </div>
      <div className="explore_tab">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Explore" key="1">
            <div className="explore_image">
              <div className="big_site">
                <div className="small_image">
                  <img src="/images/explore/Rectangle1.png" alt="image" />
                  <img src="/images/explore/Rectangle3.png" alt="image" />
                </div>
                <div className="big_image">
                  <img
                    className="big"
                    src="/images/explore/Rectangle2.png"
                    alt="image"
                  />
                  <img
                    className="profile_image"
                    src="/images/explore/profile.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="small_site">
                <img src="/images/explore/Rectangle4.png" alt="image" />
                <img src="/images/explore/Rectangle5.png" alt="image" />
                <img src="/images/explore/Rectangle6.png" alt="image" />
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
