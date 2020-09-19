import React from 'react';
import Message from '../message';
import { useSelector } from "react-redux";
import './chat.css';


function Chat() {
  const enteredText = useSelector(state => state.chat.searchLine);
  const messages = useSelector(state => state.chat.messages.filter(item => (
    item.content.toLowerCase().indexOf(enteredText.toLowerCase()) !== -1)
  ));
  const loading = useSelector(state => state.chat.loading);

  if(loading) {
    return null;
  }

  return (
    <div className="chat">
      {messages.map(item => (
        <div className="message">
          <Message message={item}/>
        </div>
      ))}
    </div>
  );
}

export default Chat;