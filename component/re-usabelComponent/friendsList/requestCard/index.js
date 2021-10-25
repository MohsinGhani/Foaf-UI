import Image from "next/image";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  allFriends,
  freindRequest,
  closeFriendsRequest,
  allCloseFriend,
} from "../../../features/friends";

export default function RequestCard(props) {
  const statedata = useSelector((state) => state);

  var data = statedata.user.userDetailes.result?.user;

  const dispatch = useDispatch();

  const accept = async () => {
    // let responseData = {
    //   response: true,
    //   connection_request_id: props.id,
    // };

    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/response_connection_request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${data.token}`,
          },
          body: new URLSearchParams({
            response: true,
            connection_request_id: props.id,
          }),
        }
      );

      const requestResponse = await response.json();
      console.log(requestResponse, "accept ka response");
      // dispatch(freindRequest(getallfriendsrequest));
      const friendData = getdata();
      return friendData;
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };

  const reject = async () => {
    // let responseData = {
    //   response: false,
    //   connection_request_id: props.id,
    // };

    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/response_connection_request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${data.token}`,
          },
          body: new URLSearchParams({
            response: false,
            connection_request_id: props.id,
          }),
        }
      );

      const requestResponse = await response.json();
      console.log(requestResponse, "reject ka response");
      // dispatch(freindRequest(getallfriendsrequest));
      const friendDat = getdata();
      return friendDat;
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };

  const getdata = async () => {
    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_user_connections`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${data.token}`,
          },
          body: new URLSearchParams({
            connection_type: props.connection_type,
          }),
        }
      );

      const getallfriends = await response.json();
      console.log(getallfriends, "getallfriends");
      props.connection_type === "Friend" && dispatch(allFriends(getallfriends));
      props.connection_type === "Closefriend" &&
        dispatch(allCloseFriend(getallfriends));
      hellodata();
      return allFriends;
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };
  const hellodata = async () => {
    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_connection_request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Token ${data.token}`,
          },
          body: new URLSearchParams({
            connection_type: props.connection_type,
          }),
        }
      );

      const getallfriendsrequest = await response.json();
      console.log(getallfriendsrequest, "getallfriendsrequest");

      props.connection_type === "Friend" &&
        dispatch(freindRequest(getallfriendsrequest));
      props.connection_type === "Closefriend" &&
        dispatch(closeFriendsRequest(getallfriendsrequest));

      return freindRequest;
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };
  return (
    <div className="requestCard_main">
      <div className="request">
        <Image src={props.url} alt="request" width="224" height="180" />
      </div>
      <div className="contant">
        <p className="name">{props.name}</p>
        {/* <div className="mutual_main"> */}
        <div className="mutual">
          <div className="image1">
            <Image
              src="/images/request/mutual1.svg"
              width="60"
              height="60"
              alt="request"
            />
          </div>

          <div className="image2">
            <Image
              src="/images/request/mutual2.svg"
              width="60"
              height="60"
              alt="request"
            />
          </div>
          <div className="image3">
            <Image
              src="/images/request/mutual3.svg"
              width="60"
              height="60"
              alt="request"
            />
          </div>
          <div className="mutual_friends">
            <p>85 mutual friends</p>
          </div>
        </div>
        {/* </div> */}
        <div
          className={`${props.friendRequest ? "freind_request" : ""}  
          ${props.allFreinds ? "all_freinds" : ""}  ${
            props.closeFriends ? "close_friends" : ""
          }  ${props.family ? " family" : ""} `}
        >
          {props.friendRequest ? (
            <Button onClick={accept}>
              <p>confirm</p>
            </Button>
          ) : (
            <Button>
              <p>Remove</p>
            </Button>
          )}
        </div>
        {props.friendRequest && (
          <div className="reject" onClick={reject}>
            <Button>Reject</Button>
          </div>
        )}
      </div>
    </div>
  );
}
