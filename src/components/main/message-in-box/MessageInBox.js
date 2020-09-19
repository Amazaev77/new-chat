import React from 'react';
import { useSelector } from "react-redux";
import moment from 'moment';
import './message-in-box.css';

function MessageInBox({ message }) {
  const opened = useSelector(state => state.application.opened);
  const userdata = useSelector(state => state.contacts.contacts.find(item => item._id === opened));

  return (
    <div className="message-in-box">
      <div className="inner-message-in">
        <div className="avatar-chat">
          {userdata.fullname[0]}
        </div>
        <div className="message-in">
          {message.content}
          <div className="in-time">{moment(message.time).format("HH:mm")}</div>
        </div>
      </div>
    </div>
  );
}

export default MessageInBox;