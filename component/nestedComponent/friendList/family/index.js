/* eslint-disable react-hooks/exhaustive-deps */
import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { Row, Col, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import EmptyData from "../../../re-usabelComponent/friendsList/emptyData";
import { route } from "next/dist/server/router";
import { allFamilyFriend } from "../../../features/friends";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "../../../re-usabelComponent/common/spinner";
export default function Family(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [getAllFamily, setgetAllFamily] = useState({});
  const [loader, setloader] = useState(false);
  const allfamilyFriend = useSelector(
    (state) => state?.freinds?.allFamilyFriend?.result?.user_friends
  );

  const statedata = useSelector((state) => state);
  var data = statedata?.user?.userDetailes?.result?.user;
  useEffect(async () => {
    if (router.query.connection === "Family") {
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
              connection_type: "Family",
            }),
          }
        );

        const getallFamilyFreind = await response.json();
        setgetAllFamily(getallFamilyFreind);
        console.log(getallFamilyFreind, "getallFamilyFreind");
        dispatch(allFamilyFriend(getallFamilyFreind));
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
              connection_type: "Family",
            }),
          }
        );

        const getallFamilyConnection = await response.json();
        // setgetAllCloseFriends(allcloseConnection);
        console.log(getallFamilyConnection, "getallFamilyConnection");
        dispatch(familyConnection(getallFamilyConnection));
        setloader(false);
      } catch (err) {
        console.log(err), "error araha hai";
        setloader(false);
      }
    }
  }, [router]);

  return (
    <div className="request_card_main">
      <Row gutter={16}>
        {loader ? (
          <Spinner />
        ) : getAllFamily?.result?.user_friends ? (
          getAllFamily?.result?.user_friends?.map((t, i) => (
            // console.log(t?.connection_creator.username, "bhai bhai");
            <Col xs={16} sm={12} md={8} lg={6} key={i}>
              <div className="request_card">
                <RequestCard
                  id={t?.id}
                  family={props.family}
                  closeFriends={props.closeFriends}
                  url="/images/request/requestProfile1.svg"
                  name={t?.friend.username}
                />
              </div>
            </Col>
          ))
        ) : (
          <EmptyData text="No Family" />
        )}
      </Row>
    </div>
  );
}
