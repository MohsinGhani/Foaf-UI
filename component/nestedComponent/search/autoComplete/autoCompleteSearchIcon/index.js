import React from "react";
import { API } from "../../../../../pages/api/search";

export default function AutoSearchIcon({ text }) {
  const searchData = async () => {
    console.log(text, "hello");
    // try {
    //   let response = await fetch(`${API.SEARCH_ALL}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //       Authorization: `Token ${data.token}`,
    //     },
    //     body: new URLSearchParams({
    //       search_name: { text },
    //     }),
    //   });

    //   const allSearc = await response.json();
    //   // setgetAllFriends(getallfriends);
    //   console.log(allSearc, "getalluser");
    //   // dispatch(allUser(getalluser));
    // } catch (err) {
    //   console.log(err), "error araha hai";
    // }
  };

  return (
    <div
      id="AutoSearchIcon"
      onClick={() => {
        searchData();
      }}
    >
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="13.9418"
          cy="13.9428"
          r="10.6508"
          stroke="#4F4F4F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3496 21.9038L25.5253 26.0687"
          stroke="#4F4F4F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
