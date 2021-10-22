import React from "react";
import { Tabs } from "antd";
import TrendingPost from "../../../re-usabelComponent/trending/trendingPost";

export default function TrendingTabs() {
  const { TabPane } = Tabs;
  return (
    <div className="trend_tabs">
      <p className="heading">Trending</p>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<p>Trending</p>} key="1">
            <TrendingPost image="/images/trend/trend1.png" />
            <TrendingPost image="/images/trend/trend5.png" />
            <TrendingPost image="/images/trend/trend4.png" />
            <TrendingPost image="/images/trend/trend3.png" />
            <TrendingPost image="/images/trend/trend2.png" />
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
