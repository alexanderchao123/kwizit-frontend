let initialState = {
  round: {}
}

export default function roundReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_ROUND':
        return {...state, round: action.payload}
      default:
        return state;
    }
}
