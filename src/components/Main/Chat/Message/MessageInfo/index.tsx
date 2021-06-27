import React from 'react'
import './message-info.less'
import { MessageType } from '../index'

type PropsType = {
  message: MessageType
}

const MessageInfo: React.FC<PropsType> = ({ message }) => {
  if (message.type !== 'info') {
    return null
  }
  return <div className="message-info">{message.content}</div>
}

export default MessageInfo
