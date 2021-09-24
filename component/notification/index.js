import NotificationHeading from "../nestedComponent/notification/notificationHeading";
import SubNotification from "../re-usabelComponent/notification/subNotification";

export default function Notification() {
  return (
    <div className="notification_main_page">
      <div className="main_notification">
        <div className="heading_main">
          <NotificationHeading />
        </div>

        <div className="subNotification_main">
          <SubNotification request={true} />
        </div>
        <div className="subNotification_main">
          <SubNotification committ={true} />
        </div>
        <div className="subNotification_main">
          <SubNotification message={true} />
        </div>
        <div className="subNotification_main">
          <SubNotification committ={true} />
        </div>
      </div>
    </div>
  );
}
