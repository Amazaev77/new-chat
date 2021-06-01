import React from 'react'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

const Micro: React.FC = () => {
  const sendMessageValue = useTypedSelector(
    state => state.messages.sendMessageValue
  )

  if (sendMessageValue !== '') {
    return null
  }

  return <span className="material-icons">mic</span>
}

export default Micro
