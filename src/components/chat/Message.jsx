import React from "react";
import "./message.scss"

const Message = ({ message }) => {
  return (
      <div className="message-div">
        <p className="message-name">{message.name}</p>
        <p className="message-txt">{message.text}</p>
      </div>
  );
};

export default Message;
