import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { Row, Col, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
export default function CloseFriends(props) {
  const allFriend = useSelector((state) => state?.freinds?.allfriend);
  const allCloseFriend = useSelector(
    (state) => state?.freinds?.allCloseFriend?.result?.user_friends
  );
  const allClose = useSelector((state) => state?.freinds?.allCloseFriend);
  // console.log("closeFriend", allClose);

  // console.log("allFreind", allFriend);

  // console.log("fullState", fullState);
  return (
    <div className="request_card_main">
      <Row gutter={16}>
        {allCloseFriend?.map((t, i) => (
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
        ))}
      </Row>
    </div>
  );
}
