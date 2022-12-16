import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import "./sendMessage.scss"

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0 chat-input`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");
  const user= useSelector(state => state.user)

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: input,
      name: user.currentUser.userName,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Scrivi qualcosa"
      />
      <button className={style.button} type="submit">
        Invia
      </button>
    </form>
  );
};

export default SendMessage;
