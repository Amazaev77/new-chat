import React, { useEffect, useRef } from 'react'
import Message from './Message'
import './chat.less'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { createSelector } from 'reselect'
import { RootState } from "../../../redux";

const getMessages = createSelector(
  (state: RootState) => state.messages,
  (messages) => {
    const searchMessageValue = messages.searchMessageValue

    return messages.messages.filter(
      item =>
        item.content.toLowerCase()
          .indexOf(searchMessageValue.toLowerCase()) !== -1
    )
  }
)

const Chat: React.FC = () => {
  const messages = useTypedSelector(getMessages)

  const loading = useTypedSelector(state => state.messages.loading)

  const messagesEndRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  if (loading) {
    return null
  }

  return (
    <div className="chat">
      {messages.map(item => (
        <div key={item._id} className="message">
          <Message message={item} />
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default Chat
