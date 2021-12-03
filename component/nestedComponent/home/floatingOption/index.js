import React from "react";

function FloatingOption({ state }) {
  return (
    <>
      <div
        className={`displaye ${
          state ? `scale-in-hor-right` : `scale-in-hor-right-reverse`
        }`}
      >
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </>
  );
}

export default FloatingOption;
