import React, { useRef, useState } from "react";

const Testing = () => {
  const firstScroll = useRef(null);
  const secondScroll = useRef(null);

  const [preventEvent, setPreventEvent] = useState(false);
  const [contentLastScrollTop, setContentLastScrollTop] = useState(0);

  const onTopScroll = (e) => {
    if (preventEvent) {
      setPreventEvent(false);
      return;
    }

    console.log("onTopScroll", e?.target.scrollTop);

    setPreventEvent(true);
    secondScroll.current.scrollTop = e?.target.scrollTop;
    setContentLastScrollTop(e?.target.scrollTop);
  };

  console.log(firstScroll, "firstScroll");
  console.log(secondScroll, "secondScroll");

  const onContentScroll = (e) => {
    if (preventEvent) {
      setPreventEvent(false);
      return;
    }
    console.log("onContentScroll", e?.target.scrollTop);

    if (e.target.scrollTop !== contentLastScrollTop) {
      setPreventEvent(true);
      firstScroll.current.scrollTop = e?.target.scrollTop;
      setContentLastScrollTop(e?.target.scrollTop);
    }
  };

  return (
    <>
      <div
        className="start"
        id="targetsss"
        style={{ height: "100px", overflowY: "auto" }}
        onScroll={onTopScroll}
        ref={firstScroll}
      >
        1
        <br />2
        <br />8
        <br />9
        <br />
        10
        <br />
        11
        <br />
        12
        <br />
        13
        <br />
        14
        <br />
        15
      </div>
      <br />
      <div
        className="end"
        id="targetttt"
        style={{ height: "100px", overflowY: "auto" }}
        onScroll={onContentScroll}
        ref={secondScroll}
      >
        1
        <br />2
        <br />8
        <br />9
        <br />
        10
        <br />
        11
        <br />
        12
        <br />
        13
        <br />
        14
        <br />
        15
      </div>
    </>
  );
};

export default Testing;
