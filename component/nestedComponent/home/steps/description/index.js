import React, { useEffect } from "react";

export const Description = ({ heading, setHeading }) => {
  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);
  return (
    <div className="description">
      <p>
        Provide more information about your event so that guests know what to
        expect.
      </p>
    </div>
  );
};
