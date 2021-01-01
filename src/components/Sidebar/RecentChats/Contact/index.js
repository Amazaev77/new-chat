import React from "react";
import LastMessage from "./LastMessage";
import dayjs from "dayjs";
import "./contact.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ContactOnline from "./ContactOnline";
import PropTypes from 'prop-types';

function Contact({ contact }) {
  const time = dayjs(contact.lastMessage?.time).format("HH:mm");

  const loading = useSelector((state) => state.contacts.loading);

  const contactHover = !loading && "contact-hover";

  return (
    <NavLink
      to={`/${contact._id}`}
      activeClassName="bgc-white"
      className={"contact " + contactHover}
    >
      <div className="avatar">
        {contact?.fullname[0]}
        <ContactOnline contact={contact} />
      </div>
      <div className="name-mess">
        <div className="name">{contact.fullname}</div>
        <LastMessage lastMessage={contact.lastMessage} />
      </div>
      <div className="time-last-message">{time}</div>
    </NavLink>
  );
}

Contact.propTypes = {
  contact: PropTypes.object
}

export default Contact;
