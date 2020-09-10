const initialState = {
  opened: null,
  showChat: true
}

export default function application(state = initialState, action) {
  switch(action.type) {
    case 'set_opened_id':
      return {
        ...state,
        opened: action.payload
      }
    case 'chat/load/start':
      return {
        ...state,
        showChat: false
      }
    default:
      return state;
  }
}