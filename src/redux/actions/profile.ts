import { ProfileAction, ProfileActionTypes } from '../types/profile'
import { Dispatch } from 'redux'
import axios from "axios";

export function loadProfile() {
  return async (dispatch: Dispatch<ProfileAction>) => {
    dispatch({ type: ProfileActionTypes.LOAD_PROFILE_STARTED })

    const api = 'https://api.intocode.ru:8001/api/profile'

    const { data: profile } = await axios.get(api)

    dispatch({
      type: ProfileActionTypes.LOAD_PROFILE_SUCCEEDED,
      payload: profile,
    })
  }
}
