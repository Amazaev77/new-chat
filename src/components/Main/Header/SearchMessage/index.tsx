import React from 'react'
import { useDispatch } from 'react-redux'
import './search-message.less'
import { showSearchInput } from '../../../../redux/actions/messages'
import InputBox from './InputBox'

const SearchMessage: React.FC = () => {
  const dispatch = useDispatch()

  const handleSearch = () => dispatch(showSearchInput())

  return (
    <div className="search-message">
      <span className="icon-search-chat material-icons" onClick={handleSearch}>
        search
      </span>
      <div className="header-input-container">
        <InputBox />
      </div>
    </div>
  )
}

export default SearchMessage
