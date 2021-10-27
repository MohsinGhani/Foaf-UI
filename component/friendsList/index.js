/* eslint-disable react-hooks/exhaustive-deps */
import TopBar from "../nestedComponent/friendList/topBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  allFriends,
  freindRequest,
  closeFriendsRequest,
  allCloseFriend,
  allFamilyFriend,
  familyFriendRequest,
} from "../features/friends";
import Cookies from "js-cookie";

export default function FriendsList() {
  const dispatch = useDispatch();
  const statedata = useSelector((state) => state);

  var data = statedata?.user?.userDetailes?.result?.user;

  return (
    <div className="friend_request_main">
      <div className="request_topbar_main">
        <TopBar />
      </div>
    </div>
  );
}
