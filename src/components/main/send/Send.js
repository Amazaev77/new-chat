import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../../redux/actions/chat";
import './send.css';

function Send() {
  const messageLine = useSelector(state => state.chat.messageLine);
  const myId = useSelector(state => state.profile._id);
  const contactId = useSelector(state => state.application.opened);
  const dispatch = useDispatch();

  if(messageLine === "") {
    return null;
  }
  const handleSend = () => {
    dispatch(sendMessage(myId, contactId, messageLine));
  }

  return (
    <span
      className="material-icons"
      onClick={handleSend}
    >
      send
    </span>
  );
}

export default Send;