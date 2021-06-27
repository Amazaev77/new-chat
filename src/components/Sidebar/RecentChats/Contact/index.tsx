import React from 'react'
import LastMessage from './LastMessage'
import dayjs from 'dayjs'
import './contact.less'
import { NavLink } from 'react-router-dom'
import ContactOnline from './ContactOnline'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

export type LastMessageType = {
  time: string
  content: string
}

type ContactType = {
  lastMessage: LastMessageType
  _id: string
  fullname: string
  online: boolean
}

type PropsType = {
  contact: ContactType
}

const Contact: React.FC<PropsType> = ({ contact }) => {
  const time = dayjs(contact.lastMessage?.time).format('HH:mm')

  const loading = useTypedSelector(state => state.contacts.loading)

  const contactHover = !loading && 'contact-hover'

  return (
    <NavLink
      to={`/${contact._id}`}
      activeClassName="bgc-white"
      className={'contact ' + contactHover}
    >
      <div className="avatar">
        {contact.fullname[0]}
        <ContactOnline online={contact.online} />
      </div>
      <div className="name-mess">
        <div className="name">{contact.fullname}</div>
        <LastMessage lastMessage={contact.lastMessage} />
      </div>
      <div className="time-last-message">{time}</div>
    </NavLink>
  )
}

export default Contact
