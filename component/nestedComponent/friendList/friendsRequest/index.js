import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "antd";
import { Row, Col, Divider } from "antd";

export default function FriendsRequest(props) {
  const friendRequest = useSelector(
    (state) => state?.freinds?.freindRequest?.result?.connection_requests
  );
  const closeFriendRequest = useSelector(
    (state) => state?.freinds?.closeFriendsRequest?.result?.connection_requests
  );

  // console.log(closeFriendRequest, "closeeeee");
  // console.log("friendRequestfriendRequest", friendRequest);
  // console.log("fullState", fullState);
  return (
    <>
      <div className="request_card_main">
        <Row gutter={16}>
          {friendRequest ? (
            friendRequest?.map((t, i) => (
              // console.log(t?.connection_creator.username, "bhai bhai");
              <Col xs={16} sm={12} md={8} lg={6} key={i}>
                <div className="request_card" key={i}>
                  <RequestCard
                    id={t?.id}
                    connection_type="Friend"
                    friendRequest={props.friendsRequest}
                    url="/images/request/requestProfile1.svg"
                    name={t?.connection_creator.username}
                  />
                </div>
              </Col>
            ))
          ) : (
            <div className="empty">
              <Empty />
            </div>
          )}
        </Row>
      </div>
      <hr />
      <div className="request_card_main">
        <h1>closed Friend Request</h1>
        <Row gutter={16}>
          {closeFriendRequest ? (
            closeFriendRequest?.map((t, i) => (
              // console.log(t?.connection_creator.username, "bhai bhai");
              <Col xs={16} sm={12} md={8} lg={6} key={i}>
                <div className="request_card" key={i}>
                  <RequestCard
                    type="close"
                    connection_type="Closefriend"
                    id={t?.id}
                    friendRequest={props.friendsRequest}
                    url="/images/request/requestProfile2.svg"
                    name={t?.connection_creator.username}
                  />
                </div>
              </Col>
            ))
          ) : (
            <div className="empty">
              <Empty />
            </div>
          )}
        </Row>
      </div>
    </>
  );
}
