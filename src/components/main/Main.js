import React from 'react';
import Header from './header/Header';
import Chat from './chat/Chat';
import Footer from './Footer';
import {useSelector} from "react-redux";

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