import React from 'react';
import RecentChats from '../recent-chats/RecentChats';
import SearchContact from '../search-contact/SearchContact';
import './sidebar.css';

function Sidebar() {
  return (
      <div className='sidebar'>
        <div className="inner">
          <SearchContact />
          <RecentChats />
        </div>
      </div>
  )
}
export default Sidebar;