export interface ProfileState {
  _id: null | number | string
  loading: boolean
}

export enum ProfileActionTypes {
  LOAD_PROFILE_STARTED = 'LOAD_PROFILE_STARTED',
  LOAD_PROFILE_SUCCEEDED = 'LOAD_PROFILE_SUCCEEDED',
}

interface FetchProfileAction {
  type: ProfileActionTypes.LOAD_PROFILE_STARTED
}

type ProfileType = {
  _id: string | number
}
interface FetchProfileSucceededAction {
  type: ProfileActionTypes.LOAD_PROFILE_SUCCEEDED
  payload: ProfileType
}

export type ProfileAction = FetchProfileAction | FetchProfileSucceededAction
