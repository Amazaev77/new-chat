import React from 'react';
import {useSelector} from "react-redux";

function MessageInBox({ messages }) {
  const profileId = useSelector(state => state.profile._id);
  if(messages.fromUserId !== profileId) {
    return null;
  }
  return (
    <div className="message-in-box">
      <div className="message-in">{messages.content}</div>
      <div className="in-time-box">
        <span className="in-time">10:30</span>
        <span className="check material-icons">done_all</span>
      </div>
    </div>
  );
}

export default MessageInBox;