const initialState = {
  loading: true,
  items: [],
  enteredText: "",
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case "contacts/load/start":
      return {
        ...state,
        loading: true,
      };
    case "contacts/load/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "contact/search/set":
      return {
        ...state,
        enteredText: action.payload,
      };
    default:
      return state;
  }
}
