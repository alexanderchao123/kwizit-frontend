let initialState = {
  round: {},
  decision: {
    correct: false
  }
}

export default function roundPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ROUND":
      return {...state, round: action.payload}
    case "ADD_DECISION":
      return {...state, decision: {...action.payload}}
    default:
      return state
  }
}
