import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Space, Tabs } from "antd";
import SearchCard from "../../../re-usabelComponent/search/card";
import SeeAllButton from "../../../re-usabelComponent/search/button";
import { useRouter } from "next/router";
import EventOption from "./eventOption";
import DropDown from "../../../re-usabelComponent/search/dropDown";
import VedioCard from "../../../re-usabelComponent/search/vedioCard";
import { people, places, events, video, group } from "../../../../shared/json";
import GroupCard from "../../../re-usabelComponent/search/groupCard";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Spinner from "../../../re-usabelComponent/common/spinner";
// import { Button } from "antd";
export default function SearchTabs({ search }) {
  const router = useRouter();
  const { TabPane } = Tabs;
  const [selected, setSelected] = useState(false);
  const [filter, setFilter] = useState(false);
  const statedata = useSelector((state) => state?.search?.allSearch?.result);
  const loader = useSelector((state) => state?.search?.loader);
  const users = statedata?.users;
  const groups = statedata?.groups;
  const pages = statedata?.pages;
  // console.log(users, "all user data is here");
  // console.log(people, "all people data is here");

  // const joinData = users.map((data, i) =>
  //   { let hello = data[i]
  //     hello = people.map((data, i) => data[i]
  //   })
  // );
  // console.log(joinData, "join data is here");

  const operations = (
    <Button onClick={() => setFilter(!filter)}>
      Filter {filter ? <UpOutlined /> : <DownOutlined />}
    </Button>
  );
  function callback(key) {
    console.log(key, "key ya rahi bhai");
  }
  return (
    <div className={`Search_tabs_main ${filter && "Event"}`}>
      <Tabs
        tabBarExtraContent={operations}
        onChange={callback}
        defaultActiveKey={
          (router.query.tab === "people" && "1") ||
          (router.query.tab === "places" && "2") ||
          (router.query.tab === "Video" && "3") ||
          (router.query.tab === "Recomand" && "4") ||
          (router.query.tab === "Groups" && "5") ||
          (router.query.tab === "Events" && "6")
        }
      >
        <TabPane
          tab={
            <Button
              className="first"
              onClick={() => {
                router.push({
                  pathname: "",
                  query: { tab: "people", search: router.query.search },
                });
              }}
            >
              {search && "People"}
            </Button>
          }
          key="1"
        >
          {filter && <EventOption />}
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
                  // text2={data.text2}
                  // text3={data.text3}
                  // text4={data.text4}
                />
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </TabPane>
        <TabPane
          tab={
            <Button
              className="but"
              onClick={() => {
                router.push({
                  pathname: "",
                  query: { tab: "places", search: router.query.search },
                });
              }}
            >
              {search && "Places"}
            </Button>
          }
          key="2"
        >
          {filter && <EventOption />}
          {places &&
            places.map((data, i) => (
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
          <SeeAllButton text="See All" className="see_button" />
        </TabPane>
        <TabPane
          tab={
            <Button
              className="but"
              onClick={() => {
                router.push({
                  pathname: "",
                  query: { tab: "Video", search: router.query.search },
                });
              }}
            >
              {search && "Video"}
            </Button>
          }
          key="3"
        >
          {filter && <EventOption />}
          {video &&
            video.map((data, i) => (
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
        </TabPane>
        <TabPane
          tab={
            <Button
              className="but"
              onClick={() => {
                router.push({
                  pathname: "",
                  query: { tab: "Groups", search: router.query.search },
                });
              }}
            >
              {search && "Groups"}
            </Button>
          }
          key="5"
        >
          {filter && <EventOption />}
          <div className="group_main">
            {group &&
              group.map((data, i) => (
                <div className="map_card" key={i}>
                  <GroupCard id={i} profile={data.profile} text1={data.text1} />
                </div>
              ))}
          </div>
          <SeeAllButton text="See All" className="see_button" />
        </TabPane>
        <TabPane
          tab={
            <Button
              className="last"
              onClick={() => {
                router.push({
                  pathname: "",
                  query: { tab: "Events", search: router.query.search },
                });
              }}
            >
              {search && "Events"}
            </Button>
          }
          key="6"
        >
          {filter && <EventOption />}
          {events &&
            events.map((data, i) => (
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
        </TabPane>
      </Tabs>
    </div>
  );
}
