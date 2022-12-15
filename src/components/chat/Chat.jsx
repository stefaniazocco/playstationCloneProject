import React from "react";
import "./chat.scss";
import { AiOutlineClose } from "react-icons/ai";
import { auth } from "../../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

export const Chat = ({ onClose, ref }) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="chat-box" name="chat">
      <div className="chat-wrapper">
        <div className="chat-nav">
          Ask something...
          <button className="chat-close" onClick={() => onClose(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="mess-box">
          {messages &&
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
        </div>
      
      <div className="chat-bottom">
        <SendMessage scroll={scroll} />
        <span ref={scroll}></span>
      </div>
      </div>
    </div>
  );
};
