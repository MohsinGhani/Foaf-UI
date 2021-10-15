import Image from "next/image";
import React from "react";

export default function TrendingPost() {
  return (
    <div className="trendingPost">
      <p>1. Deontay Wilder Knockout</p>
      <div className="content">
        <Image
          src="/images/dashboard/sponsored1.svg"
          width="72px"
          height="72px"
          alt="post"
        />
        <div className="text">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, netus
            nunc, vulputate at tempus,
          </p>
        </div>
      </div>
      <div>
        <div>
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 15V11.5358C14.375 10.3192 15 8.77 15 7.08333C15 3.17167 11.6417 0 7.5 0C3.35833 0 0 3.17167 0 7.08333C0 10.995 3.35833 14.1667 7.5 14.1667C8.88499 14.1711 10.2461 13.8064 11.4433 13.11L13.3333 15ZM7.5 12.5C4.27833 12.5 1.66667 10.075 1.66667 7.08333C1.66667 4.09167 4.27833 1.66667 7.5 1.66667C10.7217 1.66667 13.3333 4.09167 13.3333 7.08333C13.3333 10.075 10.7217 12.5 7.5 12.5Z"
                fill="#838383"
              />
            </svg>
          </span>
        </div>
        <div>
          <span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.09756 8C6.09756 10.1333 7.8439 11.8691 10 11.8691C12.1463 11.8691 13.8927 10.1333 13.8927 8C13.8927 5.85697 12.1463 4.12121 10 4.12121C7.8439 4.12121 6.09756 5.85697 6.09756 8ZM15.7366 2.04606C17.4439 3.36485 18.8976 5.29455 19.9415 7.70909C20.0195 7.89333 20.0195 8.10667 19.9415 8.28121C17.8537 13.1103 14.1366 16 10 16H9.99024C5.86341 16 2.14634 13.1103 0.0585366 8.28121C-0.0195122 8.10667 -0.0195122 7.89333 0.0585366 7.70909C2.14634 2.88 5.86341 0 9.99024 0H10C12.0683 0 14.0293 0.717576 15.7366 2.04606ZM10.0012 10.4124C11.3378 10.4124 12.4304 9.32635 12.4304 7.99787C12.4304 6.65968 11.3378 5.57362 10.0012 5.57362C9.8841 5.57362 9.76702 5.58332 9.65971 5.60272C9.62068 6.66938 8.74263 7.52272 7.65971 7.52272H7.61093C7.58166 7.67787 7.56215 7.83302 7.56215 7.99787C7.56215 9.32635 8.65483 10.4124 10.0012 10.4124Z"
                fill="#1E293B"
              />
            </svg>
          </span>
        </div>
        <div>
          <p>15,464,56 views . john Smith</p>
        </div>
      </div>
    </div>
  );
}
