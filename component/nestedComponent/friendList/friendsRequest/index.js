import RequestCard from "../../../re-usabelComponent/friendsList/requestCard";
export default function FriendsRequest(props) {
  return (
    <div className="request_card_main">
      <div className="request_card">
        <RequestCard
          friendRequest={props.friendsRequest}
          url="/images/request/requestProfile2.svg"
          name="Marcus Botosh"
        />
      </div>
      <div className="request_card">
        <RequestCard
          friendRequest={props.friendsRequest}
          url="/images/request/requestProfile1.svg"
          name="Haylie Dokidis"
        />
      </div>
      <div className="request_card">
        <RequestCard
          friendRequest={props.friendsRequest}
          url="/images/request/requestProfile1.svg"
          name="Tatiana George"
        />
      </div>
      <div className="request_card">
        <RequestCard
          friendRequest={props.friendsRequest}
          url="/images/request/requestProfile2.svg"
          name="Dulce Saris"
        />
      </div>
      <div className="request_card">
        <RequestCard
          friendRequest={props.friendsRequest}
          url="/images/request/requestProfile1.svg"
          name="Kianna Septimus"
        />
      </div>
      <div className="request_card">
        <RequestCard
          friendRequest={props.friendsRequest}
          url="/images/request/requestProfile2.svg"
          name="Hanna Westervelt"
        />
      </div>
      <div className="request_card">
        <RequestCard
          friendRequest={props.friendsRequest}
          url="/images/request/requestProfile1.svg"
          name="Allison Philips"
        />
      </div>
      <div className="request_card">
        <RequestCard
          friendRequest={props.friendsRequest}
          url="/images/request/requestProfile2.svg"
          name="Alfredo Lipshutz"
        />
      </div>
      {/* <div className="request_card">
          <RequestCard name="" />
        </div> */}
    </div>
  );
}
