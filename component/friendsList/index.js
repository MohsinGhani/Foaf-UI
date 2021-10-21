/* eslint-disable react-hooks/exhaustive-deps */
import TopBar from "../nestedComponent/friendList/topBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allFriends, freindRequest } from "../features/friends";
import Cookies from "js-cookie";

export default function FriendsList() {
  const dispatch = useDispatch();
  const statedata = useSelector((state) => state);

  var data = statedata?.user?.userDetailes?.user;
  // console.log(data, "asdasd");
  // var data = Cookies.get();
  useEffect(async () => {
    if (data?.token) {
      try {
        // debugger;
        let response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_user_connections`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${data.token}`,
            },
          }
        );
        // debugger;

        const getallfriends = await response.json();
        console.log(getallfriends, "getallfriends");
        dispatch(allFriends(getallfriends));

        return allFriends;
      } catch (err) {
        console.log(err), "error araha hai";
      }
    }
  }, []);
  useEffect(async () => {
    if (data?.token) {
      try {
        let response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_connection_request`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${data.token}`,
            },
          }
        );

        const getallfriendsrequest = await response.json();
        console.log(getallfriendsrequest, "getallfriendsrequest");
        dispatch(freindRequest(getallfriendsrequest));

        return freindRequest;
      } catch (err) {
        console.log(err), "error araha hai";
      }
    }
  }, []);

  return (
    <div className="friend_request_main">
      <div className="request_topbar_main">
        <TopBar />
      </div>
    </div>
  );
}
