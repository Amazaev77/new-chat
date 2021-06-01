import {
  ContactAction,
  ContactsActionTypes,
  ContactState,
} from '../types/contacts'

const initialState: ContactState = {
  loading: true,
  items: [],
  searchContactValue: '',
}

export default function reducer(
  state = initialState,
  action: ContactAction
): ContactState {
  switch (action.type) {
    case ContactsActionTypes.LOAD_CONTACTS_STARTED:
      return {
        ...state,
        loading: true,
      }
    case ContactsActionTypes.LOAD_CONTACTS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case ContactsActionTypes.SET_SEARCH_CONTACT_VALUE:
      return {
        ...state,
        searchContactValue: action.payload,
      }
    default:
      return state
  }
}
