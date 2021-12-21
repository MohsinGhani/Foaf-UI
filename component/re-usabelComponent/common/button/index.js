import React from "react";
import { Button } from "react-bootstrap";

export const CommonButton = ({ butText, className, number, onclick }) => {
  return (
    <div className={`button  ${className}`}>
      <Button onClick={onclick} disabled={number}>
        {butText}
      </Button>
    </div>
  );
};
