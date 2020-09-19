import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { writeMessage } from '../../../redux/actions/chat';
import Micro from "../micro";
import Send from "../send";
import './footer.css';
import {sendMessage} from "../../../redux/actions/chat";


function Footer() {
  const messageLine = useSelector(state => state.chat.messageLine);
  const myId = useSelector(state => state.profile._id);
  const contactId = useSelector(state => state.application.opened);
  const dispatch = useDispatch();

  function handleMessage(e) {
    dispatch(writeMessage(e.target.value));
  }

  const handleKeyDown = (e) => {
    if(e.keyCode === 13) {
      handleSend();
    }
  }

  const handleSend = () => {
    dispatch(sendMessage(myId, contactId, messageLine));
  }

  return (
    <div className="footer">
      <div className="footer-inner">
        <input
          className="send-message-input"
          placeholder="Write a message"
          value={messageLine}
          onChange={handleMessage}
          onKeyDown={handleKeyDown}
        />
        <div className="send">
          <span className="clip material-icons">
            attach_file
          </span>
          <Micro />
          <Send onSend={handleSend} />
        </div>
      </div>
    </div>
  )
}

export default Footer;