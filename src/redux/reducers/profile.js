const initialState = {
  _id: null,
  loading: true,
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "profile/load/start":
      return {
        ...state,
        loading: true,
      };
    case "profile/load/success":
      return {
        ...state,
        loading: false,
        _id: action.payload._id,
      };
    default:
      return state;
  }
}
