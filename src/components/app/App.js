import React, { useEffect } from 'react';
import Sidebar from '../sidebar/sidebar/Sidebar';
import { loadContacts }  from '../../redux/actions/contacts';
import {useDispatch, useSelector} from 'react-redux';
import Main from '../main/main/Main';
import InfoBar from '../info-bar/info-bar';
import { loadProfile } from '../../redux/actions/profile';
import './app.css';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.loading);
  const profile = useSelector(state => state.profile.loading);

  useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadProfile());
  }, [dispatch])

  if(contacts && profile) {
    return null;
  }

  return (
    <div className="app">
      <Sidebar />
      <Main />
      <InfoBar />
    </div>
  );
}

export default App;
