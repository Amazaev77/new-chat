import React from 'react';
import Message from './Message';
import { useSelector } from "react-redux";

function Chat() {
  const messages = useSelector(state => state.chat.messages);
  const loading = useSelector(state => state.chat.loading);
  const enteredText = useSelector(state => state.chat.searchLine);
  const filteredMessages = messages.filter(item => (
    item.content.toLowerCase().indexOf(enteredText.toLowerCase()) !== -1)
  );

  if(loading) {
    return null;
  }

  return (
    <div className="chat">
      {filteredMessages.map(item => <Message messages={item}/>)}
    </div>
  );
}

export default Chat;