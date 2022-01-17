import React, { useEffect, useLayoutEffect, useState } from "react";
import Profile from "../../../re-usabelComponent/profile";

import { EventDetails } from "../steps/eventDetailes";
import { Location } from "../steps/location";

import { UplodOption } from "../UploadOption";
import { Description } from "../steps/description";
import Preview from "../steps/preview";

export const EventData = ({ Details, number, form }) => {
  const [heading, setHeading] = useState("");
  const [image, setimage] = useState(null);

  const component = () => {
    const data = number;
    switch (data) {
      case 1: {
        return (
          <EventDetails
            setHeading={setHeading}
            // setEventData={setEventData}
            heading="Event Details"
            form={form}
          />
        );
      }
      case 2:
        return (
          <Location setHeading={setHeading} heading="Location" form={form} />
        );
      case 3:
        return (
          <Description
            setHeading={setHeading}
            heading="Description"
            form={form}
          />
        );
      case 4:
        return (
          <UplodOption
            picture
            setimage={setimage}
            image={image}
            setHeading={setHeading}
            heading="Cover Photo"
            formCover={form}
          />
        );
      case 5:
        return (
          <Preview
            setHeading={setHeading}
            heading="Preview"
            image={image}
            form={form}
          />
        );
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
