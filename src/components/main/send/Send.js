import React from 'react';
import './send.css';
import { useSelector } from 'react-redux';


function Send({ onSend }) {
  const messageLine = useSelector(state => state.chat.messageLine);

  if(messageLine === "") {
    return null;
  }
  return (
    <span
      className="material-icons"
      onClick={onSend}
    >
      send
    </span>
  );
}

export default Send;