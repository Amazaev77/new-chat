import React from 'react';
import { useSelector } from "react-redux";
import './micro.css';

function Micro() {
  const messageLine = useSelector(state => state.chat.messageLine);

  if(messageLine !== "") {
    return null;
  }

  return (
    <span className="material-icons">
      mic
    </span>
  );
}

export default Micro;