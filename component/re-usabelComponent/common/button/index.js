import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";

export const CommonButton = ({ butText, className, number, onclick, icon }) => {
  return (
    <div className={`button  ${className}`}>
      <Button onClick={onclick} disabled={number}>
        {icon && (
          <>
            <Image
              src={`/images/CreatePost/${icon}.png`}
              width="15"
              height="15"
              alt="icon"
            />
            &nbsp;
          </>
        )}
        {butText}
      </Button>
    </div>
  );
};
