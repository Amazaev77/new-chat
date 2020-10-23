const initialState = {
  loading: true,
  messages: [],
  showSearch: false,
  searchLine: "",
  messageLine: "",
  showBar: false,
  waitingMessage: true,
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case "chat/load/start":
      return {
        ...state,
        loading: true,
      };

    case "chat/load/success":
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };

    case "search/show":
      return {
        ...state,
        showSearch: !state.showSearch,
      };

    case "search/line":
      return {
        ...state,
        searchLine: action.payload,
      };
      
    case "input/clear":
      return {
        ...state,
        searchLine: "",
      };
    case "message/write":
      return {
        ...state,
        messageLine: action.payload,
      };
    case "bar/show":
      return {
        ...state,
        showBar: !state.showBar,
      };
    case "message/send/start":
      return {
        ...state,
        waitingMessage: true,
      };
    case "message/send/success":
      return {
        ...state,
        waitingMessage: false,
        messages: [...state.messages, action.payload],
        messageLine: "",
      };
    default:
      return state;
  }
}
