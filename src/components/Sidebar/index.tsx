import React from 'react'
import RecentChats from './RecentChats'
import SearchContact from './SearchContact'
import './sidebar.less'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div>
        <SearchContact />
        <RecentChats />
      </div>
    </div>
  )
}
export default Sidebar
