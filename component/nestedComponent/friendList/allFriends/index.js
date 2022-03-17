/* eslint-disable react-hooks/exhaustive-deps */
import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Divider } from "antd";
import { useEffect, useState } from "react";
import EmptyData from "../../../re-usabelComponent/friendsList/emptyData";
import { allFriends, allUser } from "../../../features/friends";
import { useRouter } from "next/router";
import Spinner from "../../../re-usabelComponent/common/spinner";
export default function AllFriends(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loader, setloader] = useState(false);
  const [but, setBut] = useState(false);
  const allFriend = useSelector(
    (state) => state?.freinds?.allfriend?.result?.user_friends
  );

  const statedata = useSelector((state) => state);

  var data = statedata?.user?.userDetailes?.result?.user;

  useEffect(async () => {
    if (router.query.connection === "All-friends") {
      setloader(true);
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
        setloader(false);
      } catch (err) {
        console.log(err), "error araha hai";
        setloader(false);
      }

      try {
        let response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/not_friend_users`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Token ${data.token}`,
            },
            body: new URLSearchParams({
              connection_type: "Friend",
            }),
          }
        );

        const getalluser = await response.json();
        console.log(getalluser, "getalluser");
        dispatch(allUser(getalluser));
      } catch (err) {
        console.log(err), "error araha hai";
      }
    }
  }, [router]);

  return (
    <div className="request_card_main">
      <Row gutter={16}>
        {loader ? (
          <Spinner />
        ) : allFriend ? (
          allFriend.map((t, i) => (
            <Col xs={16} sm={12} md={8} lg={6} key={i}>
              <div className="request_card">
                <RequestCard
                  id={t?.id}
                  allFreinds={props.allFriends}
                  setBut={setBut}
                  but={but}
                  connection_type="Friend"
                  url="/images/request/requestProfile1.svg"
                  name={t?.friend.username}
                />
              </div>
            </Col>
          ))
        ) : (
          <EmptyData text="No Friends" />
        )}
      </Row>
    </div>
  );
}
