import React from 'react';
import moment from 'moment';

function MessageOutBox({ message }) {
  return (
    <div className="message-out-box">
      <div className="message-out">{message.content}</div>
      <div className="out-time-box">
        <span className="out-time">{moment(message.time).format("HH:mm")}</span>
        {message.read ? (
          <span className="check material-icons">done_all</span>
        ) : (
          <span class="check material-icons">done</span>
        )}
      </div>
    </div>
  );
}

export default MessageOutBox;