import { Button } from "antd";
import React from "react";

export const CommonButton = ({ butText, className }) => {
  return (
    <div className={`button  ${className}`}>
      <Button>{butText}</Button>
    </div>
  );
};
