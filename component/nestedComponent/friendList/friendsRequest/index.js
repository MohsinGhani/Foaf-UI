import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "antd";

export default function FriendsRequest(props) {
  const friendRequest = useSelector(
    (state) => state?.freinds?.freindRequest?.connection_requests
  );
  const fullState = useSelector(
    (state) => state?.freinds?.freindRequest?.connection_requests
  );
  console.log("friendRequestfriendRequest", friendRequest);
  console.log("fullState", fullState);
  return (
    <div className="request_card_main">
      {friendRequest ? (
        friendRequest?.map((t, i) => (
          // console.log(t?.connection_creator.username, "bhai bhai");
          <div className="request_card" key={i}>
            <RequestCard
              id={t?.id}
              friendRequest={props.friendsRequest}
              url="/images/request/requestProfile1.svg"
              name={t?.connection_creator.username}
            />
          </div>
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
}
