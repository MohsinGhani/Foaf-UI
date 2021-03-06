import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Tabs } from "antd";
import SearchCard from "../../../re-usabelComponent/search/card";
import SeeAllButton from "../../../re-usabelComponent/search/button";
import { useRouter } from "next/router";
import EventOption from "./eventOption";
import VedioCard from "../../../re-usabelComponent/search/vedioCard";
import CommonCreatePost from "../../home/commonCreatePost";
import packageInfo from "../../../../shared/json";
import GroupCard from "../../../re-usabelComponent/search/groupCard";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Spinner from "../../../re-usabelComponent/common/spinner";

export default function SearchTabs({ search, create, className }) {
  const { places, events, video, group } = packageInfo;
  const router = useRouter();
  const { TabPane } = Tabs;
  const [selected, setSelected] = useState(false);
  const [filter, setFilter] = useState(false);
  const statedata = useSelector((state) => state?.search?.allSearch?.result);
  const loader = useSelector((state) => state?.search?.loader);
  const users = statedata?.users;

  const operations = (
    <Button onClick={() => setFilter(!filter)}>
      Filter {filter ? <UpOutlined /> : <DownOutlined />}
    </Button>
  );

  const SearchTabsRoute = (tab) => {
    router.push({
      pathname: "",
      query: { tab: tab, search: router.query.search },
    });
  };
  const CreateTabsRoute = (tab) => {
    router.push({
      pathname: "",
      query: { tabs: tab },
    });
  };

  return (
    <div className={`Search_tabs_main  ${className}  ${filter && "Event"}`}>
      <Tabs
        tabBarExtraContent={search && operations}
        onChange={callback}
        defaultActiveKey={
          ((router.query.tab === "people" ||
            router.query.tabs === "statusUpdate") &&
            "1") ||
          ((router.query.tab === "places" || router.query.tabs === "video") &&
            "2") ||
          ((router.query.tab === "Video" || router.query.tabs === "audio") &&
            "3") ||
          ((router.query.tab === "Groups" || router.query.tabs === "article") &&
            "4") ||
          ((router.query.tab === "Events" || router.query.tabs === "event") &&
            "5")
        }
      >
        <TabPane
          tab={
            <Button
              className="first"
              onClick={() => {
                {
                  search && SearchTabsRoute("people");
                }
                {
                  create && CreateTabsRoute("statusUpdate");
                }
              }}
            >
              {search && "People"}
              {create && "status Update"}
            </Button>
          }
          key="1"
        >
          {filter && <EventOption />}
          {create && <CommonCreatePost status={true} />}
          {search && (
            <>
              {loader ? (
                users?.map((data, i) => (
                  <div className="map_card" key={i}>
                    <SearchCard
                      id={i}
                      setSelected={setSelected}
                      selected={selected}
                      profile={data.profile}
                      text1={data.user_username}
                      mutualFriend={data.mutual_friends}
                    />
                  </div>
                ))
              ) : (
                <Spinner />
              )}
              <SeeAllButton text="See All" className="see_button" />
            </>
          )}
        </TabPane>
        <TabPane
          tab={
            <Button
              className="but"
              onClick={() => {
                {
                  search && SearchTabsRoute("places");
                }
                {
                  create && CreateTabsRoute("video");
                }
              }}
            >
              {search && "Places"}
              {create && "Video"}
            </Button>
          }
          key="2"
        >
          {filter && <EventOption />}
          {create && <CommonCreatePost video={true} />}
          {search && (
            <>
              {places?.map((data, i) => (
                <div className="map_card" key={i}>
                  <SearchCard
                    class="placeOutline"
                    id={i}
                    profile={data.profile}
                    text1={data.text1}
                    setSelected={setSelected}
                    selected={selected}
                    text2={data.text2}
                    text3={data.text3}
                    text4={data.text4}
                  />
                </div>
              ))}
              <SeeAllButton text="See All" className="see_button" />)
            </>
          )}
        </TabPane>
        <TabPane
          tab={
            <Button
              className="but"
              onClick={() => {
                {
                  search && SearchTabsRoute("Video");
                }
                {
                  create && CreateTabsRoute("audio");
                }
              }}
            >
              {search && "Video"}
              {create && "Audio"}
            </Button>
          }
          key="3"
        >
          {filter && <EventOption />}
          {create && <CommonCreatePost audio={true} />}
          {search && (
            <>
              {video?.map((data, i) => (
                <div className="map_card" key={i}>
                  <VedioCard
                    id={i}
                    profile={data.profile}
                    text1={data.text1}
                    text2={data.text2}
                    text3={data.text3}
                    text4={data.text4}
                    views={data.views}
                    time={data.time}
                    likes={data.likes}
                  />
                </div>
              ))}
              <SeeAllButton text="See All" className="see_button" />
            </>
          )}
        </TabPane>
        <TabPane
          tab={
            <Button
              className="but"
              onClick={() => {
                {
                  search && SearchTabsRoute("Groups");
                }
                {
                  create && CreateTabsRoute("article");
                }
              }}
            >
              {search && "Groups"}
              {create && "Article"}
            </Button>
          }
          key="4"
        >
          {filter && <EventOption />}
          {/* <div className="group_main"> */}
          {create && <CommonCreatePost article={true} />}
          {search && (
            <>
              <div className="group_main">
                {group?.map((data, i) => (
                  <div className="map_card" key={i}>
                    <GroupCard
                      id={i}
                      profile={data.profile}
                      text1={data.text1}
                    />
                  </div>
                ))}
              </div>
              <SeeAllButton text="See All" className="see_button" />
            </>
          )}
          {/* </div> */}
        </TabPane>
        <TabPane
          tab={
            <Button
              className="last"
              onClick={() => {
                {
                  search && SearchTabsRoute("Events");
                }
                {
                  create && CreateTabsRoute("event");
                }
              }}
            >
              {search && "Events"}
              {create && "Event"}
            </Button>
          }
          key="5"
        >
          {filter && <EventOption />}
          {create && <CommonCreatePost event={true} />}
          {search && (
            <>
              {events?.map((data, i) => (
                <div className="map_card" key={i}>
                  <SearchCard
                    id={i}
                    profile={data.profile}
                    text1={data.text1}
                    text2={data.text2}
                    setSelected={setSelected}
                    selected={selected}
                    text3={data.text3}
                    text4={data.text4}
                  />
                </div>
              ))}
              <SeeAllButton text="See All" className="see_button" />
            </>
          )}
        </TabPane>
      </Tabs>
    </div>
  );
}
