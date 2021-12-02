import React from "react";
import { useState } from "react";

export default function FloatingBut({ state, setState }) {
  return (
    <>
      <div
        onClick={() => {
          setState(!state);
        }}
        className="circle"
      >
        circle
      </div>
    </>
  );
}
