import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import Image from "next/image";
import Icondes from "../description/icon";
export const Location = ({ heading, setHeading }) => {
  const [select, setSelect] = useState(false);
  const [classChange, setClassChange] = useState("");
  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);

  const renderItem = (title) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Image
            src="/images/CreatePost/locationIcon.png"
            width="50"
            height="50"
            alt="pic"
            layout="fixed"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "12px", margin: "0px", lineHeight: "15px" }}>
            {title}
          </p>
          <p style={{ fontSize: "8px", margin: "0px", lineHeight: "15px" }}>
            Surat, Gujarat, India | 8,756 People checked here
          </p>
        </div>
      </div>
    ),
  });

  const options = [
    {
      options: [
        renderItem("Diamond city"),
        renderItem("Diamond city"),
        renderItem("Diamond city"),
        renderItem("Diamond city"),
      ],
    },
  ];
  return (
    <div className="location">
      <p>Add a physical lo cation for people to join your event. </p>
      <div className="auto_location">
        <p className={`text ${classChange}`}>Location</p>
        <div className="loacation_field">
          <AutoComplete
            size="large"
            dropdownClassName="autocomplete_location"
            style={{
              width: 250,
            }}
            options={options}
            placeholder={select && "Include a place or address"}
            onFocus={() => {
              setSelect(true);
              setClassChange("location_text");
            }}
            onBlur={() => {
              setSelect(false);
              setClassChange("");
            }}
          />
          <div className="location_image">
            <Image
              src="/images/CreatePost/location.png"
              width="24"
              height="24"
              alt="pic"
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
