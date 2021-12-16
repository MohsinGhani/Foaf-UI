import React from "react";
import Profile from "../../profile";
import { EventDetails } from "../../../nestedComponent/home/steps/eventDetailes";

export const EventData = ({ Details }) => {
  return (
    <div>
      <p>Event Details</p>
      <Profile
        profile="/images/dashboard/samesize.svg"
        className="CreatePostProfile"
        nameColor="CreatePostColor"
        name="Lydia Workman"
        class="image"
        privacy={true}
      />
      {Details && <EventDetails />}
    </div>
  );
};
