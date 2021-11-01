import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Tabs } from "antd";
import SearchCard from "../../re-usabelComponent/search/card";
import SeeAllButton from "../../re-usabelComponent/search/button";
export default function SearchTabs() {
  const { TabPane } = Tabs;
  const [selected, setSelected] = useState(false);
  const people = [
    {
      profile: "/images/search/people1.png",
      text1: "Lydia",
      text2: "Freind",
      text3: "29 Mutual Friend",
      text4: "Senior Design and marketing engineer at IT TECHNOLOGY",
    },
    {
      profile: "/images/search/people2.png",
      text1: "Corey Siphron",
      text2: "Freind",
      text3: "29 Mutual Friend",
      text4: "Senior Design and marketing engineer at IT TECHNOLOGY",
    },
    {
      profile: "/images/search/people3.png",
      text1: "Dulce Stanton",
      text2: "Freind",
      text3: "29 Mutual Friend",
      text4: "Senior Design and marketing engineer at IT TECHNOLOGY",
    },
    {
      profile: "/images/search/people4.png",
      text1: "Carla Saris",
      text2: "Freind",
      text3: "29 Mutual Friend",
      text4: "Senior Design and marketing engineer at IT TECHNOLOGY",
    },
    {
      profile: "/images/search/people5.png",
      text1: "Desirae Aminoff",
      text2: "Freind",
      text3: "29 Mutual Friend",
      text4: "Senior Design and marketing engineer at IT TECHNOLOGY",
    },
  ];
  const places = [
    {
      profile: "/images/search/place1.png",
      text1: "National Stock Exchange of India Ltd",
      text2: "Place - Stock",
      text3: "2330 Doe Meadow Drive, Germantown, Maryland,  United States",
      text4: "S5001 People like this",
    },
    {
      profile: "/images/search/place2.png",
      text1: "Peris",
      text2: "Place - Capital of France",
      text3:
        "238 Lamberts Branch Road,  Stone Mountain, Georgia, United States",
      text4: "5464 People like this",
    },
    {
      profile: "/images/search/place3.png",
      text1: "Marriott International",
      text2: "Place - Hotel",
      text3: "1206 Freshour Circle, Hopkinsville, Kentucky  United States",
      text4: "564 People like this",
    },
    {
      profile: "/images/search/place4.png",
      text1: "Marriott International",
      text2: "Place - Alliance",
      text3: "4873 Penn Street, Flat River, Missouri  United States",
      text4: "46583 People like this",
    },
  ];
  const events = [
    {
      profile: "/images/search/event1.png",
      text1: "Pantsula trend",
      text2: "MON, 4 OCT",
      text3: "Event | 2 People went",

      text4: "Mumbai - The City of Dreams in Mumbai, Maharashtra",
    },
    {
      profile: "/images/search/event2.png",
      text1: "Trend alert: Cotton shackets",
      text2: "MON, 8 OCT",
      text3: "Online Event | 47 People Intersted",
    },
    {
      profile: "/images/search/event3.png",
      text1: "Bar Trend Halloween Party",
      text2: "Event",
    },
    {
      profile: "/images/search/event4.png",
      text3:
        "World Investor Week 2021: Get Green - Sustainable Investing - The New",
      text4: "SAT, 30 OCT AT 08:00 UTC+05:30",
      text5: "4873 Penn Street, Flat River, Missouri  United States",
    },
  ];

  return (
    <div className="Search_tabs_main">
      <Tabs defaultActiveKey="1">
        <TabPane tab={<Button className="first">People</Button>} key="1">
          {people &&
            people.map((data, i) => (
              <div className="map_card" key={i}>
                <SearchCard
                  id={Date.now()}
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
        <TabPane tab={<Button className="but">Places</Button>} key="2">
          {places &&
            places.map((data, i) => (
              <div className="map_card" key={i}>
                <SearchCard
                  id={Date.now()}
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
          <SeeAllButton />
        </TabPane>
        <TabPane tab={<Button className="but">Video</Button>} key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab={<Button className="but">Recomand</Button>} key="4">
          Content of Tab Pane 4
        </TabPane>
        <TabPane tab={<Button className="but">Groups</Button>} key="5">
          Content of Tab Pane 5
        </TabPane>
        <TabPane tab={<Button className="last">Events</Button>} key="6">
          {events &&
            events.map((data, i) => (
              <div className="map_card" key={i}>
                <SearchCard
                  id={Date.now()}
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
          <SeeAllButton />
        </TabPane>
      </Tabs>
    </div>
  );
}
