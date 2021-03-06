import { useState } from "react";

export default function Toggel(props) {
  return (
    <div className="toggel_main">
      <div className="toggel">
        <div
          className={`same ${props.selected && "homewow"}`}
          onClick={() => {
            props.disSelected(true);
          }}
        >
          <svg
            width="18"
            height="27"
            viewBox="0 0 18 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.14719 11.75C8.64715 7.625 10.3972 4.125 10.5222 2.75C16.5221 8.375 12.7723 13.625 11.6473 15.875C10.5223 18.125 11.2722 20 12.3973 20.375C14.2196 20.9824 15.7722 17.75 15.7722 15.5C19.1472 21.5 13.1473 25.625 9.39716 25.625C5.64706 25.625 3.84719 23.75 2.64719 22.25C1.14719 20.375 -0.41184 15.9291 4.14719 11.75Z"
              stroke="url(#paint0_linear)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0.31688"
                y1="-1.18167"
                x2="17.8671"
                y2="-0.950006"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FE5E71" />
                <stop offset="1" stopColor="#FF3951" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div
          className={`same ${!props.selected && "search"}`}
          onClick={() => {
            props.disSelected(false);
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="13"
              cy="13"
              r="11.25"
              stroke="#F2BD6F"
              strokeWidth="2"
            />
            <path
              d="M10.75 11.125L8.5 17.875L15.25 15.25L17.875 8.5L10.75 11.125Z"
              stroke="#F2BD6F"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="text">
        <p className={`${props.selected && "text_color_trending"}`}>Trending</p>
        <p className={`${!props.selected && "text_color_explore"}`}>Explore</p>
      </div>
    </div>
  );
}
