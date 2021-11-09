/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import Recent from "./recentIcon";
import { Space } from "antd";
import Popular from "./popularicon";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function AutoSearch({ condition }) {
  const router = useRouter();
  const [background, setBackground] = useState(true);

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
  console.log(renderItem(), "hhh");
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

  const changeComponent = () => {
    condition(false);
  };
  const classChange = () => {
    setBackground(false);
  };
  const stateChange = (e) => {
    if (!e.path.includes(search) && !background) {
      setBackground(true);
    }
  };

  useEffect(() => {
    if (!background) {
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
          onClick={classChange}
          onSelect={changeComponent}
          options={options}
          placeholder="Search FOAF"
          // filterOption={(inputValue, option) =>
          //   option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          // }
        />
      </div>
      <div className={background ? "hide" : "show"}></div>
    </>
  );
}
