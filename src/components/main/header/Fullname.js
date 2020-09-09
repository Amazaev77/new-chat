import React from 'react';
import preloader from "./preloader.svg";
import { useSelector } from "react-redux";

function Fullname() {
  const loading = useSelector(state => state.chat.loading);
  const opened = useSelector(state => state.application.opened);
  const userdata = useSelector(state => state.contacts.contacts.find(item => item._id === opened));

  return (
    <div className="fullname">
      <div className="name-container">
        <div className="name-chat">
          {loading ? (
            <span>
              <img className="preloader" src={preloader} alt="preloader"/>
              Updating...
            </span>
          ): (
            userdata.fullname
          )}

        </div>
        <div className="online-chat"></div>
      </div>
    </div>
  );
}

export default Fullname;