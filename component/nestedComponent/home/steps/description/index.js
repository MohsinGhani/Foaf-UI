import React, { useEffect, useState } from "react";
import { Input } from "antd";
import Image from "next/image";

export const Description = ({ heading, setHeading }) => {
  useEffect(() => {
    setHeading(heading);
  }, [heading, setHeading]);
  const { TextArea } = Input;
  const [classChange, setClassChange] = useState("");
  return (
    <div className="description">
      <p>
        Provide more information about your event so that guests know what to
        expect.
      </p>
      <div className="description_text_main">
        <p className={`text ${classChange}`}>Description </p>
        <div className="description_text">
          <TextArea
            autoSize={{ minRows: 5, maxRows: 7 }}
            onBlur={() => {
              setClassChange("");
            }}
            onClick={() => {
              setClassChange("discription_text");
            }}
          />
          <div className="text_image">
            <Image
              src="/images/CreatePost/description.png"
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
