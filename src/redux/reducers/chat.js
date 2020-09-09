const initialState = {
  loading: true,
  messages: [],
  showChat: true,
  showSearch: false,
  searchLine: "",
  messageLine: "",
  showBar: false,
}

export default function chat(state = initialState, action) {
  switch(action.type) {
    case 'chat/load/start':
      return {
        ...state,
        loading: true,
        showChat: false
      }

    case 'chat/load/success':
      return {
        ...state,
        loading: false,
        messages: action.payload
      }
    case 'search/show':
      return {
        ...state,
        showSearch: !state.showSearch
      }
    case 'search/line':
      return {
        ...state,
        searchLine: action.payload
      }
    case 'input/clear':
      return {
        ...state, 
        searchLine: ""
      }
    case 'message/send':
      return {
        ...state,
        messageLine: action.payload
      }
    case 'bar/show':
      return {
        ...state,
        showBar: !state.showBar
      }
    default:
      return state;
  }
}