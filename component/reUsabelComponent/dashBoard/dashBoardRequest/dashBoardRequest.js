import Image from "next/image";
import { Button } from "react-bootstrap";
export default function Request(props) {
  return (
    <div className="request-main">
      <div className="profile-main">
        <div className="request-profile">
          <Image src={props.url} alt="postProfile" width="45" height="45" />
        </div>
        <div className="text">
          <p>
            <span className="name">Kianna Rosser</span> Wants to add you to
            friends.
          </p>
        </div>
      </div>
      <div className="buttons">
        <div>
          <Button className="accept-button">Accept</Button>
        </div>
        <div>
          <Button className="reject-button">Reject</Button>
        </div>
      </div>
    </div>
  );
}
