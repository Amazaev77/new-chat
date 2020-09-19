import React from "react";
import MessageInBox from "../message-in-box";
import MessageOutBox from "../message-out-box/MessageOutBox";
import MessageInfo from "../message-info";
import { useSelector } from "react-redux";
import './message.css';

function Message({ message }) {
  const profileId = useSelector(state => state.profile._id);
  
  if(message.type === "info") {
    return <MessageInfo message={message}/>;
  }

  if(profileId === message.toUserId) {
    return <MessageInBox message={message}/>
  }
  
  return (
    <MessageOutBox message={message}/>      
  );
}

export default Message;
