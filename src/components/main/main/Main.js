import React from 'react';
import Header from "../header";
import Chat from '../chat';
import Footer from '../footer';
import './main.css';

function Main() {
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