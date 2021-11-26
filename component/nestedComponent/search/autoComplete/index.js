/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import Recent from "./recentIcon";
import { Space } from "antd";
import Popular from "./popularicon";
import { useRouter } from "next/router";
import { useRef } from "react";
import SearchBar from "../../../re-usabelComponent/searchBar";
import Searchicon from "../../dashBoard/dashboardIcons/search";
import AutoSearchS from "./autoCompleteSearchIcon";
import AutoSearchIcon from "./autoCompleteSearchIcon";

export default function AutoSearch({ condition }) {
  const router = useRouter();
  const [background, setBackground] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [enterSearch, setEnterSearch] = useState(false);
  console.log(background, "hellooooooo");
  const renderItem = (title, icon) => ({
    value: title,
    label: (
      <div>
        <Space size={6}>
          {icon}
          {title}
        </Space>
      </div>
    ),
  });

  const options = [
    {
      options: [
        renderItem("tradingView", <Recent />),
        renderItem("pinterest", <Recent />),
        renderItem("movies", <Recent />),
        renderItem("cricket live score", <Recent />),
      ],
      label: "Recent Search",
    },
    {
      options: [
        renderItem("Dune: Part 2", <Popular />),
        renderItem("Kyrsten Sinema", <Popular />),
        renderItem("Lakers vs Spurs", <Popular />),
        renderItem("Miami Heat", <Popular />),
      ],
      label: "Popular Search",
    },
  ];
  // const options = [
  //   {
  //     value: "Recent Search",
  //   },
  //   {
  //     value: "Popular Search",
  //   },
  //   {
  //     value: "hello",
  //   },
  //   {
  //     value: "movies",
  //   },
  //   {
  //     value: "cricket",
  //   },
  // ];
  const onChange = (data) => {
    setSearchValue(data);
    setBackground(false);
  };
  const changeComponent = () => {
    condition(false);
    setBackground(true);
  };
  const stateChange = (e) => {
    let search = document?.getElementById("search");
    // console.log(e.path, "key ya rahi bhai");
    if (condition) {
      if (search && e.path.includes(search) && background) {
        setBackground(false);
      }
    }
  };

  useEffect(() => {
    if (background) {
      window.addEventListener("click", stateChange);
    } else {
      window.removeEventListener("click", stateChange);
    }
  }, [background]);

  return (
    <>
      <div className="auto">
        <AutoComplete
          onBlur={() => {
            setBackground(true);
          }}
          id="search"
          dropdownClassName="hanadhakslflallasbjlabdgjlba"
          onSelect={() => changeComponent()}
          options={options}
          placeholder="Search FOAF"
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setBackground(true);
              setEnterSearch(true);
              condition(false);
            }
          }}
          value={searchValue}
          // filterOption={(inputValue, option) =>
          //   option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          // }
        />
        <AutoSearchIcon
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          condition={condition}
          enterSearch={enterSearch}
          setEnterSearch={setEnterSearch}
        />
      </div>
      <div className={background ? "hide" : "show"}></div>
    </>
  );
}
