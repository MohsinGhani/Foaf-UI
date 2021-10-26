import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { Row, Col, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
export default function Family(props) {
  const allCloseFriend = useSelector(
    (state) => state?.freinds?.allFamilyFriend?.result?.user_friends
  );
  return (
    <div className="request_card_main">
      <Row gutter={16}>
        {allCloseFriend?.map((t, i) => (
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
        ))}
      </Row>
    </div>
  );
}
