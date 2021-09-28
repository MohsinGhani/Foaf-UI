import Image from "next/image";
import { Button } from "react-bootstrap";

export default function RequestCard(props) {
  return (
    <div className="requestCard_main">
      <div className="request">
        <Image src={props.url} alt="request" width="224" height="180" />
      </div>
      <div className="contant">
        <p className="name">{props.name}</p>
        <div className="mutual_main">
          <div className="mutual">
            <div className="image1">
              <Image
                src="/images/request/mutual1.svg"
                width="60"
                height="60"
                alt="request"
              />
            </div>

            <div className="image2">
              <Image
                src="/images/request/mutual2.svg"
                width="60"
                height="60"
                alt="request"
              />
            </div>
            <div className="image3">
              <Image
                src="/images/request/mutual3.svg"
                width="60"
                height="60"
                alt="request"
              />
            </div>
            <div className="mutual_friends">
              <p>85 mutual friends</p>
            </div>
          </div>
        </div>
        <div
          className={`${props.friendRequest ? "freind_request" : ""}  
          ${props.allFriends ? "all_freinds" : ""}  ${
            props.closeFriends ? "close_friends" : ""
          }  ${props.family ? " family" : ""} `}
        >
          <Button>
            {props.friendRequest ? <p>confirm</p> : <p>Remove</p>}
          </Button>
        </div>
        {props.friendRequest && (
          <div className="reject">
            <Button>Reject</Button>
          </div>
        )}
      </div>
    </div>
  );
}
