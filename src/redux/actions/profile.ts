import { ProfileAction, ProfileActionTypes } from '../types/profile'
import { Dispatch } from 'redux'

export function loadProfile() {
  return async (dispatch: Dispatch<ProfileAction>) => {
    dispatch({ type: ProfileActionTypes.LOAD_PROFILE_STARTED })

    const api = 'https://api.intocode.ru:8001/api/profile'

    const res = await fetch(api)
    const profile = await res.json()

    dispatch({
      type: ProfileActionTypes.LOAD_PROFILE_SUCCEEDED,
      payload: profile,
    })
  }
}
