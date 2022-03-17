import Image from "next/image";
import React from "react";

export default function FloatingBut({ state, setState }) {
  return (
    <>
      <div
        onClick={() => {
          setState(!state);
        }}
        className={`circle ${!state ? "rotate" : "non_rotate"}`}
      >
        <Image
          src={`/images/dashboard/plus.svg`}
          alt="Badge"
          width="18"
          height="18"
        />
      </div>
    </>
  );
}
