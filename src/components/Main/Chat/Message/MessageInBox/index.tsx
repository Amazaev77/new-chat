import React from 'react'
import dayjs from 'dayjs'
import './message-in-box.less'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'
import { MessageType } from '../index'

type PropsType = {
  message: MessageType
}

const MessageInBox: React.FC<PropsType> = ({ message }) => {
  const { id: paramsId } = useParams<{ id: string }>()

  const userdata = useTypedSelector(state =>
    state.contacts.items.find(item => item._id === paramsId)
  )

  return (
    <div>
      <div className="message-in-block">
        <div className="avatar-chat">{userdata.fullname[0]}</div>
        <div className="message-in">
          {message.content}
          <div className="in-time">{dayjs(message.time).format('HH:mm')}</div>
        </div>
      </div>
    </div>
  )
}

export default MessageInBox
