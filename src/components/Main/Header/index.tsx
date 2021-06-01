import React from 'react'
import SearchMessage from './SearchMessage'
import Setting from './Setting'
import FullName from './FullName'
import './header.css'

const Header: React.FC = () => {
  return (
    <div className="header">
      <SearchMessage />
      <FullName />
      <Setting />
    </div>
  )
}

export default Header
