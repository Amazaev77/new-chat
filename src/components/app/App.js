import React, { useEffect } from 'react';
import Sidebar from '../sidebar/sidebar/Sidebar';
import { loadContacts }  from '../../redux/actions/contacts';
import {useDispatch, useSelector} from 'react-redux';
import Main from '../main/main/Main';
import InfoBar from '../info-bar/info-bar';
import { loadProfile } from '../../redux/actions/profile';
import './app.css';
import NoSelected from "../main/NoSelected";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.loading);
  const profile = useSelector(state => state.profile.loading);
  const showChat = useSelector(state => state.application.showChat);

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
      <Router>
        <Route path="/" component={NoSelected}/>
        <Route path="/main" component={Main}/>
      </Router>
      {/*{showChat ? <NoSelected /> : <Main />}*/}
      <InfoBar />
    </div>
  );
}

export default App;
