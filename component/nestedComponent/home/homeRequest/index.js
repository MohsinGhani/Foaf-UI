import Image from "next/image";
import { Button } from "react-bootstrap";
export default function Request(props) {
  return (
    <div className="request-main">
      <div className="profile-main">
        <div className="request-profile">
          <Image src={props.url} alt="postProfile" width="100%" height="100%" />
        </div>
        <div className="text">
          <p>
            <span className="name">{props.name}</span> Wants to add you to
            friends.
          </p>
        </div>
      </div>
      <div className="buttons">
        <div className="main_btn">
          <Button className="accept-button">Accept</Button>
        </div>
        <div className="main_btn">
          <Button className="reject-button">Reject</Button>
        </div>
      </div>
    </div>
  );
}
