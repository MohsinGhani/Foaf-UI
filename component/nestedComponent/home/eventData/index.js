import React, { useEffect, useLayoutEffect, useState } from "react";
import Profile from "../../../re-usabelComponent/profile";
import { Form } from "antd";
import { EventDetails } from "../steps/eventDetailes";
import { Location } from "../steps/location";

import { UplodOption } from "../UploadOption";
import { Description } from "../steps/description";
import Preview from "../steps/preview";

export const EventData = ({ Details, number }) => {
  const [heading, setHeading] = useState("");
  const [image, setimage] = useState(null);
  const [form] = Form.useForm();

  // const [eventData, setEventData] = [{}];
  form
    .validateFields()
    .then((values) => {
      console.log(values, "valuesssvaluesssvaluesssvaluesssvaluesss");
      console.log(fullVideo, "fullVideofullVideo");
    })
    .catch((err) => {
      console.log(err);
    });

  const component = () => {
    const data = number;
    switch (data) {
      case 1: {
        return (
          <EventDetails
            setHeading={setHeading}
            // setEventData={setEventData}
            heading="Event Details"
          />
        );
      }
      case 2:
        return <Location setHeading={setHeading} heading="Location" />;
      case 3:
        return <Description setHeading={setHeading} heading="Description" />;
      case 4:
        return (
          <UplodOption
            picture
            setimage={setimage}
            image={image}
            setHeading={setHeading}
            heading="Cover Photo"
          />
        );
      case 5:
        return <Preview setHeading={setHeading} heading="Preview" />;
      default:
        console.log(`Sorry, we are out of `);
    }
  };

  return (
    <div className="event_data">
      <p className="heading">{heading}</p>
      <Profile
        profile="/images/dashboard/samesize.svg"
        className="CreatePostProfile"
        nameColor="CreatePostColor"
        name="Lydia Workman"
        class="image"
        privacy={true}
      />
      {component()}
    </div>
  );
};
