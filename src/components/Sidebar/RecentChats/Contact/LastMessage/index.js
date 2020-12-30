import React from "react";
import "./last-message.css";

function LastMessage({ lastMessage }) {
  if (!lastMessage) {
    return null;
  }

  return (
    <div className="last-message">
      {lastMessage.content.length > 12
        ? lastMessage.content.substring(0, 12) + "..."
        : lastMessage.content}
    </div>
  );
}

export default LastMessage;
