import React from "react";
import "./last-message.css";
import PropTypes from 'prop-types';

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

LastMessage.propTypes = {
  lastMessage: PropTypes.object
}

export default LastMessage;
