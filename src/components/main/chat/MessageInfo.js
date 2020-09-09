import React from 'react';

function MessageInfo({ messages }) {
  if(messages.type !== "info") {
    return null;
  }
  return (
    <div className="message-info">
      {messages.content}
    </div>
  );
}

export default MessageInfo;