import React from "react";
import { Tabs } from "antd";
import TrendingPost from "../../../re-usabelComponent/home/trending/trendingPost";

export default function TrendingTabs() {
  const { TabPane } = Tabs;
  return (
    <div>
      <h1>Trending</h1>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<p>Trending</p>} key="1">
            <TrendingPost />
          </TabPane>
          <TabPane tab={<p>Sports</p>} key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab={<p>Entertainment / Fun</p>} key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab={<p>News</p>} key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab={<p>Local</p>} key="5">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
