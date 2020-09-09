import React from 'react';
import InfoFriend from './InfoFriend';
import { useSelector } from 'react-redux';

function InfoBar() {
  const opened = useSelector(state => state.application.opened)
  const userdata = useSelector(state => state.contacts.contacts.find(item => item._id === opened));
  const cheking = userdata.hasOwnProperty('socials');

  return (
    <div className="info-bar">
      <InfoFriend userdata={userdata}/>
      <div className="social-block">
        <div className="social">Social</div>
        <div className="messengers">
          <div className="instagram">
            <i className="ico fab fa-instagram"></i>
            <span className="nick-messenger">{cheking && userdata.socials.instagram}</span>
          </div>
          <div className="twitter">
            <i className="ico fab fa-twitter"></i>
            <span className="nick-messenger">{cheking && userdata.socials.instagram}</span>
          </div>
          <div className="facebook">
            <i className="ico fab fa-facebook-f"></i>
            <span className="nick-messenger">{cheking && userdata.socials.instagram}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;