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

const { Header, Content, Footer, Sider } = Layout;

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
          <Menu className="menu" mode="inline" defaultSelectedKeys={["4"]}>
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
            <Menu.Item key="10" icon={<ProfileIcon />}>
              Profile
            </Menu.Item>
            <Menu.Item key="5" icon={<MessagesIcon />}>
              Messages
            </Menu.Item>
            <Menu.Item key="6" icon={<GroupIcon />}>
              Groups
            </Menu.Item>
            <Menu.Item key="7" icon={<LocationIcon />}>
              Location
            </Menu.Item>
            <Menu.Item key="8" icon={<NotificationIcon />}>
              Notification
            </Menu.Item>
            <Menu.Item key="9" icon={<SettingIcon />}>
              <Link href="/setting-page"> Setting</Link>
            </Menu.Item>
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
