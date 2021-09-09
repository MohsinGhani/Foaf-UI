/* eslint-disable @next/next/no-img-element */
import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";
import Image from "next-images";
import { useState } from "react";
import Logo from "../nestedComponent/dashBoard/dashboardIcons/logoSvg";
import Card from "../nestedComponent/home/homeStories";

import Sponsored from "../nestedComponent/home/homeSponsored";
import Request from "../nestedComponent/home/homeRequest";
import Searchicon from "../nestedComponent/dashBoard/dashboardIcons/search";
import MessagesIcon from "../nestedComponent/dashBoard/dashboardIcons/messages";
import GroupIcon from "../nestedComponent/dashBoard/dashboardIcons/groups";
import LocationIcon from "../nestedComponent/dashBoard/dashboardIcons/location";
import ProfileIcon from "../nestedComponent/dashBoard/dashboardIcons/profile";
import NotificationIcon from "../nestedComponent/dashBoard/dashboardIcons/notification";
import SettingIcon from "../nestedComponent/dashBoard/dashboardIcons/settings";
import HomeIcon from "../nestedComponent/dashBoard/dashboardIcons/home";
import Toggel from "../nestedComponent/dashBoard/dashboardIcons/toggel";
import Home from "../../pages";
import HomeDashBoard from "../home/index";
import Setting from "../setting.js";
const { Header, Content, Footer, Sider } = Layout;

export default function DashBoard() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout className="layout">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu-scroll">
        <Sider
          className="slider"
          collapsible
          collapsed={collapsed}
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
          reverseArrow={true}
        >
          <Menu className="menu" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="1"
              icon={<Searchicon condition={collapsed} />}
            ></Menu.Item>
            <Menu.Item key="2" icon={<HomeIcon />}>
              Home
            </Menu.Item>
            <Menu.Item key="3" icon={<MessagesIcon />}>
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
            <Menu.Item key="8" icon={<ProfileIcon />}>
              Profile
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
      <Layout className="site-layout">
        <Content className="container">
          <div className="page">
            {/* <HomeDashBoard /> */}
            <Setting />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
