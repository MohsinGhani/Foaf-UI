/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import Recent from "./recentIcon";
import { Space } from "antd";
import Popular from "./popularicon";
import { useRouter } from "next/router";
import { API } from "../../../../pages/api/search";
import AutoSearchIcon from "./autoCompleteSearchIcon";
import { useSelector } from "react-redux";

export default function AutoSearch({ condition }) {
  const router = useRouter();
  const [background, setBackground] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [enterSearch, setEnterSearch] = useState(false);
  const [recentHistory, setRecentHistory] = useState("");
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  useEffect(() => {
    recentSearch();
  }, []);

  const recentSearch = async () => {
    try {
      let response = await fetch(`${API.RECENT_POPULAR_SEARCH}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Token ${data.token}`,
        },
        body: new URLSearchParams({
          tag: "recent",
        }),
      });
      const recentSearchData = await response.json();

      console.log(recentSearchData, "recentSearchData");

      setRecentHistory(recentSearchData);
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };

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

  const recentData = () => {
    let arr = [];
    recentHistory?.result?.recent.map((data, i) => {
      if (i < 3) {
        const hello = data?.searched_phrase;

        arr.push(renderItem(hello, <Recent />));
      }
    });
    return arr;
  };

  const options = [
    {
      label: "Recent Search",
      options: recentData(),
    },
    {
      label: "Popular Search",
      options: [
        renderItem("Dune: Part 2", <Popular />),
        renderItem("Kyrsten Sinema", <Popular />),
        renderItem("Lakers vs Spurs", <Popular />),
        renderItem("Miami Heat", <Popular />),
      ],
    },
  ];

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

  useEffect(() => {
    router.query.search && setSearchValue(router.query.search);
    setRefresh(true);
  }, []);
  return (
    <>
      <div className="auto">
        <AutoComplete
          dropdownClassName="autocomplete_search"
          onBlur={() => {
            setBackground(true);
          }}
          id="search"
          onSelect={() => changeComponent()}
          options={options}
          placeholder="Search FOAF"
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setBackground(true);
              setEnterSearch(true);
            }
          }}
          value={searchValue}
        />
        <AutoSearchIcon
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          condition={condition}
          enterSearch={enterSearch}
          setEnterSearch={setEnterSearch}
          setRefresh={setRefresh}
          refresh={refresh}
          recentSearch={recentSearch}
        />
      </div>
      <div className={background ? "hide" : "show"}></div>
    </>
  );
}
