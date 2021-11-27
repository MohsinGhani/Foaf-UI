/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../../../pages/api/search";
import { allSearch, loader } from "../../../../features/search";

export default function AutoSearchIcon({
  searchValue,
  setSearchValue,
  condition,
  enterSearch,
  setEnterSearch,
  setRefresh,
  refresh,
}) {
  // const [loader, setLoader] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  // console.log(condition, "condition me kiya araha hai");
  const search = async () => {
    // console.log(!router.query.tab, "han bhai tab me kiya arha hai jalid batao");
    condition(false);
    dispatch(loader(false));
    {
      !router.query.tab &&
        router.push({
          pathname: "",
          query: { tab: "people", search: searchValue },
        });
    }
    if (searchValue) {
      try {
        let response = await fetch(`${API.SEARCH_ALL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${data.token}`,
          },
          body: new URLSearchParams({
            search_name: searchValue,
            search_by: ["Users", "Groups", "Pages"],
          }),
        });

        const SearchData = await response.json();
        // setgetAllFriends(getallfriends);
        console.log(SearchData, "getalluser");
        dispatch(allSearch(SearchData));
      } catch (err) {
        console.log(err), "error araha hai";
      }
    }
    setEnterSearch(false);
    setRefresh(false);
  };
  useEffect(() => {
    refresh || enterSearch ? searchValue && search() : "";
    //  && searchValue && search();
  }, [enterSearch, refresh]);

  // useEffect(() => {

  // }, [refresh]);
  // if (router.query.search) {
  //   setEnterSearch(true);
  // }
  // useEffect(() => {
  //   console.log("hello2, hello2 ");
  //   router.query.search && setSearchValue(router.query.search);
  // }, [router.query.search]);
  // useEffect(() => {
  //   console.log("hello, hello ");
  //   router.query.search && searchValue && search();
  // }, [router.query.search]);

  return (
    <div
      id="AutoSearchIcon"
      onClick={() => {
        search();
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
