/* eslint-disable react-hooks/exhaustive-deps */
import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import EmptyData from "../../../re-usabelComponent/friendsList/emptyData";
import { allCloseFriend, closeConnection } from "../../../features/friends";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "../../../re-usabelComponent/common/spinner";
export default function CloseFriends(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [loader, setloader] = useState(false);
  const [but, setBut] = useState(false);

  const allClose = useSelector(
    (state) => state?.freinds?.allCloseFriend?.result?.user_friends
  );

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
        console.log(getallCloseFreind, "getallclosefriend helllo");
        dispatch(allCloseFriend(getallCloseFreind));
        setloader(false);
      } catch (err) {
        console.log(err), "error araha hai";
        setloader(false);
      }
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
            connection_type: "Closefriend",
          }),
        }
      );

      const getallcloseConnection = await response.json();
      console.log(getallcloseConnection, "getallcloseConnection");
      dispatch(closeConnection(getallcloseConnection));
      setloader(false);
    } catch (err) {
      console.log(err), "error araha hai";
      setloader(false);
    }
  }, [router]);

  return (
    <div className="request_card_main">
      <Row gutter={16}>
        {loader ? (
          <Spinner />
        ) : allClose ? (
          allClose.map((t, i) => (
            <Col xs={16} sm={12} md={8} lg={6} key={i}>
              <div className="request_card">
                <RequestCard
                  id={t?.id}
                  closeFriends={props.closeFriends}
                  setBut={setBut}
                  but={but}
                  connection_type="Closefriend"
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
