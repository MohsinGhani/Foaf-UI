import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Divider } from "antd";
export default function AllFriends(props) {
  const allFriend = useSelector(
    (state) => state?.freinds?.allfriend?.result.user_friends
  );

  const fullState = useSelector(
    (state) => state?.freinds?.allfriend?.user_friends
  );
  // console.log("friendRequestfriendRequest", allFriend);
  // console.log("fullState", fullState);
  return (
    <div className="request_card_main">
      <Row gutter={16}>
        {allFriend?.map((t, i) => (
          // console.log(t?.connection_creator.username, "bhai bhai");
          <Col xs={16} sm={12} md={8} lg={6} key={i}>
            <div className="request_card">
              <RequestCard
                id={t?.id}
                allFreinds={props.allFriends}
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
