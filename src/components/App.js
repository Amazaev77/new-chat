import React, { useEffect } from 'react';
import Sidebar from './sidebar/Sidebar';
import { loadContacts }  from '../redux/actions/contacts';
import { useDispatch, useSelector } from 'react-redux';
import Main from './main/Main';
import InfoBar from './InfoBar/InfoBar';
import { loadProfile } from '../redux/actions/profile';

function App() {
  const showChat = useSelector(state => state.chat.showChat);
  const showBar = useSelector(state => state.chat.showBar);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadProfile());
  }, [dispatch])

  return (
    <div className="app">
      <Sidebar />
      {showChat ? (
        <div className="no-selected">
          Please, select a chat to start messaging
        </div>
      ) : (
        <Main />
      )}
        {showBar && <InfoBar />}
    </div>
  );
}

export default App;
