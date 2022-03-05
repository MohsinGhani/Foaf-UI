/* eslint-disable @next/next/link-passhref */
import { Layout, Menu, Breadcrumb } from "antd";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Input } from "antd";
import Logo from "../nestedComponent/dashBoard/dashboardIcons/logoSvg";
import Searchicon from "../nestedComponent/dashBoard/dashboardIcons/search";
import MessagesIcon from "../nestedComponent/dashBoard/dashboardIcons/messages";
import GroupIcon from "../nestedComponent/dashBoard/dashboardIcons/groups";
import LocationIcon from "../nestedComponent/dashBoard/dashboardIcons/location";
import ProfileIcon from "../nestedComponent/dashBoard/dashboardIcons/profile";
import NotificationIcon from "../nestedComponent/dashBoard/dashboardIcons/notification";
import SettingIcon from "../nestedComponent/dashBoard/dashboardIcons/settings";
import HomeIcon from "../nestedComponent/dashBoard/dashboardIcons/home";
import ToggelHome from "../nestedComponent/dashBoard/dashboardIcons/toggelhomje";
import { useRouter } from "next/router";
import ToggelSearch from "../nestedComponent/dashBoard/dashboardIcons/toggelSearch";
import Toggel from "../nestedComponent/dashBoard/dashboardIcons/toggel";
import TopBar from "../nestedComponent/dashBoard/top-bar";

import Link from "next/link";
import HomeDashBoard from "../home";
import EventIcon from "../nestedComponent/dashBoard/dashboardIcons/events";
import SearchBarDashboard from "../nestedComponent/dashBoard/searchbar";
import HamBurger from "../nestedComponent/dashBoard/dashboardIcons/hamBurger";

import { loginData } from "../features/user";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Logout from "../nestedComponent/dashBoard/dashboardIcons/logout";
import SearchBarExplore from "../nestedComponent/dashBoard/searchbar";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Mainone(props) {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();

  console.log(stateData, "deshboard se data araha hai");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (router.pathname === "/explore-page") {
      setCollapsed(true);
    }
  }, [router]);
  const logout = () => {
    console.log("logout");
    Cookies.remove("token");
    window.location.reload();
    // dispatch(loginData(null));
  };
  // console.log(userReducer, "hello");
  return (
    <Layout className="layout_main">
      <div className="hello"></div>
      <div className="logo">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="logoChild"
        >
          <Logo />
        </div>

        <SearchBarExplore />
      </div>

      <div className="menu-scroll">
        <Sider
          className={`slider ${collapsed ? "smallwidth" : "largewidth"} ${
            router.pathname === "/explore-page" && "wide"
          }`}
          collapsible
          collapsed={collapsed}
          // onMouseEnter={() => setCollapsed(false)}
          // onMouseLeave={() => setCollapsed(true)}
          reverseArrow={true}
        >
          <Menu className="menu" mode="inline">
            {/* {collapsed ? (
              <>
                <Menu.Item key="1" icon={<ToggelHome />}></Menu.Item>
                <Menu.Item key="2" icon={<ToggelSearch />}></Menu.Item>
              </>
            ) : (
              <Menu.Item
                key={selected ? "2" : "1"}
                icon={<Toggel selected={selected} disSelected={setSelected} />}
              ></Menu.Item>
            )} */}
            <Menu.Item
              key="1"
              icon={<HamBurger />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              <ul>
                <li></li>
              </ul>
            </Menu.Item>
            <Menu.Item
              key="3"
              className={`${"show_search"} router.pathname == "/search-page" ? "active" : ""`}
              icon={<Searchicon />}
            >
              <Link href="/explore-page">Explore FOAF</Link>
            </Menu.Item>

            <Menu.Item
              key="4"
              className={router.pathname == "/" ? "active" : ""}
              icon={<HomeIcon />}
            >
              <Link href="/">Home</Link>
            </Menu.Item>

            {/* <Menu.Item key="10" icon={<ProfileIcon />}>
              Profile
            </Menu.Item> */}

            <SubMenu key="sub1" icon={<ProfileIcon />} title="Profile">
              <Menu.Item
                key="5"
                onClick={() => {
                  router.push({
                    pathname: "/friendsList-page",
                    query: { connection: "friend-requests" },
                  });
                }}
              >
                {/* <Link href="/friendsList-page"> */}
                <ul>
                  <li>Friends List</li>
                </ul>
                {/* </Link> */}
              </Menu.Item>
              <Menu.Item key="6">
                <ul>
                  <li>Favorites</li>
                </ul>
              </Menu.Item>
              <Menu.Item key="7">
                <ul>
                  <li>Recommendations</li>
                </ul>
              </Menu.Item>

              <SubMenu key="sub2" title="post">
                <Menu.Item key="8">
                  <ul>
                    <li>Video</li>
                  </ul>
                </Menu.Item>
                <Menu.Item key="9">
                  <ul>
                    <li>Audio</li>
                  </ul>
                </Menu.Item>
                <Menu.Item key="10">
                  <ul>
                    <li>Text</li>
                  </ul>
                </Menu.Item>
                <Menu.Item key="11">
                  <ul>
                    <li>Polls</li>
                  </ul>
                </Menu.Item>
              </SubMenu>
            </SubMenu>

            <Menu.Item key="12" icon={<GroupIcon />}>
              Groups
            </Menu.Item>
            <SubMenu key="sub3" icon={<EventIcon />} title="Events">
              <Menu.Item key="14">
                <ul>
                  <li>Speed Dating</li>
                </ul>
              </Menu.Item>
              <Menu.Item key="15">
                <ul>
                  <li>Meetups</li>
                </ul>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="13" icon={<MessagesIcon />}>
              Messages
            </Menu.Item>

            <Menu.Item
              key="16"
              className={
                router.pathname == "/notification-page" ? "active" : ""
              }
              icon={<NotificationIcon />}
            >
              <Link href="/notification-page">Notifications</Link>
            </Menu.Item>
            <SubMenu key="sub4" icon={<SettingIcon />} title="Other Settings">
              <SubMenu key="sub5" title="Settings">
                <Menu.Item key="17">
                  <ul>
                    <li>Friends</li>
                  </ul>
                </Menu.Item>
                <Menu.Item key="18">
                  <Link href="/setting-page">
                    <ul>
                      <li>Profile</li>
                    </ul>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="19">
                <ul>
                  <li>Ads</li>
                </ul>
              </Menu.Item>
              <Menu.Item key="20">
                <ul>
                  <li>Directory</li>
                </ul>
              </Menu.Item>
            </SubMenu>

            <Menu.Item
              onClick={logout}
              key="21"
              // className={router.pathname == "/" ? "active" : ""}
              icon={<Logout />}
            >
              <div>logout</div>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
      <Layout className="site-layout">
        <Content
          className={`mainContainer ${
            router.pathname === "/explore-page" && "widdeContainer"
          }`}
        >
          <div className="secPage"></div>
          <div className="page ">
            <TopBar />
            {props.component}
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
