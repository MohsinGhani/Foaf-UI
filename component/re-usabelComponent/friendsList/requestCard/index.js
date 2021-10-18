import Image from "next/image";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { allFriends } from "../../../features/friends";

export default function RequestCard(props) {
  var data = Cookies.get();

  const dispatch = useDispatch();

  const accept = async () => {
    let responseData = {
      response: true,
      connection_request_id: props.id,
    };

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
      const friendData = getdata();
      return friendData;
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };

  const reject = async () => {
    let responseData = {
      response: false,
      connection_request_id: props.id,
    };

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
      const friendData = getdata();
      return friendData;
    } catch (err) {
      console.log(err), "error araha hai";
    }
  };
  console.log(props.id, "idddddd arahiu hai ");
  const getdata = async () => {
    try {
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

      const getallfriends = await response.json();
      console.log(getallfriends, "getallfriends");
      dispatch(allFriends(getallfriends));

      return allFriends;
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
          onClick={accept}
          className={`${props.friendRequest ? "freind_request" : ""}  
          ${props.allFriends ? "all_freinds" : ""}  ${
            props.closeFriends ? "close_friends" : ""
          }  ${props.family ? " family" : ""} `}
        >
          <Button>
            {props.friendRequest ? <p>confirm</p> : <p>Remove</p>}
          </Button>
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
