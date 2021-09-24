import Image from "next/image";
import { Button } from "react-bootstrap";
export default function SubNotification(props) {
  return (
    <div className="subNotification">
      <div className="main_noti">
        <div className="image">
          <Image
            src="/images/dashboard/notificationProfile.svg"
            alt="profile"
            width="100%"
            height="100%"
          />
        </div>
        <div className="text">
          <Button
            className={`button ${props.request && "request"} ${
              props.committ && "commit"
            } ${props.message && "message"} `}
          >
            Request
          </Button>
          <p className="heading">Chance Levin </p>
          <p className="time">24 Nov 2018 at 9:30 AM </p>
          <p className="heading_two">New Registration: Finibus Bonorum</p>
          <p className="inner_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            viverra lectus at turpis etiam. Quis interdum mi lectus elit non
            lorem fermentum, a.
          </p>
        </div>
        {props.request && (
          <div className="request">
            <Button className="accept button">Accept</Button>
            <Button className="Decline button">Decline</Button>
          </div>
        )}
      </div>
    </div>
  );
}
