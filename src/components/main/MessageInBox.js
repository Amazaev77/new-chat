import React from 'react';
import {useSelector} from "react-redux";

function MessageInBox() {
  const messages = useSelector(state => state.chat.messages);
  const opened = useSelector(state => state.application.opened);
  const profileId = useSelector(state => state.profile._id);

  return messages.map(item => {
    if(profileId === item.fromUserId) {
      return (
        <div className="message-in-box">
          <div className="message-in">{item.content}</div>
          <div className="in-time-box">
            <span className="in-time">10:30</span>
            <span className="check material-icons">done_all</span>
          </div>
        </div>
      );
    }
    return null;
  })
}

export default MessageInBox;