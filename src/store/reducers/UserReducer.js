let initialState = {
  user: {},
  isAuthenticated: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_USER":
        return {...state, ...action.payload}
        break;
      case "REMOVE_USER":
        return {...state, ...action.payload}
        break;
      default:
        return state;
    }
}
