import React from "react";
import "./Chat.css";

interface AlertChatProps {
  visible: boolean;
  onClose: () => void;
}

const AlertChat: React.FC<AlertChatProps> = (props) => {
  const { visible, onClose } = props;

  if (!visible) return <></>;

  return (
    <div className="chat">
      <div className="chat-box">
        <div className="header-chat">
          <i
            className="fa-sharp fa-solid fa-chevron-left"
            onClick={() => onClose()}
          ></i>
          <h3>Pesan</h3>
          <i>ok</i>
        </div>
        <div className="content-chat">
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
          <h2>bilal</h2>
        </div>
      </div>
    </div>
  );
};

export default AlertChat;
