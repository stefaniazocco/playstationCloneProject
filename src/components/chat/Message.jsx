import React from "react";

const Message = ({ message }) => {
  return (
    <div>
      <div>
        <p>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
