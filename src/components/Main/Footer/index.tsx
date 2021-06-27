import React, { ChangeEvent, KeyboardEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setMessageValue } from '../../../redux/actions/messages'
import Micro from './Micro'
import Send from './Send'
import './footer.less'
import { sendMessage } from '../../../redux/actions/messages'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Footer: React.FC = () => {
  const dispatch = useDispatch()
  const { id: paramsId } = useParams<{ id: string }>()

  const sendMessageValue = useTypedSelector(
    state => state.messages.sendMessageValue
  )

  const myId = useTypedSelector(state => state.profile._id)

  function handleMessage(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setMessageValue(e.target.value))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleSend()
    }
  }

  const handleSend = () => {
    dispatch(sendMessage(myId, paramsId, sendMessageValue))
  }

  return (
    <div className="footer">
      <div className="footer-inner">
        <input
          className="send-message-input"
          placeholder="Write a message"
          value={sendMessageValue}
          onChange={handleMessage}
          onKeyDown={handleKeyDown}
        />
        <div className="send">
          <span className="clip material-icons">attach_file</span>
          <Micro />
          <Send onSend={handleSend} />
        </div>
      </div>
    </div>
  )
}

export default Footer
