import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import "./chat.css";

function Chat() {
  const messages = useSelector((state) => {
    const enteredText = state.chat.searchLine;

    return state.chat.messages.filter(
      (item) => item.content.toLowerCase().indexOf(enteredText.toLowerCase()) !== -1
    );
  });

  const loading = useSelector((state) => state.chat.loading);

  if (loading) {
    return null;
  }

  return (
    <div className="chat">
      {messages.map((item) => (
        <div className="message">
          <Message key={item._id} message={item} />
        </div>
      ))}
    </div>
  );
}

export default Chat;
