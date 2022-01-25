import React, { useEffect, useState } from "react";
import Geosuggest from "react-geosuggest";

import Image from "next/image";
import { AutoComplete, Form } from "antd";
export const Location = ({ heading, setHeading, form }) => {
  const [select, setSelect] = useState(false);
  const [classChange, setClassChange] = useState("");
  // const [location, setLocation] = useState("");

  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);

  // useEffect(() => {
  //   Location();
  // }, []);

  // const Location = async () => {
  //   try {
  //     let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_LOCATION}`);

  //     const locationResponse = await response.json();
  //     setLocation(locationResponse);
  //     console.log(locationResponse, "location ka response");
  //   } catch (err) {
  //     console.log(err), "error ";
  //   }
  // };

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

  const fixtures = [
    { label: "New York", location: { lat: 40.7033127, lng: -73.979681 } },
    { label: "Rio", location: { lat: -22.066452, lng: -42.9232368 } },
    { label: "Tokyo", location: { lat: 35.673343, lng: 139.710388 } },
  ];
  return (
    <div className="location">
      <p>Add a physical location for people to join your event. </p>
      <div className="auto_location">
        <p className={`text ${classChange}`}>Location</p>
        {/* <Form name="location" form={form} autoComplete="off"> */}
        <div className="loacation_field">
          <Form.Item
            name="location"
            rules={[
              {
                required: true,
                message: "Please input location",
              },
            ]}
          >
            {/* <Geosuggest
              placeholder="Start typing!"
              initialValue="Hamburg"
              onSuggestSelect={(e) => console.log("E", e)}
            /> */}
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
          </Form.Item>
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
        {/* </Form> */}
      </div>
    </div>
  );
};
