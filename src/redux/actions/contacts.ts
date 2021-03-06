import { ContactAction, ContactsActionTypes } from '../types/contacts'
import { Dispatch } from 'redux'
import axios from "axios";

export function loadContacts() {
  return async (dispatch: Dispatch<ContactAction>) => {
    dispatch({ type: ContactsActionTypes.LOAD_CONTACTS_STARTED })

    const api = 'https://api.intocode.ru:8001/api/contacts'

    const { data: contacts } = await axios.get(api)

    dispatch({
      type: ContactsActionTypes.LOAD_CONTACTS_SUCCEEDED,
      payload: contacts,
    })
  }
}

export function setSearchContactValue(string: string) {
  return {
    type: ContactsActionTypes.SET_SEARCH_CONTACT_VALUE,
    payload: string,
  }
}
