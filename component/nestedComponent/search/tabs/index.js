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
export default function SearchTabs() {
  const router = useRouter();
  const { TabPane } = Tabs;
  const [selected, setSelected] = useState(false);
  const operations = <DropDown text="Filter" type="filter" />;
  return (
    <div
      className={`Search_tabs_main ${
        router.query.search === "Events" && "Event"
      }`}
    >
      <Tabs
        tabBarExtraContent={operations}
        defaultActiveKey={
          (router.query.search === "people" && "1") ||
          (router.query.search === "places" && "2") ||
          (router.query.search === "Video" && "3") ||
          (router.query.search === "Recomand" && "4") ||
          (router.query.search === "Groups" && "5") ||
          (router.query.search === "Events" && "6")
        }
      >
        <TabPane
          tab={
            <Button
              className="first"
              onClick={() => {
                router.push({
                  pathname: "",
                  query: { search: "people" },
                });
              }}
            >
              People
            </Button>
          }
          key="1"
        >
          {people &&
            people.map((data, i) => (
              <div className="map_card" key={i}>
                <SearchCard
                  id={i}
                  setSelected={setSelected}
                  selected={selected}
                  profile={data.profile}
                  text1={data.text1}
                  text2={data.text2}
                  text3={data.text3}
                  text4={data.text4}
                />
              </div>
            ))}
        </TabPane>
        <TabPane
          tab={
            <Button
              className="but"
              onClick={() => {
                router.push({
                  pathname: "",
                  query: { search: "places" },
                });
              }}
            >
              Places
            </Button>
          }
          key="2"
        >
          {places &&
            places.map((data, i) => (
              <div className="map_card" key={i}>
                <SearchCard
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
                  query: { search: "Video" },
                });
              }}
            >
              Video
            </Button>
          }
          key="3"
        >
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
                  query: { search: "Groups" },
                });
              }}
            >
              Groups
            </Button>
          }
          key="5"
        >
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
                  query: { search: "Events" },
                });
              }}
            >
              Events
            </Button>
          }
          key="6"
        >
          <EventOption />
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
