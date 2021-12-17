import React from "react";
import { Button } from "react-bootstrap";

export const CommonButton = ({ butText, className }) => {
  return (
    <div className={`button  ${className}`}>
      <Button>{butText}</Button>
    </div>
  );
};
