import Image from "next/image";
import React from "react";
import { CommonButton } from "../button";

const Pattern = ({ child }) => {
  return (
    <div className="Pattern_main">
      <div className="image_side"></div>
      <div className="main">
        <div className="topBar"></div>
        <div className="content">
          <div className="form">
            <div className="image">
              <Image
                src="/images/foaf.svg"
                alt="logo"
                width="168"
                height="73.31"
              />
            </div>
            {child}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pattern;
