import React, { useState } from "react";
import ExploreTabs from "../nestedComponent/explore/exploreTab";
import Explore from "../nestedComponent/explore/exploreTab";
import AutoSearch from "../nestedComponent/search/autoComplete";
import SearchTabs from "../nestedComponent/search/tabs";

export default function Explor() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <AutoSearch condition={setShow} />
      {show ? <ExploreTabs /> : <SearchTabs />}
    </div>
  );
}
