import "../styles/globals.scss";
import "../styles/scss/index.scss";
import DashBoard from "../component/dashBoard/dashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
/* eslint-disable @next/next/no-img-element */
import { Layout, Menu, Breadcrumb } from "antd";
import React, { Component } from "react";
import { useState } from "react";
import Logo from "../component/nestedComponent/dashBoard/dashboardIcons/logoSvg";
import Searchicon from "../component/nestedComponent/dashBoard/dashboardIcons/search";
import MessagesIcon from "../component/nestedComponent/dashBoard/dashboardIcons/messages";
import GroupIcon from "../component/nestedComponent/dashBoard/dashboardIcons/groups";
import LocationIcon from "../component/nestedComponent/dashBoard/dashboardIcons/location";
import ProfileIcon from "../component/nestedComponent/dashBoard/dashboardIcons/profile";
import NotificationIcon from "../component/nestedComponent/dashBoard/dashboardIcons/notification";
import SettingIcon from "../component/nestedComponent/dashBoard/dashboardIcons/settings";
import HomeIcon from "../component/nestedComponent/dashBoard/dashboardIcons/home";
import ToggelHome from "../component/nestedComponent/dashBoard/dashboardIcons/toggelhomje";

// import HomeDashBoard from "../home/index";
import ToggelSearch from "../component/nestedComponent/dashBoard/dashboardIcons/toggelSearch";
import Toggel from "../component/nestedComponent/dashBoard/dashboardIcons/toggel";
import TopBar from "../component/nestedComponent/dashBoard/top-bar";
// import Setting from "../setting";
import Link from "next/link";
import HomeDashBoard from "../component/home";
import EventIcon from "../component/nestedComponent/dashBoard/dashboardIcons/events";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function MyApp({ Component, pageProps }) {
  const [collapsed, setCollapsed] = useState(true);
  const [selected, setSelected] = useState(true);

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
          <Menu className="menu" mode="inline">
            {collapsed ? (
              <>
                <Menu.Item key="1" icon={<ToggelHome />}></Menu.Item>
                <Menu.Item key="2" icon={<ToggelSearch />}></Menu.Item>{" "}
              </>
            ) : (
              <Menu.Item
                key={selected ? "2" : "1"}
                icon={<Toggel selected={selected} disSelected={setSelected} />}
              ></Menu.Item>
            )}
            <Menu.Item
              key="3"
              icon={<Searchicon condition={collapsed} />}
            ></Menu.Item>
            <Menu.Item key="4" icon={<HomeIcon />}>
              <Link href="/">Home</Link>
            </Menu.Item>
            {/* <Menu.Item key="10" icon={<ProfileIcon />}>
              Profile
            </Menu.Item> */}
            <SubMenu key="sub1" icon={<ProfileIcon />} title="Profile">
              <Menu.Item key="5">Friends List</Menu.Item>
              <Menu.Item key="6">Favorites</Menu.Item>
              <Menu.Item key="7">Recommendations</Menu.Item>
              <SubMenu key="sub2" title="post">
                <Menu.Item key="8">Video</Menu.Item>
                <Menu.Item key="9">Audio</Menu.Item>
                <Menu.Item key="10">Text</Menu.Item>
                <Menu.Item key="11">Polls</Menu.Item>
              </SubMenu>
            </SubMenu>
            <Menu.Item key="12" icon={<GroupIcon />}>
              Groups
            </Menu.Item>
            <SubMenu key="sub3" icon={<EventIcon />} title="Events">
              <Menu.Item key="14">Speed Dating</Menu.Item>
              <Menu.Item key="15">Meetups</Menu.Item>
            </SubMenu>
            <Menu.Item key="13" icon={<MessagesIcon />}>
              Messages
            </Menu.Item>

            <Menu.Item key="16" icon={<NotificationIcon />}>
              Notification
            </Menu.Item>
            <SubMenu key="sub4" icon={<SettingIcon />} title="Other Settings">
              <SubMenu key="sub5" title="Settings">
                <Menu.Item key="17">Friends</Menu.Item>
                <Menu.Item key="18">
                  <Link href="/setting-page">Profile</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="19">Ads</Menu.Item>
              <Menu.Item key="20">Directory</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </div>
      <Layout className="site-layout">
        <Content className="container">
          <div className="page">
            <TopBar />
            <Component {...pageProps} />
            {/* <Setting /> */}
          </div>
        </Content>
        <Footer>
          <Menu className="menu" mode="horizontal">
            <Menu.Item key="1" icon={<HomeIcon />}></Menu.Item>
            <Menu.Item key="2" icon={<GroupIcon />}></Menu.Item>
            <Menu.Item key="3" icon={<LocationIcon />}></Menu.Item>
            <Menu.Item key="4" icon={<NotificationIcon />}></Menu.Item>
            <Menu.Item key="5" icon={<ProfileIcon />}></Menu.Item>
          </Menu>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MyApp;
