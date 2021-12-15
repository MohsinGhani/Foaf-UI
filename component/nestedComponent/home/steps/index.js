import React from "react";

export default function Steps() {
  const arrey = [
    { number: 2, title: "Location" },
    { number: 3, title: "Description" },
    { number: 4, title: "cover Photo" },
    { number: 5, title: "Preview" },
    ,
  ];
  return (
    <div className="steps_main">
      <div className="main">
        <div className="stepOne">
          <div className="round">1</div>
        </div>
        <div className="titletwo">Event Details</div>
      </div>
      {arrey.map((data, i) => (
        <div key={i} className="main">
          <div className="stepOne">
            <div className="vector"></div>
            <div className="round">{data.number}</div>
          </div>
          <div className="title">{data.title}</div>
        </div>
      ))}
    </div>
  );
}
