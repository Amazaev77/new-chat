export interface ContactState {
  loading: boolean
  items: any[]
  searchContactValue: string
}

export enum ContactsActionTypes {
  LOAD_CONTACTS_STARTED = 'LOAD_CONTACTS_STARTED',
  LOAD_CONTACTS_SUCCEEDED = 'LOAD_CONTACTS_SUCCEEDED',
  SET_SEARCH_CONTACT_VALUE = 'SET_SEARCH_CONTACT_VALUE',
}

interface FetchContactsAction {
  type: ContactsActionTypes.LOAD_CONTACTS_STARTED
}

interface FetchContactsSucceededAction {
  type: ContactsActionTypes.LOAD_CONTACTS_SUCCEEDED
  payload: any[]
}

interface SetSearchContactValueAction {
  type: ContactsActionTypes.SET_SEARCH_CONTACT_VALUE
  payload: string
}

export type ContactAction =
  | FetchContactsAction
  | FetchContactsSucceededAction
  | SetSearchContactValueAction
