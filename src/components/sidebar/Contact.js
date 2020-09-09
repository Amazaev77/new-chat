import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadChat } from '../../redux/actions/chat';

function Contact({ contact }) {
  const dispatch = useDispatch();
  const profileId = useSelector(state => state.profile._id);

  function handleChat() {
    dispatch(loadChat(contact._id, profileId));
  }
  return (
    <div
      className="contact"
      onClick={handleChat}
    >
      <div className="avatar">
        {contact.hasOwnProperty('picture') ? (<img src="" width='50' alt=""/>) : (contact.fullname[0])}
      </div>
      <div className="name-mess">
        <div className="name">
          {contact.fullname}
        </div>
        <div className="last-message">
          последнее сообщ
        </div>
      </div>
      <div className="time-last-message">
        5 min
      </div>
    </div>
  )
}
export default Contact;