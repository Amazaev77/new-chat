import React from "react";
import MessageInBox from "./MessageInBox";
import MessageOutBox from "./MessageOutBox";
import MessageInfo from "./MessageInfo";
import { useSelector } from "react-redux";
import "./message.css";

function Message({ message }) {
  const profileId = useSelector((state) => state.profile._id);

  if (message.type === "info") {
    return <MessageInfo message={message} />;
  }

  if (profileId === message.toUserId) {
    return <MessageInBox message={message} />;
  }

  return <MessageOutBox message={message} />;
}

export default Message;
