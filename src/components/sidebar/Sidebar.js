import React from 'react';
import RecentChats from './RecentChats';
import SearchContact from './SearchContact';

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