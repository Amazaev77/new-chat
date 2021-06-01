import React from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import './info-contact.css'

const InfoContact: React.FC = () => {
  const { id: paramsId } = useParams<{ id: string }>()

  const userdata = useTypedSelector(state =>
    state.contacts.items.find(item => item._id === paramsId)
  )

  return (
    <div className="info-contact">
      <div className="big-avatar">{userdata?.fullname[0]}</div>
      <div className="info-fullname">{userdata?.fullname}</div>
      <div className="nickname">@{userdata?.username}</div>
      <div className="connect">
        <span className="material-icons icons-connect call">call</span>
        <span className="material-icons icons-connect videocam">videocam</span>
        <span className="material-icons icons-connect email">email</span>
      </div>
    </div>
  )
}

export default InfoContact
