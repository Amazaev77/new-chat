import {
  ProfileAction,
  ProfileActionTypes,
  ProfileState,
} from '../types/profile'

const initialState: ProfileState = {
  _id: null,
  loading: true,
}

export default function profile(
  state = initialState,
  action: ProfileAction
): ProfileState {
  switch (action.type) {
    case ProfileActionTypes.LOAD_PROFILE_STARTED:
      return {
        ...state,
        loading: true,
      }
    case ProfileActionTypes.LOAD_PROFILE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        _id: action.payload._id,
      }
    default:
      return state
  }
}
