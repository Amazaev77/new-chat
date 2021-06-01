import {
  MessageAction,
  MessagesActionTypes,
  MessagesState,
} from '../types/messages'

const initialState: MessagesState = {
  loading: true,
  messages: [],
  showSearchInput: false,
  searchMessageValue: '',
  sendMessageValue: '',
  showInfoSidebar: false,
  sendingMessage: true,
}

export default function reducer(
  state = initialState,
  action: MessageAction
): MessagesState {
  switch (action.type) {
    case MessagesActionTypes.LOAD_MESSAGES_STARTED:
      return {
        ...state,
        loading: true,
      }

    case MessagesActionTypes.LOAD_MESSAGES_SUCCEEDED:
      return {
        ...state,
        loading: false,
        messages: action.payload,
      }

    case MessagesActionTypes.SHOW_SEARCH_INPUT:
      return {
        ...state,
        showSearchInput: !state.showSearchInput,
      }

    case MessagesActionTypes.SET_SEARCH_MESSAGE_VALUE:
      return {
        ...state,
        searchMessageValue: action.payload,
      }

    case MessagesActionTypes.CLEAR_INPUT:
      return {
        ...state,
        searchMessageValue: '',
      }

    case MessagesActionTypes.SET_MESSAGE_VALUE:
      return {
        ...state,
        sendMessageValue: action.payload,
      }

    case MessagesActionTypes.SHOW_INFO_SIDEBAR:
      return {
        ...state,
        showInfoSidebar: !state.showInfoSidebar,
      }

    case MessagesActionTypes.SEND_MESSAGE_STARTED:
      return {
        ...state,
        sendingMessage: true,
      }

    case MessagesActionTypes.SEND_MESSAGE_SUCCEEDED:
      return {
        ...state,
        sendingMessage: false,
        messages: [...state.messages, action.payload],
        sendMessageValue: '',
      }

    default:
      return state
  }
}
