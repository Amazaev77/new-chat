import React from "react";
import "./contactOnline.css";
import PropTypes from 'prop-types';

function ContactOnline({ contact }) {
  if (!contact.online) {
    return null;
  }

  return <div className="online-contact" />;
}

ContactOnline.propTypes = {
  contact: PropTypes.object
}

export default ContactOnline;
