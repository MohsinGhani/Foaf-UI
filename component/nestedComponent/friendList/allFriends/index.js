import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
import { useDispatch, useSelector } from "react-redux";
export default function AllFriends(props) {
  const friendRequest = useSelector(
    (state) => state?.freinds?.allfriend?.user_friends
  );

  // const fullState = useSelector(
  //   (state) => state?.freinds?.allfriend?.user_friends
  // );
  // console.log("friendRequestfriendRequest", friendRequest);
  // console.log("fullState", fullState);
  return (
    <div className="request_card_main">
      {friendRequest?.map((t, i) => (
        // console.log(t?.connection_creator.username, "bhai bhai");
        <div className="request_card" key={i}>
          <RequestCard
            id={t?.id}
            friendRequest={props.allFriends}
            url="/images/request/requestProfile1.svg"
            name={t?.friend.username}
          />
        </div>
      ))}
    </div>
  );
}
