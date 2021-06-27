import React from 'react'
import dayjs from 'dayjs'
import './message-out-box.less'
import { MessageType } from '../index'

type PropsType = {
  message: MessageType
}

const MessageOutBox: React.FC<PropsType> = ({ message }) => {
  return (
    <div className="message-out-block">
      <div className="message-out">{message.content}</div>
      <div className="out-time-box">
        <span className="out-time">{dayjs(message.time).format('HH:mm')}</span>
        {message.read ? (
          <span className="check material-icons">done_all</span>
        ) : (
          <span className="check material-icons">done</span>
        )}
      </div>
    </div>
  )
}

export default MessageOutBox
