let initialState = {
  user: {},
  isAuthenticated: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'SIGN_IN_USER':
        return {...state, ...action.payload}
      case 'SIGN_OUT_USER':
        return {...state, ...action.payload}
      default:
        return state;
    }
}
