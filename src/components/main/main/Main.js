import React from 'react';
import Header from "../header";
import Chat from '../chat';
import Footer from '../footer';
import {useSelector} from "react-redux";
import './main.css';

function Main() {
  const showChat = useSelector(state => state.application.showChat);

  if(showChat) {
    return (
      <div className="no-selected">
        Please, select a chat to start messaging
      </div>
    )
  }

  return (
    <div className="main">
      <div className="inner-main" id="chat">
        <Header />
        <Chat />
        <Footer />
      </div>
    </div>
  );
}

export default Main;