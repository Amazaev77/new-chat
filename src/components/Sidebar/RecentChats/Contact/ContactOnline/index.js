import React from "react";
import "./contactOnline.css";

function ContactOnline({ contact }) {
  if (!contact.online) {
    return null;
  }

  return <div className="online-contact" />;
}

export default ContactOnline;
