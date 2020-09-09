import React from 'react';
import SearchMessage from './SearchMessage';
import { useDispatch, useSelector } from 'react-redux';
import { showBar } from '../../redux/actions/chat';
import preloader from './preloader.svg';

function Header() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.chat.loading);
  const opened = useSelector(state => state.application.opened);
  const userdata = useSelector(state => state.contacts.contacts.find(item => item._id === opened));

  const handleShow = () => dispatch(showBar());

  return (
    <div className="header">
      <SearchMessage />
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
      <div className="setting">
      <span
        className="setting-span material-icons"
        onClick={handleShow}
      >
        settings
      </span>
      </div>
    </div>
  );
}

export default Header;