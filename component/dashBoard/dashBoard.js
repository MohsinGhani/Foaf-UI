import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";

import { useState } from "react";
import Logo from "../reUsabelComponent/dashBoard/logoSvg";
import Card from "../reUsabelComponent/dashBoard/dashBoardStories/dashBoardStories";
import Post from "../reUsabelComponent/dashBoard/dashBoardPost/dashBoardPost";
import Sponsored from "../reUsabelComponent/dashBoard/dashBoardSponsored/dashBoardSponsored";
import Request from "../reUsabelComponent/dashBoard/dashBoardRequest/dashBoardRequest";
import Searchicon from "../reUsabelComponent/dashBoard/dashboardIcons/search";
import MessagesIcon from "../reUsabelComponent/dashBoard/dashboardIcons/messages";
import GroupIcon from "../reUsabelComponent/dashBoard/dashboardIcons/groups";
import LocationIcon from "../reUsabelComponent/dashBoard/dashboardIcons/location";
import ProfileIcon from "../reUsabelComponent/dashBoard/dashboardIcons/profile";
import NotificationIcon from "../reUsabelComponent/dashBoard/dashboardIcons/notification";
import SettingIcon from "../reUsabelComponent/dashBoard/dashboardIcons/settings";
const { Header, Content, Footer, Sider } = Layout;

export default function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);
  const image = [
    {
      src: "/images/dashboard/userProfile.svg",
      alt: "profile",
      width: "24",
      height: "24",
    },
  ];
  return (
    <Layout className="layout">
      <Sider
        className="slider"
        collapsible
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        reverseArrow={true}
      >
        <div className="logo">
          <Logo />
        </div>
        <Menu className="menu" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<Searchicon />}>
            <input type="text" placeholder={"search"} />
          </Menu.Item>
          <Menu.Item key="2" icon={<MessagesIcon />}>
            Messages
          </Menu.Item>
          <Menu.Item key="4" icon={<GroupIcon />}>
            Groups
          </Menu.Item>
          <Menu.Item key="5" icon={<LocationIcon />}>
            Location
          </Menu.Item>
          <Menu.Item key="6" icon={<NotificationIcon />}>
            Notification
          </Menu.Item>
          <Menu.Item key="7" icon={<SettingIcon />}>
            Setting
          </Menu.Item>
          <Menu.Item key="8" icon={<ProfileIcon image={image} />}>
            Profile
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Content className="container">
          <div className="page">
            <div className="left-side">
              <div className="status">
                <Card url="/images/dashboard/profile1.svg" />
                <Card url="/images/dashboard/profile2.svg" />
                <Card url="/images/dashboard/profile3.svg" />
                <Card url="/images/dashboard/profile1.svg" />
                <Card url="/images/dashboard/profile2.svg" />
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
            </div>
            <div className="right-side">
              <div className="scroll">
                <div>
                  <Sponsored />
                </div>
                <div>
                  <div className="request">
                    <p>Request</p>
                    <div className="circle">3</div>
                  </div>
                  <div className="request-card">
                    <Request url="/images/dashboard/requestProfile1.svg" />
                    <Request url="/images/dashboard/requestProfile2.svg" />
                    <Request url="/images/dashboard/requestProfile3.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
