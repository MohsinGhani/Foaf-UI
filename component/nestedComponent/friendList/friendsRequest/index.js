/* eslint-disable react-hooks/exhaustive-deps */
import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  freindRequest,
  closeFriendsRequest,
  familyFriendRequest,
} from "../../../features/friends";
import { Row, Col, Divider } from "antd";
import EmptyData from "../../../re-usabelComponent/friendsList/emptyData";

export default function FriendsRequest(props) {
  const friendRequest = useSelector(
    (state) => state?.freinds?.freindRequest?.result?.connection_requests
  );
  const closeFriendRequest = useSelector(
    (state) => state?.freinds?.closeFriendsRequest?.result?.connection_requests
  );
  const familyFriendReq = useSelector(
    (state) => state?.freinds?.familyFriendRequest?.result?.connection_requests
  );

  const [getAllFriendsRequest, setGetAllFriendsRequest] = useState({});
  const [getAllCloseFriendsRequest, setGetAllCloseFriendsRequest] = useState(
    {}
  );
  const [loader1, setLoader1] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);
  const [getAllFamilyFriendsRequest, setGetAllFamilyFriendsRequest] = useState(
    {}
  );
  const [but, setBut] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const statedata = useSelector((state) => state);

  var data = statedata?.user?.userDetailes?.result?.user;

  useEffect(async () => {
    if (router.query.connection === "friend-requests") {
      setLoader1(true);
      setLoader2(true);
      setLoader3(true);
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
        setGetAllFriendsRequest(getallfriendsrequest);
        dispatch(freindRequest(getallfriendsrequest));
        setLoader1(false);
      } catch (err) {
        console.log(err), "error araha hai";
        setLoader1(false);
      }
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
              connection_type: "Closefriend",
            }),
          }
        );

        const getallClosefriendsrequest = await response.json();
        setGetAllCloseFriendsRequest(getallClosefriendsrequest);
        console.log(getallClosefriendsrequest, "getallClosefriendsrequest");
        dispatch(closeFriendsRequest(getallClosefriendsrequest));
        setLoader2(false);
        // return closeFriendsRequest;
      } catch (err) {
        console.log(err), "error araha hai";
        setLoader2(false);
      }
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
              connection_type: "Family",
            }),
          }
        );

        const getallfamilyfriendsrequest = await response.json();
        console.log(getallfamilyfriendsrequest, "getallfamilyfriendsrequest");
        setGetAllFamilyFriendsRequest(getallfamilyfriendsrequest);
        dispatch(familyFriendRequest(getallfamilyfriendsrequest));
        setLoader3(false);
      } catch (err) {
        console.log(err), "error araha hai";
        setLoader3(false);
      }
    }
  }, [router]);
  console.log(getAllFriendsRequest, "getAllFriendsRequest kagslks");
  console.log(getAllCloseFriendsRequest, "getAllCloseFriendsRequest kagslks");
  console.log(getAllFamilyFriendsRequest, "getAllFamilyFriendsRequest kagslks");

  return (
    <>
      <div className="request_card_main">
        <Row gutter={16}>
          {loader1 ? (
            <h2>Loading....</h2>
          ) : friendRequest ? (
            friendRequest?.map((t, i) => (
              // console.log(t?.connection_creator.username, "bhai bhai");
              <Col xs={16} sm={12} md={8} lg={6} key={i}>
                <div className="request_card" key={i}>
                  <RequestCard
                    id={t?.id}
                    setBut={setBut}
                    but={but}
                    connection_type="Friend"
                    friendRequest={props.friendsRequest}
                    url="/images/request/requestProfile1.svg"
                    name={t?.connection_creator.username}
                  />
                </div>
              </Col>
            ))
          ) : (
            <EmptyData text="No Friend Requests" />
          )}
        </Row>
      </div>
      <div className="request_card_main">
        {closeFriendRequest && (
          <>
            <hr /> <h1>Close Friend Request</h1>
          </>
        )}
        <Row gutter={16}>
          {closeFriendRequest?.map((t, i) => (
            <Col xs={16} sm={12} md={8} lg={6} key={i}>
              <div className="request_card" key={i}>
                <RequestCard
                  type="close"
                  setBut={setBut}
                  but={but}
                  connection_type="Closefriend"
                  id={t?.id}
                  friendRequest={props.friendsRequest}
                  url="/images/request/requestProfile2.svg"
                  name={t?.connection_creator.username}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="request_card_main">
        {familyFriendReq && (
          <>
            <hr /> <h1>Family Friend Request</h1>
          </>
        )}
        <Row gutter={16}>
          {familyFriendReq?.map((t, i) => (
            <Col xs={16} sm={12} md={8} lg={6} key={i}>
              <div className="request_card" key={i}>
                <RequestCard
                  type="close"
                  connection_type="Family"
                  setBut={setBut}
                  but={but}
                  id={t?.id}
                  friendRequest={props.friendsRequest}
                  url="/images/request/requestProfile2.svg"
                  name={t?.connection_creator.username}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
