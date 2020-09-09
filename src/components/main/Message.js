import React from "react";
import MessageInBox from "./MessageInBox";
import MessageOutBox from "./MessageOutBox";
import MessageInfo from "./MessageInfo";

function Message() {
  return (
    <div className="message">
      <MessageInBox />
      <MessageOutBox />
      <MessageInfo />
    </div>
  );
}

export default Message;
