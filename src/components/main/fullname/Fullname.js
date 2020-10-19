import React from 'react';
import { useSelector } from "react-redux";
import './fullname.css';

function Fullname() {
  const loading = useSelector(state => state.chat.loading);
  const opened = useSelector(state => state.application.opened);
  const userdata = useSelector(state => state.contacts.contacts.find(item => item._id === opened));

  return (
    <div className="fullname">
      <div className="name-container">
        <div className="name-chat">
          {loading ? (
            <div className="updating-box">
              <div className="autorenew-box">
                <span className="autorenew material-icons">autorenew</span>
              </div>
              <div className="updating">Updating...</div>
            </div>
          ) : (userdata.fullname)}
        </div>
        {userdata.online && <div className="online-chat"></div>}
      </div>
    </div>
  );
}

export default Fullname;