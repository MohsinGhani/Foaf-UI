import React from "react";
import { AutoComplete } from "antd";
import Recent from "./recentIcon";
import { Space } from "antd";
import Popular from "./popularicon";

export default function AutoSearch() {
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
  //   const hello = (data, inputValue) => {
  //     console.log(inputValue, "input value");
  //     return data.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
  //   };
  const options = [
    {
      label: "Recent Search",
      options: [
        renderItem("tradingView", <Recent />),
        renderItem("pinterest", <Recent />),
        renderItem("movies", <Recent />),
        renderItem("cricket live score", <Recent />),
      ],
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
  console.log(options, "hello");
  return (
    <div className="auto">
      <AutoComplete
        options={options}
        placeholder="FOAF"
        filterOption={(inputValue, option) =>
          option?.options?.map(
            (data) =>
              data.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          )
        }
      />
    </div>
  );
}
