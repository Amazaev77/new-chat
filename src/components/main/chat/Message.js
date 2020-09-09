import React from "react";
import MessageInBox from "./MessageInBox";
import MessageOutBox from "./MessageOutBox";
import MessageInfo from "./MessageInfo";

function Message({ messages }) {
  return (
    <div className="message">
      <MessageInBox messages={messages}/>
      <MessageOutBox messages={messages}/>
      <MessageInfo messages={messages}/>
    </div>
  );
}

export default Message;
