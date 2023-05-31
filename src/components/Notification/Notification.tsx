import React from "react";
import "./Notification.css";

interface NotificationProps {
  visible: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { visible, onClose } = props;
  if (!visible) return <></>;

  return (
    <div className="notification">
      <div className="notification-box">
        <div className="header">
          <i
            className="fa-solid fa-rectangle-xmark"
            onClick={() => onClose()}
          ></i>
          <i className="fa-solid fa-bell"></i>
          <h3>Pemberitahuan</h3>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Notification;
