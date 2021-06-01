import React from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

type PropsType = {
  onSend: Function
}

const Send: React.FC<PropsType> = ({ onSend }) => {
  const sendMessageValue = useTypedSelector(
    state => state.messages.sendMessageValue
  )

  if (sendMessageValue === '') {
    return null
  }
  return (
    <span className="material-icons" onClick={() => onSend()}>
      send
    </span>
  )
}

export default Send
