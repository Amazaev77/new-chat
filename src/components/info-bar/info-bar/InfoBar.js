import React from 'react';
import InfoContact from '../info-contact/InfoContact';
import { useSelector } from 'react-redux';
import './info-bar.css';

function InfoBar() {
  const showBar = useSelector(state => state.chat.showBar);
  const opened = useSelector(state => state.application.opened);
  const userdata = useSelector(state => state.contacts.contacts.find(item => item._id === opened));

  if(!showBar) {
    return null
  }

  return (
      <div className="info-bar">
        <InfoContact />
        <div className="social-block">
          <div className="social">Social</div>
          <div className="messengers">
            <div className="instagram">
              <i className="ico fab fa-instagram"></i>
              <span className="nick-messenger">
                {userdata.socials !== undefined && userdata.socials.instagram}
              </span>
            </div>
            <div className="twitter">
              <i className="ico fab fa-twitter"></i>
              <span className="nick-messenger">
                {userdata.socials !== undefined && userdata.socials.twitter}
                </span>
            </div>
            <div className="facebook">
              <i className="ico fab fa-facebook-f"></i>
              <span className="nick-messenger">
                {userdata.socials !== undefined && userdata.socials.facebook}
                </span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default InfoBar;