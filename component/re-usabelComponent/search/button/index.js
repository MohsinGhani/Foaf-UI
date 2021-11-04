import React from "react";
import { Button } from "react-bootstrap";

export default function SeeAllButton({ text, className }) {
  console.log(className);
  return (
    <div className={className}>
      <Button>{text}</Button>
    </div>
  );
}
