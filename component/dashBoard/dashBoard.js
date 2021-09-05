import { Layout, Menu, Breadcrumb } from "antd";
import React from "react"


import { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Collapse } from "react-bootstrap";
import Logo from "../reUsabelComponent/dashBoard/logoSvg";
import Card from "../reUsabelComponent/dashBoard/dashBoardStories/dashBoardStories";
import Post from "../reUsabelComponent/dashBoard/dashBoardPost/dashBoardPost";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function DashBoard() {
  React.useLayoutEffect = React.useEffect
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout">
      <Sider
        className="slider"
        collapsible
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
      >
        <Logo />
        <Menu className="menu" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            key="1"
            icon={"hello"}
          >
            <input type="text" placeholder={"search"} />
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={"hello"}
          >
            Messages
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={"hello"}
          >
            Groups
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={"hello"}
          >
            Location
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={"hello"}
          >
            Notification
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={"hello"}
          >
            Setting
          </Menu.Item>
          <Menu.Item
            key="8"
            icon={"hello"}
          >
            Profile
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header
          //   className="site-layout-background"
          className="header"
          style={{ padding: 0 }}
        />

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
                <Post />
              </div>
            </div>
            <div className="right-side">
            
                <Post />
              
            </div>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}
