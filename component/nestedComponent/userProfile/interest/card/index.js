/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";

const Card = ({ src, name }) => {
  const [select, setSelect] = useState(false);
  return (
    <div className="interestCard">
      <div
        className="mainEventImage"
        onClick={() => {
          setSelect(!select);
        }}
      >
        <img src={src} alt="" className="image" />

        {select && (
          <div className="check">
            <div className="middle"></div>
            <img
              src="/images/interest/Selected.png"
              alt=""
              width="34px"
              height="34px"
            />
          </div>
        )}
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Card;
