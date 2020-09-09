import React from 'react';
import Header from './Header';
import Chat from './Chat';
import Footer from './Footer';

function Main() {

  return (
    <div className="main">
      <div className="inner-main">
        <Header />
        <Chat />
        <Footer />
      </div>
    </div>
  );
}

export default Main;