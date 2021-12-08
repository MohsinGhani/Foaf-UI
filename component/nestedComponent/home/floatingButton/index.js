import Image from "next/image";
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
        <Image
          src={`/images/dashboard/${!state ? "plus" : "closeIcon"}.svg`}
          alt="Badge"
          width={!state ? "18" : "24"}
          height={!state ? "18" : "24"}
        />
      </div>
    </>
  );
}
