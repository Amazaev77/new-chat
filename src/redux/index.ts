import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import profile from './reducers/profile'
import contacts from './reducers/contacts'
import messages from './reducers/messages'

const rootReducer = combineReducers({
  profile,
  contacts,
  messages,
})

const logger = createLogger({
  collapsed: true,
  diff: true,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export type RootState = ReturnType<typeof rootReducer>
