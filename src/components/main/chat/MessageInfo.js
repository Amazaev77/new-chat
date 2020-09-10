import React from 'react';

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