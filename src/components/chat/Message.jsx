import { doc } from "@firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import "./message.scss"

const Message = ({ message }) => {
  const user= useSelector(state => state.user)
  const messaClass = message.name === user?.currentUser?.userName ? "style-left": "style-right"

  // console.log(userCredential())

  return (<>
      <div className={messaClass}>
        <p className="message-name"><strong>{message.name}</strong></p>
        <p className="message-txt">{message.text}</p>
      </div>
      </>
  );
};

export default Message;
