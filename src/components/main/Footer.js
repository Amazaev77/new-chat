import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../../redux/actions/chat';

function Footer() {
  const messageLine = useSelector(state => state.chat.messageLine);
  const dispatch = useDispatch();
  function handleMessage(e) {
    dispatch(sendMessage(e.target.value));
  }
  return (
    <div className="footer">
      <div className="footer-child">
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
          <span className="material-icons">
          {messageLine === ""  ? 'mic': 'send'}
        </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;