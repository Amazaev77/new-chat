import React from 'react';
import { useSelector } from "react-redux";

function MessageOutBox({ messages }) {
  const profileId = useSelector(state => state.profile._id);
  const opened = useSelector(state => state.application.opened);
  const userdata = useSelector(state => state.contacts.contacts.find(item => item._id === opened));

  if(messages.fromUserId === profileId) {
    return null;
  }
  return (
    <div className="message-out-box">
      <div className="inner-message-out">
        <div className="avatar-chat">
          {userdata.fullname[0]}
        </div>
        <div className="message-out">
          {messages.content}
          <div className="out-time">10:20</div>
        </div>
      </div>
    </div>
  );
}

export default MessageOutBox;