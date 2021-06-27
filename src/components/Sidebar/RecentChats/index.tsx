import React from 'react'
import Contact from './Contact'
import PreloaderContact from './PreloaderContact'
import './recent-chats.less'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { createSelector } from 'reselect'
import { RootState } from "../../../redux";

const getContacts = createSelector(
  (state: RootState) => state.contacts,
  (contacts) => {
    const searchContactValue = contacts.searchContactValue

    return contacts.items.filter(
      (contact) =>
        contact.fullname
          .toLowerCase()
          .indexOf(searchContactValue.toLowerCase()) !== -1
    )
  }
)

const RecentChats: React.FC = () => {
  const loading = useTypedSelector(state => state.contacts.loading)

  const contacts = useTypedSelector(getContacts)

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
