import React from "react";
import { useSelector } from "react-redux";
import "./info-contact.css";

function InfoContact() {
  const opened = useSelector((state) => state.application.opened);
  const userdata = useSelector((state) =>
    state.contacts.contacts.find((item) => item._id === opened)
  );

  return (
    <div className="info-contact">
      <div className="big-avatar">{userdata && userdata.fullname[0]}</div>
      <div className="info-fullname">{userdata && userdata.fullname}</div>
      <div className="nickname">@{userdata && userdata.username}</div>
      <div className="connect">
        <span className="material-icons icons-connect call">call</span>
        <span className="material-icons icons-connect videocam">videocam</span>
        <span className="material-icons icons-connect email">email</span>
      </div>
    </div>
  );
}

export default InfoContact;
