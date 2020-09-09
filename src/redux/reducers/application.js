const initialState = {
  opened: null
}

export default function application(state = initialState, action) {
  switch(action.type) {
    case 'set_opened_id':
      return {
        ...state,
        opened: action.payload
      }
    default:
      return state;
  }
}