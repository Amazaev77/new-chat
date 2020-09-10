import React from 'react';;

function MessageOutBox({ message }) {
  return (
    <div className="message-out-box">
      <div className="message-out">{message.content}</div>
      <div className="out-time-box">
        <span className="out-time">10:30</span>
        <span className="check material-icons">done_all</span>
      </div>
    </div>
  );
}

export default MessageOutBox;