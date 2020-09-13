import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadChat } from '../../redux/actions/chat';
import LastMessage from './LastMessage';
import moment from 'moment';

function Contact({ contact }) {
  const dispatch = useDispatch();
  const profileId = useSelector(state => state.profile._id);
  const opened = useSelector(state => state.application.opened);
  const time = contact.lastMessage !== undefined && moment(contact.lastMessage.time).format("HH:mm");



  let classContact = "contact";
  if(opened === contact._id) {
    classContact += " bgc-white";
  }

  function handleChat() {
    if(opened !== contact._id) {
      dispatch(loadChat(contact._id, profileId));
    }
  }

  return (
    <div
      className={classContact}
      onClick={handleChat}
    >
      <div className="avatar">
        {contact.hasOwnProperty('picture') ? (<img src="" width='50' alt=""/>) : (contact.fullname[0])}
      </div>
      <div className="name-mess">
        <div className="name">
          {contact.fullname}
        </div>
        <LastMessage lastMessage={contact.lastMessage}/>
      </div>
      <div className="time-last-message">
        {time}
      </div>
    </div>
  )
}
export default Contact;