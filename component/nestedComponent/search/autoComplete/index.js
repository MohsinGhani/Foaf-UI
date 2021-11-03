import React, { useState } from "react";
import { AutoComplete } from "antd";
import Recent from "./recentIcon";
import { Space } from "antd";
import Popular from "./popularicon";
import { useRouter } from "next/router";

export default function AutoSearch({ condition }) {
  const router = useRouter();
  const [back, setback] = useState(true);
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
  return (
    <div className="auto">
      <AutoComplete
        onSelect={changeComponent}
        options={options}
        placeholder="FOAF"
        // filterOption={(inputValue, option) =>
        //   option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        // }
      />
    </div>
  );
}
