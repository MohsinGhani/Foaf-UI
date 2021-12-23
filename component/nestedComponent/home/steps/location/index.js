import React, { useEffect } from "react";

export const Location = ({ heading, setHeading }) => {
  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);
  return (
    <div className="location">
      <p>Add a physical lo cation for people to join your event. </p>
    </div>
  );
};
