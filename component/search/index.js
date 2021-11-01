import React from "react";
import SearchTabs from "../nestedComponent/search";
import SearchBar from "../re-usabelComponent/searchBar";

export default function Search() {
  return (
    <div className="Search_main">
      <div className="searchBar_main">
        <SearchBar />
      </div>
      <div>
        <SearchTabs />
      </div>
    </div>
  );
}
