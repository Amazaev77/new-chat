import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchContactValue } from '../../../redux/actions/contacts'
import './search-contact.css'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const SearchContact: React.FC = () => {
  const dispatch = useDispatch()

  const searchContactValue = useTypedSelector(
    state => state.contacts.searchContactValue
  )

  const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchContactValue(e.target.value))
  }

  return (
    <div className="search-contact">
      <input
        className="input-search-contact"
        placeholder="Search contact"
        value={searchContactValue}
        onChange={searchChangeHandler}
      />
      <span className="icon-search-sidebar material-icons">search</span>
    </div>
  )
}

export default SearchContact
