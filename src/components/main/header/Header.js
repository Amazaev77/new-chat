import React from 'react';
import SearchMessage from '../search-message/SearchMessage';
import Setting from "../setting";
import Fullname from "../fullname";
import './header.css';

function Header() {
  return (
    <div className="header">
      <SearchMessage />
      <Fullname />
      <Setting />
    </div>
  );
}

export default Header;