const initialState = {
  opened: null,
  showChat: true,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "set/opened":
      return {
        ...state,
        opened: action.payload,
      };
    case "chat/load/start":
      return {
        ...state,
        showChat: false,
      };
    default:
      return state;
  }
}
