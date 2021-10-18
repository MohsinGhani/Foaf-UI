/* eslint-disable react-hooks/exhaustive-deps */
import TopBar from "../nestedComponent/friendList/topBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allFriends, freindRequest } from "../features/friends";
import Cookies from "js-cookie";

export default function FriendsList() {
  const dispatch = useDispatch();
  const statedata = useSelector((state) => state);
  // console.log(statedata, "full state 1");
  var data = Cookies.get();
  // console.log(data?.token, "token");
  useEffect(async () => {
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
  }, []);
  useEffect(async () => {
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
  }, []);

  return (
    <div className="friend_request_main">
      <div className="request_topbar_main">
        <TopBar />
      </div>
    </div>
  );
}
