/* eslint-disable react-hooks/exhaustive-deps */
import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { Row, Col, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import EmptyData from "../../../re-usabelComponent/friendsList/emptyData";
import { allCloseFriend } from "../../../features/friends";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function CloseFriends(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [getAllColseFriends, setgetAllCloseFriends] = useState({});
  const [loader, setloader] = useState(false);
  // const allFriend = useSelector((state) => state?.freinds?.allfriend);
  // const allCloseFrien = useSelector(
  //   (state) => state?.freinds?.allCloseFriend?.result?.user_friends
  // );
  // const allClose = useSelector((state) => state?.freinds?.allCloseFriend);

  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;

  useEffect(async () => {
    if (router.query.connection === "Close-friends") {
      setloader(true);
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
              connection_type: "Closefriend",
            }),
          }
        );

        const getallCloseFreind = await response.json();
        setgetAllCloseFriends(getallCloseFreind);
        console.log(getallCloseFreind, "getallclosefriend");
        dispatch(allCloseFriend(getallCloseFreind));
        setloader(false);
      } catch (err) {
        console.log(err), "error araha hai";
        setloader(false);
      }
    }
  }, [router]);
  console.log("get All Close Friend", getAllColseFriends);
  return (
    <div className="request_card_main">
      <Row gutter={16}>
        {loader ? (
          <h2>Loading....</h2>
        ) : getAllColseFriends.result?.user_friends ? (
          getAllColseFriends?.result?.user_friends.map((t, i) => (
            // console.log(t?.connection_creator.username, "bhai bhai");
            <Col xs={16} sm={12} md={8} lg={6} key={i}>
              <div className="request_card">
                <RequestCard
                  id={t?.id}
                  closeFriends={props.closeFriends}
                  url="/images/request/requestProfile1.svg"
                  name={t?.friend.username}
                />
              </div>
            </Col>
          ))
        ) : (
          <EmptyData text="No Close Friends" />
        )}
      </Row>
    </div>
  );
}
