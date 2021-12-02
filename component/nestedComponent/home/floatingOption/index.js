import React from "react";

function FloatingOption({ state }) {
  return (
    <>
      {state && (
        <div className="displaye slide-in-right">
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </div>
      )}
    </>
  );
}

export default FloatingOption;
