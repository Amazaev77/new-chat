import React from "react";
import LastMessage from "./LastMessage";
import moment from "moment";
import "./contact.css";
import { NavLink } from "react-router-dom";

function Contact({ contact }) {
  const time = moment(contact.lastMessage?.time).format("HH:mm");

  return (
    <NavLink
      to={`/chat/${contact._id}`}
      activeClassName="bgc-white"
      className="contact"
    >
      <div className="avatar">
        {contact?.fullname[0]}
        {contact.online && <div className="online-contact"/>}
      </div>
      <div className="name-mess">
        <div className="name">{contact.fullname}</div>
        <LastMessage lastMessage={contact.lastMessage} />
      </div>
      <div className="time-last-message">{time}</div>
    </NavLink>
  );
}
export default Contact;
