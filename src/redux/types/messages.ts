export interface MessagesState {
  loading: boolean
  messages: any[]
  showSearchInput: boolean
  searchMessageValue: string
  sendMessageValue: string
  showInfoSidebar: boolean
  sendingMessage: boolean
}

export enum MessagesActionTypes {
  LOAD_MESSAGES_STARTED = 'LOAD_MESSAGES_STARTED',
  LOAD_MESSAGES_SUCCEEDED = 'LOAD_MESSAGES_SUCCEEDED',
  SEND_MESSAGE_STARTED = 'SEND_MESSAGE_STARTED',
  SEND_MESSAGE_SUCCEEDED = 'SEND_MESSAGE_SUCCEEDED',
  SHOW_SEARCH_INPUT = 'SHOW_SEARCH_INPUT',
  SET_SEARCH_MESSAGE_VALUE = 'SET_SEARCH_MESSAGE_VALUE',
  CLEAR_INPUT = 'CLEAR_INPUT',
  SET_MESSAGE_VALUE = 'SET_MESSAGE_VALUE',
  SHOW_INFO_SIDEBAR = 'SHOW_INFO_SIDEBAR',
}

interface FetchMessagesAction {
  type: MessagesActionTypes.LOAD_MESSAGES_STARTED
}

interface FetchMessagesSucceededAction {
  type: MessagesActionTypes.LOAD_MESSAGES_SUCCEEDED
  payload: any[]
}

interface SendMessageAction {
  type: MessagesActionTypes.SEND_MESSAGE_STARTED
}

interface SendMessageSucceededAction {
  type: MessagesActionTypes.SEND_MESSAGE_SUCCEEDED
  payload: object
}

interface ShowSearchInputAction {
  type: MessagesActionTypes.SHOW_SEARCH_INPUT
}

interface SetSearchMessageValueAction {
  type: MessagesActionTypes.SET_SEARCH_MESSAGE_VALUE
  payload: string
}

interface ClearInputAction {
  type: MessagesActionTypes.CLEAR_INPUT
}

interface SetMessageValueAction {
  type: MessagesActionTypes.SET_MESSAGE_VALUE
  payload: string
}

interface ShowInfoSidebarAction {
  type: MessagesActionTypes.SHOW_INFO_SIDEBAR
}

export type MessageAction =
  | FetchMessagesAction
  | FetchMessagesSucceededAction
  | SendMessageAction
  | SendMessageSucceededAction
  | ShowSearchInputAction
  | SetSearchMessageValueAction
  | ClearInputAction
  | SetMessageValueAction
  | ShowInfoSidebarAction
