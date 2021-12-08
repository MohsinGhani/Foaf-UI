import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ExploreTabs from "../nestedComponent/explore/exploreTab";
import Explore from "../nestedComponent/explore/exploreTab";
import AutoSearch from "../nestedComponent/search/autoComplete";
import SearchTabs from "../nestedComponent/search/tabs";

export default function Explor() {
  const router = useRouter();
  const [show, setShow] = useState(true);

  return (
    <div className="explore">
      <AutoSearch condition={setShow} />
      {show && !router.query.search ? (
        <ExploreTabs />
      ) : (
        <SearchTabs search={true} />
      )}
    </div>
  );
}
