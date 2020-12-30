const initialState = {
  showChat: true,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "chat/load/start":
      return {
        ...state,
        showChat: false,
      };
    default:
      return state;
  }
}
