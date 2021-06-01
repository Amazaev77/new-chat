import React, { useEffect } from 'react'
import { loadContacts } from '../../redux/actions/contacts'
import { loadProfile } from '../../redux/actions/profile'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AnimateInfoSidebar from './AnimateInfoSidebar'
import Main from '../Main'
import Sidebar from '../Sidebar'
import './app.css'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadContacts())
    dispatch(loadProfile())
  }, [dispatch])

  return (
    <div className="app">
      <Switch>
        <Route path="/:id?">
          <Sidebar />
          <Main />
          <AnimateInfoSidebar />
        </Route>
      </Switch>
    </div>
  )
}

export default App
