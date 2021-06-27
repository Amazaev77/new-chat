import React, { ChangeEvent } from 'react'
import './input-box.less'
import { useDispatch } from 'react-redux'
import {
  clearInput,
  setSearchMessageValue,
} from '../../../../../redux/actions/messages'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'

const InputBox: React.FC = () => {
  const dispatch = useDispatch()

  const showSearchInput = useTypedSelector(
    state => state.messages.showSearchInput
  )

  const searchMessageValue = useTypedSelector(
    state => state.messages.searchMessageValue
  )

  const handleString = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchMessageValue(e.target.value))
  }

  const handleClear = () => dispatch(clearInput())

  return (
    <>
      {showSearchInput && (
        <input
          className="search-message-input"
          onChange={handleString}
          value={searchMessageValue}
        />
      )}
      {searchMessageValue.trim().length > 0 && (
        <span className="clear-input material-icons" onClick={handleClear}>
          close
        </span>
      )}
    </>
  )
}

export default InputBox
