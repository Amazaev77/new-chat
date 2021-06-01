import React from 'react'
import MessageInBox from './MessageInBox'
import MessageOutBox from './MessageOutBox'
import MessageInfo from './MessageInfo'
import './message.css'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

export type MessageType = {
  type: string
  toUserId: string | number
  content: string
  time: string
  read: boolean
}

type PropsType = {
  message: MessageType
}

const Message: React.FC<PropsType> = ({ message }) => {
  const profileId = useTypedSelector(state => state.profile._id)

  if (message.type === 'info') {
    return <MessageInfo message={message} />
  }

  if (profileId === message.toUserId) {
    return <MessageInBox message={message} />
  }

  return <MessageOutBox message={message} />
}

export default Message
