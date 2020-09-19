import React from 'react';
import './message-info.css';

function MessageInfo({ message }) {
  if(message.type !== "info") {
    return null;
  }
  return (
    <div className="message-info">
      {message.content}
    </div>
  );
}

export default MessageInfo;