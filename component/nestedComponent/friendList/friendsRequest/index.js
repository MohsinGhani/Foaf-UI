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
  const familyFriendRequest = useSelector(
    (state) => state?.freinds?.familyFriendRequest?.result?.connection_requests
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
              <Empty description="No Friends Request" />
            </div>
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
        {familyFriendRequest && (
          <>
            <hr /> <h1>Family Friend Request</h1>
          </>
        )}
        <Row gutter={16}>
          {familyFriendRequest?.map((t, i) => (
            <Col xs={16} sm={12} md={8} lg={6} key={i}>
              <div className="request_card" key={i}>
                <RequestCard
                  type="close"
                  connection_type="Family"
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
