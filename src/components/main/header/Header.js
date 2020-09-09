import React from 'react';
import SearchMessage from './SearchMessage';
import Setting from "./Setting";
import Fullname from "./Fullname";

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