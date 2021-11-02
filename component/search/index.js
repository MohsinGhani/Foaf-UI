import React from "react";
import AutoSearch from "../nestedComponent/search/autoComplete";
import SearchTabs from "../nestedComponent/search/tabs";

export default function Search() {
  return (
    <div className="Search_main">
      <div className="searchBar_main">
        <AutoSearch />
      </div>
      <div>
        <SearchTabs />
      </div>
    </div>
  );
}
