import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMessages } from '../../redux/actions/messages'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Header from './Header'
import Chat from './Chat'
import Footer from './Footer'
import NoSelected from '../App/NoSelected'
import './main.css'

const Main: React.FC = () => {
  const dispatch = useDispatch()

  const profileId = useTypedSelector(state => state.profile._id)
  const loading = useTypedSelector(state => state.profile.loading)

  const { id: chatId } = useParams<{ id: string }>()

  useEffect(() => {
    if (chatId && !loading) {
      dispatch(fetchMessages(chatId, profileId))
    }
  }, [chatId, profileId, dispatch, loading])

  if (!chatId) {
    return <NoSelected />
  }

  if (loading) {
    return null
  }

  return (
    <div className="main">
      <div className="inner-main" id="chat">
        <Header />
        <Chat />
        <Footer />
      </div>
    </div>
  )
}

export default Main
