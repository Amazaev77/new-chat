import React from 'react'
import Contact from './Contact'
import PreloaderContact from './PreloaderContact'
import './recent-chats.css'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const RecentChats: React.FC = () => {
  const loading = useTypedSelector(state => state.contacts.loading)

  const contacts = useTypedSelector(state => {
    const searchContactValue = state.contacts.searchContactValue

    return state.contacts.items.filter(
      contact =>
        contact.fullname
          .toLowerCase()
          .indexOf(searchContactValue.toLowerCase()) !== -1
    )
  })

  const preloader = new Array(7)
    .fill('')
    .map((_, index) => <PreloaderContact key={index} />)

  return (
    <div className="recent-chats">
      {loading
        ? preloader
        : contacts.map(item => <Contact key={item._id} contact={item} />)}
    </div>
  )
}

export default RecentChats
