import { MessageAction, MessagesActionTypes } from '../types/messages'
import { Dispatch } from 'redux'
import axios from "axios";

type idType = number | string | null

export function fetchMessages(id: idType, myId: idType) {
  return async (dispatch: Dispatch<MessageAction>) => {
    dispatch({ type: MessagesActionTypes.LOAD_MESSAGES_STARTED })

    const api = 'https://api.intocode.ru:8001/api/messages'

    const { data: messages } = await axios.get(`${api}/${myId}/${id}`)

    dispatch({
      type: MessagesActionTypes.LOAD_MESSAGES_SUCCEEDED,
      payload: messages,
    })
  }
}

export function showSearchInput() {
  return { type: MessagesActionTypes.SHOW_SEARCH_INPUT }
}

export function setSearchMessageValue(value: string) {
  return {
    type: MessagesActionTypes.SET_SEARCH_MESSAGE_VALUE,
    payload: value,
  }
}

export function clearInput() {
  return { type: MessagesActionTypes.CLEAR_INPUT }
}

export function setMessageValue(value: string) {
  return {
    type: MessagesActionTypes.SET_MESSAGE_VALUE,
    payload: value,
  }
}

export function showInfoSidebarSwitch() {
  return { type: MessagesActionTypes.SHOW_INFO_SIDEBAR }
}

export function sendMessage(myId: idType, contactId: idType, content: string) {
  return async (dispatch: Dispatch<MessageAction>) => {
    dispatch({ type: MessagesActionTypes.SEND_MESSAGE_STARTED })

    const api = 'https://api.intocode.ru:8001/api/messages'

    const body = { myId, contactId, content, type: 'text' }

    const { data: message } = await axios.post(api, body)

    dispatch({
      type: MessagesActionTypes.SEND_MESSAGE_SUCCEEDED,
      payload: message,
    })
  }
}
