import React from "react";
import { Button } from "react-bootstrap";

export const CommonButton = ({ butText, className, number }) => {
  return (
    <div className={`button  ${className}`}>
      <Button disabled={number}> {butText}</Button>
    </div>
  );
};
