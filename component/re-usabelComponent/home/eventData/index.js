import React from "react";
import Profile from "../../profile";

import { EventDetails } from "../../../nestedComponent/home/steps/eventDetailes";
import { Location } from "../../../nestedComponent/home/steps/location";
import { Description } from "../../../nestedComponent/home/steps/Description";
import { UplodOption } from "../UploadOption";

export const EventData = ({ Details, number }) => {
  const component = () => {
    const data = number;
    switch (data) {
      case 1:
        return <EventDetails />;
      case 2:
        return <Location />;
      case 3:
        return <Description />;
      case 4:
        return <UplodOption audio />;
      default:
        console.log(`Sorry, we are out of `);
    }
  };

  return (
    <div className="event_data">
      <p className="heading">Event Details</p>
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
