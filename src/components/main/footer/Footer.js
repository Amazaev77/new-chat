import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { writeMessage } from '../../../redux/actions/chat';
import Micro from "../micro";
import Send from "../send";
import './footer.css';

function Footer() {
  const messageLine = useSelector(state => state.chat.messageLine);
  const dispatch = useDispatch();
  function handleMessage(e) {
    dispatch(writeMessage(e.target.value));
  }
  return (
    <div className="footer">
      <div className="footer-inner">
        <input
          className="send-message-input"
          placeholder="Write a message"
          value={messageLine}
          onChange={handleMessage}
        />
        <div className="send">
          <span className="clip material-icons">
            attach_file
          </span>
          <Micro />
          <Send />
        </div>
      </div>
    </div>
  )
}

export default Footer;